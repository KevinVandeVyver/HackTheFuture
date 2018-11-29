import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-Home',
    templateUrl: './uploadfile.component.html',
})

export class UploadfileComponent{

    selectedFile : File = null;
    returnedData : String[] = [];

    constructor(private http: HttpClient) {
        
    }

    onFileSelected(event){
        this.selectedFile = <File>event.target.files[0];
    }

    onUpload(){
        const fd = new FormData();
        fd.append('image', this.selectedFile, this.selectedFile.name);
        this.http.post<IDeciphered>('http://172.21.1.122:8080/decipher', fd)
            .subscribe(res => {
                console.log(res),
                this.returnedData.push(res.deciphered)
            });
    }
}

export interface IDeciphered{
    deciphered: string
}