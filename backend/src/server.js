import 'dotenv/config'

console.log('✅ Server OK')
console.log(!!process.env.HELLO_ENV ? '✅ Environement OK' : '❌ Environment KO')
