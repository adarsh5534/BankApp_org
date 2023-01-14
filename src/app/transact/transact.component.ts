import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transact',
  templateUrl: './transact.component.html',
  styleUrls: ['./transact.component.css']
})
export class TransactComponent {
acno:any
transaction:any

  constructor(private ds:DataService){
    this.acno=JSON.parse(localStorage.getItem('currentacno')|| "")

  this.ds.gettransaction(this.acno).subscribe((result:any)=>{
    this.transaction=result.message
  },
  (result:any)=>{
    alert(result.error.message)
  })

  
  }
}
