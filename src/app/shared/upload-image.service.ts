import { Headers } from '@angular/http';

export class UploadService {
    private clientId: string = "ed8edf6f082b9fd";
    private URL = 'https://api.imgur.com/3/image';
    private headers: Headers = new Headers({ 'Authorization': `Client-ID ${this.clientId}` });
  
    constructor() {
  }
    makeFileRequest(file: File, success: (r: any )=> void) {
        return new Promise((resolve, reject) => {
            var formData: any = new FormData();
            var xhr = new XMLHttpRequest();
            
            formData.append("image", file, file.name);
            
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        success(xhr.response);
                    } else {
                        reject(xhr.response);
                    }
                }
            }
            xhr.open("POST", this.URL, true);
            xhr.setRequestHeader('Authorization', `Client-ID ${this.clientId}`);
            xhr.send(formData);
        });
    }
}