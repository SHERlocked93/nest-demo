import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()  // 制定这个类为控制器
export class AppController {
    constructor(private readonly appService: AppService) {}
    
    @Get()  // 制定处理方法
    getHello(): string {   // DTO data transport object
        return this.appService.getHello();  // 响应
    }
    
    @Get('app')  // 制定处理方法
    getHelloApp(@Query('name') nam: string,
                @Query('age') age: number): string {
        return this.appService.getHelloApp(nam, age);  // 响应
    }
    
    @Get('list')
    getList(): object[] {
        return [{ id: 123 }, { id: 123123 }, { id: 8998797 }]
    }
}
