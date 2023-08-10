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
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { BenefitsComponent } from './components/shared/benefits/benefits.component';
import { ProductDetailsComponent } from './components/shared/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    VanillaComponent,
    PeppercornComponent,
    CinnamonComponent,
    CloveComponent,
    ProductComponent,
    ToolbarComponent,
    TabsComponent,
    BenefitsComponent,
    ProductDetailsComponent
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
