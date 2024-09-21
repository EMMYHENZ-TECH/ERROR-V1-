

const fs = require('fs');
const chalk = require('chalk');

//owmner v card
ERROR-V1.ytname = "YT: https://whatsapp.com/channel/0029VangYOt96H4JhFarL10C" //ur yt chanel name
ERROR-V1.socialm = "GitHub: EMMYHENZ-TECH" //ur github or insta name
ERROR-V1.location = "Africa, Nigeria, Calabar" //ur location

//new
ERROR-V1.botname = '© ERROR-V1' //ur bot name
ERROR-V1.ownernumber = ['2349125042727'] //ur owner number, dont add more than one
ERROR-V1.ownername = '© EMMY HENZ' //ur owner name
ERROR-V1.websitex = "https://www.youtube.com/@EMMYHENZTECHINFO"
ERROR-V1.wagc = "https://whatsapp.com/channel/0029VangYOt96H4JhFarL10C"
ERROR-V1.themeemoji = '🪀'
ERROR-V1.wm = "Xeon Bot Inc."
ERROR-V1.botscript = '' //script link
ERROR-V1.packname = "Sticker By"
ERROR-V1.author = "EMMY HENZ \n\n+2349121785627"
ERROR-V1.creator = "2349121785627@s.whatsapp.net"
ERROR-V1.xprefix = '.'
ERROR-V1.premium = ["2349125042727"] // Premium User

//channel id
ERROR-V1.xchannel = {
	jid: ''
	}

//bot sett
ERROR-V1.typemenu = 'v12' // menu type 'v1' => 'v12'
ERROR-V1.typereply = 'v4' // reply type 'v1' => 'v4'
ERROR-V1.autoblocknumber = '91' //set autoblock country code
ERROR-V1.antiforeignnumber = '91' //set anti foreign number country code

ERROR-V1.listv = ['➜','☞','㉨','✪','✯','益','⊡','☆','ෆ','✎','⎆','⫹⫺','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆','֎','ᚏ','⸙','⧉']
ERROR-V1.tempatDB = 'database.json'

ERROR-V1.limit = {
	free: 100,
	premium: 999,
	vip: 'VIP'
}

ERROR-V1.uang = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

ERROR-V1.mess = {
	error: 'Error!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
	done: 'Done'
}

ERROR-V1.bot = {
	limit: 0,
	uang: 0
}

ERROR-V1.game = {
	suit: {},
	menfes: {},
	tictactoe: {},
	kuismath: {},
	tebakbom: {},
}

//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
