import { Entity, Column, PrimaryColumn, JoinTable, BeforeInsert } from 'typeorm';
import * as bcrypt from 'bcrypt';

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

	@BeforeInsert()
	async setPassword(): Promise<void> {
		this.patientPassword = await bcrypt.hash(this.patientPassword, 10)
	}
}