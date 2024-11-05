/*
const { convertToLetterGrade, reverseString } = require('./function');

const grades = [89, 92, 58, 61, 78];
const letterGrades = grades.map(grade => convertToLetterGrade(grade));
console.log(letterGrades); // Output: ["B", "A", "E", "D", "C"]


const original = "hello";
const reversed = reverseString(original);
console.log(reversed); // Output: "olleh"
*/

const express = require ('express')

const app = express()




const middleWare = (request, response, next) => {
    console.log("middleWare:", request.url)
    //next()
    }


  

// app.use(middleWare)   

app.get('/', (request, response, next) => {
    console.log("request received");
    response.send('Hello World!');
    next();
    })

app.use(middleWare)  









/*
const middleware1 = (request, response, next) => {
    console.log("middleware 1");
    next()
    }
const middleware2 = (request, response, next) => {
    console.log("middleware 2");
    next()
    } 

//app.use([middleware2, middleware1])

app.get('/', (request, response, next) => {
    response.send('Hello World!')
    console.log('COCO')
   
    });
app.use([middleware2, middleware1])    
*/





/*
const middleware1 = (request, response, next) => {
    console.log("middleWare 1")
    next()
    }
    const middleware2 = (request, response, next) => {
    console.log("middleWare 2")
    
    }
    const middleware3 = (request, response, next) => {
    console.log("middleWare 3")
    next()
    }
app.use([middleware3, middleware2, middleware1])

app.get('/', (request, response, next) => {
    response.send('Hello World!')
    console.log('NouNi')
    next()
    })
    
 //  app.use([middleware3, middleware2, middleware1])
    
*/

app.listen(3000, () =>
    console.log('sever is running at port 3000')
    )    
    