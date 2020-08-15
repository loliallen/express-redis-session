const session = require("express-session");
const { v4: uuidv4 } = require("uuid");
// const { createClient } = require("redis");
// const redisStore = require("connect-redis")(session);
const fileStorage = require("session-file-store")(session);

// const client = createClient()
const genid = (req) => {
  return uuidv4();
};

module.exports = session({
  name: "_sid",
  resave: false,
  saveUninitialized: true,
  secret: "developer name is max",
  genid,
  store: new fileStorage({}),
  // store: new redisStore({
  //   host: "10.0.1.19",
  //   port: 6379,
  //   client: client,
  //   ttl: 86400,
  // }),
});
