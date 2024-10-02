import React from 'react';
import ReactDOM from 'react-dom';
import {loadApps} from "@reysin/project/dist/utils/app-loader";
import {loadConfig} from "@reysin/project/dist/config/config-loader";
const config = loadConfig();

async function bootstrap() {
	console.log(config)
	// const apps = await loadApps(config.framework.apps);

	const App: React.FC = () => (
		<div>
			<p>test</p>
		</div>
	);

	ReactDOM.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>,
		document.getElementById(config.app.rootElement)
	);
}

bootstrap().then(r => console.log('Application started successfully'));