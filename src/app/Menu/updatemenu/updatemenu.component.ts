import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IMenu } from 'src/core/entities/Menu';
import { HttpService } from 'src/core/services/http.service';

@Component({
  selector: 'app-updatemenu',
  templateUrl: './updatemenu.component.html',
  styleUrls: ['./updatemenu.component.scss']
})
export class UpdatemenuComponent implements OnInit {
  UpdateMenuForm!:FormGroup;
  entity!: IMenu;
 id!:string;
  constructor(private httpservice:HttpService,
    private router:Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id)
    if (this.id) {
      this.httpservice.findById("Menus", this.id).subscribe((response) => {
        this.entity = response;
        console.log(response);
        this.load();
      });
      
  }
  this.updateMenunForm();
  }
  get form() {
    return this.UpdateMenuForm.controls;
  }
  private load() {
    this.UpdateMenuForm.setValue({
    title :this.entity.title,
    description :this.entity.description,
   parent :this.entity.parent,
    url:this.entity.url,
   isactive :this.entity.isactive,
   applicationId:this.entity.applicationid,
    
  
    })
  
  }
  updateMenunForm(){
    this.UpdateMenuForm = this.fb.group({
      title :  ['', [Validators.required]] ,
      description:  ['', [Validators.required]] ,
      parent:  ['', [Validators.required]] ,
      url:  ['', [Validators.required]] ,
     isactive:  ['', [Validators.required]] ,   
     applicationid:  ['', [Validators.required]] ,
    
    }
  
    )
    }
  public update() {
    this.httpservice.updatemenu('Menus',this.id,this.UpdateMenuForm.value).subscribe((response) => {
      console.log(this.entity)
    if (response) {
     this.router.navigate(['/MenuList']);}})}
    }

