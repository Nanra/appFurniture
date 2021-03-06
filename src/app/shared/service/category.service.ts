import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { EventEmitter, Injectable } from '@angular/core';
import { Category } from '../model/category.model';
import { Observable } from 'rxjs';
import { Response, Headers } from '@angular/http';

@Injectable()

export class CategoryService {
    categoryUpdated = new EventEmitter<Category>();

    categoryList: Category[] = [];

    constructor(private http: HttpClient) { }

    loadCategories() {
        return this.http.get('http://localhost:3000/api/category')
            .pipe(map((respone: any) => {
                    const data = respone;
                    this.categoryList = data;
                    return data;
                },
                (error) => console.log(error)
            ));
    }

    getCategories() {
        return this.categoryList.slice();
    }

    selectCategory(cat_id: string) {
        const result = this.categoryList.find((elem) => {
            return (elem.cat_id === cat_id);
        });

        if (result !== undefined) {
            this.categoryUpdated.emit(result);
        }
        return result;
    }
}
