let userName = prompt("Welcome to GC mini golf! What is your name?");
console.log(`Name: ${userName}`);

let holes = prompt(`Hello, ${userName}! Would you like to play 3 or 6 holes?`);
console.log(`Holes: ${holes}`);

let tp = 9;
let sp = 18;
let st = 0;



if (holes === "3") {
    let ho = Number( prompt ("How many putts for hole 1? (par is 3)"));
    console.log("Hole 1 putts: " + ho);
    st += ho;
    let ht = Number( prompt ("How many putts for hole 2 (par is 3)"));
    console.log("Hole 2 Putts: " + ht);
    st += ht;
    let hte = Number( prompt  ("How many putts for hole 3? (par is 3)"));
    console.log("Hole 3 putts: " + hte);
    st += hte;
        if (st === tp)
            console.log (`Good game, ${userName}! Your total par was: 0`)
        else if (st < tp)
            console.log (`Great job, ${userName}! Your total par was: -${tp - st}`)
        else if (st > tp)
            console.log (`Nice try, ${userName}... Your total par was: +${st - tp}`)
    
}


else if (holes === "6") {
    let i = 1
    do {
        let howMany = Number( prompt ("How many putts for hole " + i + " (par is 3)"));
        console.log (`Hole ${i} putts: ${howMany}`);
        st += howMany
        i ++;
    } while (i <= 6);
    
    if (st === sp)
            console.log (`Good game, ${userName}! Your total par was: 0`)
        else if (st < sp)
            console.log (`Great job, ${userName}! Your total par was: -${sp - st}`)
        else if (st > sp)
            console.log (`Nice try, ${userName}... Your total par was: +${st - sp}`)
}

else {
    alert("Sorry this is an invalid response! Please choose either 3 or 6 for the number of hole.")
}


