import React from "react";
import { ICard } from "./card";
import "./card.css";

export default function Card(props: ICard) {
  return (
    <div
      className={`andrewkit-card${props.hideBoxShadow ? "-without-outline" : ""}`}
      style={{
        backgroundColor: props.background,
        color: props.foreground,
        ...props.customCSS,
      }}
    >
      {props.header && (
        <div>
          {props.header}
          <hr className="andrewkit-card-separator" />
        </div>
      )}
      {props.children}
      {props.footer && (<>
        <hr className="andrewkit-card-separator" />
        <div style={{
          display: "flex",
          flexDirection: "row",
          gap: "16",
          flexWrap: "wrap",
          justifyContent: "space-around"
        }}>
          {props.footer}
        </div></>
      )}
    </div>
  );
}
