function encriptar(key,texto){
    key=key.toUpperCase();
    let exclu=[0,1,2,3,4,5,6,7,8,9,'!','¡','¿','?','-','_']
    if(key.length === 27){
        for(i=0;i<key.length;i++){
            exclu.forEach(item => {
                if(key[i] == item){
                    return ('key invalida, debe ser alfabetica')
                }else{
                    let texto2=texto
                    for (let i = 0; i <2; i++) {
                        texto2[i].replace('h','j')
                        console.log('es el texto 2 =>', texto2)
                    }
                }
                
            });

        }

    }

    

}
let texto= 'hola cabezon, este es el texto'
encriptar('vwbfjharzqmoestckipgnd¿xuyl',texto)