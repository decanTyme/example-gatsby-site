import { render, screen } from "@testing-library/react"
import Navbar from "../Navbar"

const links = [
  { text: "home", url: "/" },
  { text: "about", url: "/about" },
  { text: "log in", url: "/login" },
]

describe("<Navbar />", () => {
  it("renders", () => {
    render(<Navbar />)

    const brand = screen.getByRole("button")
    expect(brand).toBeInTheDocument()
    expect(brand).toHaveTextContent(/^Example Gatsby Website$/)

    expect(screen.getByRole("navigation")).toBeInTheDocument()

    links.forEach(({ text, url }) => {
      const link = screen.getByText(text)
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute("href", url)
    })
  })
})
