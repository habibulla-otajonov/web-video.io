'use strict';


// const openingHours = {
//     thu:{
//         open:12,
//         close:22,
//     },
//     fri: {
//         open:11,
//         close:23,
//     },
//     sat: {
//         open:0,
//         close:24,
//     },
// };

// const restaurant = {
//      nameRestarant : 'Zafar',
//      location: 'Samarqanda, gagarin kochasi, Istiqlol restarani yoni',
//      categories: [ 'italian', 'korean', 'vegetarian', 'organic'],
//      starterMenu: ['Focaccia', 'Bruschetta', 'Gaerlic bread', ' Caprese salad'], 
//      mainMenu: ['pizza', 'pasta', 'Risotto'],
//      openingHours,
        
//     order : function (starterIndex, mainIndex){
//      return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
//     },
    

//     orderDelivery: function({starterIndex, mainIndex, time, address}){
//         console.log(
//             `Order received. ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered ${address} at ${time}`
//         );

//     },


//     orderPasta: function(ing1, ing2, ing3){
//         console.log(`here is your ${ing1} and ${ing2}, ${ing3}`);
//     }
    
     
// }; 
    
// restaurant.orderDelivery({
//      time: "23:30",
//      address: "Gagarin",
//      mainIndex: 2,
//      starterIndex: 2,
     
// });









const game = {
 team1: 'Bayern Munich',
 team2: 'Borussia Dortmund',
 players:   [
                [   'Neuar', // gk
                    'Pavard',
                    'Martinez',
                    'Alaba',
                    'Davies',
                    'Kimmich',
                    'Garetsga',
                    'Comn',
                    'Muller',
                    'Gnarby',
                    'Lewandowskiy',
                ],
                
                
                [
                    'Burki', // gk
                    'schulz',
                    'Hummels',
                    'Akanzi',
                    'Hakimi',
                    'Weigl',
                    'witsel',
                    'Hazard',
                    'Brant',
                    'Sancho',
                    'Gotze',
                ],
            ],
    score: '4 : 0',
    scored: ['Lewandowskiy', 'Granby', 'Lewandowskiy', 'Hummel'],
    date: 'Nov 9, 2037',
    odds: {
        team1: 1.33, 
        x: 3.25,
        team2: 6.5,
    },
};
// 1 - topshiriq bajarildi
for (const i of game.scored.entries()) {
    console.log(`Goal number ${i[0] + 1}:  ${i[1]}`);
;}

// 2 - topshiriq bajarildi

const odds = Object.values(game.odds);
let avarage = 0;
for (const odd of odds) avarage += odd;
avarage /= odds.length;
console.log(avarage);



// console.log( `the avarage of odds is  ${( 1.33 +3.25 +6.5) / 3}`)

// 3 - topshiriq
for ( const [team , odd]of Object.entries(game.odds)){
    const teamString = team === 'x' ? 'Draw': `victory ${game[team]}`;
    console.log(`odd of ${teamString} ${odd}`)
}







// console.log(
//     `Odd of victory  ${game.team1}: ${game.odds.team1}   
//     Odd of victory  Draw: ${game.odds.x}  
//     Odd of victory  ${game.team2}: ${game.odds.team2}  `
// )
// 1
// for (const [i, player] of game.scored.entries())
// console.log(`Goal ${i + 1} : ${player}`)

// 2






























    


//    const add = function(...numbers) {
//     let sum = 0;
//     for ( let i=0; i <numbers.length; i++ )  sum += numbers[i];
//     console.log(sum);
//     // console.log(...numbers);
// };


// add(1, 2, 3, 4, 5, 6);
// add(2, 3, 4, 5);
// add(2, 3, 7, 8, 9, 5);
// add(2, 3, 5, 79, 5, 78, 99, 65);



// const c = [45, 78, 989857];
// add(c[0]); 











// // const {nameRestarant, openingHours, categories} = restaurant;
// // console.log(nameRestarant, openingHours,categories[2]);
// // const {nameRestarant: restaurantName, openingHours: hours, categories: tags} =restaurant;
// // console.log(restaurantName, hours, tags);

// // let a = 111;
// // let b = 999;
// // const obj = {a: 13, b : 85};
// // ({a, b} = obj);
// // console.log((a + b) +" nima "+ a , b);
// // const {
// //     fri: { open: o, close: c},
// // } = openingHours;
// // console.log(o, c);
// // const copyMenu = [...restaurant.mainMenu, 'polov'];
// // console.log(copyMenu);

