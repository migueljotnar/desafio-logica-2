function rank(numb1, numb2){
    return numb1 - numb2
} let rankFinal = rank(900, 810)
 if(rankFinal <=10){
    console.log("O heroi tem saldo de " + rankFinal + " Pts e esta no nivel Ferro")
 }else if(rankFinal <=20){
    console.log("O heroi tem saldo de " + rankFinal + " Pts e esta no nivel Bronze")
}else if(rankFinal <=50){
    console.log("O heroi tem saldo de " + rankFinal + " Pts e esta no nivel Prata")
}else if(rankFinal <=80){
    console.log("O heroi tem saldo de " + rankFinal + " Pts e esta no nivel Ouro")
}else if(rankFinal <=90){
    console.log("O heroi tem saldo de " + rankFinal + " Pts e esta no nivel Diamante")
}else if(rankFinal <=100){
    console.log("O heroi tem saldo de " + rankFinal + " Pts e esta no nivel Lendario")
}else if(rankFinal >=101){
    console.log("O heroi tem saldo de " + rankFinal + " Pts e esta no nivel Imortal")
}
