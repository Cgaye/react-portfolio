var React = require("react");
var Navbar = require("./Navbar");
var Projects = require("./Projects");
var AboutMe = require("./About");
var Contact = require("./Contact");
var Default = require("./Default");
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');


var componentToRender = 
 <ReactCSSTransitionGroup transitionName = "example"
    transitionAppear = {true} transitionAppearTimeout = {500}>         

<Default />

</ReactCSSTransitionGroup>
;

var Container = React.createClass({
    getInitialState: function() {
        return {
            page: 'Default',
        };
    },
   
   
    componentWillUpdate: function (nextProps, nextState) {
        if(nextState.page == 'Default') { 
            componentToRender = <ReactCSSTransitionGroup transitionName = "example"
    transitionAppear = {true} transitionAppearTimeout = {500}>         

<Default />

</ReactCSSTransitionGroup>
; }
            
        if (nextState.page == 'Projects') {
            componentToRender = <ReactCSSTransitionGroup transitionName = "example"
    transitionAppear = {true} transitionAppearTimeout = {500}>         

<Projects />

</ReactCSSTransitionGroup>; 

        }
            
        if (nextState.page == 'Contact') {
            componentToRender = <ReactCSSTransitionGroup transitionName = "example"
    transitionAppear = {true} transitionAppearTimeout = {500}>         

<Contact />

</ReactCSSTransitionGroup>;
        }
        
        if (nextState.page == 'About') {
            componentToRender =<ReactCSSTransitionGroup transitionName = "example"
    transitionAppear = {true} transitionAppearTimeout = {500}>         

<AboutMe />

</ReactCSSTransitionGroup>;
        }
        
                
    },
   
    pageSelected: function(newpage){
        this.setState({page:newpage});

    }, 

    
    render: function () {
        return (
            <div>
             <Navbar pageSelected = {this.pageSelected} />
            <div>
               {componentToRender} 
             </div>
            </div>
            
            );
    }
    
});


module.exports = Container;
