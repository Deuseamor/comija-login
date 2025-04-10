import { db } from "./firebase/firebase.js";

// Função para salvar dados no Firestore
const salvarDados = async (colecao, dados) => {
    try {
        const docRef = await db.collection(colecao).add(dados);
        console.log(`Documento salvo com ID: ${docRef.id}`);
        return docRef.id;
    } catch (error) {
        console.error("Erro ao salvar dados:", error);
        throw new Error("Erro ao salvar os dados.");
    }
};

// Função para buscar todos os dados de uma coleção no Firestore
const buscarDados = async (colecao) => {
    try {
        const querySnapshot = await db.collection(colecao).get();
        let resultados = [];
        querySnapshot.forEach(doc => {
            resultados.push({ id: doc.id, ...doc.data() });
        });
        return resultados;
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
        throw new Error("Erro ao buscar os dados.");
    }
};

// Função para atualizar dados de um documento específico
const atualizarDados = async (colecao, docId, novosDados) => {
    try {
        await db.collection(colecao).doc(docId).update(novosDados);
        console.log(`Dados do documento ${docId} atualizados com sucesso.`);
    } catch (error) {
        console.error("Erro ao atualizar dados:", error);
        throw new Error("Erro ao atualizar os dados.");
    }
};

// Função para excluir um documento do Firestore
const excluirDados = async (colecao, docId) => {
    try {
        await db.collection(colecao).doc(docId).delete();
        console.log(`Documento ${docId} excluído com sucesso.`);
    } catch (error) {
        console.error("Erro ao excluir dados:", error);
        throw new Error("Erro ao excluir os dados.");
    }
};

// Exportar funções para serem usadas em outros arquivos
export { salvarDados, buscarDados, atualizarDados, excluirDados };
