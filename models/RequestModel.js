import { BaseModel } from "./BaseModel.js";

export class RequestModel extends BaseModel {
    getAll() {
        return this.fetchDataAuth('requests', 'requests');
    }
    remove(data) {
        return this.fetchDataAuth('request/remove', 'request_remove', data);
    }
    counter() {
        return this.fetchDataAuth('request/counter', 'request_counter');
    }
}
