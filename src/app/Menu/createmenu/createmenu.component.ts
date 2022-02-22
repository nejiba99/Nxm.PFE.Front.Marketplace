import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IMenu } from 'src/core/entities/Menu';
import { HttpService } from 'src/core/services/http.service';

@Component({
  selector: 'app-createmenu',
  templateUrl: './createmenu.component.html',
  styleUrls: ['./createmenu.component.scss']
})
export class CreatemenuComponent implements OnInit {
MenusForm!:FormGroup
entity!:IMenu
  constructor(private httpservice: HttpService,
    private fb: FormBuilder,
    private router: Router,) { }

  ngOnInit(): void {
    this.createMenuForm();
  }
  get form() {
    return this.createMenuForm()
     
    }
     createMenuForm(){
    this.MenusForm = this.fb.group({
      title :  ['', [Validators.required]] ,
      description:  ['', [Validators.required]] ,
      parent:  ['', [Validators.required]] ,
      url:  ['', [Validators.required]] ,
     isactive:  ['', [Validators.required]] ,   
     applicationid:  ['', [Validators.required]] ,
     
    }
  
    )
    }
    public create() {
      this.entity = this.MenusForm.value;
  
      this.httpservice
        .create('Menus', this.entity)
       .subscribe((response) => {
        if (response) {
            this.router.navigate(['/MenuList'])
        }
          },
          
          )
          
        
    }
    
}
