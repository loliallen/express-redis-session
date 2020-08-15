const session = require("express-session");
const { v4: uuidv4 } = require("uuid");
const { createClient: redisCli } = require("redis");
const redisStore = require("connect-redis")(session);

const genid = (req) => {
  return uuidv4();
};

module.exports = session({
  name: "hello",
  resave: false,
  saveUninitialized: true,
  secret: "developer name is max",
//   genid,
  store: new redisStore({
    host: "10.0.1.19",
    port: 6379,
    client: redisCli,
    ttl: 86400,
  }),
});
