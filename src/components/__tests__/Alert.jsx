import { screen, render } from "@testing-library/react"
import Alert from "../Alert"

describe("<Alert />", () => {
  it("renders", () => {
    render(<Alert message="Alert Message" />)

    const alert = screen.getByRole("alert")
    expect(alert).toBeInTheDocument()
    expect(alert).toHaveTextContent("Alert Message")
  })
})
