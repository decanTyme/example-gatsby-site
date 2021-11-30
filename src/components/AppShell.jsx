import "../styles/main.css" // Import CSS here instead of in HTML
import React from "react"
import Navbar from "./Navbar"

// (1)
// This is `<AppShell>`. Noticed something?
//
// It's a function baka mo!? How could an "HTML" tag in `index.js`
// be a function?
//
// Well, the true answer is a little bit more complicated,
// but in simpler terms all "HTML" tags undergo "transformations"
// under the hood. This isn't an HTML file, after all, it's JS.
//
// This is how React makes it simple to make "re-usable" components.
// You can then put `<AppShell>` anywhere you'd like.
//
// Reusable components ensure consistency across multiple pages,
// minimizes maintainance costs (both time and space), and makes
// debugging easier since the code of one UI fragment is in one
// place. This is what differentiates it from traditional,
// framework-less web development.

function AppShell({ children }) {
  // (2)
  // However! You *return* HTML-like syntax to make it a
  // React functional component.
  //
  // If you don't return "HTML", it would then just be a
  // regular JS function.
  //
  // If you replace the below with somethink like
  // `return true`, nothing will show/render.
  return (
    // HTML classes work, but `className` should be used
    <main className="shell">
      <Navbar />

      {/* 
        (3)
        `children` means anything we put inside
        will also be rendered.
          
        For example: `<AppShell><h1>Hello</h1></AppShell>`
        if you don't put (or in other words render) a 
        `children` inside `<AppShell>`, the `<h1>` will never
        render in the browser.

        `children` is always provided to components by React. 
      */}
      <div className="content">{children}</div>
    </main>
  )
}

// (4)
// Note, however that we name React functional components
// with PascalCase.
//
// Please head over to `Navbar.jsx` in src/components next.

export default AppShell
