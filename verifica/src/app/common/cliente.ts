export class Cliente {
    id!: number;
    nome: string = '';
    cognome: string = '';

    constructor(id: number, cliente?: any) {
        this.id = id;
        if (cliente) {
            this.nome = cliente.nome;
            this.cognome = cliente.cognome;            
        }
    }
}
