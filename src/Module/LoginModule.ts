import { Module } from "@nestjs/common";
import { UserLogin } from "../Controller/LoginController";
import { LoginService } from "../Service/LoginService";

@Module({
  imports: [],
  controllers: [UserLogin],
  providers: [LoginService]
})
export class LoginModule {}