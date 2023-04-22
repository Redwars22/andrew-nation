import React from "react";
import Avatar from '@atlaskit/avatar';
import Comment, { CommentAuthor, CommentEdited, CommentTime } from '@atlaskit/comment';
import avatar from "../assets/avatar.jpg";

export default function AboutMe() {
    return (
        <div style={{ maxWidth: "50%", textAlign: "left", marginLeft: "auto", marginRight: "auto", marginTop: "2rem", marginBottom: "2rem" }}>
            <Comment
                edited={<CommentEdited>Estudante de Engenharia de Software</CommentEdited>}
                avatar={<Avatar name="André Pereira" src={avatar} />}
                author={<CommentAuthor>@AndrewNation</CommentAuthor>}
                time={<CommentTime>19 de Agosto de 2001</CommentTime>}
                content={
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                }
            />
        </div>
    )
}