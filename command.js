const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
let setting = require('./key.json')

module.exports = MrNimaX = async (nmX, m, chatUpdate, store) => {
try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = /^[\\/!#.]/gi.test(body) ? body.match(/^[\\/!#.]/gi) : "/"
const isCmd2 = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
let text = q = args.join(" ")
        
        const from = m.chat
        const reply = m.reply
        const sender = m.sender
        const mek = chatUpdate.messages[0]
	
      
switch(command) { 
case 'nima' : {
nmX.sendMesaage(m.chat, { text : 'Mr Nima is My owner'})
//nmX.sendMessage(m.chat , {image / video / document / audio  : { url : ' ' } , caption :  ' '  })
//Buttons
buttons = [
{buttonId: `.hi`, buttonText: {displayText: 'HI'}, type: 1},
{buttonId: `.hi`, buttonText: {displayText: 'HI'}, type: 1},
{buttonId: `.hi`, buttonText: {displayText: 'HI'}, type: 1}                    
                ]
let buttonMessage = {
image: { url: '   '},
caption:`  ` ,
footer: 'Footer',
buttons: buttons,
headerType: 4
}
nmX.sendMessage(m.chat, buttonMessage, { quoted: m })
           
const templateMessage = {
text: msg,
footer: global.botnma,
templateButtons: templateButtons
}
await ElisaBotMd.sendMessage(m.chat, templateMessage, { quoted: m })   
}

}
break
}                
}        
}
        
    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
