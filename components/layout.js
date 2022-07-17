import Nav from "./nav"

export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      <main className="flex w-full justify-center">{children}</main>
    </div>
  )
}