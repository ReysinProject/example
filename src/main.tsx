import React from 'react';
import {AppContainer, Reysin, ReysinApp} from "@reysin/project";

new Reysin(
	(container: AppContainer) => {
		return (<React.StrictMode>
			<ReysinApp container={container}/>
		</React.StrictMode>)
	}
)
