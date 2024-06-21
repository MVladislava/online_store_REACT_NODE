const uuid = require('uuid');
const path = require('path');
const { Device, DeviceInfo } = require('../models/models');
const ApiError = require('../error/ApiError');

class DeviceController {
    async create(req, res, next) {
        try {
            let { name, price, brandId, typeId, info } = req.body;
            const { img } = req.files;
            let fileName = uuid.v4() + ".jpg";
            img.mv(path.resolve(__dirname, '..', 'static', fileName));

            // Отладочный вывод данных
            console.log('Данные, полученные на сервере:', {
                name, price, brandId, typeId, info
            });

            const device = await Device.create({ name, price, brandId, typeId, img: fileName });

            if (info) {
                info = JSON.parse(info);
                for (const i of info) {
                    console.log('Добавление характеристики:', i); // Вывод данных перед добавлением
                    await DeviceInfo.create({
                        title: i.title,
                        description: i.description,
                        deviceId: device.id
                    });
                }
            }

            return res.json(device);
        } catch (e) {
            console.error('Ошибка при создании устройства:', e); // Вывод ошибки
            next(ApiError.badRequest(e.message));
        }
    }

    async getAll(req, res, next) {
        try {
            let { brandId, typeId, limit, page } = req.query;
            page = page || 1;
            limit = limit || 10;
            let offset = page * limit - limit;
            let devices;

            if (!brandId && !typeId) {
                devices = await Device.findAndCountAll({ limit, offset });
            } else if (brandId && !typeId) {
                devices = await Device.findAndCountAll({ where: { brandId }, limit, offset });
            } else if (!brandId && typeId) {
                devices = await Device.findAndCountAll({ where: { typeId }, limit, offset });
            } else if (brandId && typeId) {
                devices = await Device.findAndCountAll({ where: { typeId, brandId }, limit, offset });
            }

            return res.json(devices);
        } catch (e) {
            console.error('Ошибка при получении устройств:', e); // Вывод ошибки
            next(ApiError.internal(e.message));
        }
    }

    async getOne(req, res, next) {
        try {
            const { id } = req.params;
            const device = await Device.findOne({
                where: { id },
                include: [{ model: DeviceInfo, as: 'info' }]
            });
            return res.json(device);
        } catch (e) {
            console.error('Ошибка при получении устройства:', e); // Вывод ошибки
            next(ApiError.internal(e.message));
        }
    }
}

module.exports = new DeviceController();
