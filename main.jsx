MainLayout = React.createClass({
	render(){
		return(
		  <div>
		    <Header />
		    <div className="container">
			    <UserControl />
			    <hr/>
		    	{this.props.content}
		    </div>
		    <Footer />
			</div>
		)
	}
});