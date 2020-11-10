import {
  Swift,
  Figma,
  Sketch,
  // Postgresql,
  Gatsby,
  NextDotJs,
  ReactJs,
  Html5,
  Css3,
  Sass,
  Angular,
  Graphql,
  Javascript,
  Typescript,
  Gulp,
  Grunt,
  Webpack,
  Adobeillustrator,
  Adobephotoshop,
} from '@icons-pack/react-simple-icons';

const ICON_SIZE = 40;
const ICON_COLOUR = '#182C61';

export const skills = {
  tech: [
    {
      name: 'HTML',
      component: <Html5 title={'HTML'} size={ICON_SIZE} color={ICON_COLOUR} />,
    },
    {
      name: 'CSS',
      component: <Css3 title={'CSS'} size={ICON_SIZE} color={ICON_COLOUR} />,
    },
    {
      name: 'JavaScript',
      component: <Javascript title={'JavaScript'} size={ICON_SIZE} color={ICON_COLOUR} />,
    },
    {
      name: 'TypeScript',
      component: <Typescript title={'TypeScript'} size={ICON_SIZE} color={ICON_COLOUR} />,
    },
    {
      name: 'SCSS',
      component: <Sass title={'SCSS'} size={ICON_SIZE} color={ICON_COLOUR} />,
    },
    {
      name: 'React & React Native',
      component: <ReactJs title={'React & React Native'} size={ICON_SIZE} color={ICON_COLOUR} />,
    },
    {
      name: 'Gatsby',
      component: <Gatsby title={'Gatsby'} size={ICON_SIZE} color={ICON_COLOUR} />,
    },
    {
      name: 'Next.js',
      component: <NextDotJs title={'Next.js'} size={ICON_SIZE} color={ICON_COLOUR} />,
    },
    {
      name: 'Angular',
      component: <Angular title={'Angular'} size={ICON_SIZE} color={ICON_COLOUR} />,
    },
    {
      name: 'GraphQL',
      component: <Graphql title={'GraphQL'} size={ICON_SIZE} color={ICON_COLOUR} />,
    },
    {
      name: 'Gulp',
      component: <Gulp title={'Gulp'} size={ICON_SIZE} color={ICON_COLOUR} />,
    },
    {
      name: 'Grunt',
      component: <Grunt title={'Grunt'} size={ICON_SIZE} color={ICON_COLOUR} />,
    },
    {
      name: 'Webpack',
      component: <Webpack title={'Webpack'} size={ICON_SIZE} color={ICON_COLOUR} />,
    },
    // {
    //   name: 'PostgreSQL',
    //   component: <Postgresql title={'PostgreSQL'} size={ICON_SIZE} color={ICON_COLOUR} />,
    // },
    {
      name: 'Swift',
      component: <Swift title={'Swift'} size={ICON_SIZE} color={ICON_COLOUR} />,
    },
  ],
  design: [
    {
      name: 'Figma',
      component: <Figma title={'Figma'} size={ICON_SIZE} color={ICON_COLOUR} />,
    },
    {
      name: 'Sketch',
      component: <Sketch title={'Sketch'} size={ICON_SIZE} color={ICON_COLOUR} />,
    },
    {
      name: 'Photoshop',
      component: <Adobephotoshop title={'Photoshop'} size={ICON_SIZE} color={ICON_COLOUR} />,
    },
    {
      name: 'Illustrator',
      component: <Adobeillustrator title={'Illustrator'} size={ICON_SIZE} color={ICON_COLOUR} />,
    },
  ],
};
