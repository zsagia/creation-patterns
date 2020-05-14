import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuilderComponent, KeysPipe } from './builder/builder.component';
import { FactoryMethodComponent } from './factory-method/factory-method.component';

@NgModule({
  declarations: [
    AppComponent,
    BuilderComponent,
    FactoryMethodComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
