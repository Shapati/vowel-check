// function nam(first,last){
//  return first+' '+last
// }

// console.log(nam("nifemi","ayandiran"))


// youre counting a point for a basketball game given the amount of two pointers  scored and threee pointers scored find the final point for the team and return the value example point(1,1)=5 point(7,5)=29



// const pointer =([a,b])=>{
//   a = a*2
//   b = b*3
  
//   sum= a+b
//   return sum 
// }

// console.log(pointer([38,8]))
var vowels = 'aeiou'
var count =0;
var str = "This is a string";
console.log(str.length)
var wordCount = str.split(/\s+/).length;
console.log(wordCount)
function vowel(str){
return str.match(/[aeiou]/gi)
? str.match(/[aeiou]/gi).length:0

}

console.log(vowel(str))

