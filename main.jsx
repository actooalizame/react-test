MainLayout = React.createClass({
	render(){
		return(
		  <div>
		    <Header />
		    <div className="container">
		    	<AddTask />
		    	{this.props.content}
		    </div>
		    <Footer />
			</div>
		)
	}
});