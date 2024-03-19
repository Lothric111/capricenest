import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Participant } from 'src/participants/entities/participant.entity';
import bcrypt from "bcrypt"
import { compare } from "bcrypt";


@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
        @InjectRepository(Participant)
        private participantRepository: Repository<Participant>
    ) {}

    async validateUser(data: AuthPayloadDto) {

        const participant = await this.participantRepository.findOneBy({ name: data.name })

        if (!participant) {
             throw new NotFoundException('User not found');
        }

        const isValidPassword = data.password === participant.password;
        if (!isValidPassword) {
            throw new BadRequestException('Invalid credentials');
        }

            // Omettre le champ password avant de générer le token JWT 
            const { password, ...user } = participant;
            return this.jwtService.sign(user);
        
    }
}
