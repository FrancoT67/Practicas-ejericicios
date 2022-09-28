function piramide(x){
    let z=x
    for(let i=0;i<=x;i++){
        console.log(' '.repeat(z--)+'#'.repeat(i)+' '+'#'.repeat(i))
    }
}

piramide(10)
