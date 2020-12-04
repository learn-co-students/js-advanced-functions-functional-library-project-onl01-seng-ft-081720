const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(array, callback) {
      if(Array.isArray(array)){
        for(let i = 0; i < array.length; i++){
          callback(array[i], i, callback)
        }
      }else{
        let keys = Object.keys(array)
        for(let i = 0; i < keys.length; i++){
          callback(array[keys[i]], keys[i], array)
        }
      }
      return array
    },

    map: function(array, callback) {
      let newCollection = []
      if(Array.isArray(array)){
        for(let i = 0; i < array.length; i++){
          newCollection.push(callback(array[i], i, callback))
        }
      }else{
        let keys = Object.keys(array)
        for(let i = 0; i < keys.length; i++){
          newCollection.push(callback(array[keys[i]], keys[i], array))
        }
      }
      return newCollection
    },

    reduce: function(collection, callback, acc = -2) {
      for(let i = 0; i < collection.length; i++){
       acc = callback(acc, collection[i], collection)
      }
      return acc
    },

    functions: function(object) {
      let final = []
      Object.keys(object).forEach(key => {
        if(typeof object[key] == 'function'){
          final.push(object[key])
        }
      })
      return final
    },

    find: function(collection, predicate) {
      for(let i = 0; i < collection.length; i++){
        if(predicate(collection[i])){
          return collection[i]
          break
        }
      }
    },
    filter: function(collection, predicate) {
      let arr = []
      for(let i = 0; i < collection.length; i++){
        if(predicate(collection[i])){
          arr.push(collection[i])
        }
      }
      return arr
    },
    size: function(collection) {
      if(Array.isArray(collection)){
        return collection.length
      }else{
        return Object.keys(collection).length
      }
    },
    first: function(array, n) {
      if(typeof n !== 'undefined'){
        return array.slice(0, n)
      }else{
        return array[0]
      }
    },
    last: function(array, n) {
      if(typeof n !== 'undefined'){
        return array.slice(-n, array.length)
      }else{
        return array[array.length - 1]
      }
    },
    compact: function(array) {
      let newArray = []
      for(let i = 0; i < array.length; i++){
        if(!!array[i]){
          newArray.push(array[i])
        }
      }
      return newArray
    },
    sortBy: function(array, callback) {
      let final = [...array]
      final.sort(function(a, b){return callback(a) - callback(b)})
      return final
    },
    flatten: function(array, boolean) {
      if(typeof boolean !== 'undefined'){
        return [].concat.apply([], array)
      }else{
        let flatten = function(array){
          return array.reduce((acc, cur) => acc.concat(Array.isArray(cur) ? flatten(cur) : cur), [])
        }
        return flatten(array)
      }
    },
    uniq: function(array, isSorted, callback) {
      if(isSorted == true){
        let remove = function(array){
          return array.reduce((unique, item) => unique.includes(item) ? unique : [...unique, itme], [])
        }
        return remove(array)
      }else{
        let remove = function(array, callback){
          let duplicate = [...array]
          if (!!callback){
            let set = {}
            return duplicate.reduce((unique, item) => {
              if(!!set[callback(item)]){
                return unique
              }else{
                set[callback(item)] = true
                return[...unique, item]
              }
            }, [])
          }else {
            return array.reduce((unique, item) => 
            unique.includes(item) ? unique : [...unique, item], [])
          }
        }
        return remove(array, callback)
      }
    },
    keys: function(object) {
      return Object.getOwnPropertyNames(object)
    },
    values: function(object) {
      return Object.values(object)
    }
  }
})()

fi.libraryMethod()