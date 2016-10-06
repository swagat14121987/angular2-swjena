import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from '../components/app.component';
import { RouteDefaultComponent } from '../components/route.default.component';
import { Route1Component } from '../components/route1.component';
import { Route2Component } from '../components/route2.component';
import { routing } from '../routing/app.route';
import { HighlightDirective } from '../directives/highlight.directive';
import { MailService } from '../services/mail.service';
import { DependencyInjectionComponent } from '../components/dependency.injection.component';

@NgModule({
  imports:      [ BrowserModule, routing ],
  declarations: [ AppComponent, RouteDefaultComponent, Route1Component, Route2Component, HighlightDirective,
                  DependencyInjectionComponent ],
  bootstrap:    [ AppComponent ],
  providers: [{provide:'mail', useClass: MailService},
              {provide:'mailApi', useValue: 'globalVariableValue'}]
})
export class AppModule { }