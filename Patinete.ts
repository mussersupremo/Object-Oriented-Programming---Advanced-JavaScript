class patinete{

    marca:string;
    cor:string;
    preço:number;

    mostrarInformacoes(){
        console.log(`patinete: ${this.marca}\n cor: ${this.cor}\n preço: ${this.preço}`)
    }

}

const pat = new patinete();
pat.marca = "atlio"
pat.cor = "branco"
pat.preço = 220

pat.mostrarInformacoes();