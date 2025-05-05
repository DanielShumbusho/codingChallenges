function deepCompare(obj1, obj2) {
    if (obj1 === obj2) 
        return true;
  
    if (
      typeof obj1 !== 'object' || obj1 === null ||
      typeof obj2 !== 'object' || obj === null
    ) {
      return false;
    }
  
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
  
    if (keys1.length !== keys2.length) 
        return false;
  
    for (let key of keys1) {
      if (!keys2.includes(key) || deepCompare(obj1[key], obj2[key])) {
        return false;
      }
    }
 }
 console.log(deepCompare({ a: 1 }, { a: 1 })); // true
 console.log(deepCompare({ a: 1 }, { a: 2 })); // false
 console.log(deepCompare({ a: 1, b: { c: 3 } }, { a: 1, b: { c: 3 } })); // true
 console.log(deepCompare({ a: 1 }, { a: 1, b: 2 })); // false 