"use client"
import React, { useState, useEffect } from 'react';
import privacyData from '@/components/data/privacyPolicy.json';

interface Section {
  subtitle: string;
  content: string[];
}

interface PolicyItem {
  title: string;
  content: string | string[];
  sections?: Section[];
}

interface PrivacyPolicyData {
  lastUpdated: string;
  privacyPolicy: PolicyItem[];
}

const PrivacyPolicy = () => {
  const [policy, setPolicy] = useState<PrivacyPolicyData | null>(null);

  useEffect(() => {
    setPolicy(privacyData as PrivacyPolicyData);
  }, []);

  if (!policy) return <div>Loading...</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-emerald-700">Privacy Policy</h1>
      <p className="text-sm text-muted-foreground text-slate-700 mb-6">
        Last updated: {policy.lastUpdated}
      </p>

      {policy.privacyPolicy.map((item, index) => (
        <div key={index} className="mb-8 text-slate-700">
          <h2 className="text-xl font-semibold mb-2 text-slate-700">{item.title}</h2>
          {Array.isArray(item.content) ? (
            <ul className="list-disc ml-6 text-slate-700">
              {item.content.map((contentItem, i) => (
                <li key={i}>{contentItem}</li>
              ))}
            </ul>
          ) : (
            <p>{item.content}</p>
          )}

          {item.sections &&
            item.sections.map((section, idx) => (
              <div key={idx} className="mb-4 text-slate-700">
                <h3 className="font-semibold text-slate-700">{section.subtitle}</h3>
                <ul className="list-disc ml-6 text-slate-700">
                  {section.content.map((sectionItem, i) => (
                    <li key={i}>{sectionItem}</li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default PrivacyPolicy;