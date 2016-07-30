import React from 'react';

import MyForm from './components/MyForm.jsx';

class EasaprApp extends React.Component {
  render(){
    return(
      <div>
      {this.props.name}
      <MyForm/>
      </div>
    )
  }
}

export default EasaprApp;
