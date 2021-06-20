import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getConnectionOptions, Connection } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PlanningModule } from '@controller/planning/planning.module';
import { PatientModule } from '@controller/patient/patient.module';
import { DoctorModule } from '@controller/doctor/doctor.module';
@Module({
	imports: [
		TypeOrmModule.forRootAsync({
			useFactory: async () => {
				return Object.assign(await getConnectionOptions(), {
					autoLoadEntity: true,
				})
			}
		}),
		AuthModule,
		PlanningModule,
		PatientModule,
		DoctorModule
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {
	constructor(private connection: Connection) {}
}
