import Link from "next/link";
import { portalLinks, quickLinks } from "./data";

export default function FooterLinks() {
  return (
    <div className="grid grid-cols-2 gap-10">
      <div>
        <h4 className="mb-5 text-lg font-semibold text-white">Quick Links</h4>

        <div className="space-y-3">
          {quickLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block text-white/70 transition hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div>
        <h4 className="mb-5 text-lg font-semibold text-white">Portal</h4>

        <div className="space-y-3">
          {portalLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block text-white/70 transition hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
