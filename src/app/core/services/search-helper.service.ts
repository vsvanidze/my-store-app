import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { searchDataInterface } from 'src/app/core/interface/searchDataInterface'

@Injectable({
    providedIn: 'root'
})

export class SearchHelperService { 

    constructor() { }

    convertToQuery(object:any){
        let str = '';
        let size:number = Object.keys(object).length;
        /* for (let key in object) {
            if (size > 1) {
               
               str += `${key}=${object[key]}&`;
               
            } else{
                str = `${key}=${object[key]}`;
                
            }
        } */
        for(const [key, value] of Object.entries(object.params)) {
            if (size > 1) {
                str = `${key}=${value}&`;
            } else{
                str = `${key}=${value}`;
                debugger 
            }
        }
        //return 'limit=8&sort=asc';
        return str;
    }
}
