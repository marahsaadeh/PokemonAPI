//object
const pokeBtn =document.querySelector('#pokeBtn')

//When you click button calls and do getName function
pokeBtn.addEventListener('click',getName)

async function getName(){
    try {
        const getPokemanStats = await axios.get('https://pokeapi.co/api/v2/pokemon/')
            .then(res => res.data.results)
            .then(data => {
                data.map(pokeStats =>{
                    getStats(pokeStats)
                })
                return data
            })

    } catch (error) {
        console.error(error)
        
    }    

}

const getMainContainer = document.querySelector('#mainContainer')
const getStats =async (charStats) => {
    //console.log(charStats.name)
    try {
        const inStats = await axios.get(charStats.url)
            //.then(res => console.log(res))
            .then(res => res.data)
            .then(data => {
                //getMainContainer.append('Marah')
                console.log()
                //<div class="card" style="width: 18rem;">
                const card=document.createElement('div')
                    card.className= 'card'


                //<img src="..." class="card-img-top" alt="...">
                const frontShiny=data.sprites.front_shiny
                const img = document.createElement('img')
                    img.src=frontShiny
                    img.className='card-img-top'
                    card.append(img)
                
                
                //<div class="card-body">
                const cardBody=document.createElement('div')
                    cardBody.className='card-body'

                //<h5 class="card-title">Card title</h5>
                const h5EL = document.createElement('h5')
                      h5EL.className='card-title'
                      h5EL.textContent=charStats.name 
                      cardBody.append(h5EL)
                      
                    // p elmemnt .card-text
                const pEl = document.createElement('p')
                      pEl.className='card-text'
                      cardBody.append(pEl)    
                    card.append(cardBody)
                getMainContainer.append(card)
                
            })
    } catch (error) {
        console.error(error)
    }

}




//Document:    https://pokeapi.co/api/v2/pokemon/
