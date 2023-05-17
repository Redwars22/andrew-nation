import { skills } from "../data/skills";
import Card from "./AndrewKit/card/card.component";
import Icon from "./AndrewKit/icon/icon.component";
import Slide from "./AndrewKit/slide/slide.component";
import Typography from "./AndrewKit/typography/typography.component";
import React from "react";

export default function Skills() {
  let skillsArr: React.ReactNode[] = [];

  const componentsForSkills = [
    <>
      <Typography variant={"h6"}>
        <u>Estágio na MADATECH - Insurtech da Madalozzo Seguros</u>
      </Typography>
      <br />
      <br />
      <span>
        <em>11 de Abril de 2022 - 11 de Abril de 2023</em>
      </span>
      <ul>
        <li>
          <strong>Atividades Desenvolvidas: </strong>
          Manutenção do aplicativo e do portal do Madaseg, feitos em ReactNative
          e React/NextJS respectivamente e do site da Madalozzo.
        </li>
      </ul>
    </>,
    <>
      <Typography variant={"h6"}>
        <u>
          Bacharelado em Engenharia de Software - Universidade Estadual de Ponta
          Grossa
        </u>
      </Typography>
      <br />
      <br />
      <Typography variant={"paragraph"}>
        Atualmente cursando o primeiro ano no Currículo 3.
      </Typography>
      <hr/>
      <Typography variant={"h5"}>
        <u>
          Cursos Complementares
        </u>
      </Typography>
      <ol>
        <li>
          <strong>Ética no Desenvolvimento de Sistemas: </strong>
          <em>Fundação Bradesco. Carga Horária 8 horas.</em>
          <Button title="Ver Certificado" appearance="normal" icon="eye" action={()=>{}}/>
        </li>
      </ol>
    </>,
    <>
      <Typography variant={"h6"}>
        <u>Habilidades e conhecimentos adquiridos (hard-skills): </u>
      </Typography>
      <br />
      <br />
      <ol>
        <li>
          Desenvolvimento Android com ReactNative e Expo + TypeScript e testes
          com Jest.
        </li>
        <li>
          Desenvolvimento web com React e NextJS + TypeScript e testes com
          Cypress.
        </li>
        <li>Estilização com Sass, Tailwind e Bootstrap.</li>
        <li>Inglês e Espanhol em nível intermediário.</li>
        <li>LinuxMint, Ubuntu e Manjaro.</li>
      </ol>
    </>,
  ];

  skills.map((skill) =>
    skillsArr.push(
      <Card
        customCSS={{
          margin: "1rem",
        }}
        header={
          <Typography variant={"h5"} customCSS={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <Icon icon={skill.icon} size={"1.25rem"} />
            {skill.title}
          </Typography>
        }
      >
        {componentsForSkills[skill.id]}
      </Card>
    )
  );

  return (
    <>
      <h2>Trajetória Profissional e Acadêmica</h2>
      <Slide
        data={skillsArr}
        hideBoxShadow
        customCSS={{
          width: "65%",
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "left",
        }}
      ></Slide>
    </>
  );
}
