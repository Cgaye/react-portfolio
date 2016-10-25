var React = require("react");
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');




var Default = React.createClass({
    render: function () {
        return (
            
            
            <div>
            
             <img src = 'https://dl.dropboxusercontent.com/s/nrb9u22v82n6e9c/New%20Default.jpg?dl=0' 
             style = {{flex: 1, resizeMode: 'stretch', opacity: '0.2'}} 
             />
            <div className = 'container center-block'>
           
            <div style = {{position: 'absolute', top: '400px', left: '830px' }}>
            <div style = {{opacity: '1.0', textAlign: 'center', fontFamily: 'Arial-Black'}}>
            <h1 style = {{fontSize: '5em'}}> Curtis Gaye </h1>
            <p> Portfolio Page </p>

            
            </div>
        </div>
            </div>
            </div>
            
            );
    }
});

module.exports = Default;