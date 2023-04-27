import React from "react";
import Typography from "./AndrewKit/typography/typography.component";
import Icon from "./AndrewKit/icon/icon.component";
import avatar from "../assets/avatar.jpg";
import Button from "./AndrewKit/button/button.component";

type ILink = {
  title: string;
  url: string;
};

export interface IMenu {
  leftSide?: React.ReactNode;
  links?: ILink[];
  rightSide?: React.ReactNode;
}

function Menu(props: IMenu) {
  return (
    <header className="andrewkit-menu">
      <div>{props.leftSide}</div>
      <div>{props.rightSide}</div>
    </header>
  );
}

/**
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
 */

const NavBarComponent = () => (
  <Menu leftSide={
    <Typography
    color={"#0052CC"}
    variant={"h5"}
    customCSS={{ display: "flex", gap: "0.5rem", alignItems: "center" }}
  >
    <Icon icon={"code-square"} size={"1.50rem"} /> @ANDREWNATION
  </Typography>
  }
  rightSide={
    <Button 
      title="Fale Comigo"
      appearance="normal"
      action={()=> window.open("mailto:andrewnationdev@gmail.com")}
    />
  }
  />
);

export default NavBarComponent;
