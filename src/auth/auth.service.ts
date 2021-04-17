import { Injectable } from '@nestjs/common';
import { DoctorService } from '@controller/doctor/doctor.service';
import { PatientService } from '@controller/patient/patient.service';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
	constructor (
		private readonly doctorService: DoctorService,
		private readonly patientService: PatientService,
		private readonly jwtService: JwtService,
	) {}

	async validateDoctor(username: string, password: string): Promise<any> {
		const doctor = await this.doctorService.findOneUsername(username);
		if (await compare(password, doctor.doctorPassword)) {
			const { doctorPassword, ...result} = doctor;
			return result;
		}
		return null;
	}

	async validatePatient(username: string, password: string): Promise<any> {
		const patient = await this.patientService.findOneUsername(username);
		if (await compare(password, patient[0].patientPassword)) {
			const { patientPassword, ...result} = patient[0];
			return result;
		}
		return null;
	}

	async loginPatient(patient: any): Promise<unknown> {
		const payload = {username: patient.patientUsername, sub: patient.socialSecurity};
		return {
			access_token: this.jwtService.sign(payload),
		};
	}

	async loginDoctor(doctor: any): Promise<unknown> {
		const payload = {username: doctor.doctorUsername, sub: doctor.doctorId};
		return {
			access_token: this.jwtService.sign(payload),
		};
	}
}
