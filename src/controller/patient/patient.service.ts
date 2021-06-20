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
		const patient: Patient = Object.assign(createpatientdto)

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
		const patient: Patient = Object.assign(updatepatientdto);

		this.patientRepository.update(socialSecurity, patient);
	}

	async deleteOne(socialSecurity: number): Promise<void> {
		this.patientRepository.delete(socialSecurity);
	}
}
