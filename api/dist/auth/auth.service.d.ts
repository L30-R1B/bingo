import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../shared/prisma/prisma.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { UsersService } from '../users/users.service';
export declare class AuthService {
    private readonly prisma;
    private readonly jwtService;
    private readonly usersService;
    constructor(prisma: PrismaService, jwtService: JwtService, usersService: UsersService);
    login(loginDto: LoginDto): Promise<{
        access_token: string;
    }>;
    register(createUserDto: CreateUserDto): Promise<{
        nome: string;
        email: string;
        is_admin: boolean;
        id_usuario: number;
    }>;
    getUserFromToken(userId: number): Promise<{
        nome: string;
        email: string;
        is_admin: boolean;
        id_usuario: number;
        creditos: import("@prisma/client/runtime/library").Decimal;
    }>;
}
