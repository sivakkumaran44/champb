import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PrivacyContent() {
  return (
    <div className="mt-4 pl-6">
      <p className="text-slate-700 mb-72">
        View our{' '}
        <Link href="/privacypolicy" target="_blank" rel="noopener noreferrer">
          <span className="underline hover:text-emerald-700 transition duration-300 ease-in-out">
            Privacy Policy
          </span>
        </Link>{' '}
        and{' '}
        <Link href="/privacypolicy/termsandconditions" target="_blank" rel="noopener noreferrer">
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
