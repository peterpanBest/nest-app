import { Controller, Get, Post, Req, Body } from "@nestjs/common";
import { Request, Response } from "express";
import { LoginService } from "../Service/LoginService";
import { CreateCatDto } from "../Dto/LoginDto";

@Controller("login")
export class UserLogin {
  @Get()
  getLoginInfo(): Object {
    return {
      userName: "pfs"
    };
  }

  @Post("v1/signUp")
  login(@Body() createCatDto: CreateCatDto): object {
    let _req = createCatDto.toString();
    let _obj = JSON.parse(_req);
    return {
      userName: _obj.userName,
      passWord: _obj.passWord,
      age: _obj.age
    };
  }
}
