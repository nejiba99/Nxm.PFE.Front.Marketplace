import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{IApplication}from 'src/core/entities/Application';
import { HttpService } from 'src/core/services/http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  applications!: Array<IApplication>;
  scrollableCols: any[] = [];
  constructor(private httpservice:HttpService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.loadproject();
    
  }
  loadproject(){

    this.httpservice.getAll("Applications").subscribe(

     result=>{this.applications=result},

     error=>{console.log(error)}

   )}
   delete(id:string){
    if (confirm("are you sure to delete this Application"))
        this.httpservice.delete('Applications',id).subscribe(result=>{this.loadproject()},
          error=>{console.log(error)})
          
    }
     update(id:string){
      this.router.navigate(['UpdateApplication',id])
       }
}
