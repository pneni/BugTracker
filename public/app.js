

var BugFilter = React.createClass({
	render: function(){
		console.log("Rendering BugFilter");
		return (
			<div className ="bugFilter"> 
				A way to filter list of bugs will come here.
			</div>
		);
	}
});

var BugRow = React.createClass ({
	render: function(){
		console.log("Rendering BugRow:", this.props.bug);
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
		console.log("Rendering bug table, num items", this.props.bugs.length);
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
		console.log("Rendering BugAdd");
		return (
			<div> 
				<form name= "bugAdd">
					<input type = "text" name ="owner" placeholder = "Owner"/>
					<input type ="text" name = "title" placeholder = "Title"/>
					<button onClick = {this.handleSubmit}> Add Bug </button>
				</form>
			</div>
		);
	},

	handleSubmit: function(e){
		e.preventDefault();
		var form = document.forms.bugAdd;
		this.props.addBug({owner : form.owner.value,
											 title: form.title.value,
											 status : 'New',
											 priority: 'P1'
											})
		form.owner.value = ""; form.title.value="";
	}
});

var bugData =[
{id : 1 , priority :"P1" ,status: "Open", owner :"Raven" ,title :"App crashes on open"},
{id: 2, priority:"P2", status:"New", owner :"Eddie", title :"Misaligned border on panel"}
];

var BugList= React.createClass({
	getInitialState: function() {
		console.log("this is bug data" + bugData);
	return {bugs: bugData};
	},
	render: function (){
		console.log("Rendering buglist,numitems:", this.state.bugs.length);
		return (
			<div>
				<h1>Bug Tracker </h1> 
				<BugFilter />
				<hr />
				<BugTable bugs ={this.state.bugs}/>
				<hr />
				<BugAdd addBug ={this.addBug}/>
			</div>
		);
	},

	addBug: function(bug){
		console.log("Adding Bug:" , bug);
		var bugsModified = this.state.bugs.slice();
		bug.id = this.state.bugs.length +1;
		bugsModified.push(bug);
		this.setState({bugs: bugsModified});
	}
});

ReactDOM.render(
        <BugList/>,
        document.getElementById('main')
      );