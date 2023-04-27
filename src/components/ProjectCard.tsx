import React from "react";
import Button from "./AndrewKit/button/button.component";
import Typography from "./AndrewKit/typography/typography.component";
import Card from "./AndrewKit/card/card.component";
import Icon from "./AndrewKit/icon/icon.component";
import { IProjects } from "../types/types";

export const ProjectCard = (props: IProjects) => {
  return (
    <Card
      header={
        <>
          <Icon icon={props.icon} size={"3rem"}></Icon>
          <br />
          <Typography variant="h4">{props.title}</Typography>
        </>
      }
      footer={
        <div
          style={{
            display: "flex",
            gap: "1rem",
          }}
        >
          {props.links === null ? (
            <span>EM BREVE!</span>
          ) : (
            <>
              {props.links.map((link) => (
                <Button
                  title={link.text}
                  hint={link.text}
                  appearance={link.type}
                  icon={link.icon}
                  action={() => window.open(link.link)}
                />
              ))}
            </>
          )}
        </div>
      }
      customCSS={{
        textAlign: "center",
        margin: "1rem",
      }}
    >
      <Typography variant="paragraph">{props.description}</Typography>
    </Card>
  );
};
