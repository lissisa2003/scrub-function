const fs = require('fs');

const args = process.argv.slice(2);

const input = args[0];

// function to return the scrubbed email
function emailScrubber(email){
    const emailSplit = email.split('@');
    emailSplit.shift();
    emailSplit.unshift('******');
    return emailSplit.join('@');
}

// recursive function to go through all keys
function scrubItem(item){
    const replacementString = '******';
    Object.keys(item).forEach(key => {
        // if it's an object, sort through its keys
        if(typeof item[key] === 'object'){
            scrubItem(item[key])
        }
        // if it's a scrubbed string, scrub it
        if(typeof item[key]==='string' && (key=== "name" || key == "username" || key === "password")){
            item[key] = replacementString;
        }
        // if it's an email, run the emailScrubber
        if(typeof item[key]==='string' && key === "email") {
            item[key]= emailScrubber(item[key])
        }
    })
}

// entry function that runs JSON parse, runs the recursive function, and returns the result
function scrub(){
    const readInput = fs.readFileSync(input);
    const jsonLog = JSON.parse(readInput);
    scrubItem(jsonLog);
    console.log(jsonLog);
    return jsonLog;
}

scrub();

