// import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  state = {
    num: 0,
  };

  increase() {
    this.setState((current) => ({ num: current.num + 1 }));
    console.log('increase 메서드의 this는 ', this);
  }

  render() {
    return (
      <div>
        <h1>Class Component this</h1>
        <h2>{this.state.num}</h2>
        <button onClick={this.increase}>Increase</button> {/* TypeError: Cannot read properties of undefined (reading 'setState') */}
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
