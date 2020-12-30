class Pessoas{
    constructor(
        ID_PESSOA,
        PRIMEIRO_NOME,
        SEGUNDO_NOME,
        IDADE,
        ENDERESSO,
        NUMERO_CASA,
        TELEFONE,
        UF_FAVORECIDO,
        NUM_TESTE,
        ANO_NASCIMENTO,
        EMAIL_VALIDACAO){
        this.ID_PESSOA = ID_PESSOA; 
        this.PRIMEIRO_NOME = PRIMEIRO_NOME; 
        this.SEGUNDO_NOME = SEGUNDO_NOME;
        this.IDADE = IDADE;
        this.ENDERESSO = ENDERESSO; 
        this.NUMERO_CASA = NUMERO_CASA;
        this.TELEFONE = TELEFONE;
        this.UF_FAVORECIDO = UF_FAVORECIDO;
        this.NUM_TESTE = NUM_TESTE;
        this.ANO_NASCIMENTO = ANO_NASCIMENTO;
        this.EMAIL_VALIDACAO = EMAIL_VALIDACAO;
    }
}

module.exports = Pessoas;