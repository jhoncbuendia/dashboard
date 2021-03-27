import { Routes, RouterModule } from "@angular/router";
import { ProductListComponent} from "./product-module/product-list/product-list.component";
import { LoginComponent} from "./user-profile/login/login.component";

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "product/list",
    component: ProductListComponent
  }
]

export const AppRoutes = RouterModule.forRoot(routes);
