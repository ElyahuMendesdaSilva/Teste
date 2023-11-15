fetch(`apps.json`)
.then(resposta => resposta.json())
.then(json => {
    json.forEach(element => {
        let card = `
        <div class="card">
        <img src=${element.img} alt="">
        <h4>${element.nome}</h4>
        <a download="português" href="${element.download}" id="download"> download </a>
</div>`
        let tudo=document.querySelector("body")
        tudo.innerHTML=card
    });

})

