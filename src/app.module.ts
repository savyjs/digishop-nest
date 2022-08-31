import { Logger, LoggerService, Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule, ConfigService } from "@nestjs/config";
import databaseConfig from "./config/database.config";
import { DataSource } from "typeorm";
import { parse } from "@typescript-eslint/parser";
import { MarketModule } from './modules/market/market.module';

@Module({
  imports: [
    ConfigModule.forRoot(
      {
        load: [databaseConfig],
        isGlobal: true
      }
    ),
    TypeOrmModule.forRoot(),
    MarketModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
  private logger = new Logger("Market.name");

  constructor(dataSource: DataSource, config: ConfigService) {

    let password: string = config.get("database.password");
    this.logger.log("config:", config.get("database"));

    console.info("config:", config.get("database"));
    dataSource.setOptions({
      type: "postgres",
      host: config.get("database.host"),
      port: config.get("database.port"),
      password: password,
      username: config.get("database.username"),
      database: config.get("database.name")
    }).initialize();
  }

}
