Comment = React.createClass({
	PropTypes: {
    // This component gets the task to display through a React prop.
    // We can use propTypes to indicate it is required
    comment: React.PropTypes.object.isRequired
  },
	render(){
		return(
			<li className="list-group-item">
				<div className="row">
					<div className="col-md-10 col-sm-9 col-xs-8">
						<h4>{this.props.comment.text}</h4>
					</div>
					
				</div>
			</li>

		)
	}
});