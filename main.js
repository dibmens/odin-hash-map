import HashMap from "./hash-map.js" ;

 const fruits = new HashMap();

 fruits.set('apple', 'red')
//  fruits.set('apple', 'green')
//  fruits.set('carrot', 'orange')
//  fruits.set('blueberries','blue')
//  fruits.set('mango','green')

 console.log(fruits.keys())
 console.log(fruits.remove('apple'))
 console.log(fruits.keys())
