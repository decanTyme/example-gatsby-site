# Example Gatsby Site

![node-current](https://img.shields.io/node/v/gatsby)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/decanTyme/example-gatsby-site/react)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/decanTyme/example-gatsby-site/gatsby)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/decanTyme/example-gatsby-site/styled-components)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/decanTyme/example-gatsby-site/react-helmet)

## Preparation

### Prerequisites

- Make sure [Git SCM](https://git-scm.com/) is installed.

- Uses [Node.js](https://nodejs.org/en/). **Be sure it is installed before cloning**.

- Make sure you have at least a basic understanding of the following: [HTML](https://www.w3schools.com/html/html_intro.asp) (tags, attributes, syntax), [CSS](https://www.w3schools.com/css/css_intro.asp) (basic selectors, syntax), and some basic [JavaScript](https://www.w3schools.com/js/) concepts like variables, objects, and functions. [DOM](https://www.w3schools.com/js/js_htmldom.asp) and [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) understanding is a plus.

- A good IDE like [VSCode](https://code.visualstudio.com/), [Sublime Text](https://www.sublimetext.com/), or [Atom](https://atom.io/), and some know-how in running commands though a command line interface or shell.

### Cloning

Use the following command to clone:

```bash
$ git clone https://github.com/decanTyme/example-gatsby-site.git
# Cloning into 'example-gatsby-site'...
# remote: Enumerating objects: 23, done.
# remote: Counting objects: 100% (23/23), done.
# remote: Compressing objects: 100% (19/19), done.
# remote: Total 23 (delta 0), reused 23 (delta 0), pack-reused 0
# Receiving objects: 100% (23/23), 391.26 KiB | 552.00 KiB/s, done.
```

### Dependencies Installation

Navigate to the folder and open a command prompt (or preferably use Git Bash.) Run the following and wait for it to finish:

```bash
$ npm install
# ...
# added 1938 packages, and audited 1939 packages in 5m
# ...
```

Depending on your hardware and internet speed, it may take a while. You may safely ignore deprecated and vulnerability warnings.

## Running the Web App

If the prerequisites were done correctly, running the command below should start the app:

```bash
$ npm start
# > example-gatsby-site@1.0.0 start
# > gatsby develop
# ...
```

Wait for the processes to finish. Depending on your hardware and internet speed, it may take a while. It will look similar to the following if finished:

```bash
# ...
# You can now view example-gatsby-site in the browser.
#
# http://localhost:8000/
# ...
```

## Footnotes

Start by looking at the `index.js` file inside `src/pages`. There will be some comments put around the source files that explains/introduces some stuff, make sure to read those!

## References

npm: <https://www.npmjs.com/>

React.js: <https://reactjs.org/docs/getting-started.html>

GatsbyJS: <https://www.gatsbyjs.com/docs/>

Is Gatsby Really That Great?: <https://blog.logrocket.com/is-gatsby-really-that-great-e7b19c4c1c05/>
