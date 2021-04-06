module.exports = {
  type: 'mongodb',
  host: 'localhost:27017',
  database: 'dev-api',
  synchronize: true,
  seeds: ['src/**/*.seed.ts'],
  factories: ['src/**/*.factory.ts'],
  entities: ['src/**/*.entity.ts'],
  useUnifiedTopology: true,
};
