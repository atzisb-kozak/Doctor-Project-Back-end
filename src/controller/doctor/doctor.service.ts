import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDoctorDto } from './dto/create-doctor.dto'
import { UpdateDoctorDto } from './dto/update-doctor.dto'
import { Doctor } from './doctor.entity'

@Injectable()
export class DoctorService {
	constructor(
		@InjectRepository(Doctor)
		private readonly doctorRepository: Repository<Doctor>,
	) {}

	async create(createdoctordto: CreateDoctorDto): Promise<Doctor> {
		const doctor = new Doctor();
		doctor.doctorName = createdoctordto.doctorName;
		doctor.doctorFirstName = createdoctordto.doctorFirstName;
		doctor.doctorUsername = createdoctordto.doctorUsername;
		doctor.doctorEmail = createdoctordto.doctorEmail;
		doctor.doctorPassword = createdoctordto.doctorPassword;

		return this.doctorRepository.save(doctor)
	}

	async findAll(): Promise<Doctor[]> {
		return this.doctorRepository.find();
	}

	async findOne(doctorId: number): Promise<Doctor> {
		return this.doctorRepository.findOne(doctorId);
	}

	async updateOne(doctorId: number, updatedoctordto: UpdateDoctorDto): Promise<void> {
		const doctor = new Doctor();
		doctor.doctorName = updatedoctordto.doctorName;
		doctor.doctorFirstName = updatedoctordto.doctorFirstName;
		doctor.doctorUsername = updatedoctordto.doctorUsername;
		doctor.doctorEmail = updatedoctordto.doctorEmail;
		doctor.doctorPassword = updatedoctordto.doctorPassword;

		this.doctorRepository.update(doctorId, doctor)
	}
	async deleteOne(doctorId: number): Promise<void> {
		this.doctorRepository.delete(doctorId);
	}
}
