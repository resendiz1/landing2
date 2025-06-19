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
    let $error = document.getElementById('error_modal');
    let $success = document.getElementById('success_modal');
    let $botton_modal = document.getElementById('sent_modal');

    if($nombre == '' || $telefono == '' || $mensaje == ''){

        $error.classList.remove('d-none')
        $botton_modal.innerHTML= '<img src="../img/assets/loading.gif" class="text-center"  style="width:40px; height: 40px;">';


        setTimeout(()=>{
            $error.classList.add('d-none');
                    $botton_modal.innerHTML= 'Enviar';
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


{
      $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true
      });

}



// leer por voz con la API Speech

{

    const leer = document.getElementById('leer');
    const pausar = document.getElementById('pausar');
    const reanudar = document.getElementById('reanudar');
    const detener = document.getElementById('detener');



    leer.addEventListener('click', function(){
    
        const texto = document.getElementById('texto').textContent;
        const voz = new SpeechSynthesisUtterance(texto);

        //configuraciones adicionales
        voz.lang = "es-MX";
        voz.rate =1;
        voz.pitch=3;

        speechSynthesis.speak(voz);
    
        pausar.classList.remove('d-none')
        leer.classList.add('d-none')
        detener.classList.remove('d-none');

    })

    pausar.addEventListener('click', function(){
        if(speechSynthesis.speaking && !speechSynthesis.paused){
    
            speechSynthesis.pause();

            pausar.classList.add('d-none');
            reanudar.classList.remove('d-none');

    
        }
        
    })



    reanudar.addEventListener('click', function(){
        if(speechSynthesis.paused){
            speechSynthesis.resume();
            pausar.classList.remove('d-none');
            reanudar.classList.add('d-none');
            
        }
    })



    detener.addEventListener('click', function(){
        speechSynthesis.cancel();

            leer.classList.remove('d-none');
            pausar.classList.add('d-none');
            reanudar.classList.add('d-none');
            detener.classList.add('d-none');

    })



}




