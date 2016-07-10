// Method for logging messages into console.
// I could use morgan for that, but I do not know it
// and didn't have enough time.
module.exports = (msg, variable = false) => {
    let now = new Date();
    if(typeof msg === 'string'){
        let communicate = now.toLocaleString() + ' : ' + msg;
        console.log(communicate);
        if(variable){
            console.dir(variable);
        }
    } else {
        let communicate = now.toLocaleString() + ' : ' + 'Logging variable:';
        console.log(communicate);
        console.dir(msg);
    }
}
