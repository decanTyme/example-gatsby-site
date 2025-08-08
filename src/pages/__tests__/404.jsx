import { render, screen } from "@testing-library/react"

describe("404 Page", () => {
  it("renders", async () => {
    const { default: NotFoundPage } = await import("../404")
    render(<NotFoundPage />)

    expect(screen.getByRole("heading")).toHaveTextContent(/not found/i)
    expect(screen.getByRole("link")).toHaveTextContent(/home/i)
  })

  it("renders extra info in dev mode", async () => {
    jest.replaceProperty(process.env, "NODE_ENV", "development")

    const { default: NotFoundPage } = await import("../404")
    render(<NotFoundPage />)

    expect(screen.getByText(/try creating a page/i)).toBeInTheDocument()
  })
})
