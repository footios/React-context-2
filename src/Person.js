import React from 'react'
import { AuthContext } from './App'

export default props => (
	<div>
		<button onClick={props.onClick}>toggle auth</button>
		<p>
			<AuthContext.Consumer>
				{auth => (auth ? 'User is authorized.' : 'User is not authorized.')}
			</AuthContext.Consumer>
		</p>
	</div>
)
