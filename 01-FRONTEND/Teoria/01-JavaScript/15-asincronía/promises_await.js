const promesa = new Promise((resolve, reject)=>{
    setTimeout(() => {
        const exito = false
        if (exito) {
            resolve('TODO BIEN')
        } else {
            reject('TODO MAL')
            
        }
        
    }, 2000);
})

promesa.then((datos)=>{
    console.log(datos)
}).catch((error)=>{
    console.log(error)
})


// refactor a async/await


async function obtenerDatos() { // const obtenerDatos = async () =>{}
    try {
        let resultado = promesa
        console.log(resultado)
    } catch (error) {
        console.log("🚀 ~ name ~ error:", error)
    }
    
}

