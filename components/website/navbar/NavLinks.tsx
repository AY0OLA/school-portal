import NavItem from "./NavItem";
import { websiteNavigation } from "@/constants/navigation";
import { cn } from "@/lib/utils";

type NavLinksProps = {
  direction?: "row" | "column";
  onNavigate?: () => void;
};

export default function NavLinks({
  direction = "row",
  onNavigate,
}: NavLinksProps) {
  return (
    <nav
      className={cn(
        "flex",
        direction === "row" ? "items-center gap-8" : "flex-col gap-5",
      )}
    >
      {websiteNavigation.map((item) => (
        <div key={item.href} onClick={onNavigate}>
          <NavItem {...item} />
        </div>
      ))}
    </nav>
  );
}
