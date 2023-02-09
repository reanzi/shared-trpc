import { getMeHandler } from "../controllers/user.controllers";
import { protectedProcedure, t } from "../create-router";

const userRouter = t.router({
    getMe: protectedProcedure.query(({ ctx }) => getMeHandler({ ctx })),
});

export default userRouter;
