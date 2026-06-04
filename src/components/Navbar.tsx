import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

// Placeholder for logo since binary is gone
const LogoPlaceholder = () => (
  <div className="flex items-center gap-2 font-bold text-xl">
    <div className="h-9 w-9 bg-gradient-brand rounded-lg flex items-center justify-center text-white text-xs">SC</div>
    <span>SnapCut AI</span>
  </div>
);

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <LogoPlaceholder />
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition">
            Features
          </a>
          <a href="#how" className="hover:text-foreground transition">
            How it works
          </a>
          <a href="#faq" className="hover:text-foreground transition">
            FAQ
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
            Sign in
          </Button>
          <Button
            asChild
            size="sm"
            className="bg-gradient-brand text-white hover:opacity-90 shadow-glow border-0"
          >
            <a href="#upload">Get started</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
