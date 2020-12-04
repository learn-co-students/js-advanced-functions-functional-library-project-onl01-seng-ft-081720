const fi = (function(){
  return {
    libraryMethod: function(){
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (typeof collection === "array"){
        collection.forEach(el => callback(el))
      } else {
        Object.values(collection).forEach(el => callback(el))
      }
      return collection
    },
    map: function(collection, callback) {
      const newArray = []
      if (typeof collection === "array"){
        collection.forEach(el => newArray.push(callback(el)))

      } else {
        Object.values(collection).forEach(el => newArray.push(callback(el)))
      }
      return newArray
    },

    reduce: function(collection, callback, acc) {
      let newCollection = collection.slice(0)

      if (!acc) {
        acc = collection[0]
        newCollection = newCollection.slice(1)
      }

      for (let i = 0; i < newCollection.length; i++) {
        acc = callback(acc, newCollection[i], newCollection)
      }

      return acc
    },
    find: function(collection, predicate) {
      if (!typeof collection === "array") {
      collection = Object.values(collection)
      }

      for (let i = 0; i < collection.length; i++) 
        if (predicate(collection[i])) {
          return collection[i]
      }
    },
    flatten: function(collection, shallow, newArr=[]) {
      if (!Array.isArray(collection)) return newArr.push(collection)
      if (shallow) {
        for (let val of collection)
          Array.isArray(val) ? this.unpack(newArr, val) : newArr.push(val)
      } else {
        for (let val of collection) {
          this.flatten(val, false, newArr)
        }
      }
      return newArr
    },

    filter: function(collection, predicate){
      let newArray = []
      collection.forEach(el => {
        if (predicate(el)){
          newArray.push(el)

        }
      })
      return newArray
    },
    size: function(collection){
      if (typeof collection === "array"){
        return collection.length
      } else {
        return Object.keys(collection).length
      }
    },

    functions: function(object) {
      const functions = []

      for (let key in object) {
        if (typeof object[key] === "function"){
          functions.push(key)
        }
      }
      return functions.sort()
    },
    first: function(array, n){
      if (n) {
        return array.slice(0, n)
      } else {
        return array[0]
      }
    },
    last: function(array, n){
      if (n) {
        return array.slice(array.length-n, array.length)
      } else {
        return array[array.length-1]
      }
      
    },
    unpack: function(receiver, arr) {
      for (let val of arr)
        receiver.push(val)
    },
    compact: function(array){
      let newArray = []
      array.forEach(el => {
        if (!!el){
          newArray.push(el)
        }
      })
      return newArray
    },
    keys: function(object){
      return Object.keys(object)
    },
    values: function(object){
      return Object.values(object)
    },
    uniq: function(array, isSorted, callback){
      
      // console.log(array, typeof array[0], "HELLO", callback)
      if (callback){
        let mappedArray = []

        array.forEach(function(num){
          mappedArray.push(callback(num))
          })

        let set = new Set(mappedArray)
        let uniqArray = Array.from(set)
        return uniqArray

        } else {
          let mappedArray = [...array]

          let set = new Set(mappedArray)
          let uniqArray = Array.from(set)
          return uniqArray
        
      }

    },
    uniqSorted: function(collection, callback) {
      const sortedCollection = [collection[0]]
      for (let i = 1; i < collection.length; i++) {
        if (sortedCollection[i-1] !== collection[i])
          sortedCollection.push(collection[i])
      }
      return sortedCollection
    },
    uniq: function(collection, sorted=false, iteratee=false) {
      if (sorted) {
        return fi.uniqSorted(collection, iteratee)
      } else if (!iteratee) {
        return Array.from(new Set(collection))
      } else {
        const modifiedVals = new Set()
        const uniqVals = new Set()
        for (let val of collection) {
          const moddedVal = iteratee(val)
          if (!modifiedVals.has(moddedVal)) {
            modifiedVals.add(moddedVal)
            uniqVals.add(val)
          }
        }
        return Array.from(uniqVals)
      }
    },
    sortBy: function(array, callback){
      let newArray = [...array]
      newArray.sort(function(a, b){
        return callback(a) - callback(b)
      })
 

      return newArray
    }, 

    







  }
})()
fi.libraryMethod()



// if (typeof collection === "array"){

// } else {
  
// }