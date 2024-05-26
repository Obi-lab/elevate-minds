import Navbar from "./Navbar"
import Footer from "./Footer"
import BackToTopButton from "./BackToTop";

export default function Layout({children}:Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <div className="flex flex-col">
        <Navbar />
        <main>{children}</main>
        <BackToTopButton/>
        <Footer />
    </div>
  )
}
