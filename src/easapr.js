import React from 'react';

import MyForm from './components/MyForm.jsx';

class EasaprApp extends React.Component {
  render(){
    return(
      <div>
      hello easapr {this.props.name}
      <MyForm/>
      </div>
    )
  }
}

export default EasaprApp;
