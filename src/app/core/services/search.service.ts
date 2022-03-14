import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { searchDataInterface } from 'src/app/core/interface/searchDataInterface';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})

export class SearchService {

    url = 'https://fakestoreapi.com/products';/* 
    urlOfCategory = 'https://fakestoreapi.com/products/categories'; */

    constructor(private httpClient: HttpClient) { }

    public getSearchData(params: any): Observable<searchDataInterface[]> {

        let queryParams = new HttpParams();         

        for(const [key, value] of Object.entries(params)) {            
           queryParams = queryParams.append(key, (value as string).toString());
        }

        return this.httpClient.get<searchDataInterface[]>(this.url,{params:queryParams});
    }    
}
