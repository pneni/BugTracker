# bugtracker
Practice application on Node Express React and mongo


"Hello World"

Step 1: 

	1. Create an index.html file on your filesystem with (almost) the same contents as the quick start.
	2. Replace the scripts build/react.js and build/react-dom.js with the ones from the CDN, so that it looks like the one in the Tutorial.
	3. Open index.html in a browser
	
Step 2: Serve it up

	1.Install nvm and the latest version of Node. 
	2. Run npm init and install express as per the Express Installation instructions.. Remember to use --save. We'll be using --save in pretty much all our npm installs.
	3.Use webapp.js as the entry point for the node server when you do npm init.
	4.Create a simple static file server to serve the index.html, which shall be placed under the directory static.
	5.Run the server using node webapp.js and point your browser to localhost:3000.

"Organize"

Step1: Split HTML and JS

 	1. Create a new file App.js along side index.html.
 	2.Move the script contents from index.html and use src= to refer to the new file.

 Step2: 

 	1. Move App.js to an src folder.
 	2. Install babbel-present -react(locally) and babel-cli (globally) 

 "Compose Components"

 Step 1 : Use React createClass

 	1.Create a component called BugList which renders just a div with placeholder text. Render this component in the ReactDOM.render() method.

 Step 2: compose components 

    1. Create three classes - BugFilter, BugTable and BugAdd, with place holder text indicating that each section is meant for a filter, a table to list all the bugs, and a form to add a new bug.
    2. Replace the placeholder in BugList with these three classes.

 Step 3: Communicate between components 

    1. Create a new class BugRow for a single table row for a bug, which displays one column each for id, status, priority, owner, title of the bug.
    2. Create a bordered table with a header
    3. Add two BugRow instances from within <tbody> of the Bug Table.
    4. Pass the bug attributes as parameters as props from BugList

Step 4: Dynamic composition 

	1.  create a global array of bugs.
	2. Pass this as the props variable bugs from the BugList class down to the BugTable class.
	3. Create an array of <BugRow> classes in the render() function of BugTable based on the passed-in props.bugs, and replace the hard-coded <BugRow>s with this.

"Dynamic Update"

Step1: Create initial State... 

	1. Add getInitialState() function to BugList which returns the global bugs data
	2. Look at the props passed in from BugList to BugTables.Replace this with state

Step2: Update the state... 

	1. Add Test Button in Buglist which will trigger a test Methodsin the same class on an onclick event.
	2. Add Test Method which call another method addBug()toadd bug,taking object as a parameter.
	3.Add Addbug funciton to copy the current state's bug list, modify it and push the new bug in to the bug list....
	4.Add a console lod message in render().

Step3: Communicate Child to parent....

	1. Add a form replacing the placeholder text in BugAdd.
	2. Pass addBugg function as a props variable to the BugAdd class.
	3. Remove the test button and its handler. Add Handler( onClick or onSubmit) to the BugAdd class.
	4. In the handler,call the passed-in-props: the addBug function. Create a bug object by looking at the form values the traditional way, i.e using form input values.