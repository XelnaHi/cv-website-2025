import { Engine, Status } from "@/Enums/Status";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  TrophyIcon,
} from "@heroicons/react/20/solid";
import { ServerIcon } from "lucide-react";
import { PiSwordBold } from "react-icons/pi";
import { VscSymbolInterface } from "react-icons/vsc";
import { HiOutlineVideoCamera } from "react-icons/hi";
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
  trailer?: Trailer;
  technicalInsights?: TechnicalInsight[];
};

export type Trailer = {
  title: string;
  videoSrc: string;
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

export type TechnicalInsight = {
  title: string;
  description?: string;
  images: TechnicalInsightImage[];
  bullets?: string[];
  thoughtProcess?: ThoughtProcessSection[];
};

export type TechnicalInsightImage = {
  imageSrc: string;
  layout: "horizontal" | "vertical";
  description?: string;
};
type ThoughtProcessSection = {
  title: string;
  content: string;
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
    trailer: {
      title: "Somnium Trailer",
      videoSrc: "https://www.youtube.com/embed/5uRpASYa4oM?si=6qgrGOBkEtFRgec5",
    },
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
    technicalInsights: [
      {
        title: "Enemy AI & Spawn System",
        description:
          "Enemies in Somnium were built around a modular spawn and behaviour system that allowed designers to quickly populate dungeon rooms with combat encounters using drag-and-drop prefabs.",

        images: [
          {
            imageSrc: "/assets/GP1/enemyTemplate.png",
            layout: "vertical",
            description: "Enemy Base Data Model",
          },
          {
            imageSrc: "/assets/GP1/enemywalktoplayer.png",
            layout: "vertical",
            description: "Enemy Navigation Script",
          },
          {
            imageSrc: "/assets/GP1/Spawnmanager1.png",
            layout: "vertical",
            description: "Spawn Manager pt.1",
          },
          {
            imageSrc: "/assets/GP1/Spawnmanager2.png",
            layout: "vertical",
            description: "Spawn Manager pt.2",
          },
        ],

        bullets: [
          "Drag-and-drop enemy spawn prefabs",
          "Aggro system based on player proximity",
          "Navigation handled through Unity NavMesh",
          "Dynamic spawn timers for encounter pacing",
        ],

        thoughtProcess: [
          {
            title: "Spawn System Design",
            content: `
Enemies were designed to be placed quickly throughout the dungeon by designers. 
To support this workflow, enemy spawn points were packaged as prefabs with exposed parameters for spawn timing and enemy type.

This allowed encounter layouts to be adjusted directly inside the Unity editor without modifying code, making iteration during level design faster.
`,
          },
          {
            title: "Navigation and Combat Behaviour",
            content: `
Enemy navigation relied on Unity's NavMesh system, which provided a reliable solution for pathfinding inside the dungeon environments.

Combined with an aggro detection system based on player proximity, enemies could patrol, detect the player and move into attack range.
`,
          },
        ],
      },
      {
        title: "Accessibility Features",
        description:"Somnium was developed with \"Accessibility\" as a foundation. In this regard, I focused mostly on developing the tutorialization of the game, event-based light switches for navigational guidance and prototypes for a breadcrumb trail system.",
        images: [
          {
            imageSrc: "/assets/GP1/breadcrumb1.png",
            layout: "vertical",
            description: "Breadcrumb Trail pt.1",
          },
          {
            imageSrc: "/assets/GP1/breadcrumb2.png",
            layout: "vertical",
            description: "Breadcrumb Trail pt.2",
          },
          {
            imageSrc: "/assets/GP1/aimassist.png",
            layout: "vertical",
            description: "Aim Assist",
          },
          {
            imageSrc: "/assets/GP1/tutorial1.png",
            layout: "vertical",
            description: "Tutorial Display",
          },
          {
            imageSrc: "/assets/GP1/tutorial2.png",
            layout: "vertical",
            description: "Tutorial Trigger",
          },
        ],

        bullets: [
          "Breadcrumb trail prototype",
          "Aim Assist",
          "Tutorialized intro",
        ],

        thoughtProcess: [
          {
            title: "Tutorialized Intro",
          content: "We wanted to incorporate a tutorial of player mechanics, such as steering, light and heavy attacks, and object interactions, without disrupting the initial feeling of the game.",
          },
          // Continuing the above paragraph section in a different block
          {
            title: "",
            content: "Based on \"tutorial trigger zones\", we mapped out where the player would feasibly exist within the world at which time, and based on these zones, we spawned different UI indicators that fit together with the surrounding area in order to teach the player the ropes. The UI indicators were placed either as part of the world, for example if there was an interactable object, or as part of HUD, if the indicator was hinting towards something more abstract such as steering.",
          },
          {
            title: "Aim Assist",
            content:"Keeping physical disabilities in mind, we wanted to create a system that helps the player lock on to a target if the aim was close enough the target. The system mainly checks if an enemy is already locked on to, and if not, steers the camera towards the center of that target.",
          },
          {
            title: "Breadcrumb Trail Protoype",
            content: "Inspired by 'God of War: Ragnarök', I wanted to try and make a breadcrumb trail of my own to guide the player towards certain checkpoints. The player could always spawn a breadcrumb trail that travelled toward the most attractive point of destination. These destination locations got continuously updated via events that triggered as the player reached their current checkpoint.",
          },
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
    img: "/assets/denet_poster.png",
    imgAlt: "default alt image text",
    teamSize: 8,
    status: Status.Finished,
    durationWeeks: "4",
    category: "games",
    engine: Engine.Unity,
    fullImage: "/assets/denet_poster.png",
    trailer: {
      title: "Trailer",
      videoSrc: "https://www.youtube.com/embed/lSvKu_rciKU?si=TbB5sS4cvh-o8IM4",
    },
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
          "Responsible for implementing enemy behavior, including combat and patrol paths, as well as more specialized boss mechanics centralized around a multi-tiered phase system. Enemy parameters are exposed in the Unity editor to allow designers to tweak detection range, attack cooldowns and patrol behaviour.",
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
          "To speed up testing, I implemented editor debug tools such as player teleportation and wireframe visuals for enemy aggro radius and range.",
      },
      {
        icon: HiOutlineVideoCamera,
        title: "Release Trailer",
        description:
          "Created the release trailer featured on Itch and Youtube.",
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
    technicalInsights: [
      {
        title: "Enemy AI State System",
        description:
          "Enemy behaviour is driven by a simple state machine controlling patrol, chase and attack behaviour.",
        images: [
          {
            imageSrc: "/assets/GP2/enemyAIBreakdown.png",
            layout: "vertical",
            description: "Enemy AI States",
          },
          {
            imageSrc: "/assets/GP2/enemyStates.png",
            layout: "vertical",
            description: "Enemy State Implementations",
          },
          {
            imageSrc: "/assets/GP2/aggroParams.png",
            layout: "vertical",
            description: "Exposable Enemy Params",
          },
          {
            imageSrc: "/assets/GP2/enemydebug.png",
            layout: "vertical",
            description: "Enemy Debug Tools",
          },
        ],
        bullets: [
          "State transitions triggered by player detection and distance checks",
          "Navigation handled through Unity NavMesh",
          "Debug visualization for aggro radius",
        ],
        thoughtProcess: [
          {
            title: "AI Behavior",
            content: `
        We knew from the get-go that the enemies in this game were considered more as \"filler\" objects, meant to create a feeling that the meta-game was an old MMO. Because the complexity of the enemies could be considered basic, even if they were to grow in scope down the line, a Finite State Machine felt robust enough to handle the intended AI behavior of patrol, detection, attack patterns, and so on, while being flexible enough to allow for additions in behavior.
            `,
          },
          {
            title: "Enemy Pathfinding",
            content: `
        When it came to navigational computation, Unity's NavMesh felt like the clear-cut choice to go for, based on all the utilities it provides you with straight out the box. Given the time constraints for the project, rolling our own A* simply wasn't feasible.
            `,
          },
          {
            title: "Debug Tools",
            content: `
        Who doesn't love being able to adjust wireframes that visually represent an aggro radius, attack range, or other miscellaneous effects that make up a complex being? 
            `,
          },
        ],
      },
      {
        title: "Event-Driven Progression",
        description:
          'The progression of the story and the world-building in Denet heavily rely on scripted events, reflecting changes both in the meta-game as well as the "outside" game based on player interactions in either environment. Events are the glue keeping Denet together, and they came to be a mix of wonderful, re-usable and flexible components, as well as nested debug nightmares, nudged in between very specific lines of code.',
        images: [
          {
            imageSrc: "/assets/GP2/flickertrigger1.png",
            layout: "vertical",
            description: "Flicker Trigger",
          },
          {
            imageSrc: "/assets/GP2/EvilpillarManager.png",
            layout: "vertical",
            description: "Linked Enemy Manager",
          },
          {
            imageSrc: "/assets/GP2/audiotrigger.png",
            layout: "vertical",
            description: "Audio Trigger",
          },
        ],
        bullets: [
          "Password-locked clue trigger event",
          "Boss phase event",
          "Audio zone event",
        ],
        thoughtProcess: [
          {
            title: "Password-Locked Clues",
            content: `
            A drag and drop friendly system which spawns a screen overlay, flickering between images. The system exposes variables that let's designers decide which images are displayed, how long each image is displayed for, and the total duration of the slideshow. The system also exposes a variable that specifies whether or not this screen-flicker should be triggered via an interaction, or by entering a collision box. The system in it's entirety is packaged as a prefab to allow for quick placement.
            `,
          },
          {
            title: "Boss Phases",
            content:
              'Since combat overall in Denet is more of a "filler" aspect, we had to think of a way to make the last boss encounter feel engaging without relying on particularly engaging combat mechanics. In order to do so, we decided to make an invulnerability system for the boss that depends on the player completing a set of actions.',
          },
          // Continuing the above content section, but as a different paragraph
          {
            title: "",
            content:
              "The invulnerability system relies on a set of events being fired. Roughly summarized, the player must defeat 4 different groups of enemies. Each group of enemies are linked to a different destroyable object. These destroyable objects are in turn linked to the final boss' state of invulnerability. In order for the player to be able to destroy each object, they must first eliminate all linked enemies. Each enemy death, and each object destroyed, fires an event that upon invocation checks the state of all linked entities. If all linked entities are destroyed, the final boss will initiate it's animation sequence and become receptive to player damage.",
          },
          {
            title: "Audio Triggers",
            content:
              "What sound should be played, when, how, for how long, etc, was an ongoing topic of discussion during development. I generally like to enable designers with drag and drop utilities, and the event triggers for sound was no different. As iteration went on, different needs and wants surfaced and the audio system ended up being split in half.",
          },
          // Continuing the above content section, but as a different paragraph
          {
            title: "",
            content:
              "Both systems share the fact that they utilize collision boxes, but the use case for each systems collision boxes are different. One of the systems use two collision areas as a way to transition between audio clips based on the position of the player. The other audio system uses a single box trigger which represents the audio zone, while also being paired with a set of linked enemies in order to trigger a specific battle-themed audio clip based on the state of the world.",
          },
        ],
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
      "An open REST API featuring microservices for authentication and API key management.  This project is considered deprecated, but remains for demonstrational purposes of REST API documentation.",
    role: "Gameplay Programmer",
    slug: "unidevweb",
    title: "Unidevweb API",
    description: "An open REST API serving CV's.",
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
        linkHref:
          "https://cv-frontend-git-main-teodor-fredrikssons-projects.vercel.app",
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
