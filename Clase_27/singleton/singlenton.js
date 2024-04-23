let instance = null

class SingletonClass {
    constructor() {
        this.value = Math.random(100)
    }


    // Creamos un metodo statico 
    static getInstance() {
        // con Singleton
        if (!instance) {
            instance = new SingletonClass()
        }


        // sin Singleton
        // instance = new SingletonClass();

        return instance
    }
}


module.exports = SingletonClass;