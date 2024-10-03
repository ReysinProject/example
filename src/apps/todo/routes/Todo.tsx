import React from 'react';
import {defineRoute} from "@reysin/project/dist/core/defineRoute";

function Render() {
	return (
		<div
			style={{
				padding: 20,
        border: "1px solid black"
			}}
		>
      <h2>Composant Page</h2>
      <p>Bienvenue sur notre site web</p>
    </div>
	);
}

function Layout() {
	return (
    <div style={{
			padding: 20,
      border: "1px solid black"
		}}>
      <h1>Layout</h1>
      <Render/>
    </div>
  );
}

@defineRoute({
	path: "/",
	meta: {
		title: "Accueil",
		description: "Page d'accueil de notre application"
	},
	render: Render,
	layout: Layout
})
export class HomeRoute {}