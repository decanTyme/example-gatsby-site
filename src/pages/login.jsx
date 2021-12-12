import React, { useState } from "react"
import Alert from "../components/Alert"
import AppShell from "../components/AppShell"
import { mockLoginEndpoint, mockLogoutEndpoint } from "../utils"

// (1)
// Managing states
//
// In React, we typically manage states through a hook called `useState()`.
// Basically, this hook returns two things: the value and the setter.
// The setter is used to update the value, and when that happens,
// the UI automatically re-renders. `useState` can take an argument
// to be used as the initial value.
//
// Tip: Open your browser's DevTools for this!
//
// p.s. Username and password is `admin` and `password` respectively.

function Login() {
  const [credentials, setCredentials] = useState({ username: "", password: "" })
  const [isAuthenticated, setAuthenticated] = useState(false)
  const [error, setError] = useState()

  // Promise.then() form - OLD
  const handleLogin = (e) => {
    e.preventDefault()

    setError(null)

    mockLoginEndpoint("https://some.server.com/api/auth", credentials)
      .then((data) => {
        setCredentials({ username: "", password: "" })
        setAuthenticated(data)
        console.log({ data })
      })
      .catch((err) => {
        setError(err)
        console.log("There was an error. Please try again.")
      })
  }

  // async/await form - NEW
  const handleLogout = async () => {
    // Always use with trycatch!
    try {
      const response = await mockLogoutEndpoint(
        "https://some.server.com/api/auth"
      )

      console.log({ response })
      setAuthenticated(response)
    } catch (error) {
      console.log("There was an error. Please try again.")
      console.error(error)
    }
  }

  return (
    <AppShell>
      {/* (2)
          Here, we use the value of the state to tell whether
          the user has been authenticated or not. */}
      {isAuthenticated ? (
        <div>
          <h2>Dashboard</h2>

          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>Admin Login Page</h2>

          <form onSubmit={handleLogin}>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              // (3)
              // This is called a "controlled" component.
              // This is how we usually use input form
              // elements in React for various reasons.
              //
              // The `onChange` is called to set the credentials when typing
              // so that data can "captured" and sent to the server.
              //
              // @see https://reactjs.org/docs/forms.html#controlled-components
              // @see https://goshacmd.com/controlled-vs-uncontrolled-inputs-react/#conclusion
              value={credentials.username}
              onChange={(e) =>
                setCredentials((prevState) => ({
                  ...prevState,
                  username: e.target.value,
                }))
              }
              required
            />
            <br />

            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={credentials.password}
              onChange={(e) =>
                setCredentials((prevState) => ({
                  ...prevState,
                  password: e.target.value,
                }))
              }
              required
            />
            <br />

            <input type="submit" value="Login" />
            <a href="/forgot">Forgot password?</a>

            {error && <Alert message={error} />}
          </form>
        </div>
      )}

      {/* (4)
          Note that this would, however, lose its state on a 
          page reload and log the user back out. */}
    </AppShell>
  )
}

// (5)
// There are more powerful state management libraries out there
// that can do even more things like fetching from a GraphQL server,
// invalidating caches, native support for "loading" components,
// or managing the entirety of the website (`useState()` can only
// manage this component or its children.)
//
// There's also React's built-in `useContext` API that can also
// be used for state management, but unfortunately it is out
// of scope for this simple demonstration.
//
// That's about the basics! Explore/modify the repo if you want!

export default Login
