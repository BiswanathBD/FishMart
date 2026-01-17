import Hero from "@/Component/Hero";
import FeaturedCategories from "@/Component/FeaturedCategories";
import WhyChooseUs from "@/Component/WhyChooseUs";
import HowItWorks from "@/Component/HowItWorks";
import Testimonials from "@/Component/Testimonials";
import BlogRecipes from "@/Component/BlogRecipes";
import AboutSection from "@/Component/AboutSection";
import Newsletter from "@/Component/Newsletter";

export default function HomePage({ children }) {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedCategories />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <BlogRecipes />
      <AboutSection />
      <Newsletter />
    </div>
  );
}
