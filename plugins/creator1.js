import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)


if (command == 'zykomods1') {
 let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp;Saya Owner IKYY;BOTZ;;MD\nFN:Saya Owner Ikyy-MD Bot WhatsApp, MD\n\n\n\nIkyyOfc:👑 Owner Ikyy-MD\nORG:IKYY\nTITLE:MD\nitem1.TEL;waid=6282281657946:+62 822-8165-7946\nitem1.X-ABLabel:📞 Nomor Owner\nitem2.https://youtu.be/\nitem2.X-ABLabel:💬 More\nitem3.EMAIL;type=INTERNET: gendonmenjeng@gmail.com\nitem3.X-ABLabel:💌 Mail Owner Zyko-MD\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:💬 More\nitem4.X-ABLabel:📍 Lokasi Saya\nBDAY;value=date:🔖 KEPO LU YAH\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fakes })
let caption = `👋 Hai *${name} @${who.split("@")[0]}*, Nih Owner *${conn.user.name}* kak`
    await conn.sendButton(m.chat, caption, author, null, [['🎀 Sapa Owner', 'Huuu']], m, { quoted: tag_own, mentions: conn.parseMention(caption) })
}
if (command == 'zykomods2') {
  let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;${author};;;\nFN:${author}\nORG:${author}\nTITLE:\nitem1.TEL;waid=6282281657946:+62 822-8165-7946\nitem1.X-ABLabel:${author}\nX-WA-BIZ-DESCRIPTION:${htjava} Nih pengembang ku kack yg mengaktifkan aq.\nX-WA-BIZ-NAME:${author}\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fakes })
}
}
handler.help = ['zykomods1', 'zykomods2']
handler.tags = ['info']

handler.command = /^(zykomods1|zykomods2}$/i

export default handler
