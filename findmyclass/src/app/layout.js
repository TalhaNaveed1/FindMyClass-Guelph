import "./globals.css";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"


export const metadata = {
  title: "FindMyClass",
  description: "Created by Talha Naveed",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
