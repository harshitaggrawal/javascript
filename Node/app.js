console.log('app.js');
const name="vishal";
function add(a,b){
    return a+b;
}
// module.exports=name; // single value pass
module.exports={name,add};// if we want to transfer multiple value the we hhave to make object
 
// if we want to use predefined module  then we install through npm.js
//! npm init to make pakages.json  it is used to restore data or deploy the file from the npm  we write to deploy or restore npm install enter 
