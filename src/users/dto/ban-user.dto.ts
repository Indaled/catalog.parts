import {ApiProperty} from "@nestjs/swagger";

export class BanUserDto {
    @ApiProperty({example: '1', description: 'Идентификатор пользователя'})
    readonly userId: number;
    @ApiProperty({example: 'За хулиганство', description: 'Причина бана'})
    readonly banReason: string;
}
