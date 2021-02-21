import React, { Component } from "react";
import "./Converter.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export default class Converter extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currencyA_value: "",
			currencyB_value: 0,
		};
		this.converter = this.converter.bind(this);
	}

	converter() {
		let from_to = `${this.props.currencyA}_${this.props.currencyB}`;

		let url = `https://free.currconv.com/api/v7/convert?q=${from_to}&compact=ultra&apiKey=ff5d681bac26408e25b3`;

		console.log("url", url);
		fetch(url)
			.then((res) => {
				return res.json();
			})
			.then((json) => {
				let exchange = json[from_to];
				let currencyB_value = (
					parseFloat(this.state.currencyA_value) * exchange
				).toFixed(2);
				this.setState({ currencyB_value });
			});
	}

	render() {
		return (
			<div>
				<Card className="root">
					<CardActionArea>
						<CardContent className="converter">
							<h2>
								{this.props.currencyA} to {this.props.currencyB}
							</h2>{" "}
							<TextField
								id="outlined-basic"
								label="Enter value to convert"
								variant="outlined"
								InputProps={{}}
								type="text"
								onChange={(event) => {
									this.setState({ currencyA_value: event.target.value });
								}}
							/>
							<Button
								type="button"
								variant="contained"
								color="secondary"
								onClick={this.converter}
							>
								Convert
							</Button>
							<h2>R$ {this.state.currencyB_value}</h2>
						</CardContent>
					</CardActionArea>
				</Card>
			</div>
		);
	}
}
