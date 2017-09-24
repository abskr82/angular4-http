import {Injectable} from '@angular/core';
import { Http} from '@angular/http';

@Injectable()

export class ServiceService {
    constructor(private http: Http) {
    }
    storeData(data) {
        return this.http.post('https://app-demo-958bd.firebaseio.com/data.json', data);
    }
    getData() {
        return this.http.get('https://app-demo-958bd.firebaseio.com/data.json');
    }
};
