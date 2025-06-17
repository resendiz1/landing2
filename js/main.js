var typed = new Typed('#escribible', {
    strings: ['Reparación de equipos de cómputo', 'Desarrollo Web.', 'Venta de Videojuegos', 'Instalación de Software'], // Textos
    typeSpeed: 50, // Velocidad de escritura
    backSpeed: 30, // Velocidad de borrado
    loop: true // Para repetir los textos
});

var typed = new Typed('#escribible2', {
    strings: ['Reparación de equipos de cómputo', 'Desarrollo Web.', 'Venta de Videojuegos', 'Instalación de Software'], // Textos
    typeSpeed: 50, // Velocidad de escritura
    backSpeed: 30, // Velocidad de borrado
    loop: true // Para repetir los textos
});







/* *********************** JS  de los correo ************************ */
{


window.onload = function(){
    emailjs.init('mvA2hTi9RX5iDG6Ry');
}

function correo_modal(){


    let $nombre = document.getElementById('nombre_modal').value;
    let $telefono = document.getElementById('telefono_modal').value;
    let $mensaje = document.getElementById('mensaje_modal').value;
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
            to_email:'arturo.resendiz@grupopabsa.com',
            nombre: $nombre,
            telefono:$telefono,
            mensaje: $mensaje
        }

        emailjs.send("service_nnko2lm", 'template_zg0u38d', parametros)
            .then(response => {

                $success.classList.remove('d-none');
                
                setTimeout(()=>{
                    $success.classList.add('d-none');
                }, 4000)

                    document.getElementById('nombre_modal').value = '';
                    document.getElementById('telefono_modal').value = '';
                    document.getElementById('mensaje_modal').value = '';
                

            },error =>{
                alert('El correo no se envio');
            }
        )

    }
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
            to_email:'arturo.resendiz@grupopabsa.com',
            nombre: $nombre,
            telefono:$telefono,
            mensaje: $mensaje
        }

        emailjs.send("service_nnko2lm", 'template_zg0u38d', parametros)
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



//Aqui est el js que hace que se ejecute el href al  clikar sobre su div
document.querySelectorAll('.menu').forEach(div =>{
    div.addEventListener('click', function(){
        const enlace = this.querySelector('a');

        if(enlace){
            window.location.href = enlace.href;
        }
    })
})

document.querySelectorAll('.menu-flotante').forEach(div =>{
    div.addEventListener('click', function(){
        const enlace = this.querySelector('a');

        if(enlace){
            window.location.href = enlace.href;
        }
    })
})




{

  const hamburger = document.getElementById('hamburger');
  const dropdown = document.getElementById('dropdownMenu');
  const links = dropdown.querySelectorAll('a');

  hamburger.addEventListener('click', () => {
    dropdown.classList.toggle('show');
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      dropdown.classList.remove('show');
    });
  });


}






{

 // Inicializar Isotope
  var elem = document.querySelector('#gallery');

    var iso = new Isotope(elem, {

        itemSelector: '.grid-item',
        layoutMode: 'masonry',
        transitionDuration: '0.02s'

    });










  // Botones de filtro
  var filters = document.querySelectorAll('[data-filter]');
  filters.forEach(button => {
    button.addEventListener('click', () => {
      const filterValue = button.getAttribute('data-filter');
      iso.arrange({ filter: filterValue });

      // Estilos activos
      filters.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
    });
  });












}