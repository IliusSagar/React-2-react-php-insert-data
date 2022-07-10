import axios from 'axios';
import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    text : ""
  };

  handleAdd = async e => {
    await this.setState({
      text : e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.text);
    let formData = new FormData();
    formData.append("text",this.state.text);
    const url = "http://localhost/REACT-PROJECT/2.api-react-php/";
    axios.post(url,formData)
    .then(res=> console.log(res.data))
    .catch(err=> console.log(err));
  }

  render() {
    return(
      <div className="App-header">
      <div className='container'>
      
        <input 
        onChange={this.handleAdd}
      
        className='form-control' 
        type="text" 
        id="text" 
        placeholder='enter some text' />

     <br/>
     <button 
     onClick={this.handleSubmit}
     className="btn btn-success" 
     id="submit">Save</button>
    
        
      </div>
    </div>
    );
  }
}



export default App;
