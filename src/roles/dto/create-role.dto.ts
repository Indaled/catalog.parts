import {ApiProperty} from "@nestjs/swagger";

export class CreateRoleDto {

    @ApiProperty({example: 'ADMIN', description: 'Идентификатор роли'})
    readonly value: string;
    @ApiProperty({example: 'Администратор', description: 'Название роли'})
    readonly description: string;
}
