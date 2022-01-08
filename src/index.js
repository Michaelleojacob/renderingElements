import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// ==================
//? < basic >

// const element = <h1>Hello, world!</h1>;
// ReactDOM.render(element, document.getElementById('root'));

//? </ basic >
// ==================

// ==================
//? < updating the rendered element >
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}
//* every second, the setInterval will run tick which invokes ReactDOM.render()
setInterval(tick, 1000);

//? </ updating the rendered element >
// ==================
