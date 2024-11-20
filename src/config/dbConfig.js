import { MongoClient } from 'mongodb';

export default async function conectarAoBanco(stringConexao) {
    let MongoClient;

    try {
        MongoClient = new MongoClient(stringConexao);
        console.log('Conectando ao cluster do bando de dados...');
        await MongoClient.connect();
        console.log('Conectado ao MongoDB Atlas com sucesso!');

        return MongoClient;
    }catch (erro) {
        console.error('Falha na conexão com o banco!', erro);
        process.exit();
    }
}