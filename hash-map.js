export default class HashMap {
  constructor() {
    this.loadFactor = 0.75;
    this.capacity = 16;
    this.buckets = [];
  }

  #hash(key) {
    let hashCode = 0;
    const primeNumber = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;

    // return 0;
  }

  #findBucket(key) {
    let bucket = this.buckets[this.#hash(key)];

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

    if (!bucket) {
      return bucket;
    } else {
      return getListNode(bucket.head);
    }
  }

  #refillBuckets() {
    let capacityLimit = this.capacity * this.loadFactor;

    if (this.length() > capacityLimit) {
      let entryList = this.entries();

      this.capacity *= 2;
      this.buckets = [];
      entryList.forEach((entry) => {
        this.set(entry[0], entry[1]);
      });
    }
  }

  set(key, value) {
    let bucket = this.#findBucket(key);

    if (bucket === undefined) {
      this.buckets[this.#hash(key)] = { head: { [key]: value, next: null } };
    } else if (bucket[key]) {
      bucket[key] = value;
    } else {
      bucket.next = { [key]: value, next: null };
    }
    this.#refillBuckets();
  }

  get(key) {
    if(this.#findBucket(key)){
      return this.#findBucket(key)
    } else {
      return null
    }
  }

  has(key) {
    return this.get(key) ? true : false;
  }

  remove(key) {
    if (this.has(key)) {
      let bucket = this.buckets[this.#hash(key)];
      let previous = bucket.head;
      let current = bucket.head;

      while (current) {
        if (current[key]) {
          if (current == bucket.head) {
            if (!current.next) {
              this.buckets[this.#hash(key)] = undefined;
              return true;
            } else {
              bucket.head = current.next;
              return true;
            }
          } else {
            previous.next = current.next;
            return true;
          }
        }

        previous = current;
        current = current.next;
      }
    } else {
      return false;
    }
  }

  length() {
    return this.keys().length;
  }

  clear() {
    this.capacity = 16;
    this.buckets = [];
  }

  keys() {
    let keyArray = [];
    this.buckets.forEach((bucket) => {
      if (bucket !== undefined) {
        let entry = bucket.head;
        while (entry) {
          let entryValue = Object.entries(entry)[0][0];
          keyArray.push(entryValue);
          entry = entry.next;
        }
      }
    });
    return keyArray;
  }

  values() {
    let valueArray = [];
    this.buckets.forEach((bucket) => {
      if (bucket !== undefined) {
        let entry = bucket.head;
        while (entry) {
          let entryValue = Object.entries(entry)[0][1];
          valueArray.push(entryValue);
          entry = entry.next;
        }
      }
    });
    return valueArray;
  }

  entries() {
    let entryArray = [];
    this.buckets.forEach((bucket) => {
      if (bucket !== undefined) {
        let entry = bucket.head;
        while (entry) {
          let entryPair = Object.entries(entry)[0];
          entryArray.push(entryPair);
          entry = entry.next;
        }
      }
    });
    return entryArray;
  }
}
