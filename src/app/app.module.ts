import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing/routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { MatGridListModule, MatButtonModule, MatAutocompleteModule, MatFormFieldModule,MatCardModule, MatInputModule,
  MatMenuModule,
  MatIconModule,
  MatTableModule,
  MatDatepickerModule,
  MatNativeDateModule } from '@angular/material';
import { CarditemComponent } from './carditem/carditem.component';
import { SearchComponent } from './search/search.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule  } from "@angular/common/http";
import { UnloadingComponent } from './unloading/unloading.component';
import { UnloadingSearchComponent } from './unloading/unloading-search/unloading-search.component';
import { UnloadingListComponent } from './unloading/unloading-list/unloading-list.component';


@NgModule({
  declarations: [
    AppComponent,
    MyDashboardComponent,
    CarditemComponent,
    SearchComponent,
    UnloadingComponent,
    UnloadingSearchComponent,
    UnloadingListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
