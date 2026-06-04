import { Zap, Shield, Sparkles, Layers, Code2, Infinity as Inf } from "lucide-react";

const items = [
  { icon: Zap, title: "Instant results", desc: "AI-powered cutouts in seconds. No waiting, no queues." },
  { icon: Sparkles, title: "Studio quality", desc: "Pixel-perfect edges on hair, fur, and translucent objects." },
  { icon: Shield, title: "Private by default", desc: "Process locally in-browser. Your images never leave your device." },
  { icon: Layers, title: "Transparent PNG", desc: "Download high-resolution cutouts ready for any background." },
  { icon: Code2, title: "Developer API", desc: "REST endpoints, webhooks, and SDKs for production workloads." },
  { icon: Inf, title: "Unlimited formats", desc: "PNG, JPG, WEBP in — transparent PNG out, every time." },
];

export function Features() {
  return (
    <section id="features" className="container mx-auto px-4 py-24 bg-card/30 rounded-3xl my-12 border border-border/50">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Features</p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Everything you need for perfect cutouts.</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col gap-4 p-6 rounded-2xl hover:bg-accent/50 transition-colors">
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <item.icon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
