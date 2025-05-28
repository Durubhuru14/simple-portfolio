import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact } from "react-icons/fa";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-rose-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-rose-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-rose-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "https://i.postimg.cc/4d22DLyR/Screen-Shot-2025-05-27-at-21-12-53.png",
    url: "https://mixmaster-durubhuru.netlify.app/",
    github: "https://github.com/Durubhuru14/mixmaster",
    title: "MixMaster",
    text: "A delightful cocktail discovery app built with React, React Router, Vite, and TheCocktailDB API. Find your perfect drink recipe and shake up your next party and make the whole party lit!",
  },
  {
    id: nanoid(),
    img: "https://i.postimg.cc/Fsq5dxyK/image.png",
    url: "https://bingo-multiplayer.onrender.com/",
    github: "https://github.com/Durubhuru14/bingo-multiplayer",
    title: "Bingo Multiplayer",
    text: "A fun and interactive real-time Bingo game built with JavaScript, Node.js, and Socket.io. Play with friends online, mark numbers live, and race to shout Bingo before anyone else!",
  },
  {
    id: nanoid(),
    img: "https://i.postimg.cc/jSpGSdz3/image.png",
    url: "https://react-project-cms.netlify.app/",
    github: "https://github.com/Durubhuru14/react-projects-cms",
    title: "React Project Compilation",
    text: "A minimal React-based project gallery that displays all my React practice projects with a project image, GitHub source code link, and live demo link — all in one clean interface.",
  },
];
