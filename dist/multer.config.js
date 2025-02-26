"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multerOptions = void 0;
const multer_1 = require("multer");
exports.multerOptions = {
    storage: (0, multer_1.diskStorage)({
        destination: './uploads',
        filename: (req, file, cb) => {
            const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
            cb(null, `${uniqueSuffix}-${file.originalname}`);
        },
    }),
    fileFilter: (req, file, callback) => {
        const allowedTypes = ['image/jpeg', 'image/png', 'video/mp4'];
        if (allowedTypes.includes(file.mimetype)) {
            callback(null, true);
        }
        else {
            callback(new Error('Invalid file type'), false);
        }
    },
};
//# sourceMappingURL=multer.config.js.map