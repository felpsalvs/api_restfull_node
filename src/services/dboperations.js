var config = require("../config/dbconfig");
const sql = require("sqlite3").verbose();
const db = new sql.Database(config);

//GET ALL BASES
async function getPessoas() {
  try {
    const rows = await new Promise((resolve, reject) => {
      db.all("SELECT * FROM PESSOAS", (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
    return rows;
  } catch (error) {
    console.log(error);
  }
}

//GET COM PARÂMETROS
async function getOrder(data) {
  try {
    let pool = await sql.connect(config);
    let product = await pool
      .request()
      .input("input_parameter", sql.NVarChar, data)
      .query("SELECT * FROM PESSOAS where PRIMEIRO_NOME = @input_parameter");
    return product.recordsets;
  } catch (error) {
    console.log(error);
  }
}

//INSERT DATABASE
async function Create(order) {
  try {
    let pool = await sql.connect(config);
    let insertProduct = await pool
      .request()
      .input("Nome", sql.NVarChar, order.Nome)
      .input("Email", sql.NVarChar, order.Email)
      .input("Telefone", sql.NVarChar, order.Telefone)
      .input("Instrumento", sql.NVarChar, order.Instrumento)
      .input("Descricao", sql.NVarChar, order.Descricao)
      .input("Status", sql.Bit, order.Status)
      .input("Data_Escricao", sql.DateTime, order.Data_Escricao)
      .execute("InsertSiteLouvor_Harmonia");
    return insertProduct.recordsets;
  } catch (err) {
    console.log("Erro aqui:::" + err);
  }
}

//UPDATE DATABASE
async function Update(id_pessoa, dataOrder) {
  try {
    let pool = await sql.connect(config);
    let updateProduct = await pool
      .request()
      .input("id_pessoa", sql.Int, id_pessoa)
      .input("primeiro_nome", sql.NVarChar, dataOrder.PRIMEIRO_NOME)
      .input("segundo_nome", sql.NVarChar, dataOrder.SEGUNDO_NOME)
      .input("idade", sql.Int, dataOrder.IDADE)
      .input("enderesso", sql.NVarChar, dataOrder.ENDERESSO)
      .input("numero_casa", sql.Int, dataOrder.NUMERO_CASA)
      .input("telefone", sql.NVarChar, dataOrder.TELEFONE)
      .input("uf", sql.NVarChar, dataOrder.UF_FAVORECIDO)
      .input("ano_nascimento", sql.Int, dataOrder.ANO_NASCIMENTO)
      .input("email", sql.NVarChar, dataOrder.EMAIL_VALIDACAO)
      .execute("UpdateUsersAll");
    return updateProduct.recordsets;
  } catch (err) {
    console.log("Erro no update: " + err);
  }
}

//INSER BASE PESSOAS
async function CreatePessoas(ordenar) {
  try {
    let pool = await sql.connect(config);
    let insertPessoas = await pool
      .request()
      .input("primeiro_nome", sql.NVarChar, ordenar.PRIMEIRO_NOME)
      .input("segundo_nome", sql.NVarChar, ordenar.SEGUNDO_NOME)
      .input("idade", sql.Int, ordenar.IDADE)
      .input("enderesso", sql.NVarChar, ordenar.ENDERESSO)
      .input("numero_casa", sql.Int, ordenar.NUMERO_CASA)
      .input("telefone", sql.NVarChar, ordenar.TELEFONE)
      .input("uf", sql.NVarChar, ordenar.UF_FAVORECIDO)
      .input("ano_nascimento", sql.Int, ordenar.ANO_NASCIMENTO)
      .input("email", sql.NVarChar, ordenar.EMAIL_VALIDACAO)
      .execute("InsertUsersAll");
    return insertPessoas.recordsets;
  } catch (error) {
    console.log("Erro no insert pessoas: " + error);
  }
}

//INSERT BASE IP
async function Insert(data) {
  try {
    let insertData = await sql.connect(config);
    let insertIp = await insertData
      .request()
      .input("ip", sql.NVarChar, data.ip)
      .execute("Insert_Ip_Usuario");
    return insertIp.recordsets;
  } catch (error) {
    console.log("Erro aqui " + error);
  }
}

//DELETE COM PARÂMETROS
async function deleteOrder(data) {
  try {
    let pool = await sql.connect(config);
    let product = await pool
      .request()
      .input("input_parameter", sql.Int, data)
      .query("DELETE FROM PESSOAS WHERE ID_PESSOA = @input_parameter");
    return product.recordsets;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getPessoas: getPessoas,
  getOrder: getOrder,
  Insert: Insert,
  Create: Create,
  deleteOrder: deleteOrder,
  Update: Update,
  CreatePessoas: CreatePessoas,
};
