export function Footer() {
  return (
    <footer className="border-t border-border mt-12">
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 bg-gradient-brand rounded flex items-center justify-center text-white text-[10px] font-bold">SC</div>
          <span className="text-sm text-muted-foreground">© {new Date().getFullYear()} SnapCut AI. All rights reserved.</span>
        </div>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground">Privacy</a>
          <a href="#" className="hover:text-foreground">Terms</a>
          <a href="#" className="hover:text-foreground">API Docs</a>
          <a href="#" className="hover:text-foreground">Contact</a>
        </div>
      </div>
    </footer>
  );
}
