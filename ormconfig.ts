const type: any = 'postgres';

const typeormConfig = {
  type,
  port: 5432,
  host: 'localhost',
  username: 'postgres',
  password: '12345',
  database: 'hash-main',
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/migrations/*.js'],
  synchronize: true,
  logging: false,
  uuidExtension: 'uuid-ossp',
  cli: {
    migrationsDir: 'migrations',
  },
  autoLoadEntities: true
};
// export default breaks migrations https://github.com/typeorm/typeorm/issues/5003
export = typeormConfig