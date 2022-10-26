const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? ', (answer1) => {

  rl.resume();
  
  rl.question('What\'s an activity you like doing? ', (answer2) => {

    rl.resume();
    
    rl.question('What do you listen to while doing that? ', (answer3) => {
      
      rl.resume();
      
      rl.question('Which meal is your favourite? ', (answer4) => {
        
        rl.resume();
        
        rl.question('What\'s your favourite thing to eat for that meal? ', (answer5) => {
          
          rl.resume();
          
          rl.question('Which sport is your absolute favourite? ', (answer6) => {
            
            rl.resume();
            
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer7) => {
              
              console.log(`Thank you for your valuable feedback: ${answer1}!\n ${answer1} likes to do: ${answer2} while listening to ${answer3}.\n Their favourite meal is:${answer4} and likes to eat ${answer5}.\n Their favourite sport is: ${answer6}.\n Their superpower is: ${answer7}.\n`);
              
              rl.close();
            });
          });
        });
      });
    });
  });
});