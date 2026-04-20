let var1 = document.getElementById('1')
let var2 = document.getElementById('2')
let var3 = document.getElementById('3')
let var4 = document.getElementById('4')
let var5 = document.getElementById('5')
let var6 = document.getElementById('6')
let var7 = document.getElementById('7')
let var8 = document.getElementById('8')
let var9 = document.getElementById('9')




let jogo = [[var1, var2, var3],
            [var4, var5, var6],
            [var7, var8, var9]
           ];

let opcao = ['x' , 'o']
let select = 0
let resposta = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

jogo.forEach((linha, i) => {
    linha.forEach((celula,j) => {
        celula.addEventListener('click', () => {
            //retorno de cada botao
            if(select == 0){
                resposta[i][j] = opcao[select]
                preencher()
                select++
                verificarVitoria()
                
            }else if(select == 1){
                resposta[i][j] = opcao[select]
                preencher()
                select = 0
                verificarVitoria()
                
            }
        })
    })
})

function preencher(){
    resposta.forEach((linha, i) => {
        linha.forEach((celula, j) => {

            if(resposta[i][j] == 'x'){
                jogo[i][j].style.backgroundImage = "url(x.png)"
                document.body.style.backgroundColor = 'red'
            }else if(resposta[i][j] == 'o'){
                jogo[i][j].style.backgroundImage = "url(o.png)"
                document.body.style.backgroundColor = 'blue'

            }

        })
    })
}

function verificarVitoria() {

    for (let i = 0; i < 3; i++) {
        if (resposta[i][0] !== '' && 
            resposta[i][0] === resposta[i][1] && 
            resposta[i][1] === resposta[i][2]) {
            alert(`Jogador ${resposta[i][0]} venceu na linha!`);
            return;
        }
    }

    for (let j = 0; j < 3; j++) {
        if (resposta[0][j] !== '' && 
            resposta[0][j] === resposta[1][j] && 
            resposta[1][j] === resposta[2][j]) {
            alert(`Jogador ${resposta[0][j]} venceu na coluna!`);
            return;
        }
    }

    if (resposta[0][0] !== '' && 
        resposta[0][0] === resposta[1][1] && 
        resposta[1][1] === resposta[2][2]) {
        alert(`Jogador ${resposta[0][0]} venceu na diagonal!`);
        return;
    }

    if (resposta[0][2] !== '' && 
        resposta[0][2] === resposta[1][1] && 
        resposta[1][1] === resposta[2][0]) {
        alert(`Jogador ${resposta[0][2]} venceu na diagonal!`);
        return;
    }
    
    let contador = 0

    resposta.forEach((linha, i) => {
        linha.forEach((celula, j) => {

            if(resposta[i][j] != ''){
                contador ++
            }
            
        })
    })
    if(contador == 9){
        alert('deu velha')
    }

}
