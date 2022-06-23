 const messages = [
     "oscar",
     "ana",
     "yesica",
     "paula",
     "andres",
     "carolina",
     "paulina",
 ];

 const randomMsg = () => {
     const message = messages [Math.floor(Math.random()*messages.length)];
     console.log(message);
 };

 module.exports = {randomMsg};