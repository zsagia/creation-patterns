import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuilderComponent } from './builder/builder.component';
import { FactoryMethodComponent } from './factory-method/factory-method.component';
import { KeysPipe } from './pipe/keys.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BuilderComponent,
    FactoryMethodComponent,
    KeysPipe,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
