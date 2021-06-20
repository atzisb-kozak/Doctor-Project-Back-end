import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePlanningDto } from './dto/create-planning.dto';
import { UpdatePlanningDto } from './dto/update-planning.dto';
import { Planning } from './entities/planning.entity';

@Injectable()
export class PlanningService {
	constructor(
		@InjectRepository(Planning)
		private readonly planningRepository: Repository<Planning>
	) {}

	create(createPlanningDto: CreatePlanningDto): Promise<Planning> {
		const planning: Planning = Object.assign(createPlanningDto);

		return this.planningRepository.save(planning);
	}

	findAll(): Promise<Planning[]>{
		return this.planningRepository.find();
	}

	findOne(planningID: number): Promise<Planning>{
		return this.planningRepository.findOne(planningID);
	}

	update(planningID: number, updatePlanningDto: UpdatePlanningDto) {
		const planning: Planning = Object.assign(updatePlanningDto);

		this.planningRepository.update(planningID, planning);
	}

	remove(planningID: number) {
		return this.planningRepository.delete(planningID);
	}
}
