

var BugFilter = React.createClass({
	render: function(){
		return (
			<div className ="bugFilter"> 
				A way to filter list of bugs will come here.
			</div>
		);
	}
});

var BugRow = React.createClass ({
	render: function(){
		return(
			<tr> 
				<td> {this.props.bug.id} </td>
				<td> {this.props.bug.status}</td>
				<td> {this.props.bug.priority}</td>
				<td> {this.props.bug.owner }</td>
				<td> {this.props.bug.title}</td>
			</tr>
		);
	}
});

var BugTable = React.createClass({
	render: function(){
		var bugRows = this.props.bugs.map(function(bug){
			return < BugRow key ={bug.id} bug = {bug} />
		});
		return (
			<div className ="bugTable"> 
				The  list of bugs as a filter would  come here.
				<table>
					<thead>
						<tr>
							<th> Id </th>
							<th> Status </th>
							<th> Priority </th>
							<th> Owner </th>
							<th> Title </th>
						</tr>
					 </thead>
					 <tbody>
					 	{bugRows}
					 </tbody>
				</table>
			</div>
		);
	}
});

var BugAdd = React.createClass({
	render: function(){
		return (
			<div className ="bugAdd"> 
				A form to add a new bug  will come here.
			</div>
		);
	}
});

var bugData =[
{id : 1 , priority :"P1" ,status: "Open", owner :"Raven" ,title :"App crashes on open"},
{id: 2, priority:"P2", status:"New", owner :"Eddie", title :"Misaligned border on panel"}
];

var BugList= React.createClass({
	getIntialState :function(){ 
			return {bugs: bugData};
		},
	render: function (){
		return (
			<div>
				<h1>Bug Tracker </h1> 
				<BugFilter />
				<hr />
				<BugTable bugs={this.state.bugs}/> //
				<hr />
				<BugAdd />
			</div>
		);
	}
});

ReactDOM.render(
        <BugList/>,
        document.getElementById('main')
      );