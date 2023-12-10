var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
function addToDB(from, to, message) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield prisma.message.create({
            data: {
                from: from,
                to: to,
                message: message,
            },
        });
        console.log(user);
        const messages = yield prisma.message.findMany();
        console.log(messages);
    });
}
export function runAddToBD(from, to, message) {
    addToDB(from, to, message)
        .then(() => __awaiter(this, void 0, void 0, function* () {
        yield prisma.$disconnect();
    }))
        .catch((e) => __awaiter(this, void 0, void 0, function* () {
        console.error(e);
        yield prisma.$disconnect();
        process.exit(1);
    }));
}
function returnMessages() {
    return __awaiter(this, void 0, void 0, function* () {
        const users = yield prisma.message.findMany();
        return users;
    });
}
export function runReturnMessages() {
    return __awaiter(this, void 0, void 0, function* () {
        const users = yield prisma.message
            .findMany()
            .then(() => __awaiter(this, void 0, void 0, function* () {
            yield prisma.$disconnect();
        }))
            .catch((e) => __awaiter(this, void 0, void 0, function* () {
            console.error(e);
            yield prisma.$disconnect();
            process.exit(1);
        }));
        return users;
    });
}
//# sourceMappingURL=prisma-client.js.map