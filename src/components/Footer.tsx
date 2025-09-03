import { Footer7 } from "@/components/ui/footer-7";
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const jacbsFooterData = {
    logo: {
      url: "/",
      src: "/JACBS.png",
      alt: "JACBS Logo",
      title: "JACBS",
    },
    sections: [
      {
        title: "Research",
        links: [
          { name: "Browse Papers", href: "/browse" },
          { name: "Submit Paper", href: "/submit" },
          { name: "Research Areas", href: "/browse" },
          { name: "Publication Guidelines", href: "/submit" },
        ],
      },
      {
        title: "Journal",
        links: [
          { name: "About", href: "/about" },
          { name: "Editorial Board", href: "/about" },
          { name: "Review Process", href: "/about" },
          { name: "Contact", href: "/contact" },
        ],
      },
      {
        title: "Resources",
        links: [
          { name: "Submission Guidelines", href: "/policies/submission-guidelines" },
          { name: "Author Guidelines", href: "/policies/author-guidelines" },
          { name: "Peer Review Guidelines", href: "/policies/peer-review-guidelines" },
          { name: "All Policies", href: "/policies" },
        ],
      },
    ],
    description: "Advancing research in computational science and business innovation through peer-reviewed publications and open academic discourse.",
    socialLinks: [
      { icon: <FaLinkedin className="size-5" />, href: "#", label: "LinkedIn" },
      { icon: <FaTwitter className="size-5" />, href: "#", label: "Twitter" },
      { icon: <FaGithub className="size-5" />, href: "#", label: "GitHub" },
      { icon: <FaEnvelope className="size-5" />, href: "/policies/contact-support", label: "Contact" },
    ],
    copyright: `© ${new Date().getFullYear()} Journal for Advanced Computational and Business Studies. All rights reserved.`,
    legalLinks: [
      { name: "Terms of Service", href: "/policies/terms-of-service" },
      { name: "Privacy Policy", href: "/policies/privacy-policy" },
      { name: "Open Access Policy", href: "/policies/open-access-policy" },
    ],
  };

  return <Footer7 {...jacbsFooterData} />;
}
