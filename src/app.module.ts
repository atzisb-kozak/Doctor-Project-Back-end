import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getConnectionOptions, Connection } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
@Module({
	imports: [
		TypeOrmModule.forRootAsync({
			useFactory: async () => {
				return Object.assign(await getConnectionOptions(), {
					autoLoadEntity: true,
				})
			}
		})
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {
	constructor(private connection: Connection) {}
}
