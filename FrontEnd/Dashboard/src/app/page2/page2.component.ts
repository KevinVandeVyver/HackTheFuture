import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-Home',
    templateUrl: './page2.component.html',
    styleUrls: ['./page2.component.css']
})

export class Page2Component{
  
    @ViewChild("video")
    public video: ElementRef;

    @ViewChild("canvas")
    public canvas: ElementRef;

    public captures: Array<any>;

    public constructor() {
        this.captures = [];
    }

    public ngOnInit() { }

 /*   public ngAfterViewInit() {
        if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
                this.video.nativeElement.src = window.URL.createObjectURL(stream);
                this.video.nativeElement.play();
            });
        }
    }*/


capture(){
    var context = this.canvas.nativeElement.getContext("2d").drawImage(this.video.nativeElement, 0, 0, 640, 480);
    this.captures.push(this.canvas.nativeElement);//this.canvas.nativeElement.toDataURL("image/png"));
    
}



}