import { contactInfo } from "./data";

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      {contactInfo.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="flex items-start gap-4 rounded-2xl border p-5"
          >
            <div className="rounded-xl bg-primary/10 p-3">
              <Icon className="h-6 w-6 text-primary" />
            </div>

            <div>
              <h3 className="font-semibold">{item.title}</h3>

              <p className="mt-1 text-muted-foreground">{item.value}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
