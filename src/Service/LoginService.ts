import { Injectable } from "@nestjs/common";

@Injectable()
export class LoginService {
  LoginInfo() :Object {
    return {
      title: "hello world !"
    }
  }
}