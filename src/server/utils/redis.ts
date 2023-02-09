// import { createClient } from 'redis';

// const redisUrl = `redis://localhost:6379`;
// const redisClient = createClient({
//     url: redisUrl,
// });
const messageObj = <any>{ trpc: 'Welcome to tRPC with Next.js, Prisma and Typescript!' }
const redisClient = {
    connect: async () => true,
    set: (name: string, message: string) => ({ ...messageObj, name: message }),
    get: async (key: string) => messageObj[`${key}`],
    del: async (args: string) => true
}

const connectRedis = async () => {
    try {
        await redisClient.connect();
        console.log('? Redis client connected...');
        redisClient.set(
            'trpc',
            'Welcome to tRPC with Next.js, Prisma and Typescript!'
        );
    } catch (err: any) {
        console.log(err.message);
        process.exit(1);
    }

    return 'Welcome to tRPC with Next.js, Prisma and Typescript!'
};

connectRedis();

// redisClient.on('error', (err) => console.log(err));

export default redisClient;
