var React = require("react");

var ContactMe = React.createClass({
    render: function () {
        return (
            <div>
      <img src = 'https://dl.dropboxusercontent.com/s/caolun723f8dojq/Contact.jpg?dl=0' style = {{flex: 1, resizeMode: 'stretch', opacity: '0.2'}} />


        <div className = 'container well' style = {{textAlign: 'center' , position: 'absolute', top: '350px', left: '400px', fontFamily: 'Arial-Black'}} >
         <h1>
              Contact Me:
         </h1>
  <br />
  <br />

  <p> 
    Please contact me via email:
     
    curtisgaye5@bellsouth.net
    <br />
    
    
    <a target="_blank" href="https://www.linkedin.com/public-profile/settings?trk=prof-edit-edit-public_profile">LinkedIn </a>
    
    <br />
     <a target="_blank" href="https://github.com/Cgaye">GitHub</a>
  </p> 
        
        
        </div>
        </div>
        );
    }
    
});

module.exports = ContactMe;
