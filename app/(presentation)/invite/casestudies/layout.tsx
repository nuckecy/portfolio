import { HomeIcon } from "./_components/HomeIcon";

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HomeIcon />
      {children}
    </>
  );
}
