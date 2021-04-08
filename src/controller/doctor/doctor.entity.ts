import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { Specialities } from '@controller/specialities/specialities.entity';

@Entity()
export class Doctor {

	@PrimaryGeneratedColumn()
	doctorId: number;

	@Column()
	doctorName: string;
	
	@Column()
	doctorFirstName: string;

	@Column()
	doctorUsername: string;

	@Column()
	doctorEmail: string;

	@Column()
	doctorPassword: string;

	@ManyToMany(type => Specialities, specialities => specialities.doctors)
	@JoinTable()
	speciality: Specialities[];
}