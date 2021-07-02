
// Question-1
a1='w3resource';
a2=[1, 2, 4, 0];
console.log(Array.isArray(a1));
console.log(Array.isArray(a2));
// Question-2
var array_Clone = function(arra1) 
{
    return arra1.slice(0);
};
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
   
// Question-3
first1=[7, 9, 0, -2];
console.log(first1.shift());
first2=[[],3];
console.log(first2.shift());
first3=[[7, 9, 0],3];
console.log(first3.shift());
first4=[[7, 9, 0, -2],6];
console.log(first4.shift());
first5=[[],[7, 9, 0, -2],-3];
console.log(first5.shift());

// Question-4
myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.join());
console.log(myColor.join('+'));
console.log(myColor.join(' '));
// Question-5
var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var f=1;
var item;
var m=0;
for(var i=0; i<arr1.length; i++)
{
    for(var j=i; j<arr1.length; j++)
    {
        if(arr1[i]==arr1[j])
        {
            m++;
        }
        if(f<m)
        {
            f=m;
            item=arr1[i];
        }
    }
    m=0;
}
console.log(item + "(" + f + ")" + "times");
