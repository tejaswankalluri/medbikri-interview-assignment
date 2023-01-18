import { buildSchema } from "graphql";

// graphql schema for query
const schema = buildSchema(`
    scalar Date

    type Query{
        hello: String
        youtubevideos(skip: Int!, take: Int!): [video]
        videoSearch(q:String, skip: Int!, take: Int!): [video]
    }
    type video {
        id: String
        title: String
        description: String
        published: Date
        thumbnails: thumbnail
    }
    type thumbnail {
        default: image
        medium: image
        high: image
    }
    type image{
        url: String
        width: Int
        height: Int
    }
`);

export default schema;
