var React = require("react");
var ReactBootstrap = require("react-bootstrap");
var Nav = ReactBootstrap.Nav;
var NavItem = ReactBootstrap.NavItem;
var Navbar = ReactBootstrap.Navbar;


var Navigation = React.createClass({
    pageSelect: function(val) {
      this.props.pageSelected(val);
    },

  render: function () {
      return (
      <div>
       <Navbar style = {{height: '150px', textAlign: 'center', paddingTop: '50px', marginBottom: '0px'}}>
    <Navbar.Header >
      <Navbar.Brand>
        <a>Curtis J Gaye <br /> Portfolio Page</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav style = {{display: 'inline-block', float: 'none'}} activeKey = {1} >
      <NavItem onClick = {this.pageSelect.bind(this, 'Default')}> Home </NavItem>
      <NavItem onClick = {this.pageSelect.bind(this, 'About')} >About Me</NavItem>
      <NavItem onClick = {this.pageSelect.bind(this, 'Projects')} >Projects</NavItem>
      <NavItem onClick = {this.pageSelect.bind(this, 'Contact')} >Contact Me </NavItem>
    </Nav>
  </Navbar>
       
      </div>
      );
  }
    
});

module.exports = Navigation;