import { 
	Entity, 
	Column, 
	PrimaryGeneratedColumn,  
	BeforeInsert, 
	ManyToOne
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Planning } from '@controller/planning/planning.entity';

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

	@Column("simple-array")
	specialities: string[];

	@ManyToOne(() => Planning, planning => planning.doctor)
	plannings: Planning[];

	@BeforeInsert()
	async setPassword(): Promise<void> {
		this.doctorPassword = await bcrypt.hash(this.doctorPassword, 10)
	}
}