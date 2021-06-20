import { Entity, Column, PrimaryColumn, JoinTable, BeforeInsert, ManyToOne } from 'typeorm';
import { hash } from 'bcrypt';
import { Planning } from '@controller/planning/entities/planning.entity';

@Entity()
export class Patient {

	@PrimaryColumn('bigint')
	socialSecurity: number;

	@Column()
	patientName: string;

	@Column()
	patientFirstName: string;

	@Column()
	patientAge: number;

	@Column()
	patientAddress: string;

	@Column()
	patientPostalCode: number;

	@Column()
	patientUsername: string;

	@Column()
	patientEmail: string;

	@Column()
	patientPassword: string;

	@ManyToOne(() => Planning, planning => planning.patient)
	plannings: Planning[];

	@BeforeInsert()
	async setPassword(): Promise<void> {
		this.patientPassword = await hash(this.patientPassword, 10)
	}
}