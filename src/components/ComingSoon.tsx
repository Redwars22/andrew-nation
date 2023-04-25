import React from "react";
import Banner from "./AndrewKit/banner/banner.component";

export const ComingSoonComponent = () => {
  return (
    <div
      style={{
        maxWidth: "50%",
        textAlign: "left",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "1rem",
      }}
    >
      <Banner title="Site em construção" type="warning">
      Esse site ainda está em construção e muitas partes dele estão
          faltando. Por favor volte mais tarde!
      </Banner>
    </div>
  );
};
