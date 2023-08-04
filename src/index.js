const A = require('./ModuleA.js');
const B = require('./ModuleB.js');

const objToString = (obj) => {
  const keys = Reflect.ownKeys(obj);
  return keys.reduce((pre, cur) => {
    pre[cur] = obj[cur];
    return pre;
  }, {});
};

const p = document.createElement('p');
p.style.cssText = `
 white-space: pre;
 margin: 60px;
`;
p.innerHTML = `module A:

${JSON.stringify(objToString(A), null, 2)}


module B:

${JSON.stringify(objToString(B), null, 2)}
`;

document.body.appendChild(p);
