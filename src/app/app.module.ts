import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LobbyComponent } from './lobby/lobby.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { UserService } from './lobby/services/user.service';
import { UserGamesService } from './lobby/services/user-games.service';
import { SharedModule } from 'app/shared/shared.module';
import { PipeModule } from './shared/pipes/pipe.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    SharedModule
    // InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 600 })
  ],
  declarations: [
    AppComponent,
    LobbyComponent,
    AnalysisComponent
  ],
  providers: [UserService, UserGamesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
