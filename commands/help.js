 const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  aliases: ["h"],
  cooldown: 8,
  description: "**all commands**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setTitle(`**Hyper Music  Commands**`)
    .setColor["RED"]
    .setThumbnail("https://media.tenor.com/images/3145445a2c5bde03ac708c2c309fdbca/tenor.gif")
    .setAuthor("Prefix [ $ ]","https://31.media.tumblr.com/edcc03d21d41b65d4c38aa08af6b8318/tumblr_moq13eC8LR1r42kl9o1_500.gif")
    .setDescription(` 
\`Help Commands\`

**Music Command**

**| $paly | $stop 
| $skip | $skipto | $volume |**

**| $queue | $loop 
| $pause | $nowplaying |**

**| $shuffle | $uptime 
| $search | $remove |**

**| $clip 
| $clips | $lyrics 
| $move | $playlist |**

**Info Command**

**| $bot 
| $support | $invite 
| $help |$ping |**

**Music Easy Commands**

**| $p | $s | $sk | $st 
| $v | $q | $l 
| $pa | $np |**

**| $sh | $u | $se 
| $rm | $r | $ms 
| $b | $sp |**

**| $c | $cl | $pl 
| $mv | $ly | $add | $h |**
     
**[ invite ]**
**[ click here ](https://discord.com/api/oauth2/authorize?client_id=840934940786425868&permissions=8&scope=bot)** 
**[ support ]**
**[ click here ](https://discord.gg/nKxJHKPpkK)**                                                                                                                              
 `)
    
    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);

  }
};
