import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { SequelizeModule } from "@nestjs/sequelize";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsersModule } from "./users/users.module";
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    // MongoDB
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.getOrThrow<string>("MONGO_URI"),
      }),
    }),

    // MySQL
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        dialect: "mysql",
        host: configService.getOrThrow<string>("MYSQL_HOST"),
        port: configService.getOrThrow<number>("MYSQL_PORT"),
        username: configService.getOrThrow<string>("MYSQL_USERNAME"),
        password: configService.get<string>("MYSQL_PASSWORD") ?? "",
        database: configService.getOrThrow<string>("MYSQL_DATABASE"),
        autoLoadModels: true,
        synchronize: false,
      }),
    }),
    UsersModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
