import PrivacyPolicyHeader from "@/components/layout/PrivacyPolicyHeader";
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PrivacyPolicyHeader />
      <main>{children}</main>
    </>
  );
}