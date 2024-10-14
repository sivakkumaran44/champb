"use client"
import React, { useState, useEffect } from 'react';
import termsData from '@/components/data/terms.json';

interface Section {
  subtitle: string;
  content: string | string[];
}

interface Term {
  title: string;
  content?: string;
  sections?: Section[];
}

interface TermsData {
  lastUpdated: string;
  terms: Term[];
}

const TermsandConditions = () => {
  const [terms, setTerms] = useState<TermsData | null>(null);

  useEffect(() => {
    setTerms(termsData as TermsData);
  }, []);

  if (!terms) return <div>Loading...</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-emerald-700">Terms and Conditions</h1>
      <p className="text-sm text-muted-foreground text-slate-700 mb-6">
        Last updated: {terms.lastUpdated}
      </p>

      {terms.terms.map((term, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-xl text-slate-700 font-semibold mb-2">{term.title}</h2>
          {term.content && <p className="mb-4 text-slate-700">{term.content}</p>}

          {term.sections &&
            term.sections.map((section, idx) => (
              <div key={idx} className="mb-4">
                <h3 className="font-semibold text-slate-700">{section.subtitle}</h3>
                {Array.isArray(section.content) ? (
                  <ul className="list-disc text-slate-700 ml-6">
                    {section.content.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{section.content}</p>
                )}
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default TermsandConditions;