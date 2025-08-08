import { render, screen } from "@testing-library/react"
import HomePage from ".."

describe("Home Page", () => {
  it("renders", async () => {
    render(<HomePage />)

    expect(screen.getByText(/hello world/i)).toBeInTheDocument()
    expect(screen.getByText("Welcome to Gatsby")).toBeInTheDocument()
    expect(screen.getByText(/labore consectetur/i)).toBeInTheDocument()

    expect(
      await screen.findByText(/!\?@\$&!{14}$/i, undefined, { timeout: 5000 })
    ).toBeInTheDocument()
  }, 6000)
})
