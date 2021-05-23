import { Injectable } from '@nestjs/common';
import { AuthService } from 'auth/auth.service'

@Injectable()
export class AppService {

	constructor(
		private readonly authService: AuthService,
	) {}

  getHello(): string {
    return 'Hello World!';
  }

	async login(username: string, password: string): Promise<any>{
		const patient = await this.authService.validatePatient(username, password);
		return this.authService.loginPatient(patient);
	}
}
