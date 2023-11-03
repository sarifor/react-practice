// import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  state = {
    num: 0,
  };

  increase() {
    this.setState((current) => ({ num: current.num + 1 })); {/* TypeError: Cannot read properties of undefined (reading 'setState') */}
    console.log('increase 메서드의 this는 ', this); // increase 메서드의 this는  App {props: {…}, context: {…}, refs: {…}, updater: {…}, state: {…}, …}
  }

  render() {
    return (
      <div>
        <h1>Class Component this</h1>
        <h2>{this.state.num}</h2>
        <button onClick={this.increase.bind(this)}>Increase</button> {/* 기존 increase 메서드에 render()의 this인 App을 바인딩함 */}
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
