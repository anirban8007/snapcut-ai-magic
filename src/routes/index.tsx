import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/Navbar";
import { UploadDemo } from "@/components/UploadDemo";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Toaster richColors position="top-center" />

      {/* Hero */}
      <section id="upload" className="relative overflow-hidden bg-gradient-hero">
        <div className="container mx-auto px-4 pt-20 pb-16 md:pt-28 md:pb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card/60 backdrop-blur text-xs font-medium text-muted-foreground mb-6">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Powered by on-device AI — your photos stay private
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
              Remove backgrounds <br />
              in <span className="text-gradient-brand">one snap.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              SnapCut AI turns any photo into a clean, transparent cutout — instantly. No skills, no
              software, no waiting.
            </p>
          </div>
          <UploadDemo />
        </div>
      </section>

      <Features />
      <HowItWorks />
      <FAQ />

      {/* CTA */}
      <section className="container mx-auto px-4 py-20">
        <div className="rounded-3xl bg-gradient-brand p-12 md:p-16 text-center shadow-glow">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Ready to cut the background?
          </h2>
          <p className="mt-4 text-white/90 text-lg">
            Join thousands of creators saving hours every week.
          </p>
          <a
            href="#upload"
            className="mt-8 inline-block px-8 py-3 rounded-xl bg-white text-primary font-semibold hover:scale-105 transition-transform shadow-elegant"
          >
            Try SnapCut AI free
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
