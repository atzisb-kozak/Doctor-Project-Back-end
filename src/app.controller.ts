import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

	@Post('register')
	async register() {
		return true
	}

	@Post('login')
	async login(@Body('username') username: string,@Body('password') password: string) {
		return this.appService.login(username, password);
	}

	@Post('logout')
	async logout() {
		return true
	}
}
