import { Component, ViewChild, ElementRef } from '@angular/core';
import { CameraService } from '../Services/camera.service';


@Component({
    selector: 'app-Home',
    templateUrl: './page2.component.html',
    styleUrls: ['./page2.component.css']
})

export class Page2Component{
  
imageUrl:string  = "https://media.istockphoto.com/photos/friendship-picture-id532969250?k=6&m=532969250&s=612x612&w=0&h=Vlf2_iNPkEjbCNozIbZlScGfRx4fDSpGphGM9P1XGFQ=";
personInfo:string;
imageurl:string;

//imageulr: string = ;

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
    //this.imageurl = this.capture[0];
    //console.log(this.capture[2]);
    
}


fixImage(src: string){
//src = this.imageurl;
console.log(this.imageurl);
}

TEST(event){
this.service.postCamera(this.imageUrl)//https://images.pigeonsandplanes.com/images/c_limit,f_auto,fl_lossy,q_auto,w_1030/k21crdjfk09snhpxjmgh/kanye-west-getty-james-devaney")//this.captures[1])
.subscribe(data=> {this.personInfo = data});
console.log("pressed");
//console.log(this.imageulr);

}

}