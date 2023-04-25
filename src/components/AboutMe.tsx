import React from "react";
import Banner from "./AndrewKit/banner/banner.component";

/**
 * 
 * @returns 
 *             <Comment
                edited={<CommentEdited>Estudante de Engenharia de Software</CommentEdited>}
                avatar={<Avatar name="André Pereira" src={avatar} />}
                author={<CommentAuthor>@AndrewNation</CommentAuthor>}
                time={<CommentTime>19 de Agosto de 2001</CommentTime>}
                content={
                    <p>
                        Sou estudante de Engenharia de Software e estou em busca de atingir o próximo degrau
                        de experiência na área do desenvolvimento web/front-end, mas também estou em busca de
                        outros desafios. Tenho uma sede insaciável pelo conhecimento e por saber como tudo funciona,
                        gosto de ir além da interface dos aplicativos e da parte superficial, gosto de saber como
                        tudo funciona de baixo dos panos e ter uma visão global de como tudo isso se encaixa junto e
                        resulta no produto final. No momento estou disponível para contratação ou algum projeto freelancer.
                        Para entrar em contato comigo, <a href="mailto:andrewnationdev@gmail.com">clique aqui</a>.
                    </p>
                }
            />
 */

export default function AboutMe() {
  return (
    <div
      style={{
        maxWidth: "75%",
        textAlign: "left",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "2rem",
        marginBottom: "2rem",
      }}
    >
      <Banner type="info" title="Quem sou eu?">
        Sou estudante de Engenharia de Software e estou em busca de atingir o
        próximo degrau de experiência na área do desenvolvimento web/front-end,
        mas também estou em busca de outros desafios. Tenho uma sede insaciável
        pelo conhecimento e por saber como tudo funciona, gosto de ir além da
        interface dos aplicativos e da parte superficial, gosto de saber como
        tudo funciona de baixo dos panos e ter uma visão global de como tudo
        isso se encaixa junto e resulta no produto final. No momento estou
        disponível para contratação ou algum projeto freelancer. Para entrar em
        contato comigo,{" "}
        <a href="mailto:andrewnationdev@gmail.com">clique aqui</a>.
      </Banner>
    </div>
  );
}
