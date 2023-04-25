import React from "react";
import "./button.css";
import { IFloatingButton } from "./button";

export default function FloatingButton(props: IFloatingButton) {
  return (
    <button
      className={'andrewkit-floating-button'}
      style={{
        borderRadius: props.type === 'rounded' ? '100%' : '0.5rem',
        fontSize: props.fontSize,
        color: props.iconColor,
        left: props.position === 'left' ? "0" : undefined,
        right: props.position === 'right' ? "0" : undefined,
        margin: '10px',
        backgroundColor: props.backgroundColor,
      }}
      onClick={() => props.action()}
    >
      <i className={`bi bi-${props.icon}`} />
    </button>
  );
}
