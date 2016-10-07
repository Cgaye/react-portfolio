var React = require("react");
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var AboutMe = React.createClass ({
    render: function () {
        return (
            <div>
              <img src = 'https://dl.dropboxusercontent.com/s/zeqovls4mcodxbh/New%20About.jpg?dl=0' style = {{flex: 1, resizeMode: 'stretch', opacity: '0.2'}} />
            <div className = 'container well' style = {{textAlign: 'center', position: 'absolute', top: '350px', left: '400px', fontFamily: 'Arial-Black'}}>
            <h1>About Me </h1>
  <p>This is where I'll update a few of my completed and soon to be completed coding projects. I'm a self-taught developer (Front and Backend) with a degree in Mathematics from Kennesaw State University.
  I'm currently confident in the following languages, frameworks and libraries: 
    </p>
  <br />
    
      Javascript <br />
      HTML <br />
      CSS <br />
      JQuery <br />
      Node.JS <br />
      MongoDB <br />
      ReactJS <br />
      Socket.IO <br />
      Express using Handlebars <br />
      Bootstrap <br />
      
  
 

 
            </div>
            </div>
            );
    }
    
});

module.exports = AboutMe;