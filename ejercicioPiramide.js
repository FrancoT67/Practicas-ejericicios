/**
 * Armar un programa que imprima una piramide de Mario Bros. El programa debe:
 *  -Tomar como entrada la altura de la piramide(INT entre 2 y 8 inclusive).
 *  -Imprimir dos semi piramides de la altura especificada con '#' que esten separadas por dos espacios.
 *   EJEMPLO:
 *       # #
        ## ##
       ### ###
      #### ####
     ##### #####
    ###### ######
   ####### #######
  ######## ########
 ######### #########
########## ##########

*/

function piramide(x){
    let z=x
    for(let i=0;i<=x;i++){
        console.log(' '.repeat(z--)+'#'.repeat(i)+' '+'#'.repeat(i))
    }
}

piramide(10)
