import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./graphql/schema";
import root from "./graphql/root";
import getYoutubeData from "./youtube";
const app = express();
const port = process.env.PORT || 3000;

// env config
import * as dotenv from "dotenv";
dotenv.config();

// graphql api
app.use(
    "/graphql",
    graphqlHTTP({
        graphiql: true,
        schema: schema,
        rootValue: root,
    })
);

// fetch data every 10 sec
setInterval(getYoutubeData, 10 * 1000);
app.listen(port, () => {
    console.log("server is started");
    getYoutubeData();
});
