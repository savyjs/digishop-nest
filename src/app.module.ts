import { Logger, Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule, ConfigService } from "@nestjs/config";
import databaseConfig from "./config/database.config";
import { MarketModule } from "./modules/market/market.module";

@Module({
  imports: [
    ConfigModule.forRoot(
      {
        load: [databaseConfig],
        isGlobal: true
      }
    ),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => (
        {
          type: "postgres",
          host: config.get("database.host"),
          port: config.get("database.port"),
          password: config.get("database.password"),
          username: config.get("database.username"),
          database: config.get("database.name"),
          migrations: [__dirname + "/../migrations/*{.js,.ts}"],
          entities: [__dirname + "/../entities/*{.js,.ts}"],
          migrationsTableName: "migrations"
        }
      )
    }),
    MarketModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
  constructor() {
  }
}
