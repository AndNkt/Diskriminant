
var d,e,f,s;
d=prompt("Input a: Ax2+bx+c=0");
e=prompt("Input b: ax2+Bx+c=0");
f=prompt("Input c: ax2+bx+C=0");
s=solveQuadratic(d,e,f);

console.log(s);
alert(s);

function solveQuadratic(a, b, c) {
if (a!==0 && b!==0 && c!==0){
  var deskrmnt=findDes(a,b,c);
  
  function findDes(a,b,c){
    return (b*b)-4*(a*c);
  }
  
  console.log(a,b,c);
  if (deskrmnt>0){
    let sqrtdeskrmnt=Math.sqrt(deskrmnt);
    let x1=(((-(b))-sqrtdeskrmnt)/(2*a));
    let x2=(((-(b))+sqrtdeskrmnt)/(2*a));
    return [x1,x2];
    }
    else if(deskrmnt===0){ 
    	x1=((-(b))/(2*a))
    	return x1}
   else {
          return x1="Equ unsolved or have no Re only Img roots"};
  }
   
 else if(a!==0 && b==0 && c==0) return [0];//a=1 b=0 c=0
 else if(a!==0 && c!==0 && b===0){
 let y=(-(c))/a;
   if (y<0) {
   return 0;}//if
     else {
     let x1 =Math.sqrt(y);
     let x2 =-(x1);
     return [x1,x2]; }//else
     }//else if
  else if(a!==0 && b!==0 && c===0){
  let x1=-(b)/a
  return [0,x1];
  }//else if
  else if(a==0 && b==0) return 0;
  else if(a==0 && b!==0&& c!==0) return (-(c)/b);
  else if(a==0&&b!==0&&c==0) return [0];
}
