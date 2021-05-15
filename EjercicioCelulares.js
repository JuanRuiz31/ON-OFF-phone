
const pantalla = document.querySelector(".pantalla")
const texto = document.querySelector(".texto")
const boton = document.querySelector(".botonInfo")
const botonEncendido= document.querySelector(".btnEncendido")



class Celular{
    constructor(color,peso,rsp,rsc,ram){
        this.color = color;
        this.peso = peso;
        this.rsp = rsp;
        this.rsc = rsc;
        this.ram = ram;
        this.encendido = true;
    }

    botonEncendido(){
        if(this.encendido == true) {

            botonEncendido.innerHTML="ON"
            this.encendido = false;
            pantalla.classList.add("pantallaApagada")
            texto.style.display ="none";
            boton.style.display = "none";

            if (mostrado == true) {pantalla.classList.remove("scroll")}
            
        }else if(this.encendido == false){
            if (mostrado == true) {pantalla.classList.add("scroll")}
            texto.style.display ="block";boton.style.display ="block";
            botonEncendido.innerHTML="OFF"
            pantalla.classList.remove("pantallaApagada")
            this.encendido = true;
        }
        
    }

    reiniciarCelular(){
        if(this.encendido == true){
            alert("Reiniciando el celular")
        }else{
            alert("El celular esta apagado")
        }
    }

    tomarFoto(){
        alert(`fotografia tomada a una resolucion de ${this.rsc}`)
    }

    mostrarInfo(){
        let informacion = `<b>Componentes:</b><br> color: ${this.color}.<br>
                          peso: ${this.peso}.<br>
                          resolución de pantalla: ${this.rsp}.<br>
                          resolución de la camara: ${this.rsc}.
                          memoria ram: ${this.ram}.`
        return informacion;
    }
}

const celular1 = new Celular("rojo","3.5gr","full HD","20mpx","3gb")
const celular2 = new Celular("azul","3.5gr","4K","100mpx","4gb")
const celular3= new Celular("azul","3.5gr","4K","100mpx","4gb")
const celular4 = new Celular("azul","3.5gr","4K","100mpx","4gb")



var mostrado = false;


boton.addEventListener("click",()=>{

    if (mostrado == false) {
        pantalla.classList.add("scroll")
        texto.innerHTML =` ${celular1.mostrarInfo()} <br><br>
         ${celular2.mostrarInfo()}<br><br> 
         ${celular3.mostrarInfo()}<br><br>
         ${celular4.mostrarInfo()}`;
        mostrado = true;
     
    }else if(mostrado == true){
        
        pantalla.classList.remove("scroll")
        texto.innerHTML = "";
        mostrado = false;
    }
    
})




botonEncendido.addEventListener("click",()=>{
    celular1.botonEncendido();
})

