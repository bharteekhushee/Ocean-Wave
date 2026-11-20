import {
  ContactHero,
  DepartmentContacts,
  EnquiryForm,
  TeamContacts,
} from "@/features/contact/components";
export function ContactPage() {
  return (
    <>
      <ContactHero />
      <TeamContacts />
      <EnquiryForm />
      <DepartmentContacts />
    </>
  );
}