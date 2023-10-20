var database = require('../database/config');

async function cadastrar(empresa){
    var instrucaoSql = `
        INSERT INTO empresa (nomeResposavel, nomeFantasia, cnpj, tel, cep, tipoLogradouro, logradouro, numero, complemento, bairro, cidade, fkEstado) VALUES ('${empresa.nomeResponsavel}', '${empresa.nomeFantasia}', '${empresa.cnpj}', '${empresa.tel}', '${empresa.cep}', '${empresa.tipoLogradouro}', '${empresa.logradouro}', '${empresa.numeroLogradouro}', '${empresa.complemento}', '${empresa.bairro}', '${empresa.cidade}', ${empresa.idEstado});
    `;    
    await database.executar(instrucaoSql);
}

module.exports = {
    cadastrar
}