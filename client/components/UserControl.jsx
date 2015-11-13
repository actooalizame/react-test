UserControl = React.createClass({
	render(){
		return(
			<div className="row">
	    	<div className="col-sm-4 col-sm-offset-3">
	    		<AddTask />
	    	</div>
	    	<div className="col-sm-2">
	    		<HideCompleted />
	    	</div>
	    </div>
			)
	}
});