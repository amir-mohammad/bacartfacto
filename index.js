const express = require('express');
const path = require("path");
const bodyParser = require("body-parser");
const cors = require('cors');
const connectDB = require('./config/db');
const {ApolloServer} = require('apollo-server-express');
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers/');
const fileUpload = require('express-fileupload');


const PORT = 4000;
const app = express();
app.use;(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());
app.use(fileUpload());

connectDB();



const server = new ApolloServer({
    typeDefs,
    resolvers,
    context : ({req}) => ({req})
});

app.use('/upload',require('./routes/upload/upload'));
server.applyMiddleware({app});
app.listen(PORT,() => {
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
})



