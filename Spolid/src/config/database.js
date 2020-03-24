module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'SPOLID',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
