import colorKeywordsSrc from '../images/color-keywords.png';
import expensesAppSrc from '../images/expenses-app.png';
import pomoSrc from '../images/pomo.png';
import vsCodeSrc from '../images/vs-code.png';

export default [
  {
    category: 'Welcome',
    title: 'Hello world!',
    tech: ['Sean Baines', 'Front end developer'],
    description: [
      `I began my journey as a web developer by teaching myself to code through free online resources. Since then, I have become highly skilled in front end development through a desire to constantly improve and add to my skills.`,
      `I build websites and applications using a modern tech stack, specialising in React.js development.`,
    ],
    imgSrc: vsCodeSrc,
  },
  {
    category: 'Projects',
    title: 'Color keywords',
    tech: ['JavaScript', 'React', 'TypeScript', 'Styled Components'],
    description: [
      `A site that lists all of the available CSS color keywords. It allows you to sort the colors and click to copy the hex, rgb or keyword values.`,
      `This was my first project built using TypeScript and I plan to do more and apply what I learn to this in future iterations.`,
    ],
    imgSrc: colorKeywordsSrc,
    projectLink: 'https://www.colorkeywords.com',
    codeLink: 'https://github.com/mrseanbaines/color-keywords',
  },
  {
    category: 'Projects',
    title: 'Expenses app',
    tech: ['JavaScript', 'React', 'Redux', 'Node/Express', 'Styled Components'],
    description: [
      `A mock app that lists a company's expenses in multiple currencies and allows the user to upload receipts, add comments, set categories and more.`,
      `This has a Node/Express API which the front end communicates with to interact with the data.`,
    ],
    imgSrc: expensesAppSrc,
    projectLink: 'https://mrseanbaines-expenses-app.netlify.com/#/',
    codeLink: 'https://github.com/mrseanbaines/expenses-app-frontend',
  },
  {
    category: 'Projects',
    title: 'Pomo',
    tech: ['JavaScript', 'React', 'Styled Components'],
    description: [
      `A basic pomodoro timer which toggles between session and break times and allows you to change the length of each.`,
    ],
    imgSrc: pomoSrc,
    projectLink: 'https://mrseanbaines-pomo.netlify.com',
    codeLink: 'https://github.com/mrseanbaines/pomo-web',
  },
];
