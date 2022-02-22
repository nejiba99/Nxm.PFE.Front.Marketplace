import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IApplication } from 'src/core/entities/Application';
import { HttpService } from 'src/core/services/http.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  ApplicationUpdateForm!: FormGroup;
 entity!: IApplication;
 date3!: Date;
 id!:string;
  constructor(
    private httpservice: HttpService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id)
  
 if (this.id) {
      this.httpservice.findById("Applications", this.id).subscribe((response) => {
        this.entity = response;
        console.log(response);
        this.load();
      });
      
  }
  this.updateApplicationForm();
}
  get form() {
    return this.ApplicationUpdateForm.controls;
  }
  private load() {
    this.ApplicationUpdateForm.setValue({
       icone :this.entity.icone,
       name : this.entity.name,
       description:this.entity.description,
       url :this.entity.url,
       owner : this.entity.owner,
       status:this.entity.status,
       date:this.entity.date,
       version:this.entity.version,
    })
   
   
  
  
  
  }
  updateApplicationForm(){
    this.ApplicationUpdateForm = this.fb.group({
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
    public update() {
      this.httpservice.update('Applications',this.id,this.ApplicationUpdateForm.value).subscribe((response) => {
        console.log(this.entity)

      if (response) {
       this.router.navigate(['/ApplicationList']);}})
      }
      }
      

    