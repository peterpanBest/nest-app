import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserLogin } from "./Controller/LoginController";
import { LoginService } from "./Service/LoginService";

@Module({
  imports: [],
  controllers: [AppController, UserLogin],
  providers: [AppService, LoginService]
})
export class AppModule {}
