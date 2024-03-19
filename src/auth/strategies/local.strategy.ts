import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "../auth.service";
import { Injectable, NotFoundException } from "@nestjs/common";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(private authService:AuthService){
        super();
    }
    validate(name:string, password:string){
        const participant = this.authService.validateUser({name,password});
        
        if (!participant) {
            throw new NotFoundException('User not found');
       }
       return participant;
    }
}