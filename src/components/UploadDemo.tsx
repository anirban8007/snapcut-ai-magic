import { useCallback, useState, useEffect } from "react";
import { removeBackground } from "@imgly/background-removal";
import { Upload, Loader2, Download, RefreshCw, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { toast } from "sonner";

export function UploadDemo() {
  const [original, setOriginal] = useState<string | null>(null);
  const [processed, setProcessed] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [progress, setProgress] = useState(0);

  // Clean up object URLs to prevent memory leaks
  useEffect(() => {
    return () => {
      if (original) URL.revokeObjectURL(original);
      if (processed) URL.revokeObjectURL(processed);
    };
  }, [original, processed]);

  const process = useCallback(async (file: File) => {
    if (!file.type.startsWith("image/")) {
      toast.error("Please upload a PNG, JPG, or WEBP image.");
      return;
    }

    // Revoke previous URLs before creating new ones
    if (original) URL.revokeObjectURL(original);
    if (processed) URL.revokeObjectURL(processed);

    const url = URL.createObjectURL(file);
    setOriginal(url);
    setProcessed(null);
    setLoading(true);
    setProgress(5);
    try {
      const blob = await removeBackground(file, {
        progress: (_key, current, total) => {
          if (total > 0) {
            setProgress(Math.round((current / total) * 100));
          }
        },
      });
      setProcessed(URL.createObjectURL(blob));
      toast.success("Background removed!");
    } catch (e) {
      console.error(e);
      toast.error("Couldn't process this image. Try another one.");
    } finally {
      setLoading(false);
    }
  }, [original, processed]);

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const f = e.dataTransfer.files?.[0];
    if (f) process(f);
  };

  const reset = () => {
    setOriginal(null);
    setProcessed(null);
    setProgress(0);
  };

  const download = () => {
    if (!processed) return;
    const a = document.createElement("a");
    a.href = processed;
    a.download = "snapcut-transparent.png";
    a.click();
  };

  if (original && (loading || processed)) {
    return (
      <div className="w-full max-w-3xl mx-auto">
        <div className="relative">
          {processed ? (
            <BeforeAfterSlider before={original} after={processed} />
          ) : (
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-elegant">
              <img src={original} alt="Processing" className="w-full h-auto" />
              <div className="absolute inset-0 bg-background/60 backdrop-blur-sm flex flex-col items-center justify-center gap-4">
                <Loader2 className="h-10 w-10 animate-spin text-primary" />
                <div className="w-64 h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-brand transition-all duration-300" style={{ width: `${progress}%` }} />
                </div>
                <p className="text-sm font-medium text-foreground">AI is removing the background… {progress}%</p>
              </div>
            </div>
          )}
        </div>
        <div className="flex justify-center gap-3 mt-6">
          <Button variant="outline" onClick={reset}>
            <RefreshCw className="h-4 w-4 mr-2" /> New image
          </Button>
          {processed && (
            <Button onClick={download} className="bg-gradient-brand text-white border-0 shadow-glow hover:opacity-90">
              <Download className="h-4 w-4 mr-2" /> Download PNG
            </Button>
          )}
        </div>
      </div>
    );
  }

  return (
    <label
      onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
      onDragLeave={() => setDragOver(false)}
      onDrop={onDrop}
      className={`relative block w-full max-w-3xl mx-auto cursor-pointer rounded-3xl border-2 border-dashed transition-all
        ${dragOver ? "border-primary bg-accent/40 scale-[1.01]" : "border-border bg-card/50 hover:border-primary/60 hover:bg-accent/20"}
        p-12 md:p-16 text-center shadow-elegant`}
    >
      <input type="file" accept="image/png,image/jpeg,image/jpg,image/webp" className="sr-only"
        onChange={(e) => e.target.files?.[0] && process(e.target.files[0])} />
      <div className="flex flex-col items-center gap-4">
        <div className="h-16 w-16 rounded-2xl bg-gradient-brand flex items-center justify-center shadow-glow">
          <Upload className="h-8 w-8 text-white" />
        </div>
        <div>
          <p className="text-lg font-semibold">Drop your image here</p>
          <p className="text-sm text-muted-foreground mt-1">or click to browse — PNG, JPG, WEBP up to 12MB</p>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground mt-2">
          <ImageIcon className="h-3.5 w-3.5" />
          <span>Runs locally in your browser. No upload needed for the demo.</span>
        </div>
      </div>
    </label>
  );
}
