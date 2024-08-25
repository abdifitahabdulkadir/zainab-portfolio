export interface ProjectInformationType {
  id: number;
  title: string;
  des: string;
  image: string;
  icon: string;
}

export enum ProjectNames {
  python = "Python",
  machinelearning = "Machine Learning",
  javascript = "JavaScript",
}

export type ProjectType = {
  [key in ProjectNames]: ProjectInformationType[];
};

export interface skillsType {
  id: number;
  title: string;
  des: string;
  thumb: string;
}

export interface ExperienceEducationType {
  id: number;
  title: string;
  des: string;
  date: string;
}

export interface EmailSenderType {
  name: string;
  email: string;
  message: string;
}

export interface ContactFormType {
  name: string;
  message: string;
  email: string;
}
