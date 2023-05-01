import { IProjects } from "../types/types";

export const projects: IProjects[] = [
  {
    title: "AndrewKit",
    icon: "puzzle",
    description: `O AndrewKit é uma biblioteca de componentes ReactJS prontos para a construção
                de interfaces simples, feito para quem quer criar interfaces bonitas, mas não quer lidar com a complexidade de algumas bibliotecas. Inclui inputs, botões, tipografia, etc. (Esse card de projetos usa o AndrewKit).`,
    links: [
      {
        type: "normal",
        icon: "folder2",
        link: "https://github.com/Redwars22/andrewkit",
        text: "Visitar Repositório"
      }, {
        type: "success",
        icon: "download",
        link: "https://github.com/Redwars22/andrewkit/tags",
        text: "Baixar AndrewKit"
      }
    ]
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
    description: `Gabriel Against The Aliens é um jogo para Android feito com GDevelop e Programação Orientada a Eventos no qual o Gabriel, o protagonista, foi parar num planeta bem distante da Terra e tem que encontrar o Eric, seu namorado, que foi sequestrado por alienígenas. Para encontrá-lo, você deverá tentar sobreviver em cada um dos mapas, cuja dificuldade vai aumentando progressivamente, e atravessar os portais.`,
    links: [
      {
        type: "success",
        icon: "controller",
        text: "Baixar e Jogar no Android",
        link: "https://github.com/Redwars22/andrew-nation/raw/main/downloads/Gabriel%20Against%20The%20Aliens.apk"
      }
    ]
  },
  {
    title: "Deadline",
    icon: "clipboard-check",
    description: "O Deadline é um bloco de notas simples e leve para Android feito com ReactNative + Expo. Você pode adicionar, editar e remover notas e ainda destacá-las de acordo com três níveis de prioridade (normal, importante e urgente). Sua interface foi levemente inspirada pela do Notion.",
    links: null
  },
  {
    title: "Andrew Testing Library",
    icon: "rocket",
    description: "O Andrew Testing Library é uma ferramenta de teste para TypeScript e JavaScript. Ele foi feito em Node e TypeScript e funciona por linha de comando.",
    links: null
  }
];
