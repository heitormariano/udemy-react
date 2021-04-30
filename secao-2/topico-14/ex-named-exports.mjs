import { myCube, myObj, value } from './named-exports.mjs';

console.log(myCube(2));
console.log('Object: ' + myObj.firstName + myObj.lastName);
console.log('Value: ' + value);
