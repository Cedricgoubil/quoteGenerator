//Sciences quotes
let sciencesQuoteStart = ['“Two things are infinite: the universe and human stupidity, ','“The saddest aspect of life right now is that science gathers, ', '“One, remember to look up at the stars and not down at your feet. Two, never give up work, ','“Somewhere, ','“Time is a drug, ','“I am sure the universe is full of intelligent life, ','“An expert is a person who has made all the mistakes that can, ','“Science and religion are not at odds, ','“In the beginning there was nothing, ','“That which can be asserted without evidence, ','“Everything must be made as simple as possible, ','“Heard melodies are sweet, but those unheard, ','“A man who dares to waste one hour of time has not, '];

let sciencesQuoteMiddle = ['and I am not sure about the universe.” ','knowledge faster than society gathers wisdom.” ','Work gives you meaning and purpose and life is empty without it.” ','something incredible is waiting to be known.” ','Too much of it kills you.” ','It s just been too intelligent to come here.” ','be made in a very narrow field.” ','Science is simply too young to understand.” ','which exploded.” ','can be dismissed without evidence.” ','But not simpler.” ','are sweeter.” ','discovered the value of life.” '];

let sciencesAuthor = ['― Albert Einstein','― Isaac Asimov','― Stephen Hawking','― Carl Sagan', '― Terry Pratchett','― Arthur C. Clarke','― Niels Bohr','― Dan Brown','― Terry Pratchett','― Christopher Hitchens','― Albert Einstein','― John Keats','― Charles Darwin'];

//Sports quotes
let sportsQuoteStart = ['“Winning isn’t everything, ','“The key is not the will to win…, ','“I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times, ','I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed, ','“Show me a gracious loser, ','“I hated every minute of training, but I said,  ','“When you win, say nothing, ','“A champion is afraid of losing, ','“Winning isn’t everything, but it beats anything, ','“Winning is the most important thing in my life, ','“You learn more from losing than winning, ','“The biggest thrill wasn’t in winning on Sunday, ','“I love the winning, ','“Nothing is black-and-white, except for winning and losing, '];

let sportsQuoteMiddle = ['it’s the only thing.” ','everybody has that. It is the will to prepare to win that is important.” ','and I’ll show you a failure.” ','Don’t quit. Suffer now and live the rest of your life as a champion.” ','When you lose, say less.” ','Everyone else is afraid of winning.” ','that comes in second.” ','after breathing. Breathing first, winning next.” ','You learn how to keep going.” ','but in meeting the payroll on Monday.” ','I can take the losing, but most of all I Love to play.” ','and maybe that’s why people gravitate to that so much.” '];

let sportsAuthor = ['-Vince Lombardi','-Bobby Knight ','-Michael Jordan','-Knute Rockne','-Muhammad Ali','-Paul Brown','-Billie Jean King','-Paul Bryant','-George Steinbrenner','-Morgan Wootten','-Art Rooney','-Boris Becker','-Steve Nash'];

//Pure Javascript need to add the: (<button id="button" class="btn-large new-quote-button" onClick="newQuote()">Get a Quote</button>)
/*function newQuote() {
     
     const selectedValue = document.getElementById('quoteslist');
     const value = (selectedValue[selectedValue.options.selectedIndex].value);
     let buttonSciences = document.getElementById('sciences');
     let buttonSports = document.getElementById('sports');
     document.getElementById('quotes').innerHTML = '';
        for (let i=0; i<value; i++) {
            if (buttonSciences.checked) {  
                let randNumberA = sciencesQuoteStart[Math.floor(Math.random() *sciencesQuoteStart.length)];
                let randNumberB = sciencesQuoteMiddle[Math.floor(Math.random() *sciencesQuoteMiddle.length)];
                let randNumberC = sciencesAuthor[Math.floor(Math.random() *sciencesAuthor.length)];       
                document.getElementById('quotes').innerHTML+=[randNumberA + randNumberB + randNumberC]+'<br/>';                    
            }else if (buttonSports.checked){
                let randNumberD = sportsQuoteStart[Math.floor(Math.random() *sportsQuoteStart.length)];
                let randNumberE = sportsQuoteMiddle[Math.floor(Math.random() *sportsQuoteMiddle.length)];
                let randNumberF = sportsAuthor[Math.floor(Math.random() *sportsAuthor.length)]; 
                document.getElementById('quotes').innerHTML+=[randNumberD + randNumberE + randNumberF]+'<br/>'; 
            }           
        }  
 };*/
 
//With jQuery
$(document).ready(function() {
    $('#button').on('click',function(){
        //newQuote();
        const selectedValue = document.getElementById('quoteslist');
        const value =  parseInt(selectedValue[selectedValue.options.selectedIndex].value);
        let buttonSciences = document.getElementById('sciences');
        let buttonSports = document.getElementById('sports');
        document.getElementById('quotes').innerHTML = ''; //empty <p> when clicking "Get your Quote"
            for (let i=0; i<value; i++) {
                if (buttonSciences.checked) {  
                    let randNumberA = sciencesQuoteStart[Math.floor(Math.random() *sciencesQuoteStart.length)];
                    let randNumberB = sciencesQuoteMiddle[Math.floor(Math.random() *sciencesQuoteMiddle.length)];
                    let randNumberC = sciencesAuthor[Math.floor(Math.random() *sciencesAuthor.length)];       
                    document.getElementById('quotes').innerHTML+=[randNumberA + randNumberB + randNumberC]+'<br/>';                    
                }else if (buttonSports.checked){
                    let randNumberD = sportsQuoteStart[Math.floor(Math.random() *sportsQuoteStart.length)];
                    let randNumberE = sportsQuoteMiddle[Math.floor(Math.random() *sportsQuoteMiddle.length)];
                    let randNumberF = sportsAuthor[Math.floor(Math.random() *sportsAuthor.length)]; 
                    document.getElementById('quotes').innerHTML+=[randNumberD + randNumberE + randNumberF]+'<br/>'; 
                }           
            }  
    });
});