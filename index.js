var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  if (object[key] != undefined){
    object[key].push(value)
  }else{
    object[key] = [value]
  }
  return object
}



