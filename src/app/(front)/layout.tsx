//front layout

import Navbar from "../components/front/Navbar";

export default function FrontLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <footer>Footer Root</footer>
      </body>
    </html>
  );
}
