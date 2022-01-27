import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/typeorm/user.emtity';
import { UserModule } from './modules/user/user.module';
import { VaccineType } from './entity/typeorm/vaccineType.emtity';
import { VaccineDetails } from './entity/typeorm/vaccinationData.entity';
import { VaccineDetailsModule } from './modules/vaccination-data/vaccination-data.module';
import { VaccineTypeModule } from './modules/vaccine-type/vaccine-type.module';
import { LoginModule } from './modules/login/login.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Chelli1@',
      database: 'CovidApp',
      entities: [User, VaccineType, VaccineDetails],
      synchronize: false,
    }),
    UserModule,
    VaccineTypeModule,
    VaccineDetailsModule,
    LoginModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
