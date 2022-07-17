import Nav from "./nav"
import Footer from "./footer"

export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      <main className="flex w-full justify-center">{children}</main>
      <Footer />
    </div>
  )
}