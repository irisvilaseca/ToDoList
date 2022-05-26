import { Injectable } from '@angular/core';
export class work{
  public name:string;
  public done:boolean;
  constructor(name:string,done:boolean){
    this.name=name;
    this.done=done;
  }
}
@Injectable({
  providedIn: 'root'
})
export class WorkserviceService {
public works=new Array<work>();
  constructor() { }

  public add(name:string): void{
    this.works.push(new work(name,false));
  }
  public all():Array<work>{
    return this.works;
  }
}
