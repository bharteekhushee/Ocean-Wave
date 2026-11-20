import {
  MessageCircle,
  Handshake,
  Headset,
  ReceiptText,
  Package,
  Mail,
  ShoppingBag,
} from "lucide-react";
import "@/features/contact/components/DepartmentContacts/DepartmentContacts.css";
import { Container } from "@/shared/components/common/Container";
const departments = [
  {
    id: 1,
    title: "General Enquiries",
    description:
      "Company information, trade queries and other enquiries.",
    email: "info@oceanwavelogistics.co.uk",
    icon: MessageCircle,
  },
  {
    id: 2,
    title: "Sales & Marketing",
    description:
      "Product enquiries, retailer relationships and business development.",
    email: "sales@oceanwavelogistics.co.uk",
    icon: Handshake,
  },
  {
    id: 3,
    title: "Customer Support",
    description:
      "Existing business enquiries, service assistance and follow-ups.",
    email: "support@oceanwavelogistics.co.uk",
    icon: Headset,
  },
  {
    id: 4,
    title: "Accounts & Billing",
    description:
      "Invoices, payment enquiries, account statements and billing support.",
    email: "accounts@oceanwavelogistics.co.uk",
    icon: ReceiptText,
  },
  {
    id: 5,
    title: "Imports & Logistics",
    description:
      "Import coordination, shipping documentation and UK delivery.",
    email: "import@oceanwavelogistics.co.uk",
    icon: Package,
  },
  {
    id: 6,
    title: "E-commerce & Online Orders",
    description:
      "Product enquiries, online orders, order tracking, delivery, returns and exchanges.",
    email: "ecommerce@oceanwavelogistics.co.uk",
    icon: ShoppingBag,
  },
];
export function DepartmentContacts() {
  return (
    <section
      className="department-contacts"
      aria-labelledby="department-contacts-title"
    >
      <Container>
        <div className="department-contacts__panel">
          {/* Section Heading */}
          <div className="department-contacts__heading">
            <div className="department-contacts__heading-main">
              <h2 id="department-contacts-title">
                Department Contacts
              </h2>
              <span
                className="department-contacts__accent"
                aria-hidden="true"
              />
            </div>
            <p>
              Reach the right team for a faster response.
            </p>
          </div>
          {/* Department List */}
          <div className="department-contacts__grid">
            {departments.map((department) => {
              const Icon = department.icon;
              return (
                <article
                  className="department-card"
                  key={department.id}
                >
                  {/* Icon */}
                  <div
                    className="department-card__icon"
                    aria-hidden="true"
                  >
                    <Icon
                      size={35}
                      strokeWidth={1.9}
                    />
                  </div>
                  {/* Department Information */}
                  <div className="department-card__content">
                    <h3>
                      {department.title}
                    </h3>
                    <p>
                      {department.description}
                    </p>
                  </div>
                  {/* Email */}
                  <a
                    href={`mailto:${department.email}`}
                    className="department-card__email"
                    aria-label={`Email ${department.title}: ${department.email}`}
                  >
                    <Mail
                      size={29}
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                    <span>
                      {department.email}
                    </span>
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}