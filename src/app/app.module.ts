import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HotelViewComponent } from './hotel-view/hotel-view.component';
import { GallaryComponent } from './hotel-view/gallary/gallary.component';
import { OverviewbarComponent } from './hotel-view/overviewbar/overviewbar.component';
import { ReviewComponent } from './hotel-view/review/review.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    HotelViewComponent,
    GallaryComponent,
    OverviewbarComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
