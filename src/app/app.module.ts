import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputSceneComponent } from './input-scene/input-scene.component';
import { SwitchSceneComponent } from './switch-scene/switch-scene.component';
import { ResultSceneComponent } from './result-scene/result-scene.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    InputSceneComponent,
    SwitchSceneComponent,
    ResultSceneComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
