import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ComingSoonPageComponent } from './components/coming-soon-page/coming-soon-page.component';
import { MailchimpFormComponent } from './components/mailchimp-form/mailchimp-form.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HeaderComponentComponent } from './components/common/header-component/header-component.component';
import { SocialIconsComponentComponent } from './components/common/social-icons-component/social-icons-component.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './components/about/about.component';
import { SpeakersComponent } from './components/speakers/speakers.component';
import { SponsorsComponent } from './components/sponsors/sponsors.component';
import { VenueComponent } from './components/venue/venue.component';
import { FooterComponent } from './components/footer/footer.component';
import { TicketsComponent } from './components/tickets/tickets.component';

@NgModule({
  declarations: [
    AppComponent,
    ComingSoonPageComponent,
    MailchimpFormComponent,
    LandingPageComponent,
    HeaderComponentComponent,
    SocialIconsComponentComponent,
    AboutComponent,
    SpeakersComponent,
    SponsorsComponent,
    VenueComponent,
    FooterComponent,
    TicketsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
