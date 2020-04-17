import { Controller, Get, Post } from '@nestjs/common';

@Controller('items')
export class ItemsController {
    @Get('')
    index(): string {
        return '设计模式是对软件设计开发过程中反复出现的某类问题的通用解决方案'
    }
    
    @Post()
    create(): string {
        return '创建成功'
    }
}
