import { 
	Entity, 
	Column,
	ManyToOne, 
	PrimaryGeneratedColumn } from 'typeorm';
import { Patient } from '@controller/patient/patient.entity';
import { Doctor } from '@controller/doctor/doctor.entity';


@Entity()
export class Planning {

	@PrimaryGeneratedColumn()
	planningID: number;

	@Column()
	doctorID!: number;

	@Column('bigint')
	socialSecurity: number;

	@Column('date')
	startPlanning: Date;

	@Column('date')
	endPlanning: Date;

	@ManyToOne(() => Patient, patient => patient.plannings)
	patient: Patient;

	@ManyToOne(() => Doctor, doctor => doctor.plannings)
	doctor: Doctor;


}
