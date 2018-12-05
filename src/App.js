import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function Header(props) {
  return (
    <header className="App-header">
      <h1>{props.myVar}</h1>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <br/>
      <br/>
      <div>
        <h3>👇 this part Or added 👇</h3>
          <p><a
            className="App-link"
            href="https://www.npmtrends.com/@angular/core-vs-angular-vs-react-vs-vue-vs-jquery"
            target="_blank"
            rel="noopener noreferrer"
          >
            comparison between @angular/core vs angular vs react vs vue vs jquery
          </a>
        </p>
      </div>
    </header>
  );
}

// lifecycles
// class App extends Component {
//   state = {
//     counter: 0,
//     text: '',
//   }
//
//   componentWillUnmount() {
//     console.log('---------componentWillUnmount--------');
//   }
//
//   componentDidMount() {
//     console.log('---------componentDidMount--------');
//   }
//
//   componentDidUpdate(prevProps, prevState) {
//     console.log('---------componentDidUpdate--------');
//   }
//
//   render() {
//     return (
//       <div className="App">
//         <h1 style={{ backgroundColor: 'yellow' }}>this is my text 👉 {this.state.text}</h1>
//         <input type="text" onChange={(e) => this.setState({ text: e.target.value })}/>
//         <button onClick={() => this.setState({ counter: this.state.counter + 1 })}>click me</button>
//         <h1 style={{ backgroundColor: 'blue' }}>this is my counter 👉 {this.state.counter}</h1>
//       </div>
//     );
//   }
// }

// state
// class App extends Component {
//   state = {
//     counter: 0,
//     text: '',
//   }
//
//   render() {
//     return (
//       <div className="App">
//         <h1 style={{ backgroundColor: 'yellow' }}>this is my text 👉 {this.state.text}</h1>
//         <input type="text" onChange={(e) => this.setState({ text: e.target.value })}/>
//         <button onClick={() => this.setState({ counter: this.state.counter + 1 })}>click me</button>
//         <h1 style={{ backgroundColor: 'blue' }}>this is my counter 👉 {this.state.counter}</h1>
//       </div>
//     );
//   }
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <Header myVar="learning react :)"/>
//     </div>
//   );
// }

export default App;
