import React from 'react';

import './DrawerToggleButton.css'
const drawerToggleButton = props => (
	<button className="toggle-button" onClick={props.click}>
	<div class="toggle-button__line" />
	<div class="toggle-button__line" />
	<div class="toggle-button__line" />
	</button>
	);

export default drawerToggleButton;