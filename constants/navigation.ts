type NavigationItem = {
  label: string;
  href: string;
  disabled?: boolean;
  children?: NavigationItem[];
};

export const websiteNavigation: NavigationItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Admissions",
    href: "/admissions",
    children: [],
  },
  {
    label: "News",
    href: "/news",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];