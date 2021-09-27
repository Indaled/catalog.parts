import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsNumber, IsString, Length} from "class-validator";

export class CreatePostDto {

    @ApiProperty({example: 'Заказ №5 содержит брак', description: 'Заголовок поста'})
    @IsString({message: 'Должно быть строкой'})
    readonly title: string;

    @ApiProperty({example: 'Запчасть (артикул:4564-4566) пришла без фирменной наклейки', description: 'Содержимое поста'})
    @IsString({message: 'Должно быть строкой'})
    readonly content: string;

    @ApiProperty({example: '1', description: 'Уникальный идентификатор поста'})
    @IsNumber({}, {message: 'Должно быть числом'})
    readonly userId: number;

}
