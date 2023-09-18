//object iteration

const myobj = {
    js:"javasprict",
    cpp:"c++",
    rb: "Ruby"
}

//forin loop 

for (const key in myobj) {
   console.log(`${key} shortcut for ${myobj[key]}`);
}

/**
expected output:
    js shortcut for javasprict 
    cpp shortcut for c++ 
    rb shortcut for Ruby
 */

// forin for array

const myarr = ["js","java","cpp","c","python"]

for(const val in myarr)
{
    console.log(val ,": ",myarr[val]);
}
/**
expected op:
    key: value at key
    0 :  js 
    1 :  java 
    2 :  cpp 
    3 :  c 
    4 :  python

 */


/**
 so in forin loop for(const key in object) --> key is picked up and if you want values do object[key] it will give values 
 
*/

//forin cant iterate map
