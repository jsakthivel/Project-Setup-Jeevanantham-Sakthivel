import './App.css';
import PropTypes from 'prop-types';
import { sub } from './sub.ts';

const add = (n1, n2) => {
  const result = n1 + n2;
  return `${n1} + ${n2} = ${result}`;
};

function App({ n1, n2 }) {
  return (
    <div className="App">
      <h1>Add</h1>
      <h2>{add(n1, n2)}</h2>
      <br />
      <h1>Sub</h1>
      <h2>{sub(n1, n2)}</h2>
    </div>
  );
}

App.propTypes = {
  n1: PropTypes.number,
  n2: PropTypes.number,
};

App.defaultProps = {
  n1: 0,
  n2: 0,
};

export default App;
