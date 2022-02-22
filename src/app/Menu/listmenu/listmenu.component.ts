import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMenu } from 'src/core/entities/Menu';
import { HttpService } from 'src/core/services/http.service';
@Component({
  selector: 'app-listmenu',
  templateUrl: './listmenu.component.html',
  styleUrls: ['./listmenu.component.scss']
})
export class ListmenuComponent implements OnInit {
  menus!: Array<IMenu>;
  scrollableCols: any[] = [];
  
  constructor(private httpservice:HttpService,private router: Router) { }

  ngOnInit(): void {
    this.loadproject();
   
  }
  loadproject(){

    this.httpservice.getAllmenus("Menus").subscribe(

     result=>{this.menus=result},

     error=>{console.log(error)}

   )}
   delete(id:string){
    if (confirm("are you sure to delete this Application"))
        this.httpservice.deletemenu('Menus',id).subscribe(result=>{this.loadproject()},
          error=>{console.log(error)})
          
    }
    update(id:string){
      this.router.navigate(['UpdateMenu',id])
       }
}


