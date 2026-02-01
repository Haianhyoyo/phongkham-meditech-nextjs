import Hero from "@/components/home/Hero";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ServiceCategories from "@/components/home/ServiceCategories";
import SpecialServices from "@/components/home/SpecialServices";
import Doctors from "@/components/home/Doctors";
import Results from "@/components/home/Results";
import News from "@/components/home/News";
import BookingForm from "@/components/home/BookingForm";
import InsurancePartners from "@/components/home/InsurancePartners";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <WhyChooseUs />
      <ServiceCategories />
      <SpecialServices />
      <Doctors />
      <Results />
      <News />
      <BookingForm />
      <InsurancePartners />
    </main>
  );
}
