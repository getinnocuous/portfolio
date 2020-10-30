import Head from 'next/head';

const og = {
  title: 'Elliot Waddington | Front End Developer | Manchester',
  description: 'Manchester based front-ender who’s passionate about writing clean, reusable and readable code.',
  url: 'https://elliotwaddington.com/',
  image: `https://elliotwaddington.com/og-image.jpg`,
};

const { title, description, image, url } = og;

export const DocumentHead = () => (
  <Head>
    <meta name="viewport" content="width=device-width" />
    <meta name="description" content={description} />
    <title>{title}</title>
    <link
      href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto:wght@300;400&display=swap"
      rel="stylesheet"
    />

    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="og:url" content={url} />

    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
    <meta name="twitter:card" content="summary_large_image" />

    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="theme-color" content="#ffffff" />
  </Head>
);
