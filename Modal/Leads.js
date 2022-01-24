
const con = require("../DataBase/conection");
const app = require('../Router/index');

class ModalLeads {


    async create(dados,dataAtual) {



        var bairro = dados.bairro;
        let bairroValor = bairro.find(bairro => bairro != null);
        let sql = "INSERT INTO `leads`(`leads_id`, `leads_zona`, `leads_bairro`, `leads_empresa`, `leads_cnpj`, `leads_contato`, `leads_email`, `leads_cargo`, `leads_telefone`, `leads_sistema`, `leads_market`, `leads_observacao`, `leads_data`) VALUES (null, " + con.escape(dados.zona) + ", " + con.escape(bairroValor) + ", " + con.escape(dados.empresa) + ", " + con.escape(dados.cnpj) + ", " + con.escape(dados.contato) + ", " + con.escape(dados.email) + ", " + con.escape(dados.cargo) + ", " + con.escape(dados.telefone) + ", " + con.escape(dados.sistema) + ", " + con.escape(dados.market) + ", " + con.escape(dados.observacao) + ", " + con.escape(dataAtual) + ")";
        const result = await con.promise().query(sql);
        return result;


    }


}

module.exports = new ModalLeads();