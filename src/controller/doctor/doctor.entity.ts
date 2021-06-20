import { 
	Entity, 
	Column, 
	PrimaryGeneratedColumn, 
	ManyToMany, 
	JoinTable, 
	BeforeInsert, 
	ManyToOne
} from 'typeorm';
import { Speciality } from '@controller/specialities/entities/speciality.entity';
import * as bcrypt from 'bcrypt';
import { Planning } from '@controller/planning/entities/planning.entity';

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

	@ManyToOne(() => Planning, planning => planning.doctor)
	plannings: Planning[];

	@ManyToMany(type => Speciality, specialities => specialities.doctors)
	@JoinTable()
	speciality: Speciality[];

	@BeforeInsert()
	async setPassword(): Promise<void> {
		this.doctorPassword = await bcrypt.hash(this.doctorPassword, 10)
	}
}