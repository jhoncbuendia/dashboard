import { Injectable } from "@angular/core";

@Injectable()
export class SessionManagementService {

  private called: number = 0;
  public login(): void {
    console.log('calling login process: '+ this.called);;
    this.called ++;
  }

}
