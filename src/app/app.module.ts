import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { VanillaComponent } from './components/vanilla/vanilla.component';
import { PeppercornComponent } from './components/peppercorn/peppercorn.component';
import { CinnamonComponent } from './components/cinnamon/cinnamon.component';
import { CloveComponent } from './components/clove/clove.component';
import { ProductComponent } from './components/shared/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    VanillaComponent,
    PeppercornComponent,
    CinnamonComponent,
    CloveComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
