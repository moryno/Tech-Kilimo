import Navbar from "../../components/frontend/Navbar";
import Hero from "../../components/frontend/Hero";
import HowItWorks from "../../components/frontend/HowItWorks";
import MonitorAnalytics from "../../components/frontend/MonitorAnalytics";
import OurPromise from "../../components/frontend/OurPromise";
import Footer from "../../components/frontend/Footer";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <MonitorAnalytics />
      <OurPromise />
      <Footer />
    </>
  );
};

export default LandingPage;
