import prisma from "../config/prisma";

interface IpaginationArgs {
    skip: number;
    take: number;
}
interface IsearchArgs extends IpaginationArgs {
    q: string;
}
// fetch the videos from db in rev order
export const youtubevideos = async (args: IpaginationArgs) => {
    try {
        const videos = await prisma.videos.findMany({
            skip: args.skip,
            take: args.take,
            orderBy: {
                published: "desc",
            },
        });
        return videos;
    } catch (err) {
        console.log(err);
    }
};
export const videoSearch = async (args: IsearchArgs) => {
    try {
        const videos = await prisma.videos.findMany({
            skip: args.skip,
            take: args.take,
            orderBy: {
                published: "desc",
            },
            where: {
                title: {
                    search: args.q.split(" ").join(" & "),
                },
            },
        });
        return videos;
    } catch (err) {
        console.log(err);
    }
};
