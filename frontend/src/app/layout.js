
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import BackToTop from "@/components/BackToTop";



export const metadata = {
  title: "ACE Software Solutions Pvt. Ltd",
  description:  "ACE Software Solutions Pvt. Ltd",
  keywords: "ACE Software Solution,ACE"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <link rel="icon" href="/AceLogo.png" />
      <body>
          <Header/>
        {children}
        <BackToTop/>
        <Footer/>
      </body>
    </html>
  );
}
