import userdefine_anyname,{a,c,d} from './module2.mjs';

// console.log(userdefine_anyname);
// console.log(a);
// console.log(d);
// console.log(c,d);
console.log(a,userdefine_anyname,c,d);
//We can only give userdefine name in import to default export.
// console.log(e,userdefine_anyname,f,g);//This will give error because of importing{e,f,g}