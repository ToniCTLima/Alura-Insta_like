import conectaraoBanco from '../config/dbConfig.js'

const conexao = await conectaraoBanco(process.env.STRING_CONEXAO)

export async function getTodosPosts() {
    const db = conexao.db('imersao-instabytes')
    const colecao = db.collection('posts')
    return colecao.find().toArray();
}

export async function criarPost(novoPost) {
    const db = conexao.db('imersao-instabytes')
    const colecao = db.collection('posts')
    return colecao.insertOne(novoPost)

}