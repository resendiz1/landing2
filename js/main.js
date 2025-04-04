var typed = new Typed('#escribible', {
    strings: ['Reparación de equipos de cómputo', 'Desarrollo Web.', 'Venta de Videojuegos', 'Invitaciones y videos para dias festivos'], // Textos
    typeSpeed: 50, // Velocidad de escritura
    backSpeed: 30, // Velocidad de borrado
    loop: true // Para repetir los textos
});


document.addEventListener("DOMContentLoaded", function () {
    let navbar = document.getElementById("nabvar");
    let floatingMenu = document.getElementById("floatingMenu");

    window.addEventListener("scroll", function () {
        let navbarHeight = navbar.offsetHeight;
        if (window.scrollY > navbarHeight) {
            floatingMenu.style.display = "block"; // Mostrar solo el botón ☰
        } else {
            floatingMenu.style.display = "none";
            document.getElementById("floatingLinks").style.display = "none"; // Cerrar menú al subir
        }
    });
});

function toggleMenu() {
    let links = document.getElementById("floatingLinks");
    links.style.display = links.style.display === "flex" ? "none" : "flex";
}





/* *********************** JS  de los correo ************************ */
{


window.onload = function(){
    emailjs.init('mvA2hTi9RX5iDG6Ry');
}

function correo(){

    let $nombre = document.getElementById('nombre').value;
    let $telefono = document.getElementById('telefono').value;
    let $mensaje = document.getElementById('mensaje').value;
    let $error = document.getElementById('error');
    let $success = document.getElementById('success');

    if($nombre == '' || $telefono == '' || $mensaje == ''){

        $error.classList.remove('d-none')

        setTimeout(()=>{
            $error.classList.add('d-none');
        },4000)

        return;
        
    }

    else{

        let parametros = {
            nombre: $nombre,
            telefono:$telefono,
            mensaje: $mensaje
        }

        emailjs.send("service_19kp3gr", 'template_zg0u38d', parametros)
            .then(response => {

                $success.classList.remove('d-none');
                
                setTimeout(()=>{
                    $success.classList.add('d-none');
                }, 4000)

                    document.getElementById('nombre').value = '';
                    document.getElementById('telefono').value = '';
                    document.getElementById('mensaje').value = '';
                

            },error =>{
                alert('El correo no se envio');
            }
        )

    }




}





}









