import Navbar from "./_components/Navbar";
import Header from "./_components/Header";
import Stores from "./_components/Stores";
import AboutUs from "./_components/AboutUs";
import Highlight from "./_components/Highlight";
import AhsanTrustNews from "./_components/AhsanTrustNews";
import CTA from "./_components/CTA";
import Footer from "./_components/Footer";
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
