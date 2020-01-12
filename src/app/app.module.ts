import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {ServerComponent} from "./server/server.component";
import {TerminalServiceComponent} from './terminal-service/terminal-service.component';
import {SuccessComponent} from "./success/success.component";
import {WarningComponent} from "./warning/warning.component";
import {UsernameComponent} from "./username/username.component";

//import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    TerminalServiceComponent,
    SuccessComponent,
    WarningComponent,
    UsernameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
    //HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
