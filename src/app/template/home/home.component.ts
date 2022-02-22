import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items!: MenuItem[] ;
  constructor() { }

  ngOnInit(): void {
 

  
        this.items = [
            {
                label:'Application',
                icon:'pi pi-fw pi-file',
                items:[
                    {
                        label:'New',
                        icon:'pi pi-fw pi-plus',
                        routerLink: '/CreateApplication',       
                    },
                    
                  {
                      label:'List',
                      icon:'pi pi-fw pi-align-center',
                      routerLink: '/ApplicationList',
                  },
                 
                    
                    
                ]
            },
            {
                label:'Navigation Menu',
                icon:'pi-th-large',
                items:[
                  {
                    label:'New',
                    icon:'pi pi-fw pi-plus',
                    routerLink: '/CreateMenu',         },
                    
                    {
                        label:'List',
                        icon:'pi pi-fw pi-align-center',
                        routerLink: '/MenuList'
                    },
                   

                ]
            },
            
        ];
  }
}