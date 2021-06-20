import { CreateDoctorDto } from '@controller/doctor/dto/create-doctor.dto';
import { CreatePatientDto } from '@controller/patient/dto/create-patient.dto';
import { Body, Controller, Get, Post, Response } from '@nestjs/common';
import { Response as Res } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

	@Post('patient/register')
	async patientRegister(@Body() patient: CreatePatientDto) {
		return this.appService.patientRegister(patient);
	}

	@Post('doctor/register')
	async doctorRegister(@Body() doctor: CreateDoctorDto){
		return this.appService.doctorRegister(doctor);
	}

	@Post('patient/login')
	async loginPatient(
		@Body('username') username: string,
		@Body('password') password: string,
		@Response() response: Res) {
			const token = this.appService.loginPatient(username, password);
			response.set('Authorization', `Bearer ${token}`);
			response.cookie('access_token', token, {
				expires: new Date(new Date().getTime() + 30 * 1000),
				sameSite: 'strict',
				httpOnly: true,
		})
		response.send({username: username})
	}

	@Post('doctor/login')
	async loginDoctor(
		@Body('username') username: string,
		@Body('password') password: string,
		@Response() response: Res) {
			const token = this.appService.loginDoctor(username, password);
			response.set('Authorization', `Bearer ${token}`);
			response.cookie('access_token', token, {
				expires: new Date(new Date().getTime() + 30 * 1000),
				sameSite: 'strict',
				httpOnly: true,
			})
			response.send({username: username})
		}

	@Post('logout')
	async logout() {
		return true
	}
}
