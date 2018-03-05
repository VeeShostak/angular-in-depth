import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module'
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, // contains all features of common module and other that are needed at app start
    HttpModule,
    AppRoutingModule,
    SharedModule,
    ShoppingListModule,
    AuthModule,
    CoreModule, // onr indtsvnr do lazy loaded moiules dont create other instnsaces
    // RecipesModule  // egaer loading
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// Compilation:
// angulsr compiles html templates to js for performance reasons,
// just in time compilation: develop-> production-> app downloaded (angular bootstraps the app,
// and parses and compiles all the templates)

// AoT head of time compilation: develope-> andgular parses and compiles all the temoplate ->
// prod -> app downloaded

// AoT: app starts faster. templates checked during developemnt, smaller file size 
// (compiler not shipped, import only needed (if ngIf not used dont import))
// ng build --prod --aot

// --prod (minifies the code)

// production: ng build --prod --aot
// base element point to correct url for router to work correctly (if mysite.com/ then leave it. but if site.com/my-app change)
// make sure server always return index.htm, (instead of 404.html). let server always rturn angular app, 
// so you can detect the error 

