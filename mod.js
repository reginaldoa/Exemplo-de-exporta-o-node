class Clubespreferidos{
    constructor(time1,time2,time3,time4){
        this.time1 = time1,
        this.time2 = time2,
        this.time3 = time3,
        this.time4 = time4
    }

    resposta(){
        return `Os 4 clubes preferidos desse usuário são : ${this.time1},${this.time2},${this.time3},${this.time4}`
    }
}
exports.Clubespreferidos =Clubespreferidos //Existem outras formas de fazer exportação, essa foi escolhida por preferência pessoal.
