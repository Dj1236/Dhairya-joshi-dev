import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
  {
    id: 1,
    name: "Blogify an blog website",
    description:
      "Blogify is a comprehensive blogging platform designed to provide a seamless experience for users. With its modern technology stack, robust features, and scalable architecture, it stands as a powerful solution for anyone looking to create and manage a blog. Explore Blogify today and start sharing your stories with the world!",
    tools: [
      "Express",
      "MongoDB",
      "OpenAI API",
      "AWS SES",
      "AWS S3",
      "Node Mailer",
      "Joi",
      "Puppeteer",
      "EC2",
      "PM2",
      "Nginx",
    ],
    role: "Backend Developer",
    code: "",
    demo: "",
    image: crefin,
  },
  {
    id: 2,
    name: "AI Tool Hub ",
    description:
      "AI Tool Hub is an extensive platform designed to catalog and categorize AI tools based on their applications and functionalities. It serves as a centralized repository where users can find, compare, and learn about different AI tools to suit their specific needs. From machine learning frameworks to natural language processing libraries, AI Tool Hub has it all.",
    tools: [
      "NextJS",
      "Tailwind CSS",
      "Google Maps",
      "NestJS",
      "TypeScript",
      "MySQL",
      "AWS S3",
      "Sun-Editor",
      "Gmail Passkey",
    ],
    role: "Full Stack Developer",
    code: "",
    demo: "",
    image: travel,
  },
  {
    id: 3,
    name: "CODESK (an online code editor)",
    description:
      "CODESK is an advanced online code editor that allows users to write, edit, and run code directly from their web browsers. With a focus on real-time collaboration and productivity, CodeSK provides an environment that mimics the functionalities of desktop-based IDEs, but with the added convenience of cloud accessibility.",
    tools: [
      "React",
      "Bootstrap",
      "SCSS",
      "Stripe",
      "Express",
      "TypeScript",
      "MongoDB",
      "Azure Blob",
      "OpenAI API",
      "Replicate AI",
      "Cronjob",
      "JWT",
    ],
    code: "",
    role: "Full Stack Developer",
    demo: "",
    image: realEstate,
  },
  {
    id: 4,
    name: "Chrome extensions",
    description:
      "1 . Summarize Tube : Developed SummarizeTube, a Chrome extension enabling users to generate concise summaries of YouTube videos . 2. Chroma Pick : Engineered Chroma Pick, a Chrome extension empowering users to effortlessly extract colors from any website for design inspiration and analysis. 3. Focusify : Crafted Focusify, a Chrome extension designed to boost productivity by allowing users to block distracting websites, enabling focused study and work sessions. ",
      
    tools: ["NextJS", "Material UI", "Redux", "Sun Editor", "Calendar"],
    code: "",
    demo: "",
    image: ayla,
    role: "Full Stack Developer",
  },
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },