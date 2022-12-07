import React from 'react';
import ReactDOM, {render} from 'react-dom';

class MyForm extends React.Component{
  constructor(props){
    super(props);
    this.state={
      username:'',
      age:null,
    };
  }

  mySubmitHandler = (event) => {
    event.preventDefault();
    let age= this.state.age;
    if(!Number(age))
    {
      alert("Age should be number")
    };
    
  }

  myChangeHandler = (event) =>{
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }

render(){
  return (
    <form onSubmit={this.mySubmitHandler}>
      <h1> Hii, My name is {this.state.username} {this.state.age}</h1>
      <p> Enter your name: </p>
      <input type='text' name='username' onChange={this.myChangeHandler}/>
      <p> Enter your age: </p>
      <input type='text' name='age' onChange={this.myChangeHandler}/>
      <br/>
      <br/>
      <input type='Submit'/>
    </form>
  );
}
}
 
ReactDOM.render(<MyForm/>,document.getElementById('root')
);
