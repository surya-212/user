import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  albumDetails:any[]=[]
constructor(private service:UserserviceService){
  
}
  ngOnInit(): void {
    this.service.getdata().subscribe(response=>{
      this.albumDetails=response
    })
  }

}
