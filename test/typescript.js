var obj1 = {
    name: 'Nguyen Van Thy',
    tuoi: 29,
    nghenghiep: 'developer',
    foo: { a: 'so mot', b: 'so hai', 3: 'so ba' }
};
var obj2 = {
    name: 'Nguyen Luu Hai Bach',
    foo: { b: 'so hai muoi' }
};
var obj3 = Object.assign({}, obj1, obj2);
console.log(obj3.foo);
//# sourceMappingURL=typescript.js.map