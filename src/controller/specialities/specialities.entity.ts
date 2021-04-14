import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { Doctor } from '@controller/doctor/doctor.entity';

@Entity()
export class Specialities {

	@PrimaryGeneratedColumn()
	specialityId: number;

	@Column()
	specialityName: string

	@ManyToMany(type => Doctor, doctor => doctor.speciality)
	@JoinTable()
	doctors: Doctor[];
}