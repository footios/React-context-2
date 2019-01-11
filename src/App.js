import React from 'react'
import Person from './Person'

export const AuthContext = React.createContext(false)

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			auth: false
		}
	}

	handleAuth = () => this.setState({ auth: !this.state.auth })

	render() {
		return (
			<AuthContext.Provider value={this.state.auth}>
				<Person onClick={this.handleAuth} />
			</AuthContext.Provider>
		)
	}
}

export default App
