import { Controller, Get } from '@nestjs/common';

@Controller('login')
export class UserLogin {
  @Get()
  getLoginInfo(): Object {
    return {
      userName: 'pfs',
    };
  }
}
