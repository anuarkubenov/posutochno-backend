import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { existsSync, mkdirSync } from 'fs';
import { NestExpressApplication } from '@nestjs/platform-express';

import { join } from 'path';

// Создание папки uploads
const uploadDir = join(__dirname, '..', 'uploads');
if (!existsSync(uploadDir)) {
  mkdirSync(uploadDir, { recursive: true });
}

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.use((req, res, next) => {
    console.log(`Incoming request: ${req.method} ${req.url}`);
    console.log('Body:', req.body);
    console.log('Files:', req.files);
    next();
  });
  

  // Настройка раздачи статических файлов
  app.useStaticAssets(join(__dirname, '..', 'uploads'), {
    prefix: '/uploads/',
  });

  // Включаем CORS
  app.enableCors({
    origin: 'http://localhost:3001', // Указываем, с какого домена разрешены запросы
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Если нужны куки или другие защищенные данные
  });

    // Вывод всех маршрутов
    const httpAdapter = app.getHttpAdapter();
    const router = httpAdapter.getInstance()._router;
  
    const availableRoutes = router.stack
      .filter((layer) => layer.route)
      .map((layer) => ({
        path: layer.route.path,
        method: Object.keys(layer.route.methods)[0].toUpperCase(),
      }));
  
    console.log('Registered Routes:', availableRoutes);

  await app.listen(3000);
  console.log(`Application is running on: http://localhost:3000`);
} 
bootstrap();
