import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'


function BookList(){
  return(
    <table>
      <section>
        <td> <Book/> </td>
        <td> <Book/> </td>
        <td> <Book/> </td>
      </section>
    </table>
    
  );
}


const Book = () => {
  return(
    <article>
      <Image/>
      <Title/>
      <Author/>
    </article>
  );
};

const Image = () => <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd1HDSeSQYq7ciCTaHHZI0xK2Sb8uYmODs9g&usqp=CAU" alt='' />

const Title = () => <h1>The monk who sold his ferrari</h1>

const Author = () => <h4>Robin Sharma</h4>



ReactDOM.render(<BookList/>, document.getElementById('root'));    //what is this ???