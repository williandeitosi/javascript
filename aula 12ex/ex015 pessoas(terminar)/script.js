function verificar (){
    var img = document.getElementById('imagem')
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById ('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if(idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src','bebehomem.png')
            } else if(idade < 21) {
                //Jovem
                img.setAttribute('src' , 'jovemhomem.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src' , 'adultohomem.png')
            } else {
                //Idoso
                img.setAttribute('src' , 'velhohomem.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if(idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src' , 'bebemulher.png')
            }else if(idade < 21) {
                //Jovem
                img.setAttribute('src' , 'jovemmuher.png')
            }else if (idade < 50) {
                //Adulto
                img.setAttribute('src' , 'adultamulher.png')
            }else {
                //Idoso
                img.setAttribute('src' , 'velhamulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade}`
        res.appendChild(img)
    }
}