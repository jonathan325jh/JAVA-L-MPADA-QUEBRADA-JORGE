var $ligar = document.getElementById('ligar')
var $desligar = document.getElementById('desligar')
var $lampada = document.getElementById('lamp')

function ligarLamp(){
      $lampada.src ='./lampada-acesa.jpg'
}

function desligarLamp(){
    $lampada.src ='./lampada-apagada.jpg'
}


$ligar.addEventListener('click',ligarLamp)

$desligar.addEventListener('click',desligarLamp)