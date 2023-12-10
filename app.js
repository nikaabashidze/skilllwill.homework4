

                                                             // HOMEEWORK 1

                                                             
const replace = (string, valueToReplace, valueToReplaceWith) => {


        const result = [];
    
        const words = string.split(" ");

    for (const word of words) {
        
        if (word === valueToReplace) {
            result.push(valueToReplaceWith);
        } 
        
        else {
            result.push(word);
        }

    }

    return result.join(" ");
}




const homework1=document.getElementById('homework1')
const function1 = document.getElementById('function1');
const condition1 = document.getElementById('condition1');


homework1.addEventListener('click', function() {
    
    
    function1.style.display = 'block';
    function2.style.display = 'none';
        function3.style.display = 'none';
        
        condition1.style.display = 'block';
        condition2.style.display = 'none';
        condition3.style.display = 'none';
        
        
        
        
        // chemi console
        function myconsole(message) {
            let consolediv = document.querySelector('.console');
            consolediv.innerHTML += '<p>' + '> '+'['+ message + ']'+ '</p>';
        }
        
        myconsole(replace("javascript is not programming language", 'javascript', 'css'  ));
        
        
        
    //brauzeris console
    console.log(replace("javascript is not programming language", 'javascript', 'css'  ))
   


    
});    












// ///////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////


// //HOMEEWORK 2



const capitalWords = (string) => {


    const newstring = [];
    
    const words = string.split(" ");
    
    for (const el of words){
        const upper = el[0].toUpperCase() + el.slice(1)

        newstring.push(upper)
    }
    
    return newstring.join(" ");
}




const homework2=document.getElementById('homework2')
const function2 = document.getElementById('function2');

homework2.addEventListener('click', function() {   
    
    function1.style.display = 'none';
    function2.style.display = 'block';
    function3.style.display = 'none';
    
    
    condition1.style.display = 'none';
    condition2.style.display = 'block';
    condition3.style.display = 'none';
    
    
    
           // chemi console
           function myconsole(message) {
            let consolediv = document.querySelector('.console');
            consolediv.innerHTML += '<p>' + '> '+ message + '</p>';
        }
        

        
        
    //brauzeris console
   

    // chemi console
    
    myconsole(capitalWords("css is not a programming language ,but javascript is a programing language",  ))
    
    //brauzeris console
    console.log(capitalWords("css is not programming language , javascript is a programing language",  ))


});





// ///////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////

//                                                                 //HOMEEWORK 3


const users = [
    {name: "Lasha", age: 30}, 
    {name: "Saba", age: 20},
    {name: "Nika", age: 23},
    {name: "Suliko", age: 35},
    {name: "Jemali", age: 64},
    {name: "Badri", age: 51},

]




const sortFunction = (users) => {

users.sort((a, b) => a.age - b.age);
//  თუ შედეგი უარყოფითია, ნიშნავს რომ  მასივში a ობიექტი უნდა იყოს b ობიექტამდე
//  თუ შედეგი დადებითია,  ნიშნავს რომ b ობიექტი უნდა იყოს a ობიექტის წინ  მასივში.



return users
}







function myconsole(message) {
    let consolediv = document.querySelector('.console');
    consolediv.innerHTML += '<p>' + '> '+ message + '</p>';
}


const homework3=document.getElementById('homework3')
const function3 = document.getElementById('function3');

homework3.addEventListener('click', function() {

    function1.style.display = 'none';
    function2.style.display = 'none';
    function3.style.display = 'block';


    condition1.style.display = 'none';
    condition2.style.display = 'none';
    condition3.style.display = 'block';
 
    

    // chemi console

    myconsole(JSON.stringify(sortFunction(users.sort())))
  

//brauzeris console

console.log(sortFunction(users.sort()))

});



// ///////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////


















