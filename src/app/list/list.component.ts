import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { work, WorkserviceService } from '../workservice.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public id:number=0;
  public works=new Array<work>();

  constructor(private service:WorkserviceService) { }

  ngOnInit(): void {
  }
  public show():void{
    this.works=this.service.all();
    console.log(this.works);
  }
  public onEditDoubleClicked(id:number):void{
    this.id = id;
    (document.getElementById("textToEdit")as HTMLInputElement).style.display="inline";
    (document.getElementById("isDone")as HTMLInputElement).style.display="inline";
    (document.getElementById("saveEdit")as HTMLButtonElement).style.display="inline";
  }
  public saveEdit():void{
    let work:work=this.works[this.id];
    let text:HTMLInputElement= (document.getElementById("textToEdit")as HTMLInputElement);
    text.style.display="none";
    work.name=text.value;
    let check:HTMLInputElement= (document.getElementById("isDone")as HTMLInputElement);
    check.style.display="none";
    work.done=check.checked;
    (document.getElementById("saveEdit")as HTMLButtonElement).style.display="none";
  }
  public close(i:any):void{
    this.works.splice(i,1);
  }
}
