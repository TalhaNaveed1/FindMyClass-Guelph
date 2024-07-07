import "./globals.css";
import Footer from "./components/Footer"

export const metadata = {
  title: "Find My Class",
  description: "Created by Talha Naveed",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
