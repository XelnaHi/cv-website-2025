import { Engine, Status } from "@/Enums/Status";
import { CloudArrowUpIcon, LockClosedIcon } from "@heroicons/react/20/solid";
import { ServerIcon } from "lucide-react";
import { PiSwordBold } from "react-icons/pi";
import { VscSymbolInterface } from "react-icons/vsc";
import { MdTouchApp } from "react-icons/md";
import { MdOutlineHearing } from "react-icons/md";

export type ProjectCardType = {
  slug: string;
  title: string;
  description: string;
  img: string;
  imgAlt: string;
  teamSize: number;
  status: Status;
  linkTo?: string;
  engine?: Engine
};

export type Project = ProjectCardType & {
  role: String;
  durationWeeks: number | string;
  preamble: string;
  responsibilityText: string;
  category: "games" | "web" | "electronics" | "gamejams";
  videoContent?: VideoContentType[];
  fullImage: string;
  itchLink?: string;
  githubLink?: string;
  responsibilityContent: ProjectResponsibilityContent[];
  contentTitle: string;
    customListContent?: {
    description: string;
  }[]
};

export type VideoContentType = {
  title: string;
  description: string;
  videoSrc: string;

}

export type ProjectResponsibilityContent = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
};

export const projects: Project[] = [
  {
    preamble:
      "‘Somnium’ is a retro inspired first person dungeon crawler. All game systems and features, including combat, lootboxes, navigation and UI have been built with accessibility in mind.",
    responsibilityText: "During the project I worked on everything between",
    role: "Gameplay Programmer",
    slug: "somnium",
    title: "Somnium",
    description: "Dungeon Crawler with a focus on accessibility",
    img: "/assets/GP1_team3_poster.png",
    imgAlt: "default img alt text",
    teamSize: 11,
    status: Status.Finished,
    durationWeeks: 3,
    category: "games",
    engine: Engine.Unity,
    fullImage: "/assets/GP1_team3_poster.png",
    itchLink: "https://futuregames.itch.io/somnium",
    contentTitle: "Main Responsibilities",
    responsibilityContent: [
      {
        icon: PiSwordBold,
        title: "Enemies & AI.",
        description: "I worked on implementing prefabs fordrag-and-drop enemy spawn points, aggro systems, attacks, navigation using Unity's NavMesh, dynamic spawn timers, and more."
      },
      {
        icon: VscSymbolInterface,
        title: "User Interface.",
        description: "Added UI for interactable world objects, HUD for controller tutorial, player health and upgrades."
      },
      {
        icon: MdTouchApp,
        title: "Interactables.",
        description: "Anything considered static which the player might interact with - potions, upgrades, lootboxes and weapons. The interaction system is featured during one of the game's more intense beats, and is used to change the layout of the world based on a quest obejct pickup event."
      },
      {
        icon: MdOutlineHearing,
        title: "Accessibility.",
        description: "Prototyped a breadcrumb trail system inspired by God of War Ragnarök. Ultimately we decided on a different set of features designed to guide the player towards victory, and the prototype was scratched."
      },
    ],
    videoContent: [{
      title: "Combat System Breakdown",
      description: "A trailer showcasing the combat system of Somnium.",
      videoSrc: "https://www.youtube.com/embed/Aq5WXmQQooo"
    },
    {
      title: "Accessibility System Breakdown",
      description: "A trailer showcasing the accessibility features implemented in Somnium, including colorblind modes and control remapping.",
      videoSrc: "https://www.youtube.com/embed/Aq5WXmQQooo?si=LuWY3dan5sgxaelP"
    },
    ]
  },
  {
    responsibilityText: "",
    preamble: "",
    role: "Gameplay Programmer",
    slug: "denet",
    title: "Denet",
    description: "OS Simulation Horror",
    img: "/assets/GP1_team3_poster.png",
    imgAlt: "default alt image text",
    teamSize: 8,
    status: Status.Finished,
    durationWeeks: "4",
    category: "games",
    engine: Engine.Unity,
    fullImage: "/assets/GP1_team3_poster.png",
    contentTitle: "Main Responsibilities",
    responsibilityContent: [
      {
        icon: CloudArrowUpIcon,
        title: "Unreal Engine 5",
        description: "Used Unreal Engine 5 for development of the game."
      },
    ],
  },
  {
    responsibilityText: "",
    preamble: "An open REST API featuring microservices for authentication and API key management.",
    role: "Gameplay Programmer",
    slug: "unidevweb",
    title: "Unidevweb API",
    description: "Open REST API",
    img: "/assets/web_placeholder2.png",
    imgAlt: "thumbnail image of unidevweb api project",
    teamSize: 1,
    status: Status.Finished,
    durationWeeks: "8",
    category: "web",
    fullImage: "/assets/web_placeholder2.png",
    githubLink: "https://github.com/TeodorFredriksson95/cv-backend",
    contentTitle: "Key Features",
    responsibilityContent: [
      {
        icon: CloudArrowUpIcon,
        title: "Unreal Engine 5",
        description: "Used Unreal Engine 5 for development of the game."
      },
    ],
  },
  {
    responsibilityText: "",
    preamble: "A robotics side project featuring a custom built, rechargable smart home irrigation system using Arduino, local wifi and C++.",
    role: "Gameplay Programmer",
    slug: "smart-home-irrigation",
    title: "Smart Home Irrigation System",
    description: "Another long description...",
    img: "/assets/electronics_placeholder3.png",
    imgAlt: "default alt image text",
    teamSize: 1,
    status: Status.InProgress,
    durationWeeks: "N/A",
    category: "electronics",
    fullImage: "/assets/electronics_placeholder3.png",
    githubLink: "https://github.com/TeodorFredriksson95/Home-Plant-Watering-System",
    contentTitle: "Current Progress",
    responsibilityContent: [
      {
        icon: CloudArrowUpIcon,
        title: "Main Controller.",
        description: "Used to synchronize the capacitive moisture sensors, water pump and water level sensor via a local API."
      },
      {
        icon: CloudArrowUpIcon,
        title: "Micro Controller.",
        description: "Recieves requests from the main controller and checks the current moisture level of the soil."
      },
      {
        icon: CloudArrowUpIcon,
        title: "Custom-built PCB.",
        description: "The setup features a custom-build PCB in order to minimize required physical space of the system."
      },
      {
        icon: CloudArrowUpIcon,
        title: "Protoyped Water Container",
        description: "A prototyped water supply line from the peristaltic pump to the soil cointainer."
      },
    ],


  },

];
