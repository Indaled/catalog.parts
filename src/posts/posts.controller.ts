import {CreatePostDto} from "./dto/create-post.dto";
import {PostsService} from "./posts.service";
import {FileInterceptor} from "@nestjs/platform-express";
import {Body, Controller, Post, UploadedFile, UseInterceptors} from "@nestjs/common";

@Controller('posts')
export class PostsController {
    constructor(private postService: PostsService) {}

    @Post()
    @UseInterceptors(FileInterceptor('image'))
    createPost(@Body() dto:CreatePostDto,
               @UploadedFile() image) {
        this.postService.create(dto, image)
    }
}
