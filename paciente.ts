class paciente{
    enfermaria:number;
    nome: string;
    leito: number;
    prontuario: string
     
    mostrarInformacoes(){
        console.log(`paciente  \n enfermaria: ${this.enfermaria}\n nome: ${this.nome}\n leito: ${this.leito}\n Prontuario: ${this.prontuario}`)
    }

}

const pc = new paciente
pc.enfermaria = 20
pc.nome = "Miles"
pc.leito = 3
pc.prontuario = "Paciente se encontra em situação de risco"

pc.mostrarInformacoes();