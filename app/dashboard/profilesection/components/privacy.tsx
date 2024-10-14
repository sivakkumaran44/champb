import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PrivacyContent() {
  return (
    <div className="mt-4 pl-6">
      <p className="mb-12 text-slate-700">
        View our{' '}
        <Link href="/privacypolicy">
          <span className="underline hover:text-emerald-700 transition duration-300 ease-in-out">
            Privacy Policy
          </span>
        </Link>{' '}
        and{' '}
        <Link href="/privacypolicy/termsandconditions">
          <span className="underline hover:text-emerald-700 transition duration-300 ease-in-out">
            Terms and Conditions
          </span>
        </Link>
      </p>
      <Button variant="outline" className="border-emerald-700 text-emerald-700">
        Delete My Account
      </Button>
    </div>
  );
}