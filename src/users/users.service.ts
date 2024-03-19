// Importation des classes nécessaires depuis NestJS
import { CreateUserDto } from './dto/create-user.dto'; // Importation du DTO pour la création d'un utilisateur
import { Injectable } from '@nestjs/common'; // Importation du décorateur Injectable
import { User } from './entities/user.entity'; // Importation de l'entité utilisateur

@Injectable() // Marquage de la classe en tant que service injectable
export class UsersService {
    findOne(username: string) {
        throw new Error('Method not implemented.');
    }
    // Initialisation d'un tableau d'utilisateurs avec un utilisateur de démonstration
    private users: User[] = [
        { id: 0, name: 'myname',familyname:"rezareza" ,email:'larbifayz@gmail.com',age:10,password:"azerty123" },
        { id: 1, name: 'yes' ,familyname:"nottaztoz" ,email:'ezraz@gmail.com',age:11,password:"azerty123"  },
        { id: 2, name: 'taztoz',familyname:"taztoz" ,email:'larbifaghtrhytyz@gmail.com',age:12,password:"azerty123"  },
        { id: 3, name: 'azert',familyname:"rezareza" ,email:'taztoz@gmail.com',age:13,password:"azerty123"  }
    ];

    // Méthode pour récupérer tous les utilisateurs
    findAll(name?:string): User[] {
        if (name){
            return this.users.filter(user => user.name === name);
        }
        return this.users; // Retourne tous les utilisateurs actuellement stockés dans le tableau
    }

    findByName(userName: string): User | undefined {
        return this.users.find((user) => user.name === userName); // Retourne l'utilisateur correspondant à l'ID fourni
    }

    // Méthode pour trouver un utilisateur par son ID
    findById(userId: number): User | undefined {
        return this.users.find((user) => user.id === userId); // Retourne l'utilisateur correspondant à l'ID fourni
    }

    findByFamilyName(userFamilyName: string): User | undefined {
        return this.users.find((user) => user.familyname === userFamilyName); // Retourne l'utilisateur correspondant à l'ID fourni
    }

    findByAge(userAge: number): User | undefined {
        return this.users.find((user) => user.age === userAge); // Retourne l'utilisateur correspondant à l'ID fourni
    }

    findByEmail(userEmail: string): User | undefined {
        return this.users.find((user) => user.email === userEmail); // Retourne l'utilisateur correspondant à l'ID fourni
    }

    // Méthode pour créer un nouvel utilisateur
    createUser(createUserDto: CreateUserDto): User {
        // Génération d'un nouvel ID pour le nouvel utilisateur (en utilisant la date actuelle)
        // Note : dans une base de données réelle, cela serait généralement géré automatiquement (auto-increment)
        const newUser = { id: Date.now(), ...createUserDto }; // Création d'un nouvel utilisateur en combinant le DTO et l'ID généré

        this.users.push(newUser); // Ajout du nouvel utilisateur au tableau des utilisateurs
        return newUser; // Retourne le nouvel utilisateur créé
    }
}
