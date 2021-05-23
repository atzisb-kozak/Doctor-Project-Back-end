import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { Patient } from './patient.entity';

@Injectable()
export class PatientService {
	constructor(
		@InjectRepository(Patient)
		private readonly patientRepository: Repository<Patient>
	) {}

	async create(createpatientdto: CreatePatientDto): Promise<Patient> {
		const patient = new Patient();
		patient.socialSecurity = createpatientdto.socialSecurity;
		patient.patientName = createpatientdto.patientName;
		patient.patientFirstName = createpatientdto.patientFirstName;
		patient.patientAge = createpatientdto.patientAge;
		patient.patientAddress = createpatientdto.patientAddress;
		patient.patientPostalCode = createpatientdto.patientPostalCode;
		patient.patientUsername = createpatientdto.patientUsername;
		patient.patientEmail = createpatientdto.patientEmail;
		patient.patientPassword = createpatientdto.patientPassword;

		return this.patientRepository.save(patient);
	}

	async findAll(): Promise<Patient[]> {
		return this.patientRepository.find();
	}

	async findOne(socialSecurity: number): Promise<Patient> {
		return this.patientRepository.findOne(socialSecurity);
	}

	async findOneUsername(patientUsername: string): Promise<Patient[]> {
		return this.patientRepository.find({
			where: {
				patientUsername: patientUsername,
			}
		});
	}

	async updateOne(socialSecurity: number, updatepatientdto: UpdatePatientDto): Promise<void> {
		const patient = new Patient();
		patient.patientName = updatepatientdto.patientName;
		patient.patientFirstName = updatepatientdto.patientFirstName;
		patient.patientAge = updatepatientdto.patientAge;
		patient.patientAddress = updatepatientdto.patientAddress;
		patient.patientPostalCode = updatepatientdto.patientPostalCode;
		patient.patientUsername = updatepatientdto.patientUsername;
		patient.patientEmail = updatepatientdto.patientEmail;
		patient.patientPassword = updatepatientdto.patientPassword;

		this.patientRepository.update(socialSecurity, patient);
	}

	async deleteOne(socialSecurity: number): Promise<void> {
		this.patientRepository.delete(socialSecurity);
	}
}
