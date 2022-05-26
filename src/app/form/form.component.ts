import { Component, OnInit } from '@angular/core';
import { work, WorkserviceService } from '../workservice.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public works=new Array<work>();
  
  constructor(private service:WorkserviceService) {
    
    }

  ngOnInit(): void {

  }
  public submit(): void{
    let newTask = (document.getElementById('exampleFormControlTextarea2') as HTMLInputElement).value;
    this.service.add(newTask);
    this.works=this.service.works;
  }
 
}
