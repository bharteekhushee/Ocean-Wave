
import { useState, type FormEvent } from "react";

import {
  UserRound,
  Building2,
  Mail,
  List,
  MessageCircle,
  Send,
} from "lucide-react";

import { Container } from "@/shared/components/common/Container";

import "@/features/contact/components/EnquiryForm/EnquiryForm.css";

const WEB3FORMS_ACCESS_KEY =
  import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

export function EnquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({
    type: "",
    message: "",
  });

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.reportValidity()) return;

    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus({
        type: "error",
        message: "Form configuration is incomplete. Please try again later.",
      });
      return;
    }

    setIsSubmitting(true);

    setStatus({
      type: "",
      message: "",
    });

    try {
      const formData = new FormData(form);

      const payload = Object.fromEntries(formData.entries());

      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ...payload,
            access_key: WEB3FORMS_ACCESS_KEY,
            subject: `New Website Enquiry - ${formData.get("inquiryType")}`,
            from_name: "Ocean Wave Logistics Website",
          }),
        }
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Unable to submit your enquiry."
        );
      }

      form.reset();

      setStatus({
        type: "success",
        message:
          "Thank you! Your enquiry has been submitted successfully. Our team will contact you soon.",
      });
    } catch (error) {
      console.error("Enquiry submission failed:", error);

      setStatus({
        type: "error",
        message:
          "Something went wrong. Please try again or contact us directly by email.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="enquiry-form-section"
      aria-labelledby="enquiry-form-title"
    >
      <Container>
        <div className="enquiry-form-content">

          {/* Heading */}
          <div className="enquiry-form-heading">

            <span className="enquiry-form-eyebrow">
              SEND US A MESSAGE
            </span>

            <span
              className="enquiry-form-accent"
              aria-hidden="true"
            />

            <h2 id="enquiry-form-title">
              Submit an Enquiry
            </h2>

            <p>
              Share a few details and our team will get back to you.
            </p>

          </div>

          {/* Form */}
          <form
            className="enquiry-form"
            onSubmit={handleSubmit}
          >

            {/* Honeypot spam protection */}
            <input
              type="checkbox"
              name="botcheck"
              className="enquiry-honeypot"
              tabIndex={-1}
              autoComplete="off"
            />

            {/* Full Name */}
            <div className="enquiry-field">

              <label htmlFor="enquiry-name">
                Full Name *
              </label>

              <div className="enquiry-input-wrapper">

                <UserRound size={22} aria-hidden="true" />

                <input
                  id="enquiry-name"
                  type="text"
                  name="fullName"
                  placeholder="Full Name *"
                  autoComplete="name"
                  maxLength={100}
                  required
                />

              </div>
            </div>

            {/* Company Name */}
            <div className="enquiry-field">

              <label htmlFor="enquiry-company">
                Company Name
              </label>

              <div className="enquiry-input-wrapper">

                <Building2 size={22} aria-hidden="true" />

                <input
                  id="enquiry-company"
                  type="text"
                  name="companyName"
                  placeholder="Company Name"
                  autoComplete="organization"
                  maxLength={150}
                />

              </div>
            </div>

            {/* Email */}
            <div className="enquiry-field">

              <label htmlFor="enquiry-email">
                Email Address *
              </label>

              <div className="enquiry-input-wrapper">

                <Mail size={22} aria-hidden="true" />

                <input
                  id="enquiry-email"
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  autoComplete="email"
                  maxLength={254}
                  required
                />

              </div>
            </div>

            {/* Inquiry Type - TEXT INPUT */}
            <div className="enquiry-field">

              <label htmlFor="enquiry-type">
                Inquiry Type *
              </label>

              <div className="enquiry-input-wrapper">

                <List size={22} aria-hidden="true" />

                <input
                  id="enquiry-type"
                  type="text"
                  name="inquiryType"
                  placeholder="Inquiry Type *"
                  maxLength={100}
                  required
                />

              </div>
            </div>

            {/* Message */}
            <div className="enquiry-field enquiry-message-field">

              <label htmlFor="enquiry-message">
                Your Message *
              </label>

              <div className="enquiry-input-wrapper enquiry-textarea-wrapper">

                <MessageCircle
                  size={22}
                  aria-hidden="true"
                />

                <textarea
                  id="enquiry-message"
                  name="message"
                  placeholder="Your Message *"
                  rows={4}
                  maxLength={2000}
                  required
                />

              </div>
            </div>

            {/* Status Message */}
            {status.message && (
              <div
                className={`enquiry-status enquiry-status--${status.type}`}
                role="status"
                aria-live="polite"
              >
                {status.message}
              </div>
            )}

            {/* Submit Button */}
            <div className="enquiry-submit-wrapper">

              <button
                type="submit"
                className="enquiry-submit-button"
                disabled={isSubmitting}
              >
                <span>
                  {isSubmitting ? "SENDING..." : "SEND ENQUIRY"}
                </span>

                <Send size={21} aria-hidden="true" />

              </button>

            </div>

          </form>

        </div>
      </Container>
    </section>
  );
}
