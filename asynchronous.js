//Write an asynchronous function that accepts a message string and a delay time in milliseconds. The function should log the message to the console after the specified delay time.
let destiny = true;

let myPromise = new Promise((resolve,reject)=>{
    if(destiny){
        resolve(`I am successful`);
    }
    else{
        reject(`Life is hard`)
    }
})
async function myMotivation(){
    try{
        console.log(`Work hard, everything is gonna be okay`);
        await myPromise;
    }
    catch{
        console.log(`An error occured`)
    }
}
myMotivation();
setTimeout(myMotivation,5000);

//You have an array of user IDs and a function getUserData(id) that returns a Promise with user data when given a user ID. Write an asynchronous function that fetches and logs the data for each user ID one by one, in sequence

async function getUserData(ids){
    ids.forEach(userId => {
        console.log((userId))
    });

}

getUserData([1,2,3,4]);


//You have an asynchronous function performTask() that returns a Promise. The Promise resolves if the task is successful and rejects if there's an error. Write a function that calls performTask() and logs a custom success message if the task is successful, and a custom error message if there's an error.
let playGames = false

let thePromise = new Promise((resolve,reject)=>{
    if (playGames){
        resolve("I have played four games today");
    }
    else{
        reject("I will play later")
    }
})
async function performTask(){
    try{
        console.log('I will be playing ten games per day');
        await thePromise;

    }
    catch{
        console.log('An error occured')
    }

}
performTask();


//Scenario
function unstableTask(taskName, failureProbability) {
    return new Promise((resolve, reject) => {
    const randomValue = Math.random();
    if (randomValue > failureProbability) {
    resolve(`${taskName} has succeeded`);
    } else {
    reject(`${taskName} has failed`);
    }
    });
   }
   async function executeWithRetry(taskName, retries, failureProbability) {
    for (let i = 0; i <= retries; i++) {
    try {
    const result = await unstableTask(taskName, failureProbability);
    console.log(result);
    return;
    } catch (error) {
    console.log(error);
    if (i === retries) {
    throw new Error(`Failed after ${retries} retries`);
    }
    }
    }
   }
   executeWithRetry("Swimming", 6, 0.4);

