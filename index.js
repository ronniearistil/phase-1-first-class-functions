function receivesAFunction(callback) {
    callback();  // Calls the passed-in function
  }
  
  function returnsANamedFunction() {
    function namedFunction() {
      console.log("I am a named function!");
    }
    return namedFunction;
  }
  
  function returnsAnAnonymousFunction() {
    return function() {
      console.log("I am an anonymous function!");
    };
  }
  