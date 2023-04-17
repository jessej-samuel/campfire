import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;500&family=Roboto:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="scroll-smooth bg-neutral-100 dark:bg-black text-black dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
