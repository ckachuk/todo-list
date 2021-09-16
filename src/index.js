import logic from logic.js

function component() {
    const element = document.createElement('div');
    const p = document.createElement('p');

    p.innerHTML = logic.dates;
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    
    element.appendChild(p);
  
    return element;
  }
  
  document.body.appendChild(component());