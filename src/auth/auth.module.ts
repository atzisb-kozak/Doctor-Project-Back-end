import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { DoctorModule } from '@controller/doctor/doctor.module';
import { PatientModule } from '@controller/patient/patient.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { readFileSync } from 'fs';
import { JwtStrategy } from './jwt.strategy'

@Module({
	imports: [
		PatientModule,
		DoctorModule,
		PassportModule,
		JwtModule.register({
			secret: readFileSync('./jwt.key.pub'),
			signOptions: { expiresIn: '300s' },
		}),
	],
	providers: [ AuthService, JwtStrategy ],
	exports: [ AuthService ],
})
export class AuthModule {}
