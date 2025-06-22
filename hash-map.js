export default class HashMap {

    constructor(loadFactor,capacity){
        this.loadFactor = loadFactor
        this.capacity = capacity
    };


    hash(key){
        // takes a key and produces a hash code with it. We already implemented a fairly good hash function in the previous lesson. 
    }

    set(value){

    }

    get(key){

    }

    has(key){
        // takes a key as an argument and returns true or false based on whether or not the key is in the hash map.
    }    

    remove(key){
        // takes a key as an argument. If the given key is in the hash map, it should remove the entry with that key and return true. If the key isn’t in the hash map, it should return false.
    }

    length(){
        //  returns the number of stored keys in the hash map.
    }

    clear() {
        // removes all entries in the hash map.
    }   

    keys(){
        // returns an array containing all the keys inside the hash map.
    }

    values(){
        // values() returns an array containing all the values.
    }

    entries(){
        // entries() returns an array that contains each key, value pair. Example: [[firstKey, firstValue], [secondKey, secondValue]]
    }

}