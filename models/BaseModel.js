export class BaseModel {
    baseURL = 'http://localhost:8000/api/';

    fetchDataAuth = (url, endpoint, data = {}) => {
        return (new Promise((resolve, reject) => {

            const body = JSON.stringify(data)

            const headers = {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': "Bearer " + localStorage.getItem('token')
            }

            fetch(this.baseURL + url, {
                method: "post",
                headers,
                body
            }).then(res => res.json()).then(data => {
                console.log(data);
                if (data[endpoint].status == 'success') {
                    resolve(data[endpoint].data);
                } else {
                    reject(data[endpoint].errors);
                }
            }).catch(err => {
                reject(err);
            })
        }));
    }
}
