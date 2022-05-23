import "../styles/main.css" // Import CSS here instead of in HTML
import React from "react"
import Navbar from "./Navbar"

// (1)
// This is `<AppShell>`. Noticed something?
//
// It's a function baka mo!? How could an "HTML" element in
// `pages/index.js` be a function?
//
// Well, the true answer is a little bit more complicated,
// but in simpler terms all "HTML" tags undergo "transformations"
// under the hood. This isn't an HTML file, after all, it's JS.
//
// This is how React makes it simple to make "re-usable" components.
// You can then put `<AppShell>` anywhere you'd like. But in this
// case, it's being used as a "wrapper" for all components in order
// to inject the imported CSS file above for use in all pages.
//
// Reusable components ensure consistency across multiple pages,
// minimizes maintenance costs (both time and space), and makes
// debugging easier since the code of one UI fragment is in one
// place. This is what differentiates it from traditional,
// framework-less web development.

function AppShell({ children }) {
  // (2)
  // However! You *return* HTML-like syntax, appropriately called
  // JavaScript XML (JSX), to make it a React functional component.
  //
  // Note: I say "functional" since React has two kinds of basic
  // components, one being the latter and the other being class-
  // based components. These use ES6 Classes similar to what you
  // might see in Java.
  //
  // If you don't return JSX, it would then just be a good ol'
  // regular JS function.
  //
  // If you replace the below with something like
  // `return true`, nothing will show/render.
  return (
    // HTML classes work, but `className` should be used,
    // since `class` is a reserved keyword in JS. If you've
    // used JS before, you'll notice that this is actually
    // the way to access and modify HTML classes.
    //
    // @see https://developer.mozilla.org/en-US/docs/Web/API/Element/className
    <main className="shell">
      <Navbar />

      {/*
        (3)
        `children` means anything we put inside the opening
        and closing tags will also be rendered.
          
        For example: `<AppShell><h1>Hello</h1></AppShell>`
        if you don't put (or in other words render) a 
        `children` inside `<AppShell>`, the `<h1>` will never
        render in the browser.

        This is another great example of the power of React,
        the ability to *compose* components out of other components
        and design them in a more maintainable, scalable way.

        P.S. `children` is always provided to components by React. 
      */}
      <div className="content">{children}</div>
    </main>
  )
}

// (4)
// Notice that we always name React custom components with
// PascalCase as per convention. Otherwise, React will not
// be able to differentiate between regular HTML elements
// and components.
//
// @see https://stackoverflow.com/a/56196707
//
// Please head over to `Navbar.jsx` in src/components next.

export default AppShell
