

const funcs1=[];

for (var i = 0; i < 10; i++) {
  funcs1.push(function(){
   console.log(i);
  })
  console.log(i);
   
}

funcs1[2]();
funcs1[8]();