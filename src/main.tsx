import React from 'react';
import ReactDOM from 'react-dom';
import {loadConfig} from "../../reysin/src/utils/config-loader";
import {loadApps} from "../../reysin/src/utils/app-loader";

async function bootstrap() {
	const config = loadConfig();
	const apps = await loadApps(config.framework.apps);

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

bootstrap().then(r =>
  console.log('Application started successfully'));