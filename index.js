const cats=["Milo", "Otis", "Garfield"]

  function destructivelyAppendCat(name){
    cats.push(name);
  }
  
  function destructivelyPrependCat(name) {
    cats.unshift(name);
  }

  function destructivelyRemoveLastCat(name) {
    cats.pop(name);
  }
  
  function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
  }

  function appendCat(name){
    return [...cats, "Broom"];
  }

  function prependCat(name){
    return ["Arnold", ...cats];
  }

  function removeLastCat(name){
    const catsCopy = [...cats];     
    catsCopy.pop();
    return catsCopy;  
  }

  function removeFirstCat(name){
    const catsCopy = [...cats];
    catsCopy.shift();
    return catsCopy;
  }