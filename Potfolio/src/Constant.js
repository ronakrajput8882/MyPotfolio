// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import cLogo from "./assets/tech_logo/c.png";
import reduxLogo from "./assets/tech_logo/redux.png";

import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";

import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";

import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";

import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import pythonLogo from "./assets/tech_logo/python.png";

// Education Section Logo's
import CVM from "./assets/education_logo/CVM.png";
import RPTP from "./assets/education_logo/RPTP.jpg";
import MBIT from "./assets/education_logo/MBIT.png";

// Project Section Logo'

import foodweb from "./assets/work_logo/foodweb.png";
import WanderLust from "./assets/work_logo/WanderLust.png";
import WavyMusic from "./assets/work_logo/WavyMusic.png";


export const SkillsInfo = [
  {
    title: "Languages",
    skills: [
      { name: "Python", logo: pythonLogo },
      {
        name: "R",
        logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/R_logo.svg",
      },
      { name: "C", logo: cLogo },
      { name: "JavaScript", logo: javascriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
    ],
  },
];

export const education = [
  {
    id: 0,
    img: MBIT,
    school:
      "Madhuben & Bhanubhai Patel Institute of Technology, CVM University",
    date: " 2022 -  2026",
    degree: " pursuing B.Tech in Computer Engineering",
  },
  {
    id: 1,
    img: RPTP,
    school: "RPTP High Secondary School , Anand(GUJ)",
    date: " 2020 - 2022",
    degree: "GSEB(XII) - PCM with Computer Science",
  },
  {
    id: 2,
    img: CVM,
    school: "M.U. Patel High School, Anand",
    date: "2020",

    degree: "GSEB(X)",
  },
];

export const projects = [
  {
    id: 0,
    title: "Food Delivery Web App",
    description:
      "Built a full-stack food ordering and delivery platform using the MERN stack.Implemented features like restaurant listings, food menus, cart management, order placement, and paymentgateway integration (Stripe). Designed a responsive and user-friendly interface for seamless browsing and checkout. (Tech: MERN, Stripe, JWT, MongoDB)",
    image: foodweb,
    tags: ["HTML", "CSS", "JavaScript", "MERN Stack", "Stripe Payment"],
    github: "https://github.com/ronakrajput8882/FoodDelivery",
    webapps: [
      {
        url: "https://fooddelivery-web-rlu6.onrender.com/",
        label: "User App",
      },
      {
        url: "https://fooddelivery-adminpanel.onrender.com/",
        label: "Admin Panel",
      },
    ],
  },
  {
    id: 1,
    title: "Wanderlust (Airbnb Clone)",
    description:
      " Created a full-stack web application for property listing and booking usingNode.js, Express, MongoDB, and EJS,following the MVC architecture. Implemented CRUD operations for listingsand reviews, user authentication, and flash messaging, delivering a complete Airbnb-like experience. (Tech:Node.js, Express.js, MongoDB, EJS, MVC)",
    image: WanderLust,
    tags: ["Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript", "EJS"],
    github: "https://github.com/ronakrajput8882/wonderLust",
  },
  {
    id: 3,
    title: "Wavy Music Web App",
    description:
      "Developed a full-stack music streaming application with a custom audio player andplaylist management. Used Node.js, Express, and MongoDB for backend and database, ensuring secure userauthentication and efficient song storage. Integrated a clean frontend with HTML, CSS, and JavaScript fordynamic song loading and seamless interactions. (Tech: Node.js, Express.js, MongoDB, HTML, CSS, JavaScript)",
    image: WavyMusic,
    tags: ["React JS", "API", "HTML", "CSS", , "MERN Stack", "JavaScript"],
    github: "https://github.com/ronakrajput8882/MusicWeb",
  },
  
  
 
];
