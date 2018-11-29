import { Injectable } from '@angular/core';
//import { HttpClient ,  } from '@angular/common/http';
import { Http, Headers, RequestOptions } from '@angular/http';
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";

@Injectable()
export class CameraService {

    private url = 'https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceAttributes=age,gender'

    constructor(private _http: Http) { }

    postCamera(imageUrl:string){
        const headers = new Headers({
            'Content-Type':'application/json',
            'Ocp-Apim-Subscription-Key':'c14068f4ec724d0ab6cf6ff6a6770835'
        });
        const options = new RequestOptions({headers});

        return this._http.post(this.url,{url:imageUrl},options)
        .map(data => data.json())
        .do(result => console.log(result));
        
    }

}