import { render, screen } from "@testing-library/react"
import AboutPage from "../about"

describe("About Page", () => {
  it("renders", () => {
    render(<AboutPage />)

    expect(screen.getByRole("heading")).toHaveTextContent("About Page")
    expect(screen.getByRole("img")).toBeInTheDocument()
  })
})
