"use client";

import Container from "./Container";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import Button from "@/components/ui/Button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <Logo />

        <nav aria-label="Primary Navigation" className="hidden lg:block">
          <NavLinks />
        </nav>

        <div className="hidden lg:block">
          <Button href="/login">Student Portal</Button>
        </div>

        <MobileMenu />
      </Container>
    </header>
  );
}
