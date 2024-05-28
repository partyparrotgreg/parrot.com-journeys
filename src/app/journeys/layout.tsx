export default function JourneyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="container p-8">{children}</div>;
}
