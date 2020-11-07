// E S M
import { addTwo as fun }  from './addTwo.mjs';

import addThree from './addThree.mjs'

import * as fourFive from './add45.mjs'

// Prints: 6
console.log(fun(4));
// node -v  v12.16.3    
// поэтому используем
// node --experimental-modules app.mjs  


console.log(addThree(7));

// импорт через звёздочку
console.log(fourFive.add4(0))
console.log(fourFive.add5(0))