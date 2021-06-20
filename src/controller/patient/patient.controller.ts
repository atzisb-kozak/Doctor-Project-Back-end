import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Patient } from './patient.entity';
import { PatientService } from './patient.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';

@Controller('patient')
export class PatientController {
	constructor(private readonly patientService: PatientService) {}

	@Post()
	async create(@Body() createPatientDto: CreatePatientDto): Promise<Patient> {
		return this.patientService.create(createPatientDto);
	}

	@Get()
	async findAll(): Promise<Patient[]> {
		return this.patientService.findAll();
	}

	@Get(':socialSecurity')
	async findOne(@Param('socialSecurity') socialSecurity: number): Promise<Patient>{
		return this.patientService.findOne(socialSecurity);
	}

	@Put(':socialSecurity')
	async updateOne(
		@Param('socialSecurity') socialSecurity: number,
		@Body() updatePatientDto: UpdatePatientDto): Promise<void> {

		this.patientService.updateOne(socialSecurity, updatePatientDto);
	}

	@Delete(':socialSecurity')
	async deleteOne(@Param('socialSecurity') socialSecurity: number): Promise<void> {
		this.patientService.deleteOne(socialSecurity);
	}
}
