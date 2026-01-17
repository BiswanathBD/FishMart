import Hero from "@/Component/Hero";
import FeaturedCategories from "@/Component/FeaturedCategories";

export default function HomePage({ children }) {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedCategories />
    </div>
  );
}
