import { Injectable } from "@nestjs/common";

@Injectable()
export class LoginService {
  public static LoginInfo(): Object {
    return {
      title: "hello world !"
    };
  }

  public static userLogin(loginInfo: Object) {
    return loginInfo;
  }
}
