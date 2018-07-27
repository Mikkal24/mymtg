import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BrowseComponent } from "./browse/browse.component";
import { MainContainerComponent } from "./main-container/main-container.component";

const routes: Routes = [
  {
    path: "",
    component: MainContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MTGRoutingModule {}
