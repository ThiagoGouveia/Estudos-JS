
function carregar(){    
    var msg = window.document.getElementById('msg') 
    var imagem = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
   
    msg.innerHTML = `Agora sao ${hora} horas. `

    if(hora >= 6 && hora <= 12){
        imagem.src = 'manha.jpg'
        document.body.style.background = '#e2cd9f'
    }
    else if(hora >= 12 && hora <= 18){
        imagem.src = 'tarde.jpg'
        document.body.style.background = '#b9846f'
    }
    else{
        imagem.src = 'noite.jpg'
        document.body.style.background = '515154'
    }
}