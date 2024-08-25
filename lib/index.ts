import {
  ExperienceEducationType,
  ProjectNames,
  ProjectType,
} from "@/types/types";

export const personalProjects: ProjectType = {
  [ProjectNames.python]: [
    {
      id: 1,
      title: "Content Analyzer",
      des: "A robust tool designed for content creators, bloggers, and writers",
      image: "/analyzer-image.svg",
      icon: "/project-image-1.svg",
    },
    {
      id: 2,
      title: "Content Analyzer",
      des: "A robust tool designed for content creators, bloggers, and writers",
      image: "/analyzer-image.svg",
      icon: "/project-image-1.svg",
    },

    {
      id: 3,
      title: "Content Analyzer",
      des: "A robust tool designed for content creators, bloggers, and writers",
      image: "/analyzer-image.svg",
      icon: "/project-image-1.svg",
    },
  ],

  // mcahine learning.
  [ProjectNames.machinelearning]: [
    {
      id: 10,
      title: "Content Analyzer",
      des: "A robust tool designed for content creators, bloggers, and writers",
      image: "/analyzer-image.svg",
      icon: "/project-image-1.svg",
    },
    {
      id: 11,
      title: "Content Analyzer",
      des: "A robust tool designed for content creators, bloggers, and writers",
      image: "/analyzer-image.svg",
      icon: "/project-image-1.svg",
    },
    {
      id: 12,
      title: "Content Analyzer",
      des: "A robust tool designed for content creators, bloggers, and writers",
      image: "/analyzer-image.svg",
      icon: "/project-image-1.svg",
    },
  ],

  // javascript,
  [ProjectNames.javascript]: [
    {
      id: 1,
      title: "Task Manager",
      des: "A web application to manage tasks efficiently with real-time updates using JavaScript and WebSockets.",
      image: "/analyzer-image.svg",
      icon: "/project-image-1.svg",
    },
    {
      id: 2,
      title: "E-commerce Platform",
      des: "An online store built with vanilla JavaScript and integrated with a payment gateway.",
      image: "/analyzer-image.svg",
      icon: "/project-image-1.svg",
    },
    {
      id: 3,
      title: "Weather App",
      des: "A weather forecasting app using JavaScript and a third-party API for real-time weather updates.",
      image: "/analyzer-image.svg",
      icon: "/project-image-1.svg",
    },
  ],
};

export const experiences: ExperienceEducationType[] = [
  {
    id: 1,
    title: "Championing Climate Action: A Somali Youth Advocate",
    des: "Dedicated volunteer with Somali Youth for Climate Action, advocating for sustainability and climate awareness. Engaged in community outreach, events, and campaigns for environmental protection.",
    date: "2020 and 2023",
  },
  {
    id: 2,
    title: "Environmental Advocate and Community Volunteer",
    des: "Volunteered with a local environmental organization, focusing on community outreach and education. Participated in clean-up drives and sustainable living workshops to protect the planet.",
    date: "2022 and 2024",
  },
  {
    id: 3,
    title: "Summit Organizer and Environmental Advocate",
    des: "s a team member for the Mogadishu Environmental Summit, I handled agenda development, logistics, and stakeholder coordination. I actively participated in discussions and presentations.",
    date: "2022 and 2023",
  },
];

export const educations: ExperienceEducationType[] = [
  {
    id: 1,
    title: "Elementary, Intermediate and Secondary level",
    des: "A proud graduate of Omar Binu Abdiaziiz Primary and Secondary School (Guriceel), having completed their education during a decade of significant global change. Equipped with a strong academic foundation and the adaptability gained from a dynamic learning environment.",
    date: "2009 to 2019",
  },
  {
    id: 2,
    title: "Bachelor degree in Environmental science",
    des: "Holding a Bachelor’s degree in Environmental Science from Somali National University (SNU), with a deep understanding of the critical environmental challenges facing our world. Skilled in applying scientific principles to promote sustainability and environmental stewardship. Committed to making a positive impact through informed decision-making and innovative solutions.",
    date: "2022 to 2024",
  },
];
