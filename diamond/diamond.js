
const space = function (spc){
  let str = '';
        for(let i=0;i<spc;i++) {
            str += ' ';
        }
        return str;
    }
const star = function (star){
    let str = '';
    for(let i=0;i<star;i++) {
        str += '*' ;
    }
    return str;
}

const run = function (spc,str){

    console.log(space(spc)+star(str));

 }
const diamond = function(n){

    if(n%2===0)
    {
        n+=1;
    }
    let a=1;
    for(var i=1;i<=n/2+1;i++)
    {
        run(n/2-i,a);
        a+=2;
    }
    let b = n-2;
    for(let i=1;i<=n/2+1;i++)
    {
        run(i,b);
        b-=2;
    }

}
diamond(11);

