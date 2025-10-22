"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var SchedulerService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchedulerService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const prisma_service_1 = require("../../shared/prisma/prisma.service");
const game_logic_service_1 = require("../game-logic/game-logic.service");
let SchedulerService = SchedulerService_1 = class SchedulerService {
    constructor(prisma, gameLogicService) {
        this.prisma = prisma;
        this.gameLogicService = gameLogicService;
        this.logger = new common_1.Logger(SchedulerService_1.name);
    }
    async handleCron() {
        this.logger.debug('Verificando jogos agendados para iniciar...');
        const now = new Date();
        const gamesToStart = await this.prisma.jOGO.findMany({
            where: {
                data_hora: { lte: now },
                id_usuario_vencedor: null,
            },
        });
        if (gamesToStart.length > 0) {
            this.logger.log(`Encontrados ${gamesToStart.length} jogos para iniciar.`);
            for (const game of gamesToStart) {
                this.gameLogicService.startGame(game.id_jogo).catch((error) => {
                    this.logger.error(`Falha ao iniciar o jogo ${game.id_jogo}`, error.stack);
                });
            }
        }
    }
};
exports.SchedulerService = SchedulerService;
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_30_SECONDS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SchedulerService.prototype, "handleCron", null);
exports.SchedulerService = SchedulerService = SchedulerService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        game_logic_service_1.GameLogicService])
], SchedulerService);
//# sourceMappingURL=scheduler.service.js.map