import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IApplication } from 'src/core/entities/Application';
import { HttpService } from 'src/core/services/http.service';
import { Router } from '@angular/router';
import {CalendarModule} from 'primeng/calendar';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  ApplicationForm!: FormGroup;
 entity!: IApplication;

  date3!: Date;
  constructor(
    private httpservice: HttpService,
    private fb: FormBuilder,
    private router: Router,
  
  ) { }

  ngOnInit(): void {
    this.createApplicationForm();
    
  }
  get form() {
    return this.ApplicationForm.controls;
  }
  createApplicationForm(){
  this.ApplicationForm = this.fb.group({
    icone :  ['', [Validators.required]] ,
    name:  ['', [Validators.required]] ,
    description:  ['', [Validators.required]] ,
    url:  ['', [Validators.required]] ,
   owner:  ['', [Validators.required]] ,   
   status:  ['', [Validators.required]] ,
    date:  ['', [Validators.required]] ,
    version:  ['', [Validators.required]] ,
  }

  )
  }
  public create() {
    this.entity = this.ApplicationForm.value;
console.log(this.entity)
    this.httpservice
      .create('Applications', this.entity)
     .subscribe((response) => {
      if (response) {
          this.router.navigate(['/ApplicationList'])

      }
        },
        
        )
        
      
  }

}
