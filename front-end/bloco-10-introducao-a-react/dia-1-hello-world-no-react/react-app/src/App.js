import logo from './logo.svg';
import './App.css';

const array = ['HTML', 'CSS', 'JavaScript', 'React'];

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

class App extends React.Component {
  render() {
    return (
      <ul>{array.map(item => Task(item))}</ul>
    );
  }
}

export default App;