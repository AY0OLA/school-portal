import SidebarItem from "./SidebarItem";

type Props = {
  section: {
    title: string;
    items: {
      label: string;
      href: string;
      icon: any;
    }[];
  };
};

export default function SidebarSection({ section }: Props) {
  return (
    <div className="mb-6">
      <h3 className="mb-3 px-4 text-xs font-bold uppercase tracking-wider text-gray-400">
        {section.title}
      </h3>

      <div className="space-y-1">
        {section.items.map((item) => (
          <SidebarItem
            key={item.label}
            href={item.href}
            icon={item.icon}
            label={item.label}
          />
        ))}
      </div>
    </div>
  );
}
