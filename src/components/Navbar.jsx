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
// Unlike traditional framework-less websites where you would
// have to separate CSS from the rest for a better dev
// experience, in React, or any component-based library,
// it is almost always better to just "scope" the styling
// inside the component to *maximize* re-usable-ness.
// This eliminates CSS's specificity headaches and makes
// the component easier to maintain in the long run.
//
// There are tons of styling frameworks out there, but for
// this short example I used a simple CSS-in-JS tool called
// `styled-components`. If you've worked with CSS modules before,
// this works exactly the same.

const Header = styled.header`
  width: 100%;
  display: flex;
`

const Nav = styled.nav``

const UnorderedList = styled.ul`
  display: flex;
  padding: 0;
`

const ListItem = styled.li`
  display: flex;
  align-items: center;
  list-style: none;
  padding: 1rem 2rem;
`

const BrandName = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
  margin-right: auto;
  margin-left: 0;
`

const Button = styled.button`
  background-color: transparent;
  border: 0;
  font-size: 1.25rem;
`

// Yep, ALL components are *just* functions.
function Navbar() {
  return (
    <Header>
      <BrandName>
        <Button>Example Gatsby Website</Button>
      </BrandName>

      <Nav>
        <UnorderedList>
          {/* 
            (2)
            Notice how we're using JS built-in functions cleanly
            inside this "HTML"?

            This is the beauty of React! We don't have to do
            complicated things imperatively like 
            `document.createElement()`, 
            React does the heavy lifting for us!
            
            This allows us to be declarative all the way!!
          */}
          {links.map(({ text, url }) => (
            <ListItem
              key={text} // Always include `key` prop when mapping components!
            >
              <Link
                to={url}
                // Inline HTML styles are okay, but it uses objects instead
                style={{ textDecoration: "none", textTransform: "capitalize" }}
              >
                {text}
              </Link>
            </ListItem>
          ))}
          {/* (3)
            p.s. If you don't know what `map` is, it's just an array
            function that takes another function that modifies the 
            array, then returns the modified array. The fn above 
            just essentially becomes:
            
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
        </UnorderedList>
      </Nav>
    </Header>
  )
}

// (4)
// Finally, as you can see the file extension should be `.jsx`.
//
// While it is still okay to use a regular `.js`, using `.jsx` makes
// it easier for other devs to know it is a React component rather
// than just a regular JS file. A must-have for HUGE codebases.
//
// Head over to `login.js` in src/pages next for some introduction
// on state management in React.

export default Navbar
