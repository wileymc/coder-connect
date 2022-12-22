import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="og:title" content="Coder Connect" />
        <meta property="og:url" content="coderconnect.live" />
        <meta
          property="og:image"
          content="https://coderconnect.live/preview.png"
        />
        <meta name="twitter:title" content="Coder Connect" />
        <meta
          name="twitter:description"
          content="Gain valuable programming experience by contributing to open source projects"
        />
        <meta
          name="twitter:image"
          content="https://coderconnect.live/preview.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
