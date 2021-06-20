import { DoctorService } from '@controller/doctor/doctor.service';
import { CreateDoctorDto } from '@controller/doctor/dto/create-doctor.dto';
import { CreatePatientDto } from '@controller/patient/dto/create-patient.dto';
import { PatientService } from '@controller/patient/patient.service';
import { Injectable } from '@nestjs/common';
import { AuthService } from 'auth/auth.service'

@Injectable()
export class AppService {

	constructor(
		private readonly authService: AuthService,
		private readonly patientService: PatientService,
		private readonly doctorService: DoctorService,
	) {}

	async loginPatient(username: string, password: string): Promise<any>{
		const patient = await this.authService.validatePatient(username, password);
		return this.authService.loginPatient(patient);
	}

	async loginDoctor(username: string, password: string): Promise<any>{
		const patient = await this.authService.validateDoctor(username, password);
		return this.authService.loginDoctor(patient);
	}

	async patientRegister(patient: CreatePatientDto){
		return this.patientService.create(patient);
	}

	async doctorRegister(doctor: CreateDoctorDto){
		return this.doctorService.create(doctor);
	}
}
