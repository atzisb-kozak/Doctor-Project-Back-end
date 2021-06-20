import { Module } from '@nestjs/common';
import { PlanningService } from './planning.service';
import { PlanningController } from './planning.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Planning } from './planning.entity';

@Module({
	imports: [ TypeOrmModule.forFeature([ Planning])],
  controllers: [PlanningController],
  providers: [PlanningService],
	exports: [ PlanningService ]
})
export class PlanningModule {}
