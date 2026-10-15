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
  overview?: {
    contributions: string[];
    takeaways: string[];
  };
  developmentDate?: string; // e.g. "Spring 2023", "Nov 2023 – Jan 2024"
  gifMP4?: string;
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
  image: string;
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
    responsibilityText: "",
    preamble:
      "An online co-op multiplayer FPS revolving around a \"Sustainability\" theme, inspired by games such as Destiny, Risk of Rain and Overwatch. The game takes place in an abandoned, overgrown and semi-futuristic environment. The 'sustainability'-take manifests itself through the acquisition of powerful but double-edged buffs, set dressing, and theme-related puzzles during encounter events.",
    role: "Gameplay Programmer",
    slug: "fate",
    title: "Fate", // working title
    description: "Co-op multiplayer FPS about unsustainable progression",
    img: "/assets/GP3/Fate_Poster.jpg", // TODO
    imgAlt: "default alt image text",
    teamSize: 10,
    status: Status.Finished,
    durationWeeks: 7, // TODO: set real duration
    category: "games",
    engine: Engine.Unreal,
    fullImage: "/assets/GP3/Fate_Poster.jpg", // TODO
    links: [
      // TODO: add Itch / GitHub links
    ],
    trailer: {
      title: "Trailer",
      videoSrc: "https://www.youtube.com/embed/6usyWcOuuSE?si=t4RIZ-TOGsVevtYQ",
    },
    contentTitle: "Main Responsibilities",
    responsibilityContent: [
      {
        icon: PiSwordBold,
        title: "Enemy AI.",
        description:
          "Implemented enemy decision-making using State Trees, along with navigational differences between enemy types through NavAreas, NavFilters, SmartNavLinkProxies and varying agent specs such as radius and step height. Also handled aggro management and unreachable-target handling.",
      },
      {
        icon: ServerIcon,
        title: "Procedural Level Generation.",
        description:
          "Prototyped a seed-based procedural level generator that spawned rooms based on type, quantity and progression rules. The system was scrapped midway throught the project due to an unforeseen replication problem related to level instancing.",
      },
      {
        icon: MdTouchApp,
        title: "Room Subsystem & Level Streaming.",
        description:
          "Built the server-authoritative RoomSubsystem that tracks encounter objectives, enemy spawner activations, entry/exit points and missing-player teleportation, combined with Level Streaming Volumes to keep at most three levels loaded at a time.",
      },
      {
        icon: VscSymbolInterface,
        title: "Workflow & Pipeline.",
        description:
          "Established a level design workflow pipeline that allowed multiple people to work on levels simultaneously, and shifted room-management systems to be room-specific and shape-agnostic.",
      },
      {
        icon: MdOutlineHearing,
        title: "Team Support.",
        description:
          "Hooked up audio cues, damage application and animations using GAS, connected the two puzzle systems to the room subsystem, guided the boss implementation's State Tree structure, assisted designers with enemy design directions and did set dressing where time management required it.",
      },
    ],

    videoContent: [
      {
        description: "",
        guidedDescription:
          "One of the earliest stages of the procedural level generation, featuring a hexagonal room layout. The general idea was to be able to provide an optional seed for reproducible levels, spawn specific room types based on criteria, and cap both the amount of type-specific rooms and the total amount of rooms.\n\nThis first version did not take the desire for a linear map into account, something the later square-room version fixed.",
        title: "Procedural Level Generation",
        videoSrc: "https://www.youtube.com/embed/KYoQaI3pNQE",
        bullets: [
          "Optional seed for reproducible levels",
          "Room types spawned based on criteria and intervals",
          "Limits for type-specific rooms and total rooms",
        ],
      },
      {
        description: "",
        guidedDescription:
          "With the pivot from procedurally generated levels we decided to instead do fewer levels but with more creativity and purpose for each room. Since each level would be relatively complex given the new design-schema, we deemed it necessary to use Level Streaming. Greater emphasis was now put on the robustness of the room subsystem, as it would be the glue for keeping all systems, encounters, players and triggers available and ready while not dragging down performance too much.",
        title: "Pivot: Level Streaming Volumes",
        videoSrc:
          "https://www.youtube.com/embed/ZKMjjDdc__c?si=HlVDGQFs8SmHcM19",
        bullets: [
          "Pivot away from procedural generation",
          "Linear level flow with greater per-level creativity",
          "Greater emphasis on Room Subsystem to act as a common integration area",
        ],
      },
      {
        description: "",
        guidedDescription:
          "The first enemy prototype, the 'Psycho', charges towards its target, randomly dodges incoming bullets while charging and leaps at the player when close enough.\n\nThe behavior might not sound overly complex, but it hides a lot of invisible work such as perception, aggro determination and out-of-bounds scenarios. With the game aiming for swarms of 50+ enemies, behavior like this quickly became overwhelming, and the prototype was scrapped in favor of simpler enemies.",
        title: "Enemy Prototype: Psycho",
        videoSrc: "https://www.youtube.com/embed/6OerBkdDTcc?si=PoU4BmIF6Dz_dpHH",
        bullets: [
          "Charge, dodge and leap behavior",
          "Random bullet dodging limited by dash charges",
          "Scrapped in favor of swarm-friendly enemies",
        ],
      },
      {
        description: "",
        guidedDescription:
          "More updated versions of the 'Psycho' enemy featured no leap attack and no charge, but a random chance to be able to dodge a bullet once if the enemy was moving towards the player but not yet within attack range. It also featured a random chance to leap backwards after having performed an attack. The idea was to prevent the sensation of feeling overrun and overwhelmed by swarms of enemies by creating consistent but non-predictable gaps in the enemy attack patterns.",
        title: "Psycho Updated",
        videoSrc: "https://www.youtube.com/embed/NisYk5N8jpE?si=dNM_k_6sHwAef5g7",
        bullets: [
          "Melee enemy with limited vertical navigation",
          "No charge, no leap, but maybe a dodge",
          "Built-in anti-claustrophobia behavior mechanics",
        ],
      },
      {
        description: "",
        guidedDescription:
          "Our ranged enemy type, also dubbed \"Shooter\" (not without a story of it's own) underwent similar design simplifications for the sake of less overwhelming abilities when part of a swarm of enemies. Our 'Shooter' featured a dynamic but generally predictable movement pattern, alternating between shooting and re-thinking it's current position in case there's potential cover nearby. It also features a teleportation mechanic, which greatly differentiates it's traversal capabilities compared to 'Psycho'. ",
        title: "Updated Ranged Shooter",
        videoSrc: "https://www.youtube.com/embed/CnYhwwmg0gA?si=kFNaGdFKPuCiXXpb",
        bullets: [
          "Ranged enemy with greater vertical traversal capabilities, but a bad aim",
          "Dynamic but generally predictable movement pattern",
          "Greater sense of self preservation manifested using EQS for potential cover detection",
        ],
      },
      {
        description: "",
        guidedDescription:
          "I had the fortune to work together with our enemy designer on what I would consider The pièce de résistance in terms of our enemy implementation, which was the boss enemy. While our enemy designer did a lot of the original implementation, I assisted through guidance and workshops, and helped bring the final implementation together with refinements of pre-existing systems and abilities.",
        title: "Boss",
        videoSrc:
          "https://www.youtube.com/embed/Sj3G0NCosnc?si=rOg1Hcvea6nweMFn",
        bullets: [
          "Assisted with development of final boss",
          'Held workshops on State Tree "How To\'s" ',
        ],
      },
    ],

    technicalInsights: [
      {
        title: "Enemy State Trees",
        description:
          "Enemy behavior was built using State Trees, an increasingly popular Unreal Engine feature combining the explicit intention of a state machine with the utility-based decision-making of Behavior Trees.",
        images: [
          {
            imageSrc: "/assets/GP3/enemies/Ranged_Final.png",
            layout: "vertical",
            description: "Final Ranged enemy state",
          },
          {
            imageSrc: "/assets/GP3/enemies/Ranged_V2.png",
            layout: "vertical",
            description: "Ranged Enemy, Second Iteration",
          },
          {
            imageSrc: "/assets/GP3/enemies/Ranged_V1.png",
            layout: "vertical",
            description: "Ranged Enemy, First Iteration",
          },
          {
            imageSrc: "/assets/GP3/enemies/EvaluateTarget_Expanded.png",
            layout: "vertical",
            description: "EvaluateTarget state expanded",
          },
          {
            imageSrc: "/assets/GP3/enemies/OnSpawn_Expanded.png",
            layout: "vertical",
            description: "OnSpawn state expanded",
          },
        ],
        bullets: [
          "Linked Assets for reusable behavior sections",
          "Color-coded states by behavior intention",
          "Integrated with room management, player caching and audio",
        ],
        thoughtProcess: [
          {
            title: "Working with a New Feature",
            content:
              "As we started the project on UE version 5.7, State Trees had seemingly started to gain more popularity, with many well received updates especially around 5.4. Because of that, we thought it would be interesting to explore its capabilities. Of course it was a bit daunting, but it was also very refreshing to explore a tool that maybe hadn't had time yet to fully become a staple tool. Looking back, I'm very happy we decided to use State Trees as I've very much enjoyed their capabilities in terms of organizing large behavior sets and debugging.",
          },
          {
            title: "Scaling Down",
            content:
              "During development of the initial prototypes for the 'Psycho' and 'Carapace' enemies, it became clearer that their initially intended behavior was a bit overwhelming when featuring a large amount of enemies at the same time, which was a core design pillar - that the enemies should be swarming the players. The decision was made to drastically downscale the enemies' behavior complexity, which in my opinion was a fortunate decision.",
          },
          {
            title: "Unseen Behavior",
            content:
              "Something I had personally underestimated was both the amount of impact the unseen details could have on certain core gameplay scenarios, and how much effort they would take to get good. I think enemies becoming utterly unable to decide who to consider their main target whilst being midway through a jump, resulting in regular near-crashes, and a looping state sequence with a sneaky enter condition, were the two bugs that consumed more brain cells than all the other bugs combined.",
          },
          {
            title: "Navigation Differences",
            content:
              "To make enemy types move differently, I used NavAreas, NavFilters, SmartNavLinkProxies and differences in agent specs such as radius and step height. The melee enemy got limited vertical abilities, while the ranged enemy could teleport.",
          },
          {
            title: "Geometry & Capabilities",
            content:
              "I would like to claim that our game had relatively complex level geometry. Lots of height variations, different sizes of nooks and crannies, slopes and steps. As one enemy type was considered smaller and with limited aerial capabilities, the combination of geometry, desired behavior and differing capabilities presented interesting and somewhat unexpected problems. One of them was the simple but very time consuming issue of manually placing all the proper NavLinks. I decided to try the experimental Navigation Link Generation feature. The feature was a lifesaver, but also felt like it was lacking stability and exposure of certain NavLink parameters you would feasibly like to have. Ever since, I've been keen to one day dig a little deeper and see if one can't make some improvements to the feature.",
          },
          {
            title: "There's a lot of Blueprints?",
            content:
              "Something that felt a little odd to me was how rarely I left the blueprint part of development when working with State Trees. To me, the better the states became in their execution, the less the nodes became, and the readability often improved. And at the same time I started to feel less and less the need to refactor the blueprints to native C++. Given the amount of time I spent in the actual state tree editor just authoring the structure of the states, it felt less cumbersome to keep creation of assets and logic within the editor, rather than keeping a mixed workflow. But I thought it was a bit confounding. I couldn't really tell if it felt like designer or programmer territory. Maybe a bit of both. Regardless, it's a work process I very much enjoy.",
          },
        ],
      },
      {
        title: "From Procedural Generation to Level Streaming",
        description:
          "The level generation went through several shapes and requirements before ultimately being scrapped due to a replication problem discovered the day before Alpha.",
        images: [
          {
            imageSrc: "/assets/gp3/levelflow-design.png",
            layout: "horizontal",
            description: "Level Flow Design Document",
          },
        ],
        bullets: [
          "The base geometry evolved from Hexagons, to Squares, and finally to complete asymetry",
          "Randomized level generartion became linear level flow with encounter, hallway, healing and boss rooms",
          "Sublevel replication broke multiplayer",
          "Pivot to manual level streaming",
        ],
        thoughtProcess: [
          {
            title: "Curated Generation",
            content:
              "The square-room version was designed around a document by our level designer, Trausti Gunnarsson. The first room after the start room was always an encounter, followed by either a hallway or an encounter until each had spawned twice, then a healing room and finally a boss room. Prototypes moved from blueprints to native code, but by then procedural generation was no longer part of the system.",
          },
          {
            title: "Replication Problems",
            content:
              "The day before Alpha, we realized that actors within our procedurally generated sublevels weren't replicating as expected. Each client was loading its own server-determined sublevel, which somehow decoupled server-owned actors and systems, as if every client existed next to each other in their own sibling levels, all under the same parent root. I had during an unrelated bug hunt in the early days of the project read ominous tales on the forums describing this type of scenario, but by the time it would have been beneficial for me to remember, I had forgot to be afraid of it. We never gained a firm understanding of the underlying problem, and with the time we had left, we had to our by far biggest pivot, which was to scrap the procedural level generation completely.",
          },
          {
            title: "The Pivot",
            content:
              "We scrapped weeks of programming and level design work and moved to level streaming volumes. We still wanted room-specific management to avoid loading everything at once, so the hallway rooms were re-purposed as streaming volumes, guaranteeing at most three loaded rooms at the same time. This was a personal disappointment, since I had spent weeks laying the foundation for the procedural system, but it was the right decision for the team and the project.",
          },
          {
            title: "Level Workflow",
            content:
              "With the predetermined room sizes gone, new problems surfaced. I also found myself feeling more and more like a level design manager, which was never the intention, and thus wrote a level design workflow document to try and create a shared level of consistency for multiple people working on levels at the same time, while also using it as a way to decouple myself from level management decisions. That was always our level designer's job, which he did absolutely splendidly.",
          },
        ],
      },
      {
        title: "RoomSubsystem",
        description:
          "A server-authoritative singleton handling encounter-type rooms, tying together level streaming, enemy spawning and puzzles.",
        images: [
          {
            imageSrc: "/assets/GP3/roommanager/Room_Overview.png",
            layout: "vertical",
            description: "Room Manager Overview",
          },
          {
            imageSrc: "/assets/GP3/roommanager/Room_PlayersAbsent.png",
            layout: "vertical",
            description: "Room Manager Player Absent",
          },
          {
            imageSrc: "/assets/GP3/roommanager/Room_Teleport.png",
            layout: "vertical",
            description: "Room Manager Teleport",
          },
          {
            imageSrc: "/assets/GP3/roommanager/EncounterObjective.png",
            layout: "vertical",
            description: "Room ManagerEncounter Objective",
          },
          {
            imageSrc: "/assets/GP3/roommanager/ObjectiveStatus.png",
            layout: "vertical",
            description: "Room Manager Objective Status",
          },
        ],
        bullets: [
          "Encounter-based level progression",
          "Player teleportation on encounter start",
          "Player wins on encounter-puzzle completion",
        ],
        thoughtProcess: [
          {
            title: "Encounter Flow",
            content:
              "When an encounter objective is marked as started, the subsystem activates the enemy cave spawners, closes the room's entry points and teleports any players not currently inside the room, to the encounter. On puzzle completion, the room manager deactivates the enemy spawners and opens the exits to the next hallway room. It's also the glue between puzzle status polling and level management.",
          },
          {
            title: "Encounter Flow",
            content:
              "When an encounter objective is marked as started, the subsystem activates the enemy cave spawners, closes the room's entry points and teleports any players not currently inside the room, to the encounter. On encounter-puzzle completion, the room manager deactivates the enemy spawners and opens the exits to the next hallway room. It's also the glue between puzzle status polling and internal level management.",
          },
          {
            title: "Integration",
            content:
              "After the pivot, both the two puzzle systems and specifically the last boss were extended to fit together with the room subsystem, tracking puzzle statuses alongside encounter goals.",
          },
        ],
      },
    ],

    overview: {
      contributions: [
        "Procedural level generation",
        "State Tree enemy AI with type-specific navigation and aggro management",
        "Server-authoritative RoomSubsystem for encounters, spawners and player teleportation",
      ],
      takeaways: [
        "Test important multiplayer features thoroughly before building on top of it",
        "State Trees are amazing",
      ],
    },
    developmentDate: "Apr 2026 - Jun 2026",
        gifMP4: "/assets/Videos/Fate GIF.mp4",
  },
  {
    responsibilityText: "",
    preamble:
      "A rhythm-driven top-down bullet heaven inspired game where the music affects your playstyle. Weapon fire rate, camera effects and combat abilities are all synchronized to the beat of the selected track, and the player is rewarded for keeping the tempo.",
    role: "Gameplay Programmer",
    slug: "upbeat",
    title: "UpBeat",
    description: "Rhythm shooter where the music drives the gameplay",
    img: "/assets/General/image_coming_soon.png", // TODO
    imgAlt: "default alt image text",
    teamSize: 5,
    status: Status.Finished,
    durationWeeks: 4,
    category: "games",
    engine: Engine.Unreal,
    fullImage: "/assets/General/image_coming_soon.png", // TODO
    links: [
      // TODO: add Itch / GitHub links
    ],
    trailer: {
      title: "Trailer",
      videoSrc: "https://www.youtube.com/embed/v6_8EmfeR2s?si=x9tGuCC9vA-2Du-y",
    },
    contentTitle: "Main Responsibilities",
    responsibilityContent: [
      {
        icon: MdOutlineHearing,
        title: "Audio & Rhythm Systems.",
        description:
          "Refactored all audio components into a single AudioSubsystem encapsulating sound- and beat managers, and used audio analyzers to sync gun fire rate to the rhythm of the selected track. Also handled song switching, playback offsets and looping.",
      },
      {
        icon: MdTouchApp,
        title: "ClickTimer & Slam Mechanic.",
        description:
          "Built the ClickTimer, a mechanic where hitting a key on the beat builds a multiplier that charges the Slam. Slam grants increased movement speed and double fire rate for its duration, while missed beats and off-beat hits reset the progress.",
      },
      {
        icon: VscSymbolInterface,
        title: "UI, HUD & Shaders.",
        description:
          "Wrote shaders for text outlines, electric 'frazzle' effects, curved progress bars, speedlines and hit-flash feedback. Also built the pre-game record select screen, game over screen and interaction prompts.",
      },
      {
        icon: PiSwordBold,
        title: "Combat Polish.",
        description:
          "Implemented Camera Slam VFX & related SFX, invulnerability handling and genre-dependent 'Perfect Hit' projectiles.",
      },
    ],

    videoContent: [
      {
        description: "",
        guidedDescription:
          "The core idea of the game is that the music is not just a soundtrack, but a gameplay system. In this video, the gun fires in rhythm with the selected audio track, with a camera punch landing on every 4th beat to sell the pulse.\n\nUsing various OnsetNRT analyzers was really cool, but one alone simply didn't feel capable of giving the right feel. One reason we pivotted more and more to systems closely confined to BPM, BPS and time between beats, was because we felt that the amount of audio analyzers that would be required, and tweaked in order for itS to sound just right, was going to be too time consuming. It's still something I'd like to experiment more with, however.",
        title: "Rhythm Fire Rate",
        videoSrc: "https://www.youtube.com/embed/bcP0Upju-sA",
        bullets: [
          "Fire rate matched to the beat via audio analyzers",
          "Camera punch VFX on every 4th beat",
          "Analyzer settings adjustable per song",
        ],
      },
      {
        description: "",
        guidedDescription:
          "The ClickTimer rewards the player for clicking on the beat. Notes travel along a 'conveyor belt' towards the middle of the screen, and hitting within the hit window increases the multiplier while missing resets it.\n\nThe final version features custom shaders, a perfect hit/regular hit distinction, and a text multiplier that scales with the combo.",
        title: "ClickTimer HUD",
        videoSrc:
          "https://www.youtube.com/embed/7NcYJr-M1Xw?si=kI0n1-5DOcyDpL5B",
        bullets: [
          "Multiplier increases on on-beat clicks, resets on off-beat or missed beats",
          "Goal indicator changes color on 'perfect' vs 'regular' hits",
          "Shader-driven text outlines and electric effects",
        ],
      },
      {
        description: "",
        guidedDescription:
          'With the \'Slam Activation\' system, we wanted to give the player a sense of a power surge. Speedlines, camera FoV animations, movement speed buffs and a projectile "Ultimate" effect were all to communicate the power-up, with everything rapdily decelerating. The idea wasn\'t necessarily to give the players "just a little bit of power", but rather to have them reaching the peak more often.',
        title: "Camera Slam & Speedlines",
        videoSrc: "https://www.youtube.com/embed/c_sE5wN5Fko",
        bullets: [
          "FoV animation on slam activation",
          "Speedlines intensity and movement speed scale with click hits",
          "Projectiles fire twice per beat during an active slam",
        ],
      },
    ],

    technicalInsights: [
      {
        title: "AudioSubsystem",
        description:
          "Audio logic was originally spread across several actor components, each requiring references to one another. I consolidated it into one subsystem so that anything beat-related has a single place to listen to.",
        images: [
          {
            imageSrc: "/assets/GP4/AudioSubsystem Overview.png",
            layout: "vertical",
            description: "AudioSubsystem Overview",
          },
          {
            imageSrc: "/assets/GP4/BeatTimer Overview.png",
            layout: "vertical",
            description: "BeatTimer Overview",
          },
          {
            imageSrc: "/assets/GP4/SoundLink Overview.png",
            layout: "vertical",
            description: "SoundLink Overview",
          },
        ],
        bullets: [
          "SoundLink & BeatTimer encapsulated in a singleton subsystem",
          "Beat events broadcast through the subsystem",
          "Song switching keeps the previous playback offset",
          "ConstantQNRT tuned to 12 bands per octave",
        ],
        thoughtProcess: [
          {
            title: "Why a Subsystem",
            content: `
Previously, any event related to SoundLink or BeatTimer also required a reference to one of those objects, which made the dependencies messy and easy to break. Moving everything behind a singleton AudioSubsystem meant that gameplay systems like the ClickTimer, the gun and the camera punch could all subscribe to the same source of truth.
`,
          },
          {
            title: "Analyzers & Frequencies",
            content:
              "Working with audio programmatically was something new to me, so I had to begin with digging into frequencies, bands and octaves in order to understand the parameters exposed by ConstantQNRT and Onset NRT.",
          },
          {
            title: "Switching Songs",
            content:
              "Switching tracks used to restart playback from 0, which broke the rhythm flow. The new logic carries over the playback percentage, loops the track when it reaches the end and handles the case where the carried over offset would exceed 100% of the next song.",
          },
        ],
      },
      {
        title: "ClickTimer & Slam",
        description:
          "The ClickTimer started as a simple mechanic and ended up as the heart of the game's moment-to-moment feedback. It was reworked from the ground up once, mostly in terms of presentation.",
        images: [
          {
            imageSrc: "/assets/GP4/ClickTimer.png",
            layout: "vertical",
            description: "ClickTimer Interactable Indicator",
          },
          {
            imageSrc: "/assets/GP4/SlamActive.png",
            layout: "vertical",
            description: "Slam Activation",
          },
        ],
        bullets: [
          "Click window based on normalized beat progress",
          "Multiplier resets on off-beat clicks and missed beats",
          "Slam buffs movement speed and fire rate",
          "Perfect Hit projectiles vary by active genre",
        ],
        thoughtProcess: [
          {
            title: "Click Window",
            content:
              'A click counts as on-beat if it lands close enough to the start or end of a beat, roughly +- 0.1 of a normalized beat cycle. A click timed within roughly +- 0.05 within the normalized range is considered a \Perfect Hit".',
          },
          {
            title: "Reworking the UI",
            content:
              "The first version used two mirrored progress bars and a hit window. For the rework, I kept all of the old logic and simply hid the elements, replacing them with a 'conveyor belt' of angle brackets. It was far from ideal, but the state of the project required every corner that could be cut, to be cut.",
          },
          {
            title: "Slam State",
            content:
              "During a slam, speedlines intensity and movement speed increase with every click hit, up to a cap. Missing a click or a beat resets both. When the slam ends, the speedline radius and walk speed decelerate over 3 seconds rather than snapping back, which feels a lot better.",
          },
          {
            title: "Perfect Hit Projectiles",
            content:
              "As a small experiment, a perfect hit spawns 5 homing projectiles if the genre is metal. For hardstyle, the projectiles also spawn in groups of 5, but travel straight outward from the player. The team liked it, so it went straight to prod.",
          },
        ],
      },
    ],

    overview: {
      contributions: [
        "Beat-synced interactable HUD, fire rate and song switching",
        "Slam mechanic and genre-based Perfect Hit projectiles",
        "HUD, shaders and SFX for rhythm feedback, speedlines and on-damage flashes",
      ],
      takeaways: [
        "Refactoring for maintainability feels like a luxury",
        "Repurposing systems too hastily can lead to technical debt",
      ],
    },
    developmentDate: "Sep 2026 - Oct 2026",
    gifMP4: "/assets/Videos/UpBeat GIF.mp4",
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
    durationWeeks: 4,
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
          {
            title: "",
            content:
              "Both systems share the fact that they utilize collision boxes, but the use case for each systems collision boxes are different. One of the systems use two collision areas as a way to transition between audio clips based on the position of the player. The other audio system uses a single box trigger which represents the audio zone, while also being paired with a set of linked enemies in order to trigger a specific battle-themed audio clip based on the state of the world.",
          },
        ],
      },
    ],
    overview: {
      contributions: [
        "FSM behavior including boss phases and event-driven decision making",
        "Zone/trigger-based audio cues and integration between the in-game meta systems",
        "Editor tools for Player teleport and wireframe visuals for enemy aggro/attack range",
      ],
      takeaways: [
        "Rapid prototyping quickly becomes a maintenance mess without proper structural guidelines",
        "Systems packaged as prefabs save a lot of development time",
      ],
    },
    developmentDate: "Jan 2026 - Feb 2026",
    gifMP4: "/assets/Videos/DenetLowQuality.mp4",
  },
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
      image: "/assets/Debut_Win25_White.png",
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
          "Any in-world object which the player might interact with, such as potions, upgrades, lootboxes and weapons. The interaction system is featured during one of the game's more intense beats, and is used to change the layout of the world based on a quest object pickup event.",
      },
      {
        icon: MdOutlineHearing,
        title: "Accessibility.",
        description:
          "Prototyped a breadcrumb trail system inspired by God of War Ragnarök that spawns a visual effect indicating where the player needs to go in order to progress.",
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
        description:
          'Somnium was developed with "Accessibility" as a foundation. In this regard, I focused mostly on developing the tutorialization of the game, event-based light switches for navigational guidance and prototypes for a breadcrumb trail system.',
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
            content:
              "We wanted to incorporate a tutorial of player mechanics, such as steering, light and heavy attacks, and object interactions, without disrupting the initial feeling of the game.",
          },
          // Continuing the above paragraph section in a different block
          {
            title: "",
            content:
              'Based on "tutorial trigger zones", we mapped out where the player would feasibly exist within the world at which time, and based on these zones, we spawned different UI indicators that fit together with the surrounding area in order to teach the player the ropes. The UI indicators were placed either as part of the world, for example if there was an interactable object, or as part of HUD, if the indicator was hinting towards something more abstract such as steering.',
          },
          {
            title: "Aim Assist",
            content:
              "Keeping physical disabilities in mind, we wanted to create a system that helps the player lock on to a target if the aim was close enough the target. The system mainly checks if an enemy is already locked on to, and if not, steers the camera towards the center of that target.",
          },
          {
            title: "Breadcrumb Trail Protoype",
            content:
              "Inspired by 'God of War: Ragnarök', I wanted to try and make a breadcrumb trail of my own to guide the player towards certain checkpoints. The player could always spawn a breadcrumb trail that travelled toward the most attractive point of destination. These destination locations got continuously updated via events that triggered as the player reached their current checkpoint.",
          },
        ],
      },
    ],
    overview: {
      contributions: [
        "Behavior through FSM, navigation and enemy abilities adjustable via Scriptable Objects",
        "Aim assist, breadcrumb trails and tutorial HUD",
        "Loot chests and weapon pick-ups",
      ],
      takeaways: [
        "Polish takes time and is easily overlooked",
        "Dynamic ground-to-air AI navigation can be tricky",
      ],
    },
    developmentDate: "Sep 2025 - Oct 2025",
    gifMP4: "/assets/Videos/SomniumCutVideoLowQuality.mp4",
  },

  {
    responsibilityText: "",
    preamble:
      "An infomercial website designed to attract attention to a public hearing held in the Swedish Parliament 2025. Post-hearing, the website also serves as a journalistic web magazine, focusing on areas regarding the jurisdictional paradox of homelessness, addiction and social exclusion.  ",
    role: "Gameplay Programmer",
    slug: "social-freecard",
    title: "Social Freecard",
    description:
      "An infomercial website designed to attract attention to a public hearing held in the Swedish Parliament",
    img: "/assets/sociailtfrikortThumbnail.jpg",
    imgAlt: "thumbnail image of unidevweb api project",
    teamSize: 4,
    status: Status.Finished,
    durationWeeks: 8,
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
    overview: {
      contributions: [
        "Custom WordPress Template built from scratch for client-specific admin workflows",
        "Accessibility & Compliance design in adherance to WCAG 2.2 and GDPR",
        "Project documentation and admin workflow onboarding",
      ],
      takeaways: [
        "A solid proof of concept is worth it's weight in gold",
        "It takes effort to make sure a website is free from cookie trackers",
      ],
    },
    developmentDate: "2025",
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
    overview: {
      contributions: [
        "E-commerce pipeline for product display, cart, checkout and payment",
        "Content creation flow for photo/illustration sales",
        "Technical documentation prepared for hand-off",
      ],
      takeaways: [
        "Funding and legal terms can shift technical scope mid-project",
        "Good documentation is a special gift should the project stall",
      ],
    },
    developmentDate: "2024 - Ongoing",
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
    durationWeeks: 8,
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
    overview: {
      contributions: [
        "OAuth 2.0 login, JWT-based REST API consumption management",
        "HATEOAS-style pagination",
        "Deployed and throttled via Azure API Management using gateways and rate limiting",
      ],
      takeaways: [
        "Trying to re-invent the web design wheel is a dead end unless considerable time is dedicated",
      ],
    },
    developmentDate: "2023",
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
    overview: {
      contributions: [
        "Synced moisture sensors, pump and water level sensor via local API and WiFi",
        "Custom PCB built to shrink the system's physical footprint",
        "Custom algorithm to regulate water flow",
      ],
      takeaways: [
        "Soldering can be more difficult than C++",
        "A protoype schema that does not prepare for the future is prone to increase material costs",
      ],
    },
    developmentDate: "June 2025 - Sep 2025",
  },
];
