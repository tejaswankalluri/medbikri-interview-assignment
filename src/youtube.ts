import axios from "axios";
import prisma from "./config/prisma";

// runs on every 10 seconds to fetch the youtube api
const getYoutubeData = async () => {
    console.log(new Date().toISOString(), ": getting the youtube data");
    try {
        const res = await axios.get(
            `https://youtube.googleapis.com/youtube/v3/search?q=cricket&key=${process.env.apikey}&part=snippet&type=video`
        );
        res.data.items.forEach(async (item: any) => {
            try {
                // check if video already exist
                const isvideo = await prisma.videos.findFirst({
                    where: {
                        id: item.id.videoId,
                    },
                });
                // if not exist then store into db
                if (!isvideo) {
                    const video = await prisma.videos.create({
                        data: {
                            id: item.id.videoId,
                            title: item.snippet.title,
                            description: item.snippet.description,
                            published: item.snippet.publishedAt,
                            thumbnails: item.snippet.thumbnails,
                        },
                    });
                }
            } catch (err) {
                console.log(err);
            }
        });
    } catch (err) {
        console.log(err);
    }
};

export default getYoutubeData;
