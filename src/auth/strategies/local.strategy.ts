import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "../auth.service";
import { Injectable, NotFoundException } from "@nestjs/common";
import { AuthPayloadDto } from "../dto/auth.dto";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(private authService:AuthService){
        super({
            usernameField: 'email' })
    }
    validate(data: AuthPayloadDto){
        const participant = this.authService.validateUser(data);
        
        if (!participant) {
            throw new NotFoundException('User not found');
       }
       return participant;
    }
}