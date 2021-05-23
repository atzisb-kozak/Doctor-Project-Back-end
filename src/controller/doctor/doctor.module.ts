import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Doctor } from './doctor.entity';
import { DoctorController } from './doctor.controller';
import { DoctorService } from './doctor.service';

@Module({
	imports: [ TypeOrmModule.forFeature([ Doctor ]) ],
	providers: [ DoctorService ],
	controllers: [ DoctorController ],
	exports: [ DoctorService ],
})
export class DoctorModule {}
