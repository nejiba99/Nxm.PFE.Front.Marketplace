import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './Application/create/create.component';
import { ListComponent } from './Application/list/list.component';
import { ListmenuComponent } from './Menu/listmenu/listmenu.component';
import { CreatemenuComponent } from './Menu/createmenu/createmenu.component';
import { UpdateComponent } from './Application/update/update.component';
import { UpdatemenuComponent } from './Menu/updatemenu/updatemenu.component';
const routes: Routes = [
    
    { path: 'ApplicationList', 
    component: ListComponent 
  
    },
    { path: 'CreateApplication', 
    component: CreateComponent 
  
    },
    { path: 'MenuList', 
    component: ListmenuComponent 
  
    },
    { path: 'CreateMenu', 
    component: CreatemenuComponent 
  
    },
    { path: 'UpdateApplication/:id', 
    component: UpdateComponent 
  
    },
    { path: 'UpdateMenu/:id', 
    component: UpdatemenuComponent 
  
    },
  ];
@NgModule(
    {
        imports: [
            RouterModule.forRoot(routes),
            BrowserModule,
            

          ],
          exports: [
            RouterModule]
    }
)
export class AppRoutingModule {}