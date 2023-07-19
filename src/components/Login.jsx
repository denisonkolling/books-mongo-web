import React, { Component } from 'react';

export default class Login extends Component {
	
	constructor(props) {
		super(props);
		this.state = { email: '', password: '', message: '' };
	}
	
	onLoginClick = async () => {
		console.log(this.state);
	
		var response = await fetch(
			`http://localhost:5000/users?email=${this.state.email}&password=${this.state.password}`,
			{ method: 'GET' }
		);
	
		var body = await response.json();
		console.log(body);
	
		if (body.length > 0) {
			
			this.setState({
				message: <span className="text-success">Successfully Logged-in</span>,
			});
		} else {
			
			this.setState({
				message: (
					<span className="text-danger">Invalid login, please try again</span>
				),
			});
		}
	};

	render() {
		return (
			<div className="container mt-3">
				<div className="row">
					<div className="col-md-6 offset-md-3">
						<div className="card">
							<h4 className="m-1 p-2 border-bottom text-center">Login</h4>

							
              <div className="card-body">
							<div className="form-group form-row">
								<label className="col-lg-4">Email</label>
								<input
									type="text"
									className="form-control"
									value={this.state.email}
									onChange={(event) => {
										this.setState({ email: event.target.value });
									}}
								/>
							</div>
							

							
							<div className="form-group form-row">
								<label className="col-lg-4">Password</label>
								<input
									type="password"
									className="form-control"
									value={this.state.password}
									onChange={(event) => {
										this.setState({ password: event.target.value });
									}}
								/>
							</div>
							

							<div className="text-right">
								{this.state.message}

								<button
									className="btn btn-primary m-1"
									onClick={this.onLoginClick}>
									Login
								</button>
                </div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	} 


}
