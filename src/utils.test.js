import { mockLoginEndpoint, mockLogoutEndpoint } from "./utils"

const endpoint = "https://some.server.com/api/auth"

describe("Utils", () => {
  describe("mockLoginEndpoint", () => {
    it("simulates authentication", async () => {
      expect.assertions(1)

      await expect(
        mockLoginEndpoint(endpoint, {
          username: "admin",
          password: "password",
        })
      ).resolves.toEqual(true)
    })

    it("simulates authentication error", async () => {
      expect.assertions(1)

      await expect(
        mockLoginEndpoint(endpoint, {
          username: "other_user",
          password: "wrong_pw",
        })
      ).rejects.toEqual("Invalid credentials")
    })
  })

  test("mockLogoutEndpoint", async () => {
    expect.assertions(1)
    await expect(mockLogoutEndpoint(endpoint)).resolves.toEqual(false)
  })
})
