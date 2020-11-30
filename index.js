const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(arr, alert) {
      const newCollection = (arr instanceof Array) ? arr.slice() : Object.values(arr)
      for(const element of newCollection) {
        alert(element)
      }
      return arr
    },

    map: function(arr, callback) {
      const newCollection = (arr instanceof Array) ? arr.slice() : Object.values(arr)
      const newArray = []
      for(const element of newCollection) {
        newArray.push(callback(element))
      }
      return newArray
    },

    reduce: function(arr, callback, acc) {
      let collection = arr.slice(0)

      if (!acc) {
        acc = collection[0]
        collection = arr.slice(1)
      }
      
      // debugger
      for(const item of collection) {
        acc = callback(acc, item, collection)
      }
      return acc
    },

    find: function(collection, pred) {
      // debugger
      for(const item of collection) {
        if (pred(item) === true) {
          return item
        }
      }
    },

    filter: function(collection, pred) {
      const newCollection = []
      for(const item of collection) {
        if (pred(item) === true) {
          newCollection.push(item)
        }
      }
      return newCollection
    },

    size: function(collection) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      let collectSize = 0
      for(const item of newCollection) {
        collectSize += 1
      }
      return collectSize
    },

    first: function(collection, n) {
      if (n) {
        const newCollection = []
        for (let i = 0; i < n; i++) {
          newCollection.push(collection[i])
        }
        return newCollection
      }
      else {
        return collection[0]
      }
    },

    last: function(collection, n) {
      let arrPos = collection.length - 1
      if (n) {
        const newCollection = []
        for (let i = 0; i < n; i++) {
          newCollection.unshift(collection[arrPos])
          arrPos -= 1
        }
        return newCollection
      }
      else {
        return collection[arrPos]
      }
    },

    compact: function(arr) {
      const newArr = []
      for(const item of arr) {
        if (!!item == true) {
          newArr.push(item)
        }
      }
      return newArr
    },

    sortBy: function(arr, callback) {
      const sortedArr = [...arr]
      return sortedArr.sort(function(a, b) {
        return callback(a) - callback(b)
      })
    },

    unpack: function(receiver, arr) {
      for (let val of arr)
        receiver.push(val)
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

    uniqSorted: function(collection, iteratee) {
      const sorted = [collection[0]]
      for (let idx = 1; idx < collection.length; idx++) {
        if (sorted[idx-1] !== collection[idx])
          sorted.push(collection[idx])
      }
      return sorted
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

    keys: function(obj) {
      const keys = []
      for (let key in obj){
        keys.push(key)
      }
      return keys
    },

    values: function(obj) {
      const values = []
      for (let key in obj){
        values.push(obj[key])
      }
      return values

    },

    functions: function(obj) {
      const functionNames = []

      for (let key in obj) {
        if (typeof obj[key] === "function"){
          functionNames.push(key)
        }
      }

      return functionNames.sort()
    },

  }
})()

fi.libraryMethod()
