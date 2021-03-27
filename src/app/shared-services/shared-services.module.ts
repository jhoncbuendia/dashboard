import { NgModule} from "@angular/core";
import { CommonModule} from "@angular/common";
import { SessionManagementService } from "./session-management.service";
@NgModule(
  {
    imports: [CommonModule],
    providers: [SessionManagementService],
    // exports: [SessionManagementService]
  }
)
export class SharedServicesModule {}
