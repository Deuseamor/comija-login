// Referência ao banco de dados Firestore
const salvarDados = (colecao, dados) => {
    return db.collection(colecao).add(dados)
        .then(docRef => {
            console.log("Documento salvo com ID:", docRef.id);
        })
        .catch(error => {
            console.error("Erro ao salvar dados:", error);
        });
};

const buscarDados = (colecao) => {
    return db.collection(colecao).get()
        .then(querySnapshot => {
            let resultados = [];
            querySnapshot.forEach(doc => {
                resultados.push({ id: doc.id, ...doc.data() });
            });
            return resultados;
        })
        .catch(error => {
            console.error("Erro ao buscar dados:", error);
        });
};

// Exportar funções para serem usadas em outros arquivos
export { salvarDados, buscarDados };
