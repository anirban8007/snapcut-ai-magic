const steps = [
  { n: "01", t: "Upload", d: "Drag & drop any photo or pick from your device." },
  { n: "02", t: "AI processes", d: "Our model detects the subject and isolates it precisely." },
  { n: "03", t: "Download", d: "Grab the transparent PNG — ready to drop anywhere." },
];

export function HowItWorks() {
  return (
    <section id="how" className="container mx-auto px-4 py-24">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">How it works</p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Three steps. Zero learning curve.</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {steps.map((s) => (
          <div key={s.n} className="relative p-8 rounded-2xl bg-gradient-to-br from-card to-accent/30 border border-border">
            <div className="text-6xl font-bold text-gradient-brand mb-4">{s.n}</div>
            <h3 className="text-xl font-semibold mb-2">{s.t}</h3>
            <p className="text-muted-foreground">{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
