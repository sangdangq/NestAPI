import { Get, Controller, Post, UseInterceptors, FileInterceptor, UploadedFile } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  root() {
    return this.appService.root();
  }

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async upload( @UploadedFile() file) {
    console.log(file);
  }
}
