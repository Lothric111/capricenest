import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from 'src/users/users.module';
import { ParticipantsModule } from 'src/participants/participants.module';
import { Participant } from 'src/participants/entities/participant.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';


@Module({
  imports:[
    PassportModule,
    JwtModule.register({
      secret:'abc123',
      signOptions:{expiresIn:'1h'},
    })
  ,UsersModule,ParticipantsModule,TypeOrmModule.forFeature([Participant]), // Add this line
],
  controllers: [AuthController],
  providers: [AuthService,LocalStrategy]
})
export class AuthModule {}
