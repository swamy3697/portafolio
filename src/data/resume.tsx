import { Icons } from "@/components/icons";
import { Github, Store, ExternalLink, HomeIcon, NotebookIcon } from "lucide-react";
import Icon from "@/components/ui/Icon";
export const DATA = {
  name: "Swamy Penupotula",
  initials: "ASV",
  url: "https://dillion.io",
  location: "AndhraPradesh, India",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "A passionate full-stack developer skilled in React and java   with a strong foundation in backend technologies like Spring Boot.",
  summary:"Motivated Computer Science student with a strong foundation in software development, seeking a Software Engineer position to apply coding skills and contribute to innovative projects. I Demonstrated abilities in scalable software development, simulation, problem-solving, system design, and critical thinking.",
    
  avatarUrl: "/profile.jpeg",
  skills: [
    "Java",
    "Spring Boot",
    "Python",
    "React",
    "Javascript",
    "Git",
    "FireBase",
    "MongoDB",
    "SQL",
    "Postgresql",
    "Figma",
    "Google Cloud",

    ,
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "swamyp2002@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/swamy3697",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/swamy3697",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/umar_alish",
        icon: Icons.x,

        navbar: false,
      },
      
      email: {
        name: "Send Email",
        url: "mailto:swamyp2002@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  education: [
    {
      school: "Pragati Engineering College",
      href: "https://pragati.ac.in/",
      degree: "Bachelor's of Technology (CSE)",
      logoUrl: "/pragati.png",
      start: "2022",
      end: "2025",
    },
    {
      school: "GIET Polytechnic College",
      href: "https://giet.ac.in/",
      degree: "Diploma in Computer Engineering (CME)",
      logoUrl: "/giet.png",
      start: "2019",
      end: "2022",
    },
    
  ],
  projects: [
    {
      title: "Shop mate",
      href: "https://play.google.com/store/apps/details?id=com.swamy3697.ShopMate",
      dates: "Dec 2024 - Jan 2024",
      active: true,
      description:
      "Developed a powerful, intuitive, and user-friendly shopping list app designed to simplify and streamline your shopping experience. Whether you're grocery shopping, planning a party, or managing household supplies, ShopMate makes list creation, organization, and sharing effortless. With smart features and seamless collaboration, stay organized, save time, and shop smarter with ease!",
      technologies: [
        "React Native",
        "Figma",
        "Realm"
      ],
      links: [
        
        {
          type: "Source Code",
          href: "https://github.com/swamy3697/shoping-To-do-android-expo-",
          icon: <Github className="size-3" />,
        },

        {
          type: "Play Store",
          href: "https://play.google.com/store/apps/details?id=com.swamy3697.ShopMate",
          icon: <Icon src="/playstore.png" alt="Google Play" className="size-3" />,
        },
      ],
      image: "/icon.png",
      video:
        "",
    },
    {
      title: "Copy Mate",
      href: "https://marketplace.visualstudio.com/items?itemName=SwamyPenupothula.copy-mate",
      dates: "Dec 2024 - Dec 2024",
      active: true,
      description:
      "Developed a powerful and feature-rich Visual Studio Code extension designed to streamline code sharing, enhance debugging efficiency, and improve team collaboration. This extension allows developers to seamlessly copy file content, paths, and entire project structures in a chat-friendly format, making it easier to share code snippets, discuss issues, and resolve bugs efficiently.",
      technologies: [
        "JavaScript",
        "Html",
        "css",
        "Figma",
        "vsCode Extesion API" 
      ],
      links: [
        {
          type: "source",
          href: "https://github.com/swamy3697/copy-mate",
          icon: <Github className="size-3" />,
        },
        {
          type: "VS Code Marketplace",
          href: "https://marketplace.visualstudio.com/items?itemName=SwamyPenupothula.copy-mate",
          icon: <Icon src="/vscode.png" alt="Visual Studio Code" className="size-3" />,
        }
      ],
      image: "/copy-mate-icon.png",
      video:
        "",
    },
  ],
  hackathons: [
    {
      title: "Building Scalable Java Microservices with Spring Boot and Spring Cloud - Google Cloud",
      dates: "Feb 2025",
      location: "",
      description:
        "This certification validates my expertise in creating and deploying scalable Java microservices using Spring Boot and Spring Cloud on the Google Cloud Platform. It covers service discovery, load balancing, and fault tolerance to ensure high availability and performance.",
      image: "/Google-Cloud.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          icon: <ExternalLink className="size-3" />,
          title: "Certificate",
          href: "https://www.coursera.org/account/accomplishments/verify/E96IKGWEY525"
        }
      ],
    },
  
    {
      title: "Spring Framework 6 and Spring Boot 3 - Telusko",
      dates: "Feb 2025",
      location: "",
      description:
        "This certification showcases my expertise in developing enterprise applications using the Spring Framework and Spring Boot. It covers dependency injection, aspect-oriented programming, and data access to ensure efficient and maintainable code.",
      image: "/Spring.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  
    {
      title: "Servicenow Certified System Administrator",
      dates: "August 08, 2024",
      location: "",
      description:
        "This certification validates my expertise in configuring, managing, and maintaining the ServiceNow platform. It covers user management, workflows, data schema, and automation to ensure efficient IT service management.",
      image: "/snsa.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Servicenow Certified Application Developer",
      dates: "July 22, 2024",
      location: "",
      description:
        "With this certification, I have demonstrated my ability to build, extend, and customize applications on the ServiceNow platform. It includes scripting, UI development, security configurations, and integrating third-party services.",
      image: "/snad.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "SalesForce AI Associate",
      dates: "November 03, 2024",
      location: "",
      description:
        "This certification showcases my understanding of AI concepts within the Salesforce ecosystem, including AI-driven automation, data insights, and ethical considerations for implementing AI in customer relationship management (CRM).",
      image: "/sfai.png",
      links: [],
    },
  ]
} as const;