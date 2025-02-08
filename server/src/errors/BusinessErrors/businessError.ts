import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';

export class BussinessError extends HttpException {
  constructor(errorMap: string | Record<string, any>) {
    super(errorMap, HttpStatus.OK);
  }
}

@Catch(BussinessError)
export class BusinessErrorFilter implements ExceptionFilter<BussinessError> {
  catch(exception: BussinessError, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();
    response.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: exception.message,
    });
  }
}
