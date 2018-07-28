import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MTGRoutingModule } from "./mtg-routing.module";
import { BrowseComponent } from "./browse/browse.component";
import { AddComponent } from "./add/add.component";
import { MainContainerComponent } from "./main-container/main-container.component";
import { NavbarComponent } from "../scaffolding/navbar/navbar.component";
import {
  MatFormFieldModule,
  MatInputModule,
  MatCardModule
} from "../../../node_modules/@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MTGRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule
  ],
  declarations: [
    BrowseComponent,
    AddComponent,
    MainContainerComponent,
    NavbarComponent
  ],
  bootstrap: [MainContainerComponent]
})
export class MTGModule {}
