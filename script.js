  const myCatFacts = ["Cats are the best", "Cats are just small lions"];

console.log(myCatFacts[0]);

for (let index = 0; index < myCatFacts.length; index++) {
    console.log(myCatFacts[index]);
};

//
//

async function getApiData () {
    // A variable that is waiting for a response from the URL-adress.
    const response = await fetch("https://catfact.ninja/facts");
    console.log(response);

    // A variable that is waiting for the response to be readable.
    const data = await response.json();
    console.log(data);
    console.log(data.data);
    console.log(data.data[3]);
    console.log(data.data[3].fact);

    const catFact = data.data;

    // Create a "for loop" going through the array catFact to show all data inside.
    for (let index = 0; index <catFact.length; index++) {
        console.log(catFact[index].fact);

        const p = document.createElement("p");
        p.textContent = catFact[index].fact;
    
        const main = document.querySelector("main");
        main.appendChild(p);
    };
}

getApiData();
