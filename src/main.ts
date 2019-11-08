import { NestFactory } from "@nestjs/core";
import * as bodyParser from "body-parser";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(bodyParser.text({ type: "*/*" }));

  await app.listen(3001);
}
bootstrap();
