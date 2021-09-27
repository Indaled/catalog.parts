import {ApiProperty} from "@nestjs/swagger";
import {IsNumber, IsString} from "class-validator";

export class SetRoleDto {
    @ApiProperty({example: 'ADMIN', description: 'Идентификатор роли'})
    @IsString({message: 'Должны быть строкой'})
    readonly value: string;
    @ApiProperty({example: 1, description: 'Идентификатор пользователя'})
    @IsNumber({}, {message: 'Должны быть числом'})
    readonly userId: number;
}
