class contaBancaria {

    nome: string;
    agencia: number;
    operacao: number;
    conta: number;
    validade: number;
     mostrarInformacoes(){
        console.log(`contaBancaria: ${this.nome}\n agencia: ${this.agencia}\n operacao: ${this.operacao}\n conta: ${this.conta}\n validade: ${this.validade}`)

     }

}
const cb = new contaBancaria();
cb.nome = "Davi"
cb.agencia = 2808
cb.operacao = 22
cb.conta = 31228
cb.validade = 3/24

cb.mostrarInformacoes();
