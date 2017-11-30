let obj1 = {
	name: 'Nguyen Van Thy',
	tuoi: 29,
	nghenghiep: 'developer',
	foo: { a: 'so mot', b: 'so hai', c: 'so ba'}
};

let obj2 = {
	name: 'Nguyen Luu Hai Bach',
	foo: { b: 'update so moi' }
};

// let obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3.foo);

function merge(object1, object2) {
  var object3 = {};
  // Check obj1, obj2 is object

  for( let key in object1 ) {
    object3[key] = object1[key];
  }

  for( let key in object2 ) {
    let value2 = object2[key];

    // Check value is Object
    // Check value same value in obj3
    // Check name in obj2 exist on obj3
    if( Object.prototype.toString.call(object3[key]) === '[object Object]'
    &&  Object.prototype.toString.call(value2) === '[object Object]' ) {
      object3[key] = merge(object3[key], value2);
    }

    // Case others
    else {
      object3[key] = value2;
    }
  }
  return object3;
}
var obj3 = merge(obj1, obj2);




/**
 * ADDCLASS ON ELEMENET
 */
