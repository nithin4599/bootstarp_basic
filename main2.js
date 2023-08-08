class game{
    constructor(name, speab, wekness){
        this.name = name,
        this.speab = speab,
        this.wekness = wekness
    }
    play(){
        console.log(`you have chosen ${this.name} and his st
        rength is ${this.speab} his weakness is ${this.wekness}`  )
    }
}
const player1 = new game("goku","9.5", "3")
const player2 = new game("vageta","9.2", "4")
console.log(player1.name)
console.log(player1.speab)
console.log(player2.name)
console.log(player2.speab)
if(player1.speab > player2.speab){
    console.log("goku wom")
}