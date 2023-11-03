// import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  state = {
    num: 0,
  };

  increase() {
    this.setState((current) => ({ num: current.num + 1 }));
    console.log('increase 메서드의 this는 ', this); // increase 메서드의 this는  App {props: {…}, context: {…}, refs: {…}, updater: {…}, state: {…}, …}
  }

  render() {
    return (
      <div>
        <h1>Class Component this</h1>
        <h2>{this.state.num}</h2>
        <button onClick={() => this.increase()}>Increase</button> {/* 화살표 함수가 상위 스코프인 render() 메서드의 this인 App을 바인딩해 줌 */}
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
