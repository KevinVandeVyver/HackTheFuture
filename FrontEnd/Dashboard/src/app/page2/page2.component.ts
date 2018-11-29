import { Component, ViewChild, ElementRef } from '@angular/core';
import { CameraService } from '../Services/camera.service';

@Component({
    selector: 'app-Home',
    templateUrl: './page2.component.html',
    styleUrls: ['./page2.component.css']
})

export class Page2Component{
  
personInfo:string;




    @ViewChild("video")
    public video: ElementRef;

    @ViewChild("canvas")
    public canvas: ElementRef;

    public captures: Array<any>;

    public constructor(private service: CameraService) {
        this.captures = [];
    }

    public ngOnInit() { }


    /*public ngAfterViewInit() {
        if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
                this.video.nativeElement.src = window.URL.createObjectURL(stream);
                this.video.nativeElement.play();
            });
        }
    }*/


capture(){
    var context = this.canvas.nativeElement.getContext("2d").drawImage(this.video.nativeElement, 0, 0, 460, 258);
    this.captures.push(this.canvas.nativeElement.toDataURL("image/png"));
    
}

TEST(event){
this.service.getCamera("https://images.pigeonsandplanes.com/images/c_limit,f_auto,fl_lossy,q_auto,w_1030/k21crdjfk09snhpxjmgh/kanye-west-getty-james-devaney")//this.captures[1])
.subscribe(data=> {this.personInfo = data});
console.log("pressed");
console.log();
}

}