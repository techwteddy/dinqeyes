"use client";

import { useEffect, Suspense } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

function CallbackContent() {
  const router = useRouter();
  const { update } = useSession();

  useEffect(() => {
    const handleCallback = async () => {
      // Perform any necessary operations with searchParams here
      // For example, you might want to update the session or process verification results
      await update();
      router.push("/");
    };

    handleCallback();
  }, [router, update]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#010812] gap-2">
      <p className="text-lg font-semibold text-white">DinqEyes</p>
      <p className="text-white/70">Processing identity verification...</p>
    </div>
  );
}

export default function Callback() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CallbackContent />
    </Suspense>
  );
}
