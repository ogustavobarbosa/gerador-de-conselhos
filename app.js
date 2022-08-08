const url = 'https://api.adviceslip.com/advice';

const conselho = document.querySelector('[data-conselho]')
const id = document.querySelector('[data-id]')
const spinner = document.querySelector('.card__button')

$('[data-btn]').click((e) =>{

    spinner.setAttribute('loading', '')
    
    fetch(url, 
        {
            method: 'GET', 
            cache: 'no-store'
        })
        .then(dados => dados.json())

        .then(resposta => {
            spinner.removeAttribute('loading')

            const data_id = resposta.slip.id
            const data_conselho = resposta.slip.advice

            id.innerHTML = data_id
            conselho.innerHTML = `"${data_conselho}"`
        })
})
