import {
  Gatsby,
  Netlify,
  StyledComponents,
  ReactJs,
  Sass,
  Javascript,
  Gulp,
  Umbraco,
  Css3,
  Graphql,
  Vercel,
  Typescript,
  Shopify,
} from '@icons-pack/react-simple-icons';

const ICON_SIZE = 28;

/* eslint-disable react/jsx-key */
export const portfolio = [
  {
    title: 'Lottie',
    url: 'https://dressedinlottie.shop/',
    description: 'eCommerce site for the Mrs.',
    tech: [
      <ReactJs size={ICON_SIZE} />,
      <Typescript size={ICON_SIZE} />,
      <StyledComponents size={ICON_SIZE} />,
      <Shopify size={ICON_SIZE} />,
      <Vercel size={ICON_SIZE} />,
    ],
  },
  {
    title: 'Rock Paper Scissors',
    url: 'https://rock-paper-scissors.elliotwaddington.vercel.app/',
    description: 'Simple game of Rock Paper Scissors.',
    tech: [
      <ReactJs size={ICON_SIZE} />,
      <Typescript size={ICON_SIZE} />,
      <StyledComponents size={ICON_SIZE} />,
      <Vercel size={ICON_SIZE} />,
    ],
  },
  {
    title: 'Festival Homes',
    url: 'https://ew-festivalhomes.netlify.app/',
    description: 'Mock festival brochure site. Data fetched from Contentful CMS backend.',
    tech: [
      <Gatsby size={ICON_SIZE} />,
      <Graphql size={ICON_SIZE} />,
      <StyledComponents size={ICON_SIZE} />,
      <Netlify size={ICON_SIZE} />,
    ],
  },
  {
    title: 'Electrical Safety First',
    url: 'https://www.electricalsafetyfirst.org.uk/',
    description: 'Full site rebuild for leading electrical safety charity.',
    tech: [
      <Umbraco size={ICON_SIZE} />,
      <Sass size={ICON_SIZE} />,
      <Javascript size={ICON_SIZE} />,
      <Gulp size={ICON_SIZE} />,
    ],
  },
  {
    title: 'Where In The World?',
    url: 'https://ew-whereintheworld.netlify.app/',
    description: 'App displaying country information from the restcountries.eu API.',
    tech: [<ReactJs size={ICON_SIZE} />, <StyledComponents size={ICON_SIZE} />, <Netlify size={ICON_SIZE} />],
  },
  {
    title: 'Github Popular Repos',
    url: 'https://ew-github-popular-repos.netlify.app/',
    description: 'Simple app using the Github API to display the most popular repos.',
    tech: [<ReactJs size={ICON_SIZE} />, <Css3 size={ICON_SIZE} />, <Netlify size={ICON_SIZE} />],
  },
];
