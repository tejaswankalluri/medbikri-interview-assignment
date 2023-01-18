import { videoSearch, youtubevideos } from "./resolver";
import { dateScalar } from "./types";

const root = {
    youtubevideos: youtubevideos,
    videoSearch: videoSearch,
    Date: dateScalar,
};
export default root;
