
class HttpService {

    _handleErrors(res) {

        if(res.ok){
            return res;
        } 
        throw new Error(res.statusText);
    }

    get(url){

        return fetch(url)
            .then(res => this._handleErrors(res))
            .then(res => res.json());
    }


    post(url, dado) {


        return new Promise((resolve, reject) => {

            let xhr = new XMLHttpRequest();
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-Type", "application/json");

            xhr.onreadystatechange = () => {

                if (xhr.readyState == 4) {

                    if (xhr.status == 200) {

                        resolve(JSON.parse(xhr.responseText));
                    } else {

                        reject(xhr.responseText);
                    }
                }
            };

            xhr.send(JSON.stringify(dado));
        });

    }

}