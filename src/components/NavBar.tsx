import React from "react";

import {
  AtlassianNavigation,
  PrimaryButton,
  PrimaryDropdownButton,
} from "@atlaskit/atlassian-navigation";
import { SkeletonIconButton } from "@atlaskit/atlassian-navigation/skeleton";
import Button from "@atlaskit/button";
import Typography from "./AndrewKit/typography/typography.component";
import Icon from "./AndrewKit/icon/icon.component";
import avatar from "../assets/avatar.jpg";

const AtlassianProductHome = () => {
  return (
    <Typography
      color={"#0052CC"}
      variant={"h5"}
      customCSS={{ display: "flex", gap: "0.5rem", alignItems: "center" }}
    >
      <Icon icon={"code-square"} size={"1.50rem"} /> @ANDREWNATION
    </Typography>
  );
};

/*
<PrimaryButton>Sobre Mim</PrimaryButton>,
      <PrimaryButton>Projetos</PrimaryButton>,
      <PrimaryButton>Currículo</PrimaryButton>,
      <PrimaryButton>Trajetória Acadêmica e Profissional</PrimaryButton>,
*/

const NavBarComponent = () => (
  <AtlassianNavigation
    label="site"
    primaryItems={[
      <></>
    ]}
    renderProductHome={AtlassianProductHome}
    renderSignIn={() => (
      <>
        {false && <Button appearance="default" onClick={()=>{
			document.querySelector("body")!.style.backgroundColor = "#000";
		}}>
          <i className="bi bi-moon"></i>
        </Button>}
        <Button appearance="primary" href="mailto:andrewnationdev@gmail.com">
          Fale Comigo
        </Button>
      </>
    )}
    renderProfile={() => (
      <SkeletonIconButton>
        <img
          src={avatar}
          alt="Your profile and settings"
        />
      </SkeletonIconButton>
    )}
  />
);

export default NavBarComponent;
