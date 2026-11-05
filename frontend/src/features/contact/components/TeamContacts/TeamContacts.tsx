
import {
    Mail,
    Phone,
    UserRound,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Container } from "@/shared/components/common/Container";

import "@/features/contact/components/TeamContacts/TeamContacts.css";

interface TeamMember {
    id: number;
    name: string;
    designation: string;
    phone: string;
    phoneLink: string;
    whatsapp: string;
    email: string;
}

const teamMembers: TeamMember[] = [
    {
        id: 1,
        name: "Prabhjot Singh",
        designation: "Director & CEO",
        phone: "+44 7814 572863",
        phoneLink: "+447814572863",
        whatsapp: "447814572863",
        email: "Prabhjot.singh@oceanwavelogistics.co.uk",
    },
    {
        id: 2,
        name: "Balvinder Singh",
        designation: "Director & COO",
        phone: "+44 7574 517772",
        phoneLink: "+447574517772",
        whatsapp: "447574517772",
        email: "Balvinder.singh@oceanwavelogistics.co.uk",
    },
    {
        id: 3,
        name: "Likhita Kolli",
        designation: "E-commerce Lead",
        phone: "+41 77 283 25 73",
        phoneLink: "+41772832573",
        whatsapp: "41772832573",
        email: "likhita.kolli@oceanwavelogistics.co.uk",
    },
    {
        id: 4,
        name: "Rupam Mahato",
        designation: "EA to E-commerce Lead",
        phone: "+91 9227041987",
        phoneLink: "+919227041987",
        whatsapp: "919227041987",
        email: "rupam.mahato@oceanwavelogistics.co.uk",
    },
    {
        id: 5,
        name: "Ravish Kumar",
        designation: "Chief Relationship Officer",
        phone: "+91 93270 41987",
        phoneLink: "+919327041987",
        whatsapp: "919327041987",
        email: "ravish.kumar@oceanwavelogistics.co.uk",
    },
];

export function TeamContacts() {
    return (
        <section
            className="team-contacts"
            aria-labelledby="team-contacts-title"
        >
            <Container>

                {/* Section Heading */}
                <div className="team-contacts__heading">

                    <div className="team-contacts__title-row">
                        <span
                            className="team-contacts__title-line"
                            aria-hidden="true"
                        />

                        <h2 id="team-contacts-title">
                            Our Team / Key Contacts
                        </h2>

                        <span
                            className="team-contacts__title-line"
                            aria-hidden="true"
                        />
                    </div>

                    <p className="team-contacts__subtitle">
                        For Business Enquiries &amp; Partnerships
                    </p>

                </div>

                {/* Team Contact Card */}
                <div className="team-contacts__card">

                    {teamMembers.map((member) => (
                        <article
                            className="team-contacts__row"
                            key={member.id}
                            aria-label={`${member.name}, ${member.designation}`}
                        >

                            {/* Member Information */}
                            <div className="team-contacts__person">

                                <div
                                    className="team-contacts__avatar"
                                    aria-hidden="true"
                                >
                                    <UserRound
                                        size={34}
                                        strokeWidth={1.7}
                                    />
                                </div>

                                <div className="team-contacts__person-info">
                                    <h3>{member.name}</h3>
                                    <p>({member.designation})</p>
                                </div>

                            </div>

                            {/* Phone Information */}
                            <div className="team-contacts__phone">
                                <a
                                    href={`https://wa.me/${member.whatsapp}`}
                                    className="team-contacts__whatsapp"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Message ${member.name} on WhatsApp`}
                                >
                                    <FaWhatsapp
                                        size={23}
                                        aria-hidden="true"
                                    />
                                </a>
                                <a
                                    href={`tel:${member.phoneLink}`}
                                    className="team-contacts__phone-link"
                                    aria-label={`Call ${member.name} at ${member.phone}`}
                                >
                                    <Phone
                                        size={23}
                                        strokeWidth={2.5}
                                        aria-hidden="true"
                                    />

                                    <span className="team-contacts__phone-number">
                                        {member.phone}
                                    </span>
                                </a>


                            </div>

                            {/* Email Information */}
                            <div className="team-contacts__email">

                                <Mail
                                    className="team-contacts__email-icon"
                                    size={26}
                                    strokeWidth={2}
                                    aria-hidden="true"
                                />

                                <a
                                    href={`mailto:${member.email}`}
                                    className="team-contacts__email-link"
                                    aria-label={`Email ${member.name}: ${member.email}`}
                                >
                                    {member.email}
                                </a>

                            </div>

                        </article>
                    ))}

                </div>

            </Container>
        </section>
    );
}
