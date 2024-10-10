function pedirUnaCerveza(callback) {
    setTimeout(() => {
        console.log("Cerveza recibida")
        callback()
    }, 2000);
    
}


pedirUnaCerveza(()=>{
    console.log("Beberse la cerveza")
})

