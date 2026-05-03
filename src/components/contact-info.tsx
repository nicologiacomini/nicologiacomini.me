import { Mail } from 'lucide-react'
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";

export default function ContactInfo() {
    const contacts = [
        {
            label: "E-mail",
            value: "n.giacomini99@gmail.com",
            href: "mailto:n.giacomini99@gmail.com",
            icon: Mail,
            isExternal: false
        },
        {
            label: "GitHub",
            value: "nicologiacomini",
            href: "https://github.com/nicologiacomini",
            icon: FaGithub,
            isExternal: true
        },
        {
            label: "LinkedIn",
            value: "Nicolò Giacomini",
            href: "https://www.linkedin.com/in/nicolo-giacomini",
            icon: FaLinkedin,
            isExternal: true
        },
        {
            label: "Website",
            value: "nicologiacomini.me",
            href: "https://nicologiacomini.me",
            icon: FaGlobe,
            isExternal: true
        }
    ];

    return (
        <section className="mb-10" id="contact">
          <h1 className="text-2xl font-[Onest-Bold] mb-1 mt-10">Contact Information</h1>
          <hr className="h-px bg-gray-200 border-0 dark:bg-gray-500 mb-6 mt-2" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {contacts.map((contact, index) => {
                const Icon = contact.icon;
                return (
                    <a 
                        key={index}
                        href={contact.href}
                        target={contact.isExternal ? "_blank" : undefined}
                        rel={contact.isExternal ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-4 p-4 bg-background-button border border-border-card rounded-xl shadow-sm hover:shadow-md hover:border-a-hover-color/50 transition-all duration-300 group outline-none focus-visible:ring-2 focus-visible:ring-a-hover-color"
                    >
                        <div className="p-3 bg-border-card/30 rounded-lg text-a-hover-color group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                            <Icon size={24} />
                        </div>
                        <div className="flex flex-col overflow-hidden">
                            <span className="text-sm text-text-subtitle font-[Onest-Regular] mb-0.5">
                                {contact.label}
                            </span>
                            <span className="text-base font-[Onest-Bold] text-text-button group-hover:text-a-hover-color transition-colors truncate">
                                {contact.value}
                            </span>
                        </div>
                    </a>
                );
            })}
          </div>
        </section>
    )
}