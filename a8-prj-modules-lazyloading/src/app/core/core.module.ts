import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';
import { RecipeService } from '../recipes/recipe.service';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@NgModule({
  declarations: [
    // this moudule has these components
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    // we import w.e these modules export
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    // export these
    // exports, if modiule imports this module, it will have access to these
    AppRoutingModule,
    HeaderComponent
  ],
  providers: [
    // services that our components can use and modules that imoport us
    // Core module is loaded eagerly. so angular wil give one instance even to lazy loaded modules
    ShoppingListService,
    RecipeService,
    DataStorageService,
    AuthService
  ]
})
export class CoreModule {}
