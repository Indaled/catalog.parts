import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {User} from "../users/users.model";

interface PostCreationAttribute {
  title: string
  content: string
  userId: number
  image: string
}

@Table({tableName: 'posts'})
export class Post extends Model<Post, PostCreationAttribute> {

  @ApiProperty({example: '1', description: 'Уникальный идентификатор поста'})
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey:true})
  id: number;

  @ApiProperty({example: 'Заказ №5 содержит брак', description: 'Заголовок поста'})
  @Column({type: DataType.STRING, allowNull: false})
  title: string;

  @ApiProperty({example: 'Запчасть (артикул:4564-4566) пришла без фирменной наклейки', description: 'Содержимое поста'})
  @Column({type: DataType.STRING, allowNull: false})
  content: boolean;

  @ApiProperty({example: 'image.png', description: 'Изображение поста'})
  @Column({type: DataType.STRING})
  image: string;

  @ForeignKey(() => User)
  @Column({type: DataType.INTEGER})
  userId: number

  @BelongsTo( () => User)
  author: User;
}
