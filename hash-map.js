export default class HashMap {
  constructor(capacity = 16, loadFactor = 0.8) {
    this.loadFactor = loadFactor;
    this.capacity = capacity;
    this.buckets = new Array(capacity);
  
  }

  hash(key) {
    // let hashCode = 0;
    // const primeNumber = 31;

    // for (let i = 0; i < key.length; i++) {
    //   hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    // }

    // return hashCode;

    return 0;
  }

  findBucket(key) {
    let bucket = this.buckets[this.hash(key)];

    function getListNode(node) {
      bucket = node;
      if (bucket[key]) {
        return bucket;
      } else if (bucket.next == null) {
        return bucket;
      } else {
        getListNode(bucket.next);
      }
      return bucket;
    }

    if (bucket === undefined) {
      return bucket;
    } else {
      return getListNode(bucket.head);
    }
  }

  set(key, value) {
    let bucket = this.findBucket(key);

    if (bucket === undefined) {
      this.buckets[this.hash(key)] = { head: { [key]: value, next: null } };
    } else if (bucket[key]) {
      bucket[key] = value;
    } else {
      bucket.next = { [key]: value, next: null };
    }
  }

  get(key) {
    let bucket = this.findBucket(key);
    return bucket[key] ? bucket[key] : null;
  }

  has(key) {
    // takes a key as an argument and returns true or false based on whether or not the key is in the hash map.
    return this.get(key) ? true : false;
  }

  remove(key) {
    // takes a key as an argument. If the given key is in the hash map, it should remove the entry with that key and return true. If the key isn’t in the hash map, it should return false.
    if(this.has(key)){
      let bucket = this.buckets[this.hash(key)]
      let previous = bucket.head
      let current = bucket.head;

      while(current){
        if(current[key]){
          if(current == bucket.head){
            if(!current.next){
              this.buckets[this.hash(key)] = undefined;
              return true
            } else {
              bucket.head = current.next
              return true
            }           
          } else {
            previous.next = current.next
            return true
          }
        }

        previous = current
        current = current.next
      }
    } else {
      return false
    }

  }

  length() {
    //  returns the number of stored keys in the hash map.
    return this.keys().length
  }

  clear() {
    // removes all entries in the hash map.
    this.buckets = []
  }

  keys() {
    // returns an array containing all the keys inside the hash map.
    let keyArray = []
    this.buckets.forEach((bucket) => {
      if(bucket !== undefined){
        let entry = bucket.head;
        while(entry){
          let entryValue = Object.entries(entry)[0][0]
          keyArray.push(entryValue)
          entry = entry.next
        }
      }
    })
    return keyArray
  }

  values() {
    // values() returns an array containing all the values.
    let valueArray = []
    this.buckets.forEach((bucket) => {
      if(bucket !== undefined){
        let entry = bucket.head;
        while(entry){
          let entryValue = Object.entries(entry)[0][1]
          valueArray.push(entryValue)
          entry = entry.next
        }
      }
    })
    return valueArray
  }

  entries() {
    // entries() returns an array that contains each key, value pair. Example: [[firstKey, firstValue], [secondKey, secondValue]]
    let entryArray = []
    this.buckets.forEach((bucket) => {
      if(bucket !== undefined){
        let entry = bucket.head;
        while(entry){
          let entryPair = Object.entries(entry)[0]
          entryArray.push(entryPair)
          entry = entry.next
        }
      }
    })
    return entryArray
  }
}
