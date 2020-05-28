export interface Project {
  name: string;
  slug: string;
  abstract: string;
  date: string;
  state: string;
}

export const NoProject: Project = {
  name: "invalid",
  slug: "invalid",
  abstract: "invalid",
  date: "invalid",
  state: "invalid",
};

export function sortProjectsByDate(a: Project, b: Project) {
  return parseInt(a.date) - parseInt(b.date);
}

export const Projects: Project[] = [
  {
    name: "Dynamaxed",
    slug: "dynamaxed",
    abstract:
      "A project to simplify modding of the Pokemon Series games by providing a graphical editor and abstraction for the Pokemon Reverse Engineering Toolkit (PRET).",
    date: "2019",
    state: "In Progress",
  },
  {
    name: "Open Hexplore",
    slug: "open-hexplore",
    abstract:
      "A decompilation project to mod and improve the 1998 video game Hexplore.",
    date: "2020",
    state: "In Progress",
  },
  {
    name: "Dynamaxed-Translator",
    slug: "dynamaxed-translator",
    abstract:
      "An extension for the Dynamaxed project that translates its .json files to German language.",
    date: "2020",
    state: "In Progress",
  },
  {
    name: "Phoenix League (Dota 2 Inhouse League with custom matchmaking)",
    slug: "phoenix-league",
    abstract:
      "My attempt at improving the Dota 2 matchmaking system. It didn't go very far, I got some great ideas to further improve it, but due to changes in Dota 2 it is no longer feasible.",
    date: "2017",
    state: "Abandoned",
  },
  {
    name: "The Lux Programming Language",
    slug: "lux",
    abstract:
      "My current attempt at creating a new programming language. It supports generics and features inferred and deferred types. It currently transpiles to JavaScript.",
    date: "2017",
    state: "Under investigation",
  },
  {
    name: "[JustWatch] Artificer (Docker container builder)",
    slug: "artificer",
    abstract:
      "As part of my work at JustWatch I created a command line utility that builds Docker containers without requiring access to the docker demon.",
    date: "2018",
    state: "Completed",
  },
  {
    name: "Outworldzilla (Dota 2 Training tool)",
    slug: "outworldzilla",
    abstract:
      "The original idea was to create a platform similar to Dotabuff, but it ended up being just a page for a few minigames to improve at Dota. It really shows how powerful animations are, it was my first 'real' published project and I learned the entire FrontEnd ecosystem during this time.",
    date: "2016",
    state: "Completed",
  },
  {
    name: "Proportion Practice Tool for Artists",
    slug: "proportion-practice",
    abstract:
      "The gamification of an idea that I got when reading a PDF on how to become better at drawing in proportions. It's a tiny collection of guessing games where you have to guess what the half or third point is on a scale.",
    date: "2018",
    state: "Completed",
  },
];
