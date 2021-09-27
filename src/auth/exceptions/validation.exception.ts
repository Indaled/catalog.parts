import {HttpException, HttpStatus} from "@nestjs/common";

export class ValidationException extends HttpException {
    messages
    errorCode

    constructor(response) {
        super(response, HttpStatus.BAD_REQUEST);
        this.errorCode = HttpStatus.BAD_REQUEST
        this.messages = response
    }
}
