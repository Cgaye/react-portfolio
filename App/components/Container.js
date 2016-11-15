var React = require("react");
var Navbar = require("./Navbar");
var Projects = require("./Projects");
var AboutMe = require("./About");
var Contact = require("./Contact");
var Default = require("./Default");
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');


var componentToRender = <Default key = {'default'}/>;

var Container = React.createClass({
    getInitialState: function() {
        return {
            page: 'Default',
        };
    },
   
   
   
    componentWillUpdate: function (nextProps, nextState) {

        
        if(nextState.page == 'Default') { 
            componentToRender = <Default key = {nextState.page} />;
            }
            
        if (nextState.page == 'Projects') {
            componentToRender =  <Projects key = {nextState.page} />; 

        }
            
        if (nextState.page == 'Contact') {
            componentToRender = <Contact key = {nextState.page} />;
        }
        
        if (nextState.page == 'About') {
            componentToRender =   <AboutMe key = {nextState.page} />;
        }
        
                
    },
   
    pageSelected: function(newpage){
        this.setState({page:newpage});

    }, 

    
    render: function () {
        return (
            <div>
             <Navbar pageSelected = {this.pageSelected} />
             <ReactCSSTransitionGroup 
          transitionName="example" 
          transitionAppear={true} 
          transitionAppearTimeout={500}
          transitionEnterTimeout={500} 
          transitionLeaveTimeout={500}>
        
               {componentToRender} 
            
             </ReactCSSTransitionGroup>
            </div>
            
            );
    }
    
});


module.exports = Container;
