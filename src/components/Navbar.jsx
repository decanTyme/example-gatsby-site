import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

// Links to be rendered
const links = [
  { text: "home", url: "/" },
  { text: "about", url: "/about" },
  { text: "log in", url: "/login" },
]

// (1)
// Unlike regular framework-less websites where you would
// have to separate CSS from the rest for a better dev
// experience, in React, or any component-based library,
// it is almost always better to just include the styling
// within the component itself to *maximize* re-usable-ness.
//
// This makes the component easier to maintain in the
// long run. The only caveat would be that it would be
// harder to synchronize the styling of the entire website.
//
// Don't worry tho, UI libraries like MaterialUI has solutions
// for this like theming, but for this short example I used
// a simple CSS-in-JS tool called `styled-components`.
const Nav = styled.nav`
  width: 100%;
`

const UnorderList = styled.ul`
  display: flex;
  padding: 0;
`

const ListItem = styled.li`
  display: flex;
  align-items: center;
  list-style: none;
  padding: 1rem 2rem;
`

const BrandName = styled.li`
  display: flex;
  align-items: center;
  list-style: none;
  margin-right: auto;
  margin-left: 0;
`

const Button = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  font-size: 1.25rem;
`

// Yep, ALL components are *just* functions.
function Navbar() {
  return (
    <Nav>
      <UnorderList>
        <BrandName>
          <Button>Example Gatsby Website</Button>
        </BrandName>

        {/* (2)
            Notice how we're using JS built-in functions cleanly
            inside this "HTML"?
            This is the beauty of React! we don't have to do
            complicated things like `document.createElement()`,
            React does the heavy lifting for us! */}
        {links.map(({ text, url }) => (
          <ListItem
            key={text} // Always include `key` when mapping components!
          >
            <Link
              to={url}
              // Inline HTML styles are okay
              style={{ textDecoration: "none", textTransform: "capitalize" }}
            >
              {text}
            </Link>
          </ListItem>
        ))}
        {/* (3)
            p.s. If you don't know what `map` is, it's just an array
            function that takes another function that modifies the 
            array, then returns the new array. The fn above just 
            essentially becomes:
            
            ```
              <ListItem>
                <Link to="/some-url">
                  Some text
                </Link>
              </ListItem>
              <ListItem>
                <Link to="/another-url">
                  Another text
                </Link>
              </ListItem>
              <ListItem>
                <Link to="/09763728721">
                  me broke send gcash ?
                </Link>
              </ListItem>
            ```

              ...when rendered. */}
      </UnorderList>
    </Nav>
  )
}

// (4)
// Finally, as you can see the file extension should be JSX (`.jsx`).
//
// While it still runs on a regular `.js`, using `.jsx` makes it
// easier for other devs to know it is a React component
// rather than just a regular JS file.
//
// Head over to `login.js` in src/pages next for some introduction
// on state management in React.

export default Navbar
