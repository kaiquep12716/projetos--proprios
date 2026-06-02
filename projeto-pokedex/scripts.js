let conteudo = document.getElementById("info")
let imagem = document.querySelector('.imagem-pokemon')
let formulario = document.getElementById("formulario")
let nomepokemon = document.getElementById("nome-pokemon")
let nextbutton = document.getElementById('next')
let prevbutton = document.getElementById('previous')
let pokeid = 0



const delay = ms => new Promise(res => setTimeout(res, ms));

buscarPokemon(1)


formulario.addEventListener('submit', function(evento){
    evento.preventDefault()
            
    const pokemon = nomepokemon.value;
    nomepokemon.value = ''
    buscarPokemon(pokemon)

})

nextbutton.addEventListener('click', function(evento){
    
    buscarPokemon(pokeid+1)

})
prevbutton.addEventListener('click', function(evento){
    
    buscarPokemon(pokeid-1)

})
        
async function buscarPokemon(pokemon) {
    const resposta = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon)

    if(resposta.status == 404){

        conteudo.innerHTML = 'Pokemon não encontrado'
        imagem.innerHTML = ''

    }else{

        const dados = await resposta.json()

        console.log(dados)
        

        let tipo = dados.types.map(info => info.type.name).join(', ')
        
        imagem.style.backgroundImage = `url('${dados.sprites.front_default}')`;

        preencherInfoPokemon(dados);

        pokeid = dados.id
    }
}

function preencherInfoPokemon(dadosDaApi) {
    
    const infoContainer = document.getElementById("info");

    
    const idFormatado = String(dadosDaApi.id).padStart(3, '0');

    const tipo = dadosDaApi.types[0].type.name.toUpperCase();
    const habilidade = dadosDaApi.abilities[0].ability.name.toUpperCase();

 
    const hp = dadosDaApi.stats[0].base_stat;   // HP
    const atk = dadosDaApi.stats[1].base_stat;  // Attack
    const def = dadosDaApi.stats[2].base_stat;  // Defense
    const spd = dadosDaApi.stats[5].base_stat;  // Speed

   
    infoContainer.innerHTML = `
        <ul>
            <li style="font-size: 1.1em; color: #ffeb3b;">${dadosDaApi.name.toUpperCase()} #${idFormatado}</li>
            <li>TIPO: ${tipo}</li>
            <br>
            <li>HP:  ${hp} | ATK: ${atk}</li>
            <li>DEF: ${def} | SPD: ${spd}</li>
            <br>
            <li>ALT: ${dadosDaApi.height / 10}m | PESO: ${dadosDaApi.weight / 10}kg</li>
            <li>HAB: ${habilidade}</li>
        </ul>
    `;
}