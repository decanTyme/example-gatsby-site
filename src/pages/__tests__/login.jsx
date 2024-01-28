import { render, screen } from "@testing-library/react"
import LoginPage from "../login"
import userEvent from "@testing-library/user-event"

const inputs = [
  { label: "Username", value: "admin" },
  { label: "Password", value: "password" },
]

describe("Login Page", () => {
  it("renders", () => {
    render(<LoginPage />)

    expect(screen.getByRole("heading")).toHaveTextContent("Admin Login Page")

    inputs.forEach(({ label }) => {
      const input = screen.getByLabelText(label)
      expect(input).toBeInTheDocument()
      expect(input).toHaveAttribute("id", label.toLowerCase())
      expect(input).toBeRequired()
      expect(input).toHaveValue("")
    })

    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument()
    expect(
      screen.getByRole("link", { name: /forgot password/i })
    ).toBeInTheDocument()
  })

  it("authenticates", async () => {
    render(<LoginPage />)

    const usernameInput = screen.getByLabelText("Username")
    expect(usernameInput).toHaveFocus()
    await userEvent.type(usernameInput, "admin")
    expect(usernameInput).toHaveValue("admin")

    const passwordInput = screen.getByLabelText("Password")
    expect(passwordInput).not.toHaveFocus()
    await userEvent.type(passwordInput, "password")
    expect(passwordInput).toHaveValue("password")

    await userEvent.keyboard("[Enter]")

    expect(
      await screen.findByText("Dashboard", undefined, { timeout: 3000 })
    ).toBeInTheDocument()

    await userEvent.click(screen.getByRole("button", { name: /logout/i }))

    expect(
      await screen.findByText("Admin Login Page", undefined, { timeout: 3000 })
    ).toBeInTheDocument()
  }, 10_000)

  it("shows an error on wrong credentials", async () => {
    render(<LoginPage />)

    const usernameInput = screen.getByLabelText("Username")
    await userEvent.type(usernameInput, "other_user")

    const passwordInput = screen.getByLabelText("Password")
    await userEvent.type(passwordInput, "wrong_pw")

    await userEvent.keyboard("[Enter]")

    expect(screen.getByRole("heading")).toHaveTextContent("Admin Login Page")

    const alert = await screen.findByRole("alert", undefined, { timeout: 3000 })
    expect(alert).toBeInTheDocument()
    expect(alert).toHaveTextContent("Invalid credentials")

    await userEvent.keyboard("[Enter]")
    expect(alert).not.toBeInTheDocument()
  })
})
