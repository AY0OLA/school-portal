import clsx from "clsx";

type BadgeProps = {
  children: React.ReactNode;
  color?: "green" | "gray" | "blue" | "red";
};

export default function Badge({ children, color = "gray" }: BadgeProps) {
  return (
    <span
      className={clsx("rounded-full px-3 py-1 text-xs font-semibold", {
        "bg-green-100 text-green-700": color === "green",

        "bg-slate-100 text-slate-700": color === "gray",

        "bg-blue-100 text-blue-700": color === "blue",

        "bg-red-100 text-red-700": color === "red",
      })}
    >
      {children}
    </span>
  );
}
