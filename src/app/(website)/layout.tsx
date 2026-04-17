import "../globals.css";
import Topbar from "@/components/website/Common/Topbar";
import Navbar from "@/components/website/Common/Navbar";
import Footer from "@/components/website/Common/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Topbar />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
