import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Doctor } from './doctor.entity';
import { DoctorService } from './doctor.service';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';

@Controller('doctor')
export class DoctorController {
	constructor(private readonly doctorService :DoctorService){}

	@Post()
	async create(@Body() createDoctorDto:CreateDoctorDto): Promise<Doctor> {
		return this.doctorService.create(createDoctorDto);
	}

	@Get()
	async findAll(): Promise<Doctor[]>{
		return this.doctorService.findAll();
	}

	@Get(':doctorId')
	async findOne(@Param('doctorId') doctorId: number): Promise<Doctor>{
		return this.doctorService.findOne(doctorId);
	}

	@Put(':doctorId')
	async updateOne(
		@Param('doctorId') doctorId: number,
		@Body() updateDoctorDto: UpdateDoctorDto): Promise<void> {

		this.doctorService.updateOne(doctorId, updateDoctorDto);
	}

	@Delete(':doctorId')
	async deleteOne(@Param('doctorId') doctorId: number): Promise<void> {
		this.doctorService.deleteOne(doctorId);
	}
}
