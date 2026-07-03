"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

import Button from "@/components/ui/Button";
import NavLinks from "./NavLinks";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen(!open)}
        className="rounded-md p-2 transition hover:bg-accent lg:hidden"
      >
        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {open && (
        <div
          id="mobile-navigation"
          className="absolute left-0 top-16 w-full border-b bg-background shadow-lg lg:hidden"
        >
          <div className="p-6">
            <NavLinks direction="column" onNavigate={() => setOpen(false)} />

            <div className="mt-6">
              <Button href="/login">Student Portal</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
