// // Andrew decides to improve the World Record in long-distance swimming. The function solve(seconds,
// //     meters, secondPerMeter) receives the record in seconds that Andrew has to improve, the distance in meters
// //     that he has to swim, and the time in seconds for which he swims a distance of 1 m. Write a function that calculates
// //     whether he has done the task, given that: the resistance of the water slows him down every 15 m by 12.5 seconds.
// //     When calculating how many times Andrew will slow down because of the water resistance, the result should be
// //     rounded down to the nearest integer number.
function solve(seconds,meters, secondPerMeter){
    let must_swim=meters*secondPerMeter;
    let a=meters/15;
    let b= Math.floor(a)*12.5;
    let total = b+must_swim;
    let totall=total.toFixed(2);
    if(totall<seconds){
        console.log(` Yes, he succeeded! The new world record is ${totall} seconds.`);
    

    }

    else{
        let f=totall-seconds;
        console.log(`No, he failed! He was ${f.toFixed(2)} seconds slower.`)




    }
}
solve(10464, 1500, 20)
solve(55555.67,3017,5.03)
///////////////////////////////////////////////////////////////////
// // Peter wants to buy N video cards, M processors, and P number of RAM. If the number of video cards is greater than
// // the number of processors, he gets a 15% discount on the final bill.
// // The following prices apply:
// //  Video card – 250 USD/per piece.
// //  Processor – 35% of the price of purchased video cards/per piece.
// //  RAM – 10% of the price of purchased video cards/per piece.
// // Calculate the amount needed to purchase the materials and calculate if the budget will be enough.
function calculate(budget, videoCards, processors, RAMs){
let amount_for_vido_cards=videoCards*250;

let The_Price_For_processor=amount_for_vido_cards*0.35;
let Amount_For_processor=processors*The_Price_For_processor;

let The_priice_for_RAM=amount_for_vido_cards*0.1;
let amount_for_RAM=RAMs*The_priice_for_RAM;

let total=amount_for_vido_cards+Amount_For_processor+amount_for_RAM;
if(videoCards>processors){
let p=total-total*0.15;
if(p<=budget){
let remain=budget-p;
console.log(`You have ${remain.toFixed(2)} USD left!`);

}
else{
    let need=p-budget;
    console.log(`Not enough money! You need ${need.toFixed(2)} USD more!`)



}

}
else{
    if(total<=budget){
      let remain=budget-total;
      console.log(`You have ${remain.toFixed(2)} USD left!`);


    }
    else{
        let need=total-budget;
        console.log(`Not enough money! You need ${need.toFixed(2)} USD more!`)
    
    }
}
}

calculate(900, 2,1, 3);
calculate(920.45,3,1,1);
////////////////////////////////////////////////////////////////////////////////////////////
// // During your lunch break, you want to watch an episode of your favorite series. Your task is to write a program to
// // find out if you have enough time to watch the episode. During the break, you take time for lunch and time for
// // relaxation. The lunchtime will be 1/8 of the break time and the relaxation time will be 1/4 of the break time.


function solve([name, episodeDuration, breakDuration]){
    
 let timelunch=(breakDuration*(1/8)).toFixed(1);

 let timerelaxation=(breakDuration*(1/4)).toFixed(1);

 let Remainingtime=breakDuration-timelunch-timerelaxation;

 if(Remainingtime>=episodeDuration){
    
      let c=Math.ceil(Remainingtime-episodeDuration);
     console.log(`You have enough time to watch ${name} and left with ${c} minutes free time.`)
 }
 else{
     
let c=Math.ceil(episodeDuration-Remainingtime);
console.log(`You don't have enough time to watch ${name}, you need ${c} more minutes.`)
} }
solve(["Game ofThrones",60,96])

solve(["Teen Wolf",48,60])
/////////////////////////////////////////////////////////////////
// Sarah has a toy shop. She receives a big order that she has to complete. With the money she will earn she wants to
// go on a trip.
// Toy prices:
//  Puzzle - 2.60 USD
//  Talking doll – 3 USD
//  Teddy bear - 4.10 USD
//  Minion - 8.20 USD
//  Truck – 2 USD
// If the ordered toys are 50 or more, the store makes a discount of 25% of the total price. From the earned money
// Sarah must give 10% for the store rent. Calculate whether the money will be enough for her to go on a trip.

function solve(price, puzzles, dolls, bears, minions, trucks){
    let sum=puzzles*2.60+dolls*3+bears*4.10+minions*8.20+trucks*2;
   
    let num_of_toye=puzzles+dolls+bears+minions+trucks;
    
    if(num_of_toye>=50){
       let a=0.25*sum;
    
       let final_price=sum-a;
   
       let Rent=final_price*0.1;
   
       let profit =final_price-Rent;
    
       if(profit>=price){
           let b=profit-price;
           
           console.log(`Yes! ${b.toFixed(2)} USD left.`);

       }
       else{
           let B1=price-profit;
           console.log(`Not enough money! ${B1.toFixed(2)} USD needed.`);
       }
    }
    else{
        let rent=sum*0.1;
        
        let Profit=sum-rent;

        if(Profit>price){
            let B= Profit-price;
            console.log(`Yes! ${B.toFixed(2)} USD left.`);

        }
        else{
            let B2=price-Profit;
           console.log(`Not enough money! ${B2.toFixed(2)} USD needed.`);
        }
    }





}
solve(10000.8,0,25,30,50,10)
solve(320,8,2,5,5,1)