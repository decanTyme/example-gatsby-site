import { screen, render } from "@testing-library/react"
import AppShell from "../AppShell"

describe("<AppShell />", () => {
  it("renders", () => {
    render(<AppShell>Hello World</AppShell>)

    expect(screen.getByText("Example Gatsby Website")).toBeInTheDocument()
    expect(screen.getByRole("main")).toBeInTheDocument()
    expect(screen.getByText("Hello World")).toBeInTheDocument()
  })
})
