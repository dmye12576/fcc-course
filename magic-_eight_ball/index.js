let userName = '';
const userQuestion = 'Will I beome a werewolf tonoght?';
let randomNumber = Math.floor(Math.random() *8);
let eightBall = '';
(userName === 'Jane')? 
console.log(`Hello, ${userName}`) :
console.log(`Hello!`);
console.log(`Hello, ${userQuestion}`) 
   
switch (randomNumber) {
    case 0:
        eightBall = 'It is certain';
        break;

    case 1:
        eightBall= 'It is decidely so';
        break;  

    case 2:
        eightBall= 'Reply hazy try again';
        break;

     case 3:
        eightBall= 'Can not predict now';
        break;

     case 4:
        eightBall= 'Do not count on it';
        break;     

    case 5:
        eightBall= 'My sources say no';
        break; 
            
    case 6:
        eightBall= 'Outlook not so good';
        break; 
            
     case 7:
        eightBall= 'Signs point to yes';
        break;  

    case 8:
        eightBall= 'It is certain';
        break;  
}
console.log (eightBall);