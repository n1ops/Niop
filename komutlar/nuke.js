const Discord = require('discord.js');

exports.run = (client, message, args) => {
message.channel.clone().then(knl => {
  let position = message.channel.position;
  knl.setPosition(position);
  message.channel.delete();
});
  
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["nuke","nuk","nk"],
  permLevel: 3
};

exports.help = {
    name: 'nuke',
  description: 'Belirtilen kanalı silip aynısıın tekrar oluşturur.',
  usage: 'nuke'
};