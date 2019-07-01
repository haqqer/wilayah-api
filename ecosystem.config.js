module.exports = [
	{
		script: 'app.js',
		name: 'app',
		exec_mode: 'cluster',
		instances: 2
	},
	{
		script: 'worker.js',
		name: 'worker'
	}
]
