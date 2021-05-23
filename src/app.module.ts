import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getConnectionOptions, Connection } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
@Module({
	imports: [
		TypeOrmModule.forRootAsync({
			useFactory: async () => {
				return Object.assign(await getConnectionOptions(), {
					autoLoadEntity: true,
				})
			}
		}),
		AuthModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {
	constructor(private connection: Connection) {}
}
