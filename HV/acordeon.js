
function main(){
    const container = document.getElementById('container')
    container.addEventListener('click', (e) =>{
        if(e.target.classList.contains('titulo')){
            e.target.parentElement.classList.toggle('scale')
        }
    })
}

function RP(){
    const container = document.getElementById('container')
    container.addEventListener('click', (e) =>{
        if(e.target.classList.contains('titulo')){
            e.target.parentElement.classList.toggle('scaleRP')
        }
    })
}