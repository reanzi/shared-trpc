import { User } from "@prisma/client";
import { inferAsyncReturnType } from "@trpc/server";
import { NextApiRequest, NextApiResponse } from "next";

export function createContext({
    req,
    res,
    user,
}: {
    req: NextApiRequest;
    res: NextApiResponse;
    user?: User
}) {
    return { req, res, user };
}

export type Context = inferAsyncReturnType<typeof createContext>;
