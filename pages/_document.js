import Document, { Main, Head, Html, NextScript } from "next/document";

export class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>

        <style global jsx>{`
          body {
            font-family: "Roboto", sans-serif;
            padding: 0;
            margin: 0;
            font-size: 14px;
            background-color: #fff;
          }
        `}</style>
      </Html>
    );
  }
}

export default MyDocument;
