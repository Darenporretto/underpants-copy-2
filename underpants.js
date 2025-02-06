// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';
//Functional Library
// Functional libraries can be imported into other coding projects

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
/*
I: Function takes in a value. 
O: Function should return a value. 
C: The returned value should be unchanged. 
E: N/A
*/

_.identity = function(value) {
    return value;
}

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
/*
I: Function takes in a value. 
O: Function returns the value as a string. 
C: N/A
E: N/A
*/
_.typeOf = function(value) {
    // Check if array is an array
    if (Array.isArray(value)) {
        return "array";
    }

    // Check for null it returns "object"
    if (value === null) {
        return "null";
    }

    // Check for other types
    return typeof value;
};

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
I: Function takes in a number and an array
O: Function should return an array
C: N/A
E: Check if number is negative. Check if number is greater than array.length.
*/

_.first = function(array, number){
    // Check if array is not an array
    if (!Array.isArray(array)) {
        return [];
    }

    // If number is not given or not a number, return just the first element in array
    if (number === undefined || typeof number !== 'number') {
        return array[0];
    }

    // If number is negative return empty array
    if (number < 0) {
        return [];
    }

    // If number is greater than array.length return entire array
    if (number > array.length) {
        return array;
    }

    // Otherwise return the first number items of array
    return array.slice(0, number);
};

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
I: Function takes in an array and a number
O: Function shouold return just the last element in array if number is nor given or NaN, or if array is not an array, return [], otherwise, return the last number items of array
C: N/A
E: Check if number is negative.  Check if number is greater than array.length. 
*/

_.last = function(array, number) {
    // Check if array is not an array
    if (!Array.isArray(array)) {
        return [];
    }

    // If number is not given or is not a number, return the last element of the array
    if (number === undefined || typeof number !== 'number') {
        return array[array.length - 1];
    }

    // If number is negative return empty array
    if (number < 0) {
        return[];
    }

    // If number is greater than array length return the entire array
    if (number > array.length) {
        return array;
    }

    // Otherwise return the last number items of the array
    return array.slice(-number);
};


/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
I: Function takes in an array and a value. 
O: Function should return the index of array that is the first occurrance of value. Return -1 if value is not in array
C: Do not use [].indexOf()
E: Check if array has multiple occurances of val. Check if val isn't in array. 
*/
_.indexOf = function(array, value) {
    // Iterate through the array using a for loop
    // Check if the element matches the value
    for (let i = 0; i < array.length; i++) {
        // If current element is equal to the value, return the index
        if (array[i] === value) {
            return i;
        }
    }

    // If no matched value found return -1
    return -1;
};

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
I: Function takes in an array and a value. 
O: Function should return true if value if found, otherwise false. 
C: Function must use the ternary operator in the implementation.
E: Check if no value is given. 
*/

_.contains = function(array, value) {
    // Using the ternary operator to return true if value if found, otherwise false
    return array.indexOf(value) !== -1 ? true : false;
}


/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
I: Function takes in a collection and a function. 
O: Function should return elemnts or key value pairs. 
C: Function must be able to handle arrays and objets. 
E: If the collection is not an array or an object the implentatoin may fail or do nothing. 
*/

_.each = function(collection, func) {
    // Check if collection is an array
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            func(collection[i], i, collection);  
            // Call func with element, index, collection
        }
    } else if (typeof collection === 'object' && collection !== null) {
        for (let key in collection) {
            if (collection.hasOwnProperty(key)) {
                func(collection[key], key, collection);  
                // Call func with value, key, collection
            }
        }
    }
};


/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
I: Function takes in an array. 
O: Return a new array of all elements with duplicates removed. 
C: Use _.indexOf from above. 
E: If input is empty. 
*/

_.unique = function(array) {
    // Initialize empty array to store unique elements
    let uniqueArray = [];
    
    // Loop through the original array
    for (let i = 0; i < array.length; i++) {
        // Check if the element is not already in the uniqueArray
        if (_.indexOf(uniqueArray, array[i]) === -1) {
            uniqueArray.push(array[i]); // Add it to the uniqueArray
        }
    }
    
    // Return the new array with unique values
    return uniqueArray;
};


/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
I: Function takes in an array and a function. 
O: Function should return a new array of elements for which calling function returned true. 
C: Should call function for each element passing the arguments: the element, it's index, array. 
E: Check if function returns something other than true or false.
*/

_.filter = function(array, func) {
    // Initialize empty array to store elements that pass functions test
    let result = [];  
    
    // Use _.each to iterate through the array
    _.each(array, function(element, index, array) {
        // Call the function and check if it returns true
        if (func(element, index, array)) {
            // Add element to result if function returns true
            result.push(element);  
        }
    });
    
    // Return new array with the filtered values
    return result;
};


/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
I: Function takes in an array and a func. 
O: Function returns a new array of elements for which calling function returned false. 
C: Function is the inverse of _.filter. 
E: Function handles non boolean vals retturned by empty arrays and elements. 
*/

_.reject = function(array, func) {
    // Initialize empty array to hold elements that do not pass 
    let result = [];
    
    // Iterate through the array
    for (let i = 0; i < array.length; i++) {
      // If func returns false push the element into the result array
      if (!func(array[i], i, array)) {
        result.push(array[i]);
      }
    }
    
    // Return the result array
    return result;
  };
  


/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
I: Function takes in an arrray and a func. 
O: Function should return array of arrays. 
C: Call the function for eac element in arrays passing args. 
E: Function return should always be an array with truthy and falsy subarrays.
*/

