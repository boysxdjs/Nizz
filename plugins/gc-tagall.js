const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `*𝐃𝐞𝐬𝐞𝐚𝐬 𝐂𝐨𝐦𝐩𝐫𝐚𝐫 𝐄𝐥 𝐁𝐨𝐭 ? Wa.me/51906528530 🥷🏻* ${pesan}`;
  let teks = `*Bot Nizz Dice Que Te Actives Plantita 🌱*\n\n${oi}\n\n`;
  for (const mem of participants) {
    teks += `🥷🏻┣➥ @${mem.id.split('@')[0]}\n`;
  }
  teks += `\n🥷🏻 𝗕𝗢𝗧 𝗡𝗜𝗭𝗭 🥷🏻`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;
