import { IProjects } from "../types/types";

export const projects: IProjects[] = [
  {
    title: "AndrewKit",
    icon: "puzzle",
    description: `O AndrewKit é uma biblioteca de componentes ReactJS prontos para a construção
                de interfaces simples, feito para quem quer criar interfaces bonitas, mas não quer lidar com a complexidade de algumas bibliotecas. Inclui inputs, botões, tipografia, etc. (Esse card de projetos usa o AndrewKit).`,
    links: null
  },
  {
    title: "Palácio da Gula",
    icon: "egg-fried",
    description: "É o sistema online de uma hamburgueria feito com ReactJS, TypeScript e Zustand. Ele possui o fluxo completo, desde a escolha do hamburguer, dos acompanhamentos, pagamento e endereço de entrega.",
    links: [
      {
        type: "normal",
        icon: "eye",
        link: "https://palaciodagula.vercel.app/",
        text: "Ver Projeto"
      }, 
      {
        type: "success",
        icon: "folder2",
        link: "https://github.com/Redwars22/palaciodagula",
        text: "Código-Fonte do Projeto"
      }
    ]
  },
  {
    title: "Gabriel Against The Aliens",
    icon: "controller",
    description: `Esse é um jogo para Android que está em desenvolvimento com GDevelop.`,
    links: null
  },
  {
    title: "Deadline",
    icon: "clipboard-check",
    description: "O Deadline é um bloco de notas inspirado no Google Keep, no Microsoft Loop e no Notion feito em ReactJS + NextJS, Zustand e TypeScript. Pode ser que futuramente seja feito um port dele para o ReactNative.",
    links: null
  },
  {
    title: "Andrew Testing Library",
    icon: "rocket",
    description: "O Andrew Testing Library é uma ferramenta de teste para TypeScript e JavaScript. Ele foi feito em Node e TypeScript e funciona por linha de comando.",
    links: null
  }
];
