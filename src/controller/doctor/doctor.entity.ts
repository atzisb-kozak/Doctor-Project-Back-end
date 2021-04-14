import { 
	Entity, 
	Column, 
	PrimaryGeneratedColumn, 
	ManyToMany, 
	JoinTable, 
	BeforeInsert 
} from 'typeorm';
import { Specialities } from '@controller/specialities/specialities.entity';
import * as bcrypt from 'bcrypt';

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

	@BeforeInsert()
	async setPassword(): Promise<void> {
		this.doctorPassword = await bcrypt.hash(this.doctorPassword, 10)
	}
}