"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const fs_1 = require("fs");
const path_1 = require("path");
const uploadDir = (0, path_1.join)(__dirname, '..', 'uploads');
if (!(0, fs_1.existsSync)(uploadDir)) {
    (0, fs_1.mkdirSync)(uploadDir, { recursive: true });
}
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use((req, res, next) => {
        console.log(`Incoming request: ${req.method} ${req.url}`);
        console.log('Body:', req.body);
        console.log('Files:', req.files);
        next();
    });
    app.useStaticAssets((0, path_1.join)(__dirname, '..', 'uploads'), {
        prefix: '/uploads/',
    });
    app.enableCors({
        origin: 'http://localhost:3001',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
    });
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
//# sourceMappingURL=main.js.map