process.on("message", message => {
    //Child Process - Fork 
    let result = 0;
    for (let i = 0; i < 6e9; i++) {
        result += i;
    }
    process.send(result);

});