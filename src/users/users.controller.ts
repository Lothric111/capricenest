// Importation des décorateurs et des modules nécessaires depuis NestJS
import { Body, Controller, Get, NotFoundException, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
// Importation du service utilisateur et du DTO pour créer un utilisateur
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
// Importation de l'entité utilisateur
import { User } from './entities/user.entity';
// Importation des décorateurs Swagger pour la documentation API
import { ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';

// Définition d'une balise pour ce contrôleur dans la documentation Swagger
@ApiTags('users')
// Définition du chemin de base pour ce contrôleur
@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {} // Injection du service utilisateur dans le contrôleur

    // Définition d'une route HTTP GET pour récupérer tous les utilisateurs
    @ApiOkResponse({type:User,isArray:true})
    @ApiQuery({name:'name', required:false})
    @Get()
    getUsers(@Query('name')name:string): User[] {
        return this.usersService.findAll(name); // Appel de la méthode findAll() du service pour récupérer tous les utilisateurs
    }

    @ApiOkResponse({type:User})
    @ApiNotFoundResponse()
    @Get('name/:name')
    getUserByName(@Param('name') name: string): User | undefined {

        console.log(typeof name)

        const user=this.usersService.findByName(name);
        if(!user){
            throw new NotFoundException();
        }
        return user; // Appel de la méthode findById() du service pour récupérer un utilisateur par son ID

        
    }

    // Définition d'une route HTTP GET pour récupérer un utilisateur par son ID
    @ApiOkResponse({type:User})
    @ApiNotFoundResponse()
    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number): User | undefined {

        console.log(typeof id)

        const user=this.usersService.findById(id);
        if(!user){
            throw new NotFoundException();
        }
        return user; // Appel de la méthode findById() du service pour récupérer un utilisateur par son ID

        
    }
    @ApiOkResponse({type:User})
    @ApiNotFoundResponse()
    @Get('family/:familyname')
    getUserByFamilyName(@Param('familyname') familyname: string): User | undefined {

        console.log(typeof familyname)

        const user=this.usersService.findByFamilyName(familyname);
        if(!user){
            throw new NotFoundException();
        }
        return user; // Appel de la méthode findById() du service pour récupérer un utilisateur par son ID

        
    }

    @ApiOkResponse({type:User})
    @ApiNotFoundResponse()
    @Get('age/:age')
    getUserByAge(@Param('age', ParseIntPipe) age: number): User | undefined {

        console.log(typeof age)

        const user=this.usersService.findByAge(age);
        if(!user){
            throw new NotFoundException();
        }
        return user; // Appel de la méthode findById() du service pour récupérer un utilisateur par son ID

        
    }

    @ApiOkResponse({type:User})
    @ApiNotFoundResponse()
    @Get('email/:email')
    getUserByEmail(@Param('email') email: string): User | undefined {

        console.log(typeof email)

        const user=this.usersService.findByEmail(email);
        if(!user){
            throw new NotFoundException();
        }
        return user; // Appel de la méthode findById() du service pour récupérer un utilisateur par son ID

        
    }

    // Définition d'une route HTTP POST pour créer un nouvel utilisateur
    @ApiCreatedResponse({ type: User }) // Définition de la réponse créée dans la documentation Swagger
    @ApiNotFoundResponse()
    @Post()
    createUser(@Body() body: CreateUserDto): User {
        return this.usersService.createUser(body); // Appel de la méthode createUser() du service pour créer un nouvel utilisateur avec les données reçues dans le corps de la requête
    }
}
