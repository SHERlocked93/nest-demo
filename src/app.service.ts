import { Injectable } from '@nestjs/common';

@Injectable()   // DAO data access object
export class AppService {
    getHello(): string {
        return 'Hello World!～';
    }
    
    getHelloApp(name: string, age: number): string {
        return `hello in app@! name : ${ name }, age: ${ age }`;
    }
}