// // let mainMenuCopy = [...restaurant.mainMenu];
// // console.log(mainMenuCopy);

// // const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// // console.log(menu);

// // const str = 'Habibulla';
// // const letters = [...str];
// // console.log(letters);
// // console.log(...str);
// // let mani = 'Habibulla';
// // console.log(mani);
// // //promt usage
// // const ingreadents = [prompt('Let\'s make pasta ingreadients 1?'),prompt('Let\'s make pasta ingreadients 2?'),prompt('Let\'s make pasta ingreadients 3?')];
// // console.log(ingreadents);

// // // both of them work
// // restaurant.orderPasta(ingreadents[0], ingreadents[2], ingreadents[2]);

// // restaurant.orderPasta(...ingreadents);



// // const [ a, , b, ... others] = [ 1, 2, 3, 4, 5 , 6, 7];
//     // console.log(a, b, others);
//     // console.log(others);
//     // const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
//     // console.log(pizza, otherFood);
//     // console.log(otherFood);

//     // const {sat, ...weekday} = restaurant.openingHours;
//     // console.log(weekday);
//     // console.log(sat);




// // const arr = [2,3,4]; 
// // const a = arr[0];
// // const b = arr[1];
// // const c = arr[2];






























// 


// const [players1, players2] = game.players;
// console.log(players1, players2);

// const [gk, ...fieldPlayers ] = players1;
// console.log(gk, fieldPlayers);

// const allPlayers = [...players1, ...players2]; 
// console.log(allPlayers);

// const players1Final = [...players1, 'Thiago', 'Coutinio', 'Pericic'];
// console.log(players1Final);

// // const [team1 , draw, team2] = game.odds;
// const { odds: {team1, x: draw, team2} } = game;
// console.log(team1, draw, team2);

// const printGoals = function(...players) {
// console.log(players);
// console.log(`${players.length} goals were scored`);
// }

// printGoals(...game.scored)


// team1 < team2 && console.log('Team1 is more likely to win');
// team1 > team2 && console.log('Team2 is more likely to win');












































// const goalKeeper1 = 'Neuar';
// const fieldPlayer1 = [
// 'Pavard',
// 'Martinez',
// 'Alaba',
// 'Davies',
// 'Kimmich',
// 'Garetsga',
// 'Comn',
// 'Muller',
// 'Gnarby',
// 'Lewandowskiy',
// ];

// const goalKeeper2 = 'Burki';
// const fieldPlayer2 = [
//     'schulz',
//     'Hummels',
//     'Akanzi',
//     'Hakimi',
//     'Weigl',
//     'witsel',
//     'Hazard',
//     'Brant',
//     'Sancho',
//     'Gotze',
// ];
// const player1 = [goalKeeper1, ...fieldPlayer1];
// const player2 = [goalKeeper2, ...fieldPlayer2];



// const allPlayersInfootBall = [goalKeeper1, goalKeeper2, ...fieldPlayer1, ...fieldPlayer2];
// // console.log(allPlayersInfootBall);

// // 4
// const players1Final = [ 'Tiago', 'Coutinio', 'Peristic', ...fieldPlayer1];
// //5
// // const [team1, draw, team2] = game.odds;
// game.odds =  {
//     var : 'team1',
//     var : 'draw',
//     var : 'team2',
// };

// //6
// const printGoals = function (eventjon) {
//  console.log(eventjon)
// };
// printGoals('Kimmich');
// printGoals('Granby');
// printGoals('Lewandowskiy');
// printGoals('Hummel');
// 7
// const scored = function(){
//     console.log(game.scored);
// }
// scored();

// //7














// const allPlayers = [
//     //1
//   'Neuar', // gk1
//   'Pavard',
//   'Martinez',
//   'Alaba',
//   'Davies',
//   'Kimmich',
//   'Garetsga',
//   'Comn',
//   'Muller',
//   'Gnarby',
//   'Lewandowskiy',
//     //2
//     'Burki', // gk2
//     'schulz',
//     'Hummels',
//     'Akanzi',
//     'Hakimi',
//     'Weigl',
//     'witsel',
//     'Hazard',
//     'Brant',
//     'Sancho',
//     'Gotze',
// ];















































































































