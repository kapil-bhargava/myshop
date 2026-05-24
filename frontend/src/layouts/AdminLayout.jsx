import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const PublicLayout = ({ children }) => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">{children}</main>

      <Footer />
    </div>
  );
};

export default PublicLayout;