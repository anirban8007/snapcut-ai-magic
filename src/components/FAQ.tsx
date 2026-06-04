import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "How does SnapCut AI remove backgrounds?", a: "We use a state-of-the-art segmentation model that detects subjects (people, products, animals, objects) and isolates them with precise edges — including hair and fine details." },
  { q: "Is my image data private?", a: "Yes. The browser demo runs the AI entirely on your device — your images never touch our servers. Pro and Business plans process securely with signed URLs and auto-deletion." },
  { q: "What file formats are supported?", a: "Input: PNG, JPG, JPEG, WEBP up to 12MB. Output: high-quality transparent PNG." },
  { q: "Can I use this for commercial work?", a: "Pro and Business plans include a full commercial license. The free tier is for personal use." },
  { q: "Do you offer an API?", a: "Yes — the Business plan unlocks a REST API with webhooks, rate-limited keys, and usage analytics." },
];

export function FAQ() {
  return (
    <section id="faq" className="container mx-auto px-4 py-24 max-w-3xl">
      <div className="text-center mb-12">
        <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">FAQ</p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Questions, answered.</h2>
      </div>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`i-${i}`} className="border border-border rounded-xl px-5 bg-card">
            <AccordionTrigger className="text-left font-semibold hover:no-underline">{f.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
