
function validar_nombre_usuario(string){
    const nombre = document.getElementById('dato_nombre_usuario').value;
    const validaNombre = (/^[A-Z][a-z]+$/)
        if ((validaNombre.test(nombre) == true) & nombre != null) { 
            alert("nombre_usuario valido") 
            return true;
        }else{ 
            alert("nombre_usuario no valido") 
            return false; } 
}

let registros = [];

function agregarRegistro(){
    var vacio = false;
    var n, e, a, m;
    n = "";
    e = "";
    a = "";
    m = "";


    function Usuario(usuario, email, asunto, mensaje){
        this.usuario = usuario;
        this.email= email;
        this.asunto = asunto;
        this.mensaje = mensaje
    }

    var rNombre = document.getElementById('dato_nombre_usuario').value;
    var rEmail = document.getElementById('email_usuario').value;
    var rAsunto = document.getElementById('asunto_usuario').value;
    var rMensaje = document.getElementById('mensaje_usuario').value;

    if(rNombre === ""){
        n = 'Nombre';
    }

    if(rEmail === ""){
        e = 'Email'
    }

    if(rAsunto === ""){
        a = 'Asunto'
    }

    if(rMensaje === ""){
        m = 'Mensaje'
    }


    if( n === 'Nombre' || e === 'Email'|| a === 'Asunto'|| m === 'Mensaje'){
        alert('Falta ' + n + " "+ e + " "+a+" "+m)
    }else{
        Arreglo = new Usuario(rNombre,rEmail,rAsunto,rMensaje)
        registros.push(Arreglo);
        console.log(registros)
    }
    
    
}

function limpiarRegistro (){
    document.getElementById('dato_nombre_usuario').value = "";
    document.getElementById('email_usuario').value = "";
    document.getElementById('asunto_usuario').value = "";
    document.getElementById('mensaje_usuario').value = "";
}


