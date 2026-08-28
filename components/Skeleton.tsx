import React from "react";

export const Skeleton: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`animate-pulse bg-slate-200/80 rounded-2xl ${className}`} />
);

export const CardSkeleton: React.FC = () => (
  <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-4">
    <Skeleton className="h-10 w-10 rounded-xl" />
    <Skeleton className="h-6 w-3/4" />
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-5/6" />
  </div>
);

export const CalculatorSkeleton: React.FC = () => (
  <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xl space-y-6 max-w-4xl mx-auto">
    <div className="space-y-2 text-center">
      <Skeleton className="h-8 w-1/2 mx-auto" />
      <Skeleton className="h-4 w-3/4 mx-auto" />
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <Skeleton key={i} className="h-20 w-full rounded-2xl" />
      ))}
    </div>
    <Skeleton className="h-14 w-full rounded-2xl" />
  </div>
);

export const SectionSkeleton: React.FC = () => (
  <div className="py-16 max-w-7xl mx-auto px-4 space-y-8">
    <div className="space-y-3 text-center max-w-2xl mx-auto">
      <Skeleton className="h-6 w-32 mx-auto rounded-full" />
      <Skeleton className="h-10 w-3/4 mx-auto" />
      <Skeleton className="h-4 w-2/3 mx-auto" />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </div>
  </div>
);
