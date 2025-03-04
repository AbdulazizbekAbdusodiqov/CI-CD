import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = process.env.PORT || 3030;
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT, () => {
    console.log(
      '\n\n + ====================================================================== +',
    );
    console.log(
      `| |                                                                      | | `,
    );
    console.log(
      `| | 🚀             Server started at: http://localhost:${PORT}           🚀 | | `,
    );
    console.log(
      `| |                                                                      | | `,
    );
    console.log(
      ' + ====================================================================== +',
    );
  });
}
bootstrap();
