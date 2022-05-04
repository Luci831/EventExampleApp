import React from 'react'


export class Buttons extends React.Component
{
	constructor()
	{
		super();
		this.state = {
		
			ctr: 0
		}
	}

	updateIncrement = () =>
		this.setState((prevState, props) => {
			return { ctr: prevState.ctr + 1 };
		})

	updateDecrement = () =>
		this.setState((prevState, props) => {
			return { ctr: prevState.ctr - 1 };
		})




		
	

	render() {
		return (
			<>
				<div>
					<p>{this.state.ctr}</p>
					
						

					<button onClick={this.updateIncrement}>Increment</button><br />

					<button onClick={this.updateDecrement}>Decrement</button>
					
					
				</div>
			</>
		)

	}
}