_.partition = function(array, func) {
    // Initialize two new arrays to store truthy & falsy values
    let truthy = [];
    let falsy = [];
    
    // Iterate through the array
    for (let i = 0; i < array.length; i++) {
      // Call the func with current element. its index. the array. 
      // If func returns a truthy value push it to the truthy array
      // Otherwise push it to the falsy array
      if (func(array[i], i, array)) {
        truthy.push(array[i]);
      } else {
        falsy.push(array[i]);
      }
    }
    
    // Return an array with the two subarrays
    return [truthy, falsy];
  };
  

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
I: Function takes in a collection and a func. 
O: Function returns a new array. 
C: Must call function for each element in the collection. 
E:  
*/
_.map = function(collection, func) {
    // Create ouput array
    const output = [];
    // Is the collection an array
    if (Array.isArray(collection)) {
        for ( let i = 0; i < collection.length; i++) {
            const result = func(collection[i], i, collection); 
            output.push(result);
        }
    // Else it's an object    
    } else { 
        // Loop over objrct keys
        for (let key in collection) {
            if (collection.hasOwnProperty(key)) {
                // Call the function with value key and collection
                const result = func(collection[key], key, collection);
                // Push result of func call to output aray
                output.push(result);
            }
        }
    }
    // Return output array
    return output;
};

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
I: Function takes in an array and a property. 
O: Function returns array of vales removed. 
C: Function must use _.map() in the implementation. 
E: If array is empty result will be an ampty array. 
*/

_.pluck = function(array, property) {
    // Use _.map() to iterate through array and call the function on it
    return _.map(array, function(element) {
        // Return an array of the removed values
        return element[property];
    });
};

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
I: Function takes in a collection and a func
O: Function returns true if value of calling function for each element. Otherwise false. 
C: Function should not have side effects. 
E: Check if every element is truthy or falsy. This works for both arrays and objects.
*/

_.every = function(collection, func) {
    // If no func is provided check if all elements are truthy
    if (func === undefined) {
        // Check if collection is an array
        if (Array.isArray(collection)) {
            for (let i = 0; i < collection.length; i++) {
                // If any element is falsy
                if (!collection[i]) { 
                    return false;
                }
            }
        }
        // Check collection is an object
        else {
            for (let key in collection) {
                // If any value is falsy
                if (!collection[key]) { 
                    return false;
                }
            }
        }
        // Return true if all elements are truthy
        return true; 
    }

    // If function is provided apply it to all elements in collection
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            // If func returns false
            if (!func(collection[i], i, collection)) { 
                return false;
            }
        }
    } else {
        for (let key in collection) {
            // If func returns false
            if (!func(collection[key], key, collection)) { 
                return false;
            }
        }
    }
    // Return true if func returns true for every element
    return true; 
};


// _.every([1, 2, 3, 4], function(n){ return n % 2 === 0}); // false (because not every time is even)
// _.every([2, 4, 6], function(n){ return n % 2 === 0}); // true (every item is even)
// _.every({ a: 1, b: 2 }, function(n){ return n > 1});// false (not every item is greater than 1)
// _.every({ a: 3, b: 4 }, function(n){ return n > 1}); /// true (every item is greater than 1)


// _.every([1, 2, 3]); // true (because every item is truthy)
// _.every([1, undefined, 3]); // false (because one item is falsey)
// _.every({ a: 1, b: 2 }); // true (because all of the values are truthy)
// _.every({ a: null, b: 2}); // false (because of the values if falsey)

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
I: Function takes in an elemnt and a function. 
O: Function returns true if value of calling function for each element. Otherwise false.
C: Function should not have side effects. 
E: Check if every element is truthy or falsy. This works for both arrays and objects.
*/

_.some = function(collection, func) {
    // If no function provided check for at least one truthy element
    if (func === undefined) {
        // Check if collection is an array
        if (Array.isArray(collection)) {
            for (let i = 0; i < collection.length; i++) {
                // If element is truthy
                if (collection[i]) { 
                    return true;
                }
            }
        } 
        // If the collection is an object
        else {
            for (let key in collection) {
                // If value is truthy
                if (collection[key]) { 
                    return true;
                }
            }
        }
        // Return false if no truthy element found
        return false; 
    }

    // If function is provided apply it to each element of collection
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            // If func returns true
            if (func(collection[i], i, collection)) { 
                return true;
            }
        }
    } else {
        for (let key in collection) {
            // If func returns true
            if (func(collection[key], key, collection)) { 
                return true;
            }
        }
    }
    // Return false if func never returns true
    return false; 
};


/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
I: Function takes in an array, a function, and a seeed. 
O: Function should return accumulated result after final iteration. 
C: A seed must be provided. 
E: If no seed is provided an error will be thrown. 
*/

_.reduce = function(array, func, seed) {
    // If no seed is provided use first element as seed
    let previousResult = seed === undefined ? array[0] : seed;
    let startIndex = seed === undefined ? 1 : 0;

    // Iterate over the array starting from correct index
    for (let i = startIndex; i < array.length; i++) {
        // Apply the function then update the previousResult
        previousResult = func(previousResult, array[i], i);
    }

    // Return accumulated result
    return previousResult;
};



/** _.extend // Use Object.assign()
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
I: Function takes in two objjects (...) possibly more. 
O: Function should return an updated object. 
C: Function modifies the first obj by copying its properties from additional objects.
E: Function should over ride properties of the same key. 
*/

_.extend = function(target, ...objects) {
    // Iterate through indefinite additional objects passed in
    for (let i = 0; i < objects.length; i++) {
        // For each object copy all properties to target
        for (let key in objects[i]) {
            // Only copy if key is not a prototype property
            if (objects[i].hasOwnProperty(key)) {
                target[key] = objects[i][key];
            }
        }
    }
    // Return updated target
    return target; 
};


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}