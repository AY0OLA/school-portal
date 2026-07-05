import { Mail, MapPin, Phone } from "lucide-react";

export default function FooterContact() {
  return (
    <div className="space-y-5">
      <h4 className="text-lg font-semibold text-white">Contact</h4>

      <div className="flex gap-3 text-white/70">
        <MapPin className="mt-1 h-5 w-5 text-accent" />
        <span>123 Greenfield Avenue, Ikeja, Lagos</span>
      </div>

      <div className="flex gap-3 text-white/70">
        <Phone className="h-5 w-5 text-accent" />
        <span>+234 800 123 4567</span>
      </div>

      <div className="flex gap-3 text-white/70">
        <Mail className="h-5 w-5 text-accent" />
        <span>info@greenfieldacademy.edu.ng</span>
      </div>
    </div>
  );
}
