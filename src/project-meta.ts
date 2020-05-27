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
      "A project to simplify modding of the Pokemon Series games by providing a graphical editor and abstraction for the Pokemon Reverse Engineering Toolkit (PRET)",
    date: "2019",
    state: "In Progress",
  },
  {
    name: "Open Hexplore",
    slug: "open-hexplore",
    abstract:
      "A decompilation project to mod and improve the 1998 video game Hexplore",
    date: "2020",
    state: "In Progress",
  },
  {
    name: "Dynamaxed-Translator",
    slug: "dynamaxed-translator",
    abstract:
      "An extension for the Dynamaxed project that translates its .json files to German language",
    date: "2020",
    state: "In Progress",
  },
  {
    name: "Phoenix League (Dota 2 Inhouse League with custom matchmaking)",
    slug: "phoenix-league",
    abstract:
      "My initial attempt at improving the Dota 2 matchmaking system. It didn't go very far, I got some great ideas to further improve it, but due to changes in Dota 2 it is no longer feasible.",
    date: "2017",
    state: "Abandoned",
  },
  {
    name: "The Lux Programming Language",
    slug: "lux",
    abstract:
      "My current attempt at creating a new programming language. It supports generics and features inferred and deferred types. It currently transpiles to JavaScript",
    date: "2017",
    state: "Under investigation",
  },
];
