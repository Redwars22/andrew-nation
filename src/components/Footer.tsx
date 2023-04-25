import React from "react";
import Button from "./AndrewKit/button/button.component";

export default function Footer(){
	return <div style={{
		textAlign: "center",
		marginTop: "7rem",
		margin: "2rem",
		paddingTop: "1rem",
		borderTopColor: "#8080805e",
		borderTopStyle: "solid",
		borderTopWidth: "0.1rem",
		display: "flex",
		flexDirection: "column",
		gap: "1rem",
		alignItems: "center"
	}}>
		<span>© 2023. AndrewNation. Todos os Direitos Reservados. Site feito com AndrewKit, Atlaskit e ReactJS.</span>
		<div style={{maxWidth: "150px"}}>
			<Button 
				title={"Visite Meu GitHub"} 
				icon={"github"} 
				appearance={"success"} 
				action={()=>{
					window.open("https://github.com/Redwars22")
				}}
			/>
		</div>
	</div>
}