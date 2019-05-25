import React, { Component } from 'react';

class NotFound extends Component {
  render() {
    return (
     
     <div className="alert alert-danger">
       <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
       <strong>Error!</strong> NOt found any pages
     </div>
     
    );
  }

}

export default NotFound;
