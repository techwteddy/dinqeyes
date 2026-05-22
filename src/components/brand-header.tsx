import { cn } from "@/lib/utils";

export function BrandHeader({ className }: { className?: string }) {
  return (
    <div className={cn("text-center", className)}>
      <p className="text-2xl font-bold tracking-tight text-white">
        Dinq<span className="text-[#6C5CE7]">Eyes</span>
      </p>
      <p className="text-sm text-white/70 mt-1">
        Identity Intelligence. Instantly.
      </p>
    </div>
  );
}
