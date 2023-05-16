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
    title: "Drewmax",
    icon: "film",
    description: "O Drewmax é um protótipo de serviço de streaming e biblioteca de filmes e séries que usa a API do The Movie Database, ReactJS, TypeScript e Zustand. Para testá-lo, use as credenciais \"drewmaxtest@gmail.com\" e a senha \"drewmax123\".",
    links: [
      {
        type: "normal",
        icon: "folder2",
        link: "https://github.com/Redwars22/drewmax",
        text: "Visitar Repositório"
      }, {
        type: "success",
        icon: "download",
        link: "https://drewmax.vercel.app/",
        text: "Acessar Drewmax"
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
    title: "Andrezera",
    icon: "browser-safari",
    description: "Um navegador leve para Android feito com ReactNative usando o react-native-web-view. Ele possui modo escuro, histórico de navegação, modo privado e também você consegue salvar os seus sites favoritos. Sua interface é elegante e minimalista.",
    links: [
      {
        type: "warning",
        icon: "download",
        link: "https://github.com/Redwars22/andrezera-browser/releases",
        text: "Baixar Alpha (Android)"
      },
      {
        type: "normal",
        icon: "folder2",
        link: "https://github.com/Redwars22/andrezera-browser",
        text: "Código-Fonte"
      }
    ]
  },
  {
    title: "Gabriel Against The Aliens",
    icon: "controller",
    description: `Gabriel Against The Aliens é um jogo para Android feito com GDevelop e Programação Orientada a Eventos no qual o Gabriel, o protagonista, foi parar num planeta bem distante da Terra e tem que encontrar o Eric, seu namorado, que foi sequestrado por alienígenas.`,
    links: [
      {
        type: "warning",
        icon: "controller",
        text: "Baixar e Jogar no Android (Alpha)",
        link: "https://github.com/Redwars22/andrew-nation/raw/main/downloads/Gabriel%20Against%20The%20Aliens.apk"
      }
    ]
  },
  {
    title: "Deadline",
    icon: "clipboard-check",
    description: "O Deadline é um bloco de notas simples e leve para Android feito com ReactNative + Expo. Você pode adicionar, editar e remover notas. Sua interface foi levemente inspirada pela do Notion.",
    links: [
      {
        type: "warning",
        icon: "download",
        text: "Baixar para Android",
        link: "https://getdeadline.vercel.app/"
      },
      {
        type: "info",
        icon: "folder2",
        text: "Ver Código-Fonte",
        link: "https://github.com/Redwars22/deadline"
      }
    ]
  },
  {
    title: "Andrew Testing Library",
    icon: "rocket",
    description: "O Andrew Testing Library é uma ferramenta de teste para TypeScript e JavaScript. Ela é bem mais simples que ferramentas mais parrudas como o Jest, por exemplo, mas para testes simples deve cumprir bem seu objetivo. ",
    links: [
      {
        type: "info",
        icon: "folder2",
        text: "Código-Fonte",
        link: "https://github.com/Redwars22/andrew-testing-library/"
      },
      {
        type: "warning",
        icon: "download",
        text: "Baixar Versão Alpha",
        link: "https://github.com/Redwars22/andrew-testing-library/releases"
      }
    ]
  }
];
