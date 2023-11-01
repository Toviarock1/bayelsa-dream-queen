import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Bayelsa Dream queen",
  description:
    "The Bayelsa Dream Queen is a prestigious Crown that goes beyond physical beauty, the organization aim at helping young girls find their true essence. We search for women that have a big heart towards society, we believe in uplifting and giving a voice to those who have the courage to stand out.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
