let handler = async (m, { conn, args, usedPrefix, command }) => {
let isClose = { // Switch Case Like :v
'open': 'not_announcement',
'close': 'announcement',
'abierto': 'not_announcement',
'cerrado': 'announcement',
'abrir': 'not_announcement',
'cerrar': 'announcement',
}[(args[0] || '')]
if (isClose === undefined)
throw `
*[❗] 𝙵𝙾𝚁𝙼𝙰𝚃𝙾 𝙴𝚁𝚁𝙾𝙽𝙴𝙾!!*

*┏━━━❲ ✨𝙴𝙹𝙴𝙼𝙿𝙻𝙾✨ ❳━━━┓* 
*┠┉↯ ${usedPrefix + command} abrir*
*┠┉↯ ${usedPrefix + command} cerrar*
`.trim()
await conn.groupSettingUpdate(m.chat, isClose)
  
if (isClose === 'not_announcement')  
{m.reply(`${eg}*𝙂𝙍𝙐𝙋𝙊 𝘼𝘽𝙄𝙀𝙍𝙏𝙊*\n𝙔𝘼 𝙋𝙐𝙀𝘿𝙀𝙉 𝙀𝙎𝘾𝙍𝙄𝘽𝙄𝙍 𝙏𝙊𝘿𝙊𝙎 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊`)}
  
if (isClose === 'announcement')
{m.reply(`${eg}*𝙂𝙍𝙐𝙋𝙊 𝘾𝙀𝙍𝙍𝘼𝘿𝙊*\n𝙎𝙊𝙇𝙊 𝙇𝙊𝙎 𝘼𝘿𝙈𝙄𝙉𝙎 𝙋𝙐𝙀𝘿𝙀𝙉 𝙀𝙎𝘾𝙍𝙄𝘽𝙄𝙍 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊`)}  
}
handler.help = ['group open / close', 'grupo abrir / cerrar']
handler.tags = ['group']
handler.command = /^(group|grupo)$/i
handler.admin = true
handler.botAdmin = true
export default handler
