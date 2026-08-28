import React from "react";
import { Skeleton, SectionSkeleton } from "@/components/Skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col justify-between">
      {/* Top Navbar Skeleton */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 py-3 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-600 animate-pulse" />
            <div className="space-y-1">
              <Skeleton className="h-5 w-40" />
              <Skeleton className="h-3 w-28" />
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-4">
            <Skeleton className="h-8 w-20" />
            <Skeleton className="h-8 w-24" />
            <Skeleton className="h-8 w-20" />
          </div>
          <Skeleton className="h-10 w-32 rounded-xl" />
        </div>
      </header>

      {/* Main Hero Loading Spinner & Skeleton */}
      <main className="pt-28 sm:pt-36 pb-16 max-w-7xl mx-auto px-4 w-full flex-1 space-y-12">
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden flex flex-col items-center justify-center text-center min-h-[360px] space-y-6">
          <div className="relative flex items-center justify-center">
            <div className="w-16 h-16 rounded-full border-4 border-cyan-500/30 border-t-cyan-400 animate-spin" />
          </div>
          <div className="space-y-3 max-w-lg w-full">
            <Skeleton className="h-8 w-3/4 mx-auto bg-slate-700/60" />
            <Skeleton className="h-4 w-full mx-auto bg-slate-700/60" />
            <Skeleton className="h-4 w-5/6 mx-auto bg-slate-700/60" />
          </div>
        </div>

        <SectionSkeleton />
      </main>

      {/* Footer Skeleton */}
      <footer className="bg-[#040812] py-12 px-4 border-t border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-4 gap-8">
          <Skeleton className="h-24 bg-slate-800/80 rounded-2xl" />
          <Skeleton className="h-24 bg-slate-800/80 rounded-2xl" />
          <Skeleton className="h-24 bg-slate-800/80 rounded-2xl" />
          <Skeleton className="h-24 bg-slate-800/80 rounded-2xl" />
        </div>
      </footer>
    </div>
  );
}
