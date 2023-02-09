import { t } from "../create-router";
import redisClient from "../utils/redis";
import authRouter from "./auth.routes";
import userRouter from "./user.routes";


// Procedures
const publicRouter = t.router({
    getHello: t.procedure.query(async ({ ctx }) => {
        const message = await redisClient.get("trpc");
        return { message };
    }),
});

export const appRouter = t.mergeRouters(publicRouter, authRouter, userRouter);

export type AppRouter = typeof appRouter;
