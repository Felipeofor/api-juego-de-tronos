import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { map, tap, catchError } from "rxjs/operators";

@Injectable()

export class PublicService {
    constructor(private http: HttpClient) { }

    getCharacters(): Observable<any> {
        return this.http.get("https://thronesapi.com/api/v2/Characters").pipe(
            catchError(this.handleError))
    }

    handleError(error: Response): any{
        console.log(error);
    }
}