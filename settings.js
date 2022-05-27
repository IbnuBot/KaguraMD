const fs = require('fs')
const chalk = require('chalk')

//---------( APIKEY )---------//
global.APIs = {
zenz: 'https://zenzapis.xyz',
}
global.APIKeys = {
'https://zenzapis.xyz': 'BagasPrdn',
}

//---------( SETTING )---------//
global.owner = ['6285158621566','6285789004732','62895338690940']
global.premium = ['6285158621566']
global.ownernomer = '6285158621566'
global.ownername = 'Ibnu Official'
global.botname = 'IbnuMD'
global.footer = 'Ibnu Official'
global.thumb = fs.readFileSync('./image/fake.jpg')
global.veloriy = fs.readFileSync('./image/kagura.mp4')
global.sessionName = 'session'
global.packname = '© IbnuMD'
global.author = '2022'
global.sp = '⭔'

//---------( INFO )---------//
global.youtube = 'https://youtube.com/c/Ibnu Official'
global.ig = 'https://instagram.com/ibnuopbrrww'
global.mygc = 'https://chat.whatsapp.com/LoRn7jgdN5N0w1e6LQxiee'
global.myweb = 'https://github.com/IbnuBot'
global.email = 'ibnuhilal746@gmail.com'
global.region = 'indonesia'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.BgWelcLeav = 'https://telegra.ph/file/ca207893ae26d531cd9c6.jpg'
global.limitawal = {
premium: "Infinity",
free: 15,
}

//---------( RANDOM IMAGE )---------//
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//---------( MESSAGES )---------//
global.mess = {
success: '_Done._',
admin: '_Fitur Khusus Admin Group!_',
botAdmin: '_Bot Harus Menjadi Admin Terlebih Dahulu!_',
owner: '_Fitur Khusus Owner Bot_',
group: '_Fitur Digunakan Hanya Untuk Group!_',
private: '_Fitur Digunakan Hanya Untuk Private Chat!_',
bot: '_Fitur Khusus Pengguna Nomor Bot_',
wait: '_Sedang Di Proses..._',
error: '_Fitur Sedang Error!_',
endLimit: '_Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12_',
}

//---------( PEMBATAS )---------//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
