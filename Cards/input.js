const readline = require('readline');
const { exec } = require('child_process');

// Create an interface for input and output


// Function to prompt user for input
const WaitToUser = (query) => {
    return new Promise(resolve => rlexp.question(query, resolve));
};

const AskQuestion = (txt) => {
    return new Promise((resolve) => {
        rlexp.question(txt, (out) => {
            resolve(out);
        });
    });

}



let rlexp

let cardData = {};


const derivator = async(key, extra) => {
    const kill = () => {
        rlexp.close()
    }

    switch (key) {
        case "name":
            const name = await AskQuestion("Card name: ");
            cardData["name"] = name;
            break;



        default:
            kill()
            return false
    }
}


const ASK = async(i = 0, extra) => {
    const asks = ['name', "end"];
    await derivator(asks[i], extra[asks[i]]);
    i++
    if (asks[i] != undefined) {
        ASK(i, extra)
    } else {
        console.log(cardData);

    }


}


const getInfo = async(cards) => {


    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });


    console.log(cards);



    // rlexp = rl



    // console.log('Press Enter to continue...');
    // await WaitToUser('');
    // cardData = {}

    // AskQuestion("Card name:", (out) => {
    //         console.log(out);
    //         kill()

    //     })
    // kill()
    // AskQuestion("Card name:", () => {
    //     log
    // })
    // rl.close()
};





module.exports = {
    getInfo
}


// NOMBRE
// FAMILY
// -MONSTERS



// -MAGIC
// -TRAPS





// DESCRIPTION