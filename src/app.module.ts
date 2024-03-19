import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParticipantsModule } from './participants/participants.module';
import { AuthModule } from './auth/auth.module';
import ormconfig from '../ormconfig';

@Module({
  imports: [UsersModule, TypeOrmModule.forRoot(ormconfig), ParticipantsModule, AuthModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
