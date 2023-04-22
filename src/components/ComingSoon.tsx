import React from "react";
import SectionMessage, {
  SectionMessageAction,
} from "@atlaskit/section-message";

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
      <SectionMessage
        title="Site em construção"
        actions={[
          <SectionMessageAction href="mailto:andrewnationdev@gmail.com">
            Entre em Contato
          </SectionMessageAction>,
          <SectionMessageAction href="#">Meu GitHub</SectionMessageAction>,
        ]}
      >
        <p>
          Esse site ainda está em construção e muitas partes dele estão
          faltando. Por favor volte mais tarde!
        </p>
      </SectionMessage>
    </div>
  );
};
