import React from 'react';
import {ReysinConfig, loadConfigBrowser} from "@reysin/project/dist/config/config-loader";
import {createRoot} from "react-dom/client";
import App from "./App";

loadConfigBrowser().then((config: ReysinConfig) => {
	console.log(config)

	const container = document.getElementById(config.app.rootElement);
	const root = createRoot(container!);
	root.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>
	)
}).then(() => console.log('Application started successfully'))
	.catch((error: any) => console.error('Failed to start application:', error));