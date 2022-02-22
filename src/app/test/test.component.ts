import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  isAuth=false;
  
  constructor() {
    setTimeout(
      () =>{
        this.isAuth=true;
      },4000 
    )  
   }
onAllumer(){
  console.log('light is on')
  alert.apply('ff')
}
  ngOnInit(): void {
  }

}
