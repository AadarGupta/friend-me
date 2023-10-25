import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactDisplayComponent } from './contact-display/contact-display.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ContactCardComponent } from './contact-card/contact-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactDisplayComponent,
    ContactPageComponent,
    ContactCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: ContactDisplayComponent,
      },
      {
        path: 'contact-page/:id',
        component: ContactPageComponent,
      },
      {
        path: '**',
        component: ContactDisplayComponent,
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
