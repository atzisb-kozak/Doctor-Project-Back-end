module.exports = {
	type: 'mysql',
	host: 'localhost',
	port: 3306,
	username: 'root',
	password: 'toor',
	database: 'Heal',
	entities: ['dist/**/*.entity{.ts,.js}'],
	synchronize: true
}
