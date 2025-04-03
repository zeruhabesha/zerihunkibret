import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Zerihun Kibret - Full-Stack Developer with expertise in MERN stack, PHP, MySQL, and UI/UX design"
          />
          <meta
            name="keywords"
            content="full-stack developer, web developer, MERN stack, UI/UX design, React, Node.js, MongoDB"
          />
          <meta name="author" content="Zerihun Kibret" />
          <meta property="og:title" content="Zerihun Kibret | Full-Stack Developer" />
          <meta
            property="og:description"
            content="Full-Stack Developer with expertise in MERN stack, PHP, MySQL, and UI/UX design"
          />
          <meta property="og:type" content="website" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

