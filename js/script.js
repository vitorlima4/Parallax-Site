function mudouTamanho(){
    if(window.innerWidth >= 600){
        itens.style.display = 'flex'
    }else{
        itens.style.display = 'none'
        document.querySelector('#burguer').innerHTML = "menu"
    }
}

function clickMenu(){
    if(itens.style.display == 'flex'){
        itens.style.display = 'none'
        document.querySelector('#burguer').innerHTML = "menu"
    }else{
        itens.style.display = 'flex'
        document.querySelector('#burguer').innerHTML = "close"
    }
}