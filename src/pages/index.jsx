import React, { useEffect } from "react"
import AppShell from "../components/AppShell"

// (1)
// In React (or any React-based framework, we treat HTML tags
// "as-is" so if you already know HTML, learning React
// should be an easy enough transfer.
//
// For example, the `<div>` below is just like what you'd
// expect in plain HTML, it's just a `<div>` element.

function Home() {
  useEffect(() => {
    // (2)
    // Because `<div>` is just a regular HTML tag, if you know
    // basic JS, you can still access it via the `document`!
    const helloWorldDiv = document.getElementById("helloWorld")

    let __timeout
    ;["!", "?", "@", "$", "&", "!!!!!!!!!!!!!!"].forEach((char, i) => {
      __timeout = setTimeout(() => {
        // Adds some characters every second
        helloWorldDiv.children.item(0).innerHTML += char
      }, 1000 * i)
    })

    // Cleanup
    return () => clearTimeout(__timeout)
  }, [])

  return (
    // (3)
    // If you've noticed, `<AppShell>` is not an HTML tag!
    //
    // If you ctrl+click `<AppShell>`, it should take you
    // to where `<AppShell>` was defined. Or you may open the
    // `AppShell.jsx` manually in src/components if your
    // IDE doesn't support "Go to definition."
    <AppShell>
      <div id="helloWorld">
        <h1>Hello World</h1>
        <h3>Welcome to Gatsby</h3>
      </div>

      <p>
        Labore consectetur et non qui magna aliquip dolore proident proident
        veniam. Nulla laboris consectetur proident sit quis. Irure eiusmod non
        veniam officia mollit adipisicing ad ullamco anim Lorem nulla. Minim
        tempor excepteur officia cillum tempor reprehenderit qui. Ipsum labore
        pariatur aliquip nostrud ullamco do dolor consequat incididunt ullamco
        qui ullamco incididunt.
      </p>
    </AppShell>
  )
}

export default Home
