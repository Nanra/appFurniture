import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Furniture } from '../model/furniture.model';
import { Response } from '@angular/http';

@Injectable()

export class FurnitureService {

    private furnitureList: Furniture[] = [];

    constructor(private http: HttpClient) {}

    loadFurniture(cat_id: string) {
        return this.http.get('http://localhost:3000/api/category' + cat_id + '/furniture')
            .pipe(map((respone: any) => {
                    const data = respone;
                    for (let elem of data) {
                        elem.images = elem.images.split(',');
                    }
                    this.furnitureList = data;
                    return data;
                },
                (error) => console.log(error)
            ));
    }

    getAllFurniture() {
        return this.furnitureList.slice();
    }

    getFurniture(it_id) {
        const result = this.furnitureList.find((elem) => {
            return (elem.it_id === it_id);
        });

        return result;
    }
}
