const fs = require('fs')

global.owner = "917384707086" //owner number
global.footer = "𝗗𝗘𝗩𝗜𝗟 𝗫 𝗛𝗘𝗥𝗘" //footer section
global.status = false //"self/public" section of the bot
global.prefa = ['','!','.',',','🐤','🗿']
global.owner = ['917384707086']
global.xprefix = '.'
global.gambar = "https://i.ibb.co/LXb0XdnN/image.jpg"
global.OWNER_NAME = "@devilhacccker" //
global.DEVELOPER = ["917384707086"] //
global.BOT_NAME = "𝗗𝗘𝗩𝗜𝗟 𝗫 𝗛𝗘𝗥𝗘"
global.bankowner = "𝗗𝗘𝗩𝗜𝗟 𝗫 𝗛𝗘𝗥𝗘"
global.creatorName = "𝗗𝗘𝗩𝗜𝗟 𝗫 𝗛𝗘𝗥𝗘™"
global.ownernumber = '917384707086'  //creator number
global.location = "India kolkata west bengal"
global.prefa = ['','!','.','#','&']
// Config - Devil Bots Official
global.footer = "𝗗𝗘𝗩𝗜𝗟 𝗫 𝗛𝗘𝗥𝗘" //footer section
global.link = "https://chat.whatsapp.com/EGomptrlDXVD9tV85etFf3?mode=gi_t"
global.autobio = false//auto update bio
global.botName = "𝗗𝗘𝗩𝗜𝗟 𝗫 𝗛𝗘𝗥𝗘"
global.version = "1.0.1"
global.botname = "𝗗𝗘𝗩𝗜𝗟 𝗫 𝙃𝙀𝙍𝙀 "
global.author = "𝗗𝗘𝗩𝗜𝗟 𝗫 𝗛𝗘𝗥𝗘™"
global.themeemoji = "🥷"
global.wagc = 'https://chat.whatsapp.com/EGomptrlDXVD9tV85etFf3?mode=gi_t'
global.thumbnail = 'https://i.ibb.co/LXb0XdnN/image.jpg'
global.richpp = ' '
global.packname = "Sticker By 𝗗𝗘𝗩𝗜𝗟 𝗫 𝗛𝗘𝗥𝗘"
global.author = "𝗗𝗘𝗩𝗜𝗟 𝗫 𝗛𝗘𝗥𝗘"
global.creator = "917384707086@s.whatsapp.net"
global.ownername = 'Great ' 
global.onlyowner = `Only Devil dev can use this Command 🥶🥷`
  // reply 
global.database = `*To Exist In The Database Contact The Owner of this bot*`
  global.mess = {
wait: "*Configurating.......*",
   success: "*Successfully acknowledged ☑️*",
   on: "*Activated ✅*", 
   prem: "*Feature For Premium Users only*", 
   off: "*Deactivated 📛*",
   query: {
       text: "*Please, Provide A Text Query 📑*",
       link: "Please, provide a valid link 🔗*",
   },
   error: {
       fitur: "*Status 🌐: Feature Or Command error ❌*",
   },
   only: {
       group: "*Group only feature ❌*",
private: "*Private chat feature only ❌*",
       owner: "*Owner feature only ❌*",
       admin: "*bot owner feature only ❌*",
       badmin: "*Seek admin privilege's to use this command ❌*",
       premium: "*Availabe for premium users only ❌*",
   }
}

global.hituet = 0
//false=disable and true=enable
global.autoviewstatus = true
global.autoread = true //auto read messages
global.autobio = true //auto update bio
global.anti92 = false //auto block +92 
global.autoswview = true //auto view status/story

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})


