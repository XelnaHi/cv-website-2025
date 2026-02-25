import { Engine, Status } from "@/Enums/Status";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  TrophyIcon,
} from "@heroicons/react/20/solid";
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
  engine?: Engine;
};

export type Project = ProjectCardType & {
  role: String;
  durationWeeks: number | string;
  preamble: string;
  responsibilityText: string;
  category: "games" | "web" | "electronics" | "gamejams";
  videoContent?: VideoContentType[];
  fullImage: string;
  responsibilityContent: ProjectResponsibilityContent[];
  contentTitle: string;
  customListContent?: {
    description: string;
  }[];
  links: Links[];
  award?: Award;
};

export type VideoContentType = {
  title: string;
  guidedDescription?: string;
  description: string;
  videoSrc: string;
  bullets?: string[];
};

export type VideoItem = {
  videoSrc: string;
  title: string;
  bullets?: string[];
};

export type VideoContentCardProps = {
  title: string;
  videos: VideoContentType[];
};

export type ProjectResponsibilityContent = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
};

export type Links = {
  linkName: string;
  linkHref: string;
};

export type Award = {
  awardedBy: string;
  awardTitle: string;
  icon: React.ComponentType<{ className?: string }>;
};

export type SlugProps = {
  params: {
    slug: string;
  };
  searchParams?: {
    from?: string;
  };
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
    img: "/assets/GP1_team3_poster3.png",
    imgAlt: "default img alt text",
    teamSize: 11,
    status: Status.Finished,
    durationWeeks: 3,
    category: "games",
    engine: Engine.Unity,
    fullImage: "/assets/GP1_team3_poster3.png",
    award: {
      awardedBy: "Futuregames Awards",
      awardTitle: "Best Debut Game",
      icon: TrophyIcon,
    },
    links: [
      {
        linkName: "Itch",
        linkHref: "https://futuregames.itch.io/somnium",
      },
      {
        linkName: "GitHub",
        linkHref: "https://github.com/TeodorFredriksson95/Game-Project-1",
      },
    ],
    contentTitle: "Main Responsibilities",
    responsibilityContent: [
      {
        icon: PiSwordBold,
        title: "Enemies & AI.",
        description:
          "I worked on implementing prefabs for drag-and-drop enemy spawn points, aggro mechanics, attacks, navigation using Unity's NavMesh, dynamic spawn timers, and more.",
      },
      {
        icon: VscSymbolInterface,
        title: "User Interface.",
        description:
          "Added UI for interactable world objects, HUD for controller tutorial, player health and upgrades.",
      },
      {
        icon: MdTouchApp,
        title: "Interactables.",
        description:
          "Anything considered static which the player might interact with - potions, upgrades, lootboxes and weapons. The interaction system is featured during one of the game's more intense beats, and is used to change the layout of the world based on a quest object pickup event.",
      },
      {
        icon: MdOutlineHearing,
        title: "Accessibility.",
        description:
          "Prototyped a breadcrumb trail system inspired by God of War Ragnarök. Ultimately, the team decided on a different set of features designed to guide the player towards victory, and the prototype was scratched.",
      },
    ],
    videoContent: [
      {
        description: "",
        guidedDescription:
          "One of the team's biggest focus area was how to make the gameplay mechanics feel accessible. This video features mainly the auto-aim system, a system which automatically moves the player's aim towards the enemy if within a certain a view distance.\n\nThe damage indication system is also noticable, giving the player an indication of the fact that they are being hurt, and from which direction the damage is coming from.",
        title: "Accessible Combat System",
        videoSrc:
          "https://www.youtube.com/embed/FQ7sm4YrrMw?si=qFwoumPxDk5tXfKC",
        bullets: [
          "Auto-aim system to help players with motor impairments",
          "Projectiles can be upgraded to home in on enemies",
          "Damage overlay to indicate from which direction an attack is coming from",
        ],
      },
      {
        description: "",
        guidedDescription:
          "As part of Somnium's ambition to deliver an as accessible game as possible, we implemented a set of accessibility features such as adjustable brightness, an adjustable pixel filter, as well as toggles for screen shake and camera bob.\n\nThis video features the adjustable pixel filter, which is designed to help players with visual impairments to better distinguish between different objects in the world. As part of our development process, we reached out to people with color blindness in the hopes of getting more accurate data to guide us in our development.",
        title: "Accessibility Features",
        videoSrc:
          "https://www.youtube.com/embed/fYDyJG2lU_M?si=Mt_diLlwrq5kZWnV",
        bullets: [
          "Adjustable pixel-filter",
          "Adjustable brightness",
          "On/off screen shake toggle",
          "On/off camera-bob toggle",
        ],
      },
    ],
  },
  {
    responsibilityText: "",
    preamble:
      "A narrative-driven game bringing back memories from the early days of online gaming and virus-infected operating systems. Inspired by games such as BAROQUE and the newly re-popularized file horror genre, this game features puzzle-based mechanics in order to engage the player with an ever growing realization of the fact that something is amiss.",
    role: "Gameplay Programmer",
    slug: "denet",
    title: "Denet.exe",
    description: "OS Simulation Horror",
    img: "/assets/GP1_team3_poster3.png",
    imgAlt: "default alt image text",
    teamSize: 8,
    status: Status.Finished,
    durationWeeks: "4",
    category: "games",
    engine: Engine.Unity,
    fullImage: "/assets/GP1_team3_poster3.png",
    links: [
      {
        linkName: "Itch",
        linkHref: "https://futuregames.itch.io/denet",
      },
      {
        linkName: "GitHub",
        linkHref: "https://github.com/TeodorFredriksson95/Game-Project-2",
      },
    ],
    contentTitle: "Main Responsibilities",
    responsibilityContent: [
      {
        icon: PiSwordBold,
        title: "Enemy & AI.",
        description:
          "Responsible for implementing enemy behavior, including combat and patrol paths, as well as more specialized boss mechanics centralized around a multi-tiered phase system. Enemy behavior can be tweaked in the Unity editor through variables exposed with designer efficiency in mind.",
      },
      {
        icon: MdOutlineHearing,
        title: "Audio.",
        description:
          "Implemented audio trigger prefabs which enables a designer to create audio zones that are either static or dependent on in-game events, such as combat music persisting until enough enemies have been eliminated.",
      },
      {
        icon: PiSwordBold,
        title: "Final Boss Encounter.",
        description:
          "The final boss of the game features a mix of systems that brings together Canvas alterations, an immunity system that depends on the state of enemies and objects linked to the boss, as well as size scaler used to mimic the visual effect of a beating heart. The entire boss encounter, including it's underlying systems, was packaged as a prefab in order to help designers get a clear view of the hierarchy of editable paramaters.",
      },
      {
        icon: VscSymbolInterface,
        title: "UI & HUD",
        description:
          'I worked on the UI related to one of Denet\'s core mechanics, the "In-Game Editor", a trigger based image-flash system used for world building, the player action bar and the password-locked file system.',
      },
      {
        icon: ServerIcon,
        title: "Debug Tools",
        description:
          "In order to speed up testing, I implemented editor debug tools such as player teleportation and wireframe visuals for enemy aggro radius and range.",
      },
    ],
    videoContent: [
      {
        description: "",
        guidedDescription:
          "The gameplay systems in Denet.exe heavily revolve around event triggers inside the meta game which unlocks narrative progressions - which in turn, does the same for the meta game.\n\nIn this video, we see how the act of colliding with an object triggers a story beat, which in turn awards the player with a new meta-game tool necessary to progress inside the meta-game.  ",
        title: "Narrative-Driven World State System",
        videoSrc:
          "https://www.youtube.com/embed/cuv3AdKfw4I?si=ioH3DTkcz3SY6YfQ",
        bullets: [
          "Narrative beats influence the state of the world",
          "Narrative state is triggered by player actions",
          "Audio-queues that are dependent on the state of the world",
        ],
      },
      {
        description: "",
        guidedDescription:
          "Throughout the player's journey inside the meta-game, obstacles of varying nature obstruct the player's path forward.\n\nEnter the \"In-Game-Game Editor\", a core mechanic of Denet.exe which allows the player to edit the world around them in order to progress. In this video, we see how the player uses the editor to traverse a set of obstacles.",

        title: "Meta Game Editor",
        videoSrc:
          "https://www.youtube.com/embed/Vi9PcOY1vBU?si=eiGpLJnqaACfdkmx",
        bullets: [
          "Let's the player edit objects inside the game inside the game ",
          "Add collision to objects in the world so that you may find your footing",
          "Delete or add objects in the world so that you may pass",
          "Increase bounciness of objects so that you may reach a little further",
        ],
      },
    ],
  },
  {
    responsibilityText: "",
    preamble:
      "A narrative-driven game bringing back memories from the early days of online gaming and virus-infected operating systems. Inspired by games such as BAROQUE and the newly re-popularized file horror genre, this game features puzzle-based mechanics in order to engage the player with an ever growing realization of the fact that something is amiss.",
    role: "Gameplay Programmer",
    slug: "gp-3",
    title: "Game Project 3",
    description: "To Be Added",
    img: "/assets/GP1_team3_poster3.png",
    imgAlt: "",
    teamSize: 8,
    status: Status.InProgress,
    durationWeeks: "1",
    category: "games",
    engine: Engine.Unreal,
    fullImage: "/assets/GP1_team3_poster3.png",
    links: [
      {
        linkName: "Itch",
        linkHref: "https://futuregames.itch.io/somnium",
      },
    ],
    contentTitle: "Main Responsibilities",
    responsibilityContent: [
      {
        icon: CloudArrowUpIcon,
        title: "Enemy & AI.",
        description:
          "Responsible for implementing enemy behavior, including combat and patrol paths, as well as more specialized boss mechanics centralized around a multi-tiered phase system. Enemy behavior can be tweaked in the Unity editor through variables exposed with designer efficiency in mind.",
      },
      {
        icon: CloudArrowUpIcon,
        title: "Audio.",
        description:
          "Implemented audio trigger prefabs which enables a designer to create audio zones that are either static or dependent on in-game events, such as combat music persisting until enough enemies have been eliminated.",
      },
      {
        icon: CloudArrowUpIcon,
        title: "Final Boss Encounter.",
        description:
          "The final boss of the game features a mix of systems that brings together Canvas alterations, an immunity system that depends on the state of enemies and objects linked to the boss, as well as size scaler used to mimic the visual effect of a beating heart. The entire boss encounter, including it's underlying systems, was packaged as a prefab in order to help designers get a clear view of the hierarchy of editable paramaters.",
      },
      {
        icon: CloudArrowUpIcon,
        title: "UI & HUD",
        description:
          'I worked on the UI related to one of Denet\'s core mechanics, the "In-Game Editor", a trigger based image-flash system used for world building, the player action bar and the password-locked file system.',
      },
      {
        icon: CloudArrowUpIcon,
        title: "Debug Tools",
        description:
          "In order to speed up testing, I implemented editor debug tools such as player teleportation and wireframe visuals for enemy aggro radius and range.",
      },
    ],
  },
  {
    responsibilityText: "",
    preamble:
      "A narrative-driven game bringing back memories from the early days of online gaming and virus-infected operating systems. Inspired by games such as BAROQUE and the newly re-popularized file horror genre, this game features puzzle-based mechanics in order to engage the player with an ever growing realization of the fact that something is amiss.",
    role: "Gameplay Programmer",
    slug: "gp-4",
    title: "Game Project 4",
    description: "To Be Added",
    img: "/assets/GP1_team3_poster3.png",
    imgAlt: "",
    teamSize: 8,
    status: Status.InProgress,
    durationWeeks: "1",
    category: "games",
    engine: Engine.Unreal,
    fullImage: "/assets/GP1_team3_poster3.png",
    links: [
      {
        linkName: "Itch",
        linkHref: "https://futuregames.itch.io/somnium",
      },
    ],
    contentTitle: "Main Responsibilities",
    responsibilityContent: [
      {
        icon: CloudArrowUpIcon,
        title: "Enemy & AI.",
        description:
          "Responsible for implementing enemy behavior, including combat and patrol paths, as well as more specialized boss mechanics centralized around a multi-tiered phase system. Enemy behavior can be tweaked in the Unity editor through variables exposed with designer efficiency in mind.",
      },
      {
        icon: CloudArrowUpIcon,
        title: "Audio.",
        description:
          "Implemented audio trigger prefabs which enables a designer to create audio zones that are either static or dependent on in-game events, such as combat music persisting until enough enemies have been eliminated.",
      },
      {
        icon: CloudArrowUpIcon,
        title: "Final Boss Encounter.",
        description:
          "The final boss of the game features a mix of systems that brings together Canvas alterations, an immunity system that depends on the state of enemies and objects linked to the boss, as well as size scaler used to mimic the visual effect of a beating heart. The entire boss encounter, including it's underlying systems, was packaged as a prefab in order to help designers get a clear view of the hierarchy of editable paramaters.",
      },
      {
        icon: CloudArrowUpIcon,
        title: "UI & HUD",
        description:
          'I worked on the UI related to one of Denet\'s core mechanics, the "In-Game Editor", a trigger based image-flash system used for world building, the player action bar and the password-locked file system.',
      },
      {
        icon: CloudArrowUpIcon,
        title: "Debug Tools",
        description:
          "In order to speed up testing, I implemented editor debug tools such as player teleportation and wireframe visuals for enemy aggro radius and range.",
      },
    ],
  },
  {
    responsibilityText: "",
    preamble:
      "An infomercial website designed to attract attention to a public hearing held in the Swedish Parliament 2025. Post-hearing, the website also serves as a journalistic web magazine, focusing on areas regarding the jurisdictional paradox of homelessness, addiction and social exclusion.  ",
    role: "Gameplay Programmer",
    slug: "socialt-frikort",
    title: "Socialt Frikort",
    description:
      "An infomercial website designed to attract attention to a public hearing held in the Swedish Parliament",
    img: "/assets/sociailtfrikortThumbnail.jpg",
    imgAlt: "thumbnail image of unidevweb api project",
    teamSize: 4,
    status: Status.Finished,
    durationWeeks: "8",
    category: "web",
    fullImage: "/assets/sociailtfrikortThumbnail.jpg",
    links: [
      {
        linkName: "Infomercial Site",
        linkHref: "https://socialtfrikort.nu",
      },
    ],
    contentTitle: "Main Responsibilities",
    responsibilityContent: [
      {
        icon: LockClosedIcon,
        title: "Custom WordPress Template.",
        description:
          "Created a custom WordPress template from the ground up in order to enable the client to fine-tune admin behavior, content and style appropriate to the needs and work ethics of the client company.",
      },
      {
        icon: ServerIcon,
        title: "Design & UX.",
        description:
          "Created proposition for layout and color schema based on target audience.",
      },
      {
        icon: CloudArrowUpIcon,
        title: "Documentation",
        description:
          "Organized and packaged all necessary technical information related to the project.",
      },
      {
        icon: CloudArrowUpIcon,
        title: "Technical Onboarding",
        description:
          "Performed both onsite and written technical onboarding as part of the hand-off of the technical infrastructure and performed on-call activities in case of emergencies.",
      },
    ],
  },
  {
    responsibilityText: "",
    preamble:
      "A web shop selling photos and illustrations suited for journalistic coverage. The project is funded by the board authority 'Allmänna Arvsfonden', a foundation elected by the Swedish governement, dedicated to improving public utility. \n Due to ongoing adjustments of terms and agreements, the website has been placed behind site protection and is currently considered a 'Work in progress'.",
    role: "Gameplay Programmer",
    slug: "journalistic-gallery-shop",
    title: "Journalistic Gallery Shop",
    description:
      "A web shop selling photos and illustrations suited for journalistic coverage",
    img: "/assets/socialabildbyranThumbnail.jpg",
    imgAlt: "thumbnail image of unidevweb api project",
    teamSize: 4,
    status: Status.InProgress,
    durationWeeks: "24",
    category: "web",
    fullImage: "/assets/socialabildbyranThumbnail.jpg",
    links: [
      {
        linkName: "Arvsfonden (funder)",
        linkHref: "https://www.arvsfonden.se/",
      },
    ],
    contentTitle: "Main Responsibilities",
    responsibilityContent: [
      {
        icon: LockClosedIcon,
        title: "Design",
        description: "Created the design for layout and content creation flow.",
      },
      {
        icon: ServerIcon,
        title: "E-commerce Implementation",
        description:
          "Created the pipeline for product display, shopping cart, checkout and payment.",
      },
      {
        icon: CloudArrowUpIcon,
        title: "Documentation",
        description:
          "Organized and packaged all necessary technical information related to the project.",
      },
      {
        icon: CloudArrowUpIcon,
        title: "Technical Onboarding",
        description:
          "Performed both onsite and written technical onboarding as part of the hand-off of the technical infrastructure.",
      },
    ],
  },
  {
    responsibilityText: "",
    preamble:
      "An open REST API featuring microservices for authentication and API key management.",
    role: "Gameplay Programmer",
    slug: "unidevweb",
    title: "Unidevweb API",
    description: "An open REST API serving CV's",
    img: "/assets/unidevwebThumbnail5.png",
    imgAlt: "thumbnail image of unidevweb api project",
    teamSize: 1,
    status: Status.Finished,
    durationWeeks: "8",
    category: "web",
    fullImage: "/assets/unidevwebThumbnail5.png",
    links: [
      {
        linkName: "GitHub",
        linkHref: "https://github.com/TeodorFredriksson95/cv-backend",
      },
      {
        linkName: "Website",
        linkHref: "https://unidevweb.com",
      },
    ],
    contentTitle: "Key Features",
    responsibilityContent: [
      {
        icon: LockClosedIcon,
        title: "Authentication & API Key Management.",
        description:
          "Designed and implemented secure authentication using OAuth 2.0 for third-party login (GitHub/LinkedIn) and JWT-based API keys for authorized access. Built bearer-token validation middleware and enforced per-user rate limiting to protect all REST endpoints.",
      },
      {
        icon: ServerIcon,
        title: "RESTful Architecture & Resource Design.",
        description:
          "Architected a REST-compliant API serving candidates, tech stack, and work experience resources. Implemented structured routing, consistent JSON responses, and HATEOAS-style pagination links (self, first, last, next, prev) to ensure predictable and scalable API consumption.",
      },
      {
        icon: CloudArrowUpIcon,
        title: "Pagination & Query Filtering.",
        description:
          "Developed dynamic pagination with configurable pageSize (1–10) and page parameters. Implemented query-based filtering (techName, openToWork, company, jobTitle, country, etc.) allowing consumers to efficiently retrieve targeted datasets.",
      },
      {
        icon: CloudArrowUpIcon,
        title: "API Gateway & Rate Limiting.",
        description:
          "Deployed the API through Azure API Management, configuring secure HTTPS access, request throttling (100 requests/hour), and centralized gateway routing for improved monitoring and scalability.",
      },
    ],
  },
  {
    responsibilityText: "",
    preamble:
      "A robotics side project featuring a custom built, rechargable smart home irrigation system using Arduino, local wifi and C++.",
    role: "Gameplay Programmer",
    slug: "smart-home-irrigation",
    title: "Smart Home Irrigation System",
    description: "A wifi- and Arduino automated home irrigation system",
    img: "/assets/pcbThumbnail.jpg",
    imgAlt: "default alt image text",
    teamSize: 1,
    status: Status.InProgress,
    durationWeeks: "N/A",
    category: "electronics",
    fullImage: "/assets/pcbThumbnail.jpg",
    links: [
      {
        linkName: "GitHub",
        linkHref:
          "https://github.com/TeodorFredriksson95/Home-Plant-Watering-System",
      },
    ],
    contentTitle: "Current Progress",
    responsibilityContent: [
      {
        icon: CloudArrowUpIcon,
        title: "Main Controller.",
        description:
          "Used to synchronize the capacitive moisture sensors, water pump and water level sensor via a local API.",
      },
      {
        icon: CloudArrowUpIcon,
        title: "Micro Controller.",
        description:
          "Recieves requests from the main controller and checks the current moisture level of the soil.",
      },
      {
        icon: CloudArrowUpIcon,
        title: "Custom-built PCB.",
        description:
          "The setup features a custom-built PCB in order to minimize the physical space of the system.",
      },
      {
        icon: CloudArrowUpIcon,
        title: "Protoyped Water Container",
        description:
          "A prototyped water supply line from the peristaltic pump to the soil cointainer.",
      },
    ],
  },
];
