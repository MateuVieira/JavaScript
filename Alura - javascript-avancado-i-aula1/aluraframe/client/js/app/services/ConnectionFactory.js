
class ConnectionFactory {

    constructor(){
        throw new Error('Não é possível criar instâncias de ConnectionFactory.');
    }

    static getConnction(){

        return new Promise((resolve, reject) => {

            let openRequest = window.indexedDB.open('aluraframe', 1);

            openRequest.onupgradeneeded = e => {

            };

            openRequest.onsuccess = e => {
                
            };

            openRequest.onerror = e => {
                
            };
        });
    }
}