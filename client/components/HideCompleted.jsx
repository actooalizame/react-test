HideCompleted = React.createClass({
	getInitialState() {
    return {
      hideCompleted: false
    }
  },
  
  toggleHideCompleted() {
  	const hideCompleted = this.state.hideCompleted;
    this.setState({
      hideCompleted: ! hideCompleted
    });
    jQuery('.completed').toggleClass('hidden')
  },

	render(){
		return(
			<div className="checkbox checkbox-info checkbox-inline checkbox-circle">
		    <input type="checkbox" ref="hideCompleted" readOnly={true} checked={this.state.hideCompleted} onClick={this.toggleHideCompleted} id="hideCompleted" />
		    <label htmlFor="hideCompleted">
		    	Hide completed
		    </label>
		  </div>
			)
	}
});