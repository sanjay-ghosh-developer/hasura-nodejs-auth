module.exports = {
  HOST: process.env.DOCKER_DATABASE_HOST || "localhost",
  USER: "postgres",
  PASSWORD: "admin2022",
  DB: "water_db",
  dialect: "postgres",
};