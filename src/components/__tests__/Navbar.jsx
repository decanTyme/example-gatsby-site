import { act, render, screen } from "@testing-library/react"
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
    expect(brand).toHaveAttribute("type", "button")

    expect(screen.getByRole("navigation")).toBeInTheDocument()

    links.forEach(({ text, url }) => {
      const link = screen.getByRole("link", { name: text })
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute("href", url)
      expect(link).toHaveStyle({
        "text-decoration": "none",
        "text-transform": "capitalize",
      })
    })
  })

  // @see https://github.com/styled-components/styled-components/issues/3570
  // @see https://github.com/styled-components/styled-components/issues/3297
  test.todo("if the links change background colors based on the pathname")
})
