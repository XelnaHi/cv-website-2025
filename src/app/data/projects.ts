import { Status } from "@/Enums/Status";

export type ProjectCardType = {
  slug: string;
  title: string;
  description: string;
  img: string;
  imgAlt: string;
  teamSize: number;
  status: Status;
  linkTo?: string;
};

export type Project = ProjectCardType & {
  role: String;
  durationWeeks: number | string;
  preamble: string;
  responsibilityText: string;
  category: "games" | "web" | "electronics" | "gamejams";
};

export const projects: Project[] = [
  {
    preamble:
      "Somnium is a 3D First-Person dungeon crawler, and marks my entry into the game dev indsutry.",
    responsibilityText: "During the project I worked on everything between",
    role: "Gameplay Programmer",
    slug: "somnium",
    title: "Somnium",
    description: "Short detailed description here...",
    img: "/assets/GP1Thumbnail.png",
    imgAlt: "default img alt text",
    teamSize: 5,
    status: Status.Finished,
    durationWeeks: 4,
    category: "games"
  },
  {
    responsibilityText: "",
    preamble: "",
    role: "Gameplay Programmer",
    slug: "slug-lorem2",
    title: "Slug Title2",
    description: "Another long description...",
    img: "/assets/GP1Thumbnail.png",
    imgAlt: "default alt image text",
    teamSize: 5,
    status: Status.Finished,
    durationWeeks: "N/A",
    category: "gamejams"

  },
  {
    responsibilityText: "",
    preamble: "",
    role: "Gameplay Programmer",
    slug: "once-upon-a-time",
    title: "Once Upon A Time",
    description: "Another long description...",
    img: "/assets/GP1Thumbnail.png",
    imgAlt: "default img alt text",
    teamSize: 5,
    status: Status.Finished,
    durationWeeks: "N/A",
    category: "web"

  },
  {
    responsibilityText: "",
    preamble: "",
    role: "Gameplay Programmer",
    slug: "slug-lorem",
    title: "Slug Title",
    description: "Another long description...",
    img: "/assets/GP1Thumbnail.png",
    imgAlt: "default alt image text",
    teamSize: 5,
    status: Status.Finished,
    durationWeeks: "N/A",
    category: "electronics"

  },

];
