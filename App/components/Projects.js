var React = require("react");



var containerStyles = {

    padding: '4px'
};





var projectText = [
"Real Time Voting App. This is a real-time updating voting app I created using Socket IO, NodeJS, ChartJS, Express (with Handlebars) and MongoDB. The charts update in real time as people vote without having to refresh or reload the page. Try it yourself! Create a poll (or choose one that has already been created to vote on), vote on it and view the chart. If you open a new tab or window and vote again, you should see the original chart was updated with the current data! The code for the app is on GitHub, and that is where you can find future tweaks I plan to make. Now, I know what you're thinking. Don't worry, right now the code that prevents you from voting multiple times has been removed. The link takes you to the app I released on Heroku.",
"This program is the very familiar and classic Simon Says game. When the game starts, you must copy the sequence of button presses the game gives you. After completing the sequence, the game will give you the same sequence again, but this time one additional push. The object is to get as far as you can without making a mistake.",
"This is self-explanatory. A basic calculator at the moment, but more buttons will be added in the future." , 
"This is a simple app that is designed to display the local weather (it takes your location automatically). The icon changes depending on what the weather is.",
"This portfolio page! Created with ReactJS, Node, Bootstrap and Express"];




var Projects = React.createClass({
    getInitialState: function () {
       return {paragraph: 'Hover over image for more information'};
        
    },
    handleSelect: function(num) {
    this.setState({paragraph: projectText[num]});
    },
    render: function() {
        return(
            <div>
            
            <h1 style = {{textAlign: 'center'}}>Personal Projects</h1>
            <div className = 'container center-block well' style = {containerStyles}>
                <div className = 'row'> 
                  <div className = 'col-sm-4' > <a target="_blank" href = 'https://realtime-voting-app.herokuapp.com/'> <img src ={'https://dl.dropboxusercontent.com/s/ci9xqjlngyjjok0/Voting%20App.jpg?dl=0'} 
                    className = 'img-responsive img-rounded'onMouseOver = {this.handleSelect.bind(this, '0')} /> </a> </div>
                    
                  <div className = 'col-sm-4'> <a target="_blank" href = 'http://codepen.io/doppleganger07/full/RRwRMj/' > <img src = {'https://dl.dropboxusercontent.com/s/r3rq78qb74uae5k/Simon%20Says.jpg?dl=0'} 
                    className = 'img-responsive img-rounded' onMouseOver = {this.handleSelect.bind(this, '1')} /> </a> </div>
                    
                  <div className = 'col-sm-4'> <a target = '_blank' href = 'http://codepen.io/doppleganger07/full/PzoOrd/'> <img src = {'https://dl.dropboxusercontent.com/s/rxwoqc160qw6gdb/calculator.PNG?dl=0'} 
                    className = 'img-responsive img-rounded' onMouseOver = {this.handleSelect.bind(this, '2')} /> </a> </div>
                    
                </div>
                <br />
                  <div className = 'row'> 
                  <div className = 'col-sm-4'> <a target = '_blank' href = 'http://codepen.io/doppleganger07/full/dXyXBZ/'> <img src = {'https://dl.dropboxusercontent.com/s/y5e1ea4nwuu4b8i/Weather%20App.jpg?dl=0'} 
                    className = 'img-responsive img-rounded' onMouseOver = {this.handleSelect.bind(this, '3')} /> </a> </div>
                    
                  <div className = 'col-sm-4'> <a> <img src = {'https://dl.dropboxusercontent.com/s/tt4gqj3x6oanemn/Default.jpg?dl=0'} 
                    className = 'img-responsive img-rounded' onMouseOver = {this.handleSelect.bind(this, '4')} /> </a> </div>
                    
                  </div>
            </div>
            <div className = 'container well'>
            <p id = 'project'>{this.state.paragraph} </p>
            
            </div>
            </div>
            );
    }
       
});

module.exports = Projects;