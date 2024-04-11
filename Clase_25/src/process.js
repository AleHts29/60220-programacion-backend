import { Command } from 'commander';

const program = new Command(); //Crea la instancia de comandos de commander.

program
    .option('-d', 'Variable para debu0g', false)
    .option('-p <port>', 'Puerto del server', 9090)
    .option('--mode <mode>', 'Modo de trabajo del server', 'development')
program.parse(); // paesea los comando y valida si son correctos


console.log('Option:', program.opts());
console.log('Option - Mode:', program.opts().mode);
console.log('Option - Port:', program.opts().p);


// 2do - Listeners
process.on('exit', code => {
    console.log("Este codigo se ejecuta antes de salir del proceso.");
    console.log("Codigo de salida del process. ", code);
})


process.on('uncaughtException', exception => {
    console.log("Esta exception no fue capturada, o controlada.");
    console.log("Exception no capturada: ", exception);
})


process.on('message', message => {
    console.log("Este codigo se ejecutará cuando reciba un mensaje de otro proceso.");
    console.log(`Mensaje recibido: ${message}`);
})


export default program;