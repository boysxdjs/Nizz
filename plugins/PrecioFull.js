const handler = async (m, {conn}) => {
  m.reply(global.paises);
};
handler.command = /^(mipais|PrecioFull)$/i;
export default handler;

global.paises = `
*Estos Son Los Precios Del Bot Full En Los Siguientes Paises 🌍 :*

*1 - 🇨🇱 Chile : 6.000 Clp*
*2 - 🇦🇷 Argentina : 6.800 Peso Argentino*
*3 - 🇵🇪 Peru : 25 Soles*
*4 - 🇨🇴 Colombia : 26,542.38 Peso Colombiano*
*5 - 🇧🇴 Bolivia : 50.00 Boliviano*
*6 - 🇲🇽 Mexico : 138.44 Peso Mexicano*
*7 - 🇵🇾 Paraguay : 48,929.44 Guaraní Paraguayo*
*8 - 🇺🇸 Ee.Uu : 6.65 Dolares*

*Si Tu Pais No Aparece Preguntame Por Tu Pais 🥵 Recuerda Los Pagos Son Para El Bot Full*

👻 𝗢𝗡𝗟𝗬 𝗕𝗢𝗧 👻
`;

