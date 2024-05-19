import AboutUs from "@/app/_components/AboutUs";
import AhsanTrustNews from "@/app/_components/AhsanTrustNews";
import CTA from "@/app/_components/CTA";
import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import Highlight from "@/app/_components/Highlight";
import Navbar from "@/app/_components/Navbar";
import Stores from "@/app/_components/Stores";

export default function Home() {
  return (
    <main id="app">
      <Navbar />
      <Header />
      <Stores />
      <AboutUs />
      <Highlight />
      <AhsanTrustNews />
      <CTA />
      <Footer />
    </main>
  );
}
