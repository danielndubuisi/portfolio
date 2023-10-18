//icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma
} from 'react-icons/fa'

//si icons
import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop
} from 'react-icons/si'

//  data
export const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Webby Awards - Honoree',
        stage: '2011 - 2012',
      },
      {
        title: 'Adobe Design Achievement Awards - Finalist',
        stage: '2009 - 2010',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Junior software engineer - DrugStoc',
        stage: '2022 - Present ',
      },
      {
        title: 'Data Analyst',
        stage: '2021 - 2022',
      },
      {
        title: 'Intern - NUEL Pharma',
        stage: '2019 - 2020',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'MERN stack Development - GoMyCode, LA, NG',
        stage: '2022',
      },
      {
        title: 'Pharmacology & Therapeutics Degree - University of Lagos, NG',
        stage: '2019',
      },
      {
        title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
        stage: '2006',
      },
    ],
  },
];

const About = () => {
  return <div>About</div>;
};

export default About;
