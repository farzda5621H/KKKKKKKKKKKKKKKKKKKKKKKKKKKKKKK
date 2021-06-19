const Discord = require('discord.js')
const config = require("./config.json")
const client = new Discord.Client()
const prefix = config.prefix

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
client.on("ready", () => {
    function randomStatus() {
    const server = client.guilds.cache.get("814913263858745375")
      let status = [`${server.memberCount} members`, "?prefix"] // You can change it whatever you want.
      let rstatus = Math.floor(Math.random() * status.length);
      
      // client.user.setActivity(status[rstatus], {type: "WATCHING"}); 
      // You can change the "WATCHING" into STREAMING, LISTENING, and PLAYING.
      // Example: streaming
      
      client.user.setActivity(status[rstatus], {type: "STREAMING", url: "https://www.twitch.tv/Amirjack_tv"});
    }; setInterval(randomStatus, 3000)
    
      console.log("bot amade khedmat")
  });
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

client.on('ready', async () => {
    const chid = "829282222707965992"
    const ch = client.channels.cache.get(chid)
    const connection = await ch.join();
    connection.voice.setSelfMute(false);
    connection.voice.setSelfDeaf(true)
  });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

client.on('message', msg => {
    if (msg.content === `${prefix}stream`){
        msg.channel.send(`@everyone`)
        msg.channel.send("<:ghalb:829047093804662804> Hello, the stream has started. I am happy to give you a series on the Aparat site <:ghalb:829047093804662804>", true);
        msg.channel.send("<:JACKBIGMOUTHH:828193769529933844> Ø³Ù„Ø§Ù… Ø§Ø³ØªØ±ÛŒÙ… Ø§Ø³ØªØ§Ø±Øª Ø´Ø¯ Ø¯Ø± Ø³Ø§ÛŒØª Ø¢Ù¾Ø§Ø±Ø§Øª Ø®ÙˆØ´Ø­Ø§Ù„ Ù…ÛŒØ´Ù… ÛŒÚ© Ø³Ø±ÛŒ Ø¨Ù‡ Ù…Ø§ Ø¨Ø²Ù†ÛŒØ¯ <:JACKBIGMOUTHH:828193769529933844>", true);
        msg.channel.send("https://www.aparat.com/amirjack_tv/live Ù„ÛŒÙ†Ú© Ø§Ø³ØªØ±ÛŒÙ…", true);
        msg.channel.send(" https://static.wixstatic.com/media/d10761_6b93d8453d744e75a0859d63807f0a80~mv2.gif")

    }
})

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 client.on(`message`, message => {
    if(message.author.bot || message.channel.type == "dm") return;
    const cmd = message.content.toLocaleLowerCase()
    const messageArray = cmd.split(" ")
    const command = messageArray[0]
    if (command == `${prefix}serverinfo`){
        let serverEmbed = new Discord.MessageEmbed()
        serverEmbed.setColor("#ff0000")
        serverEmbed.setAuthor(client.user.username, client.user.displayAvatarURL())
        serverEmbed.setTitle("Server Info")
        serverEmbed.setURL("https://google.com")
        serverEmbed.setDescription("your server info")
        serverEmbed.setThumbnail(message.guild.iconURL())
        serverEmbed.addField("Server Name", message.guild.name, true)
        serverEmbed.addField("Server Owner", message.guild.owner, true)
        serverEmbed.addField("Region", message.guild.region, true)
        serverEmbed.addField("Verification Level", message.guild.verificationLevel, true)
        serverEmbed.addField("Role Count", message.guild.roles.cache.size, true)
        serverEmbed.addField("Time Created", message.guild.createdTimestamp, true)
        serverEmbed.addField("Emoji Count", message.guild.emojis.cache.size, true)
        serverEmbed.addField("ID Server", message.guild.id, true)
        serverEmbed.setTimestamp()
        serverEmbed.setImage(client.user.displayAvatarURL())
        serverEmbed.setFooter(`Requested By ${message.author.username}`, message.author.displayAvatarURL())
        message.channel.send(serverEmbed)
    }
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function chNickname() {
    const targetguild = client.guilds.cache.get("814913263858745375")
    const me = targetguild.members.cache.get(client.user.id)
    let name = ["ğ“", "ğ“ğ“¶", "ğ“ğ“¶ğ“²", "ğ“ğ“¶ğ“²ğ“»", "ğ“ğ“¶ğ“²ğ“»ğ“³", "ğ“ğ“¶ğ“²ğ“»ğ“³ğ“ª", "ğ“ğ“¶ğ“²ğ“»ğ“³ğ“ªğ“¬", "ğ“ğ“¶ğ“²ğ“»ğ“³ğ“ªğ“¬ğ“´"] 
    for (let i = 0; i < name.length; i++)
        me.setNickname(name[i])
}; setInterval(chNickname, 10000)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

client.on(`message`, message => {
  if(message.author.bot || message.channel.type == "dm") return;
  const cmd = message.content.toLocaleLowerCase()
  const messageArray = cmd.split(" ")
  const command = messageArray[0]
  if (command == `${prefix}avatar`) {

    let mentionMember = message.mentions.members.first();
    var userm = message.author.username
    var avatarauthor = message.author.displayAvatarURL({  dynamic: true })
    if (mentionMember){ 
    let embedavatar = new Discord.MessageEmbed()
    .setImage(mentionMember.user.displayAvatarURL({dynamic: true }))
    .setFooter('Requested by '+ userm, avatarauthor)

    .setColor('RANDOM')
    .setTitle('Avatar Link')
    .setURL(mentionMember.user.displayAvatarURL({ dynamic: true }))
    .setAuthor(mentionMember.user.tag, mentionMember.user.displayAvatarURL({dynamic: true }))
    message.channel.send(embedavatar)
    return;
}  
}

})
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

client.on(`message`, message => {
  if(message.author.bot || message.channel.type == "dm") return;
  const cmd = message.content.toLocaleLowerCase()
  const messageArray = cmd.split(" ")
  const command = messageArray[0]
  if (command == `${prefix}ping`){
      message.reply(`:ping_pong:${message.client.ws.ping} ms`)
  }
})

client.login("ODI4ODY3NjkyODc4MTAyNTI4.YGv1MQ.Jnns9ElCDTlvKKbn-eYSidzpv-w")