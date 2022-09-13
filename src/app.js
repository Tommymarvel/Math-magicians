import { Component } from 'react';
import Calculator from './component/calculator';
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Calculator />
    );
  }
}
export default App;
