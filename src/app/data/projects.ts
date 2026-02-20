import { Engine, Status } from "@/Enums/Status";

export type ProjectCardType = {
  slug: string;
  title: string;
  description: string;
  img: string;
  imgAlt: string;
  teamSize: number;
  status: Status;
  linkTo?: string;
  engine: Engine
};

export type Project = ProjectCardType & {
  role: String;
  durationWeeks: number | string;
  preamble: string;
  responsibilityText: string;
  category: "games" | "web" | "electronics" | "gamejams";
  videoContent?: VideoContentType[];
};

export type VideoContentType = {
  title: string;
  description: string;
  videoSrc: string;

}

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
    category: "games",
    engine: Engine.Unity,
    videoContent: [{
      title: "Combat System Breakdown",
      description: "A trailer showcasing the combat system of Somnium.",
      videoSrc: "https://www.youtube.com/embed/OHQ_v9TGJDY"
    },
    {
      title: "Accessibility System Breakdown",
      description: "A trailer showcasing the accessibility features implemented in Somnium, including colorblind modes and control remapping.",
      videoSrc: "https://www.youtube.com/embed/OHQ_v9TGJDY"
    },
    ]
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
    category: "games",
    engine: Engine.Unreal,
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
    category: "web",
    engine: Engine.Unity,

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
    category: "electronics",
    engine: Engine.Unity,

  },

];
