let handler = async(m, { conn }) => {
  await conn.sendFile(m.chat, pickRandom(asupan), 'asupan.mp4', '', m)
}
handler.help = ['asupan']
handler.tags = ['tools']
handler.command = /^asupan$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.register = true

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const asupan = [
"https://a.top4top.io/m_2191pktxp0.mp4",
"https://l.top4top.io/m_2191p8wpj0.mp4"
]
