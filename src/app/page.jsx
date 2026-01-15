import Footer from "@/Component/Shared/Footer";
import Navbar from "@/Component/Shared/Navbar";

export default function HomePage({ children }) {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
