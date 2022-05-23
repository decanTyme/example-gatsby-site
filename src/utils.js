const timeout = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export const sleep = async (fn, ms, ...args) => {
  await timeout(ms)
  return fn(...args)
}

const rand = (min = 0, max = 1) =>
  Math.floor(Math.random() * (max - min + 1) + min)

export const mockLoginEndpoint = async (serverURI, data) => {
  console.log(`Fetching from ${serverURI}...`)

  if (data.username !== "admin" || data.password !== "password")
    return new Promise((_, reject) =>
      sleep(reject, rand(500, 2000), "Invalid credentials")
    )

  return new Promise((resolve) => sleep(resolve, rand(750, 3000), true))
}

export const mockLogoutEndpoint = async (serverURI) => {
  console.log(`Fetching from ${serverURI}...`)

  return new Promise((resolve) => sleep(resolve, rand(750, 3000), false))
}
