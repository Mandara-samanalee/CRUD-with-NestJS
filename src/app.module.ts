import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entity/user.entity';


@Module({

  imports: [UserModule,
  
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'nest-crud',
      entities: [User], //we need define our entities here
      synchronize: true,
      migrationsRun: true,
      //dropSchema: true,
    }),
  ],

 
})
export class AppModule {}
