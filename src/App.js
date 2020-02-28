import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      buttons: [
                'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
                'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l',
                'z', 'x', 'c', 'v', 'b', 'n', 'm'
              ],
      options: ['vue', 'angular', 'react', 'java', 'php', 'ruby', 'python',
                'perl', 'lisp', 'javascript', 'visualbasic', 'pascal',
                'assembly', 'swift', 'kotlin'],
      selectedOption: [],
      result: [],
      mistakes: 0,
    }
  }
  componentDidMount(){
    this.setState({
      selectedOption: this.state.options[Math.floor(Math.random() * this.state.options.length)].split(''),
    }, () => {
      this.setState({
        result: this.state.selectedOption.map((letter, index) => "_ ")
      })
    })
  }
  componentDidUpdate(){
    if (this.state.mistakes == 7){
      alert("You lost the game!")
      window.location.reload();
    }
    if (this.state.result.join(',') == this.state.selectedOption.join(',')){
      alert("You won the game!")
      window.location.reload();
    }
  }
  onClick = (event) => {
    let flag = false;
    this.setState({
      result: this.state.selectedOption.map( (element, index) => 
        element == this.state.buttons[event.target.id] 
        ? (flag = true, element)
        : this.state.result[index]
      )
    }, () => 
      flag 
      ? null
      : this.setState({mistakes: this.state.mistakes + 1})
    )
  }
  render(){
    return (
      <div className = "App">
        <div className="image">

        <img src = {`/hangman_${this.state.mistakes}.jpg`} />
        </div>
        <br/><br/><br/> <br/><br/><br/>
        <br/>
        <div className="result">
        {this.state.result.map((element, index) => element)}
          </div> 
       
        <br /><br/>
        <div className = "buttons">
          {this.state.buttons.map((button, index) => 
              <button 
                key = {index}
                id = {index}
                onClick = {this.onClick}>
                {button}
                </button>
          )}
        </div>
      </div>
    );
  }
}

export default App;
