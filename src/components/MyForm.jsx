import React from 'react';
import {Button} from 'react-bootstrap';

class MyForm extends React.Component {
  render() {
    return(
      <div className='main-form'>
        <Button
          bsSize='large'
          bsStyle='success'>
          click me
        </Button>
      </div>
    );
  }
}

export default MyForm;
