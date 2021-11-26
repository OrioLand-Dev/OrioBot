require("dotenv").config();
const Discord = require("discord.js");
const Command = require("../../structures/Commandos.js");
require("discord-reply");
const { MessageEmbed } = require("discord.js");
//const { MessageButton, MessageActionRow } = require("discord-buttons");
module.exports = class OrioLand extends Command {
  constructor(client) {
    super(client, {
      name: "orioland",
      botpermissions: ["ADD_REACTIONS"],
      description: [
        "Show you information about me.",
        "Muestra información sobre mí.",
      ],
      cooldown: 5,
      usage: ["<command>", "<comando>"],
      category: "Info",
    });
  }
  async run(client, message, args, prefix, lang, webhookClient, ipc) {
    try {
      if (!args[0]) {

        const embed = new MessageEmbed()
          .setColor(process.env.EMBED_COLOR)
          .setDescription(
            `\<:OrioLand:899005609079357471> **OrioLand es una Network de Minecraft donde podeis jugar solos o con amigos.**`
          )
          .addField(`**¿Como puedo entrar?,**
            Solo tienes que ir al apartado mutijugador del minecraft y añadir un servidor con la direccion **mc.orioland.com**.`
          )
          .setThumbnail(message.author.avatarURL({ dynamic: true }))
          .setTitle("✨ **ORIOLAND** ✨");
        //let user = client.users.cache.get(message.author.id)

        //message.lineReply(client.language.HELP[4]);
        message.channel.send({
          embeds: [embed]
          //buttons: ButtonArray,
        });
      } else {
        const data = [];
        const name = args[0].toLowerCase();
        const command =
          client.commands.get(name) ||
          client.commands.find((c) => c.aliases && c.aliases.includes(name));

        if (!command) {
          const errorembed = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle(client.language.ERROREMBED)
            .setDescription(name + client.language.HELP[25])
            .setFooter(message.author.username, message.author.avatarURL());
          return message.channel.send({embeds: [errorembed]});
        }

        data.push(`**${client.language.HELP[15]}:** ${command.name}`);

        if (command.aliases)
          data.push(
            `**${client.language.HELP[16]}:** ${command.aliases.join(", ")}`
          );
        if (command.description)
          data.push(`**${client.language.HELP[17]}:** ${command.description}`);
        if (command.usage)
          data.push(
            `**${client.language.HELP[18]}:** .${command.name} ${command.usage}`
          );

        data.push(
          `**${client.language.HELP[19]}:** ${command.cooldown || 3} ${client.language.HELP[30]}(s)`
        );
        let embed2 = new Discord.MessageEmbed()
          .setTitle(
            client.language.HELP[20] + command.name + client.language.HELP[24]
          )
          .setColor(process.env.EMBED_COLOR)
          .addFields(
            {
              name: `**${client.language.HELP[17]}**`,
              value: command.description ? command.description.toString() : client.language.HELP[29],
              inline: true,
            },
            {
              name: `**${client.language.HELP[18]}**`,
              value: command.usage ? command.usage.toString() : client.language.HELP[29],
              inline: true,
            },
            {
              name: `**${client.language.HELP[16]}**`,
              value: command.aliases ? command.aliases.toString() : client.language.HELP[29],
              inline: true,
            }
          )
          .setFooter(
            `\n${client.language.HELP[26]} \`${prefix}help [${client.language.HELP[27]}]\` ${client.language.HELP[28]}`
          )
          .setTimestamp(" ");

        message.channel.send({ embeds: [embed2]});
      }
    } catch (e) {
      console.error(e);
      message.channel.send({
        embeds: [
          new Discord.MessageEmbed()
          .setColor("RED")
          .setTitle(client.language.ERROREMBED)
          .setDescription(client.language.fatal_error)
          .setFooter(message.author.username, message.author.avatarURL())
        ]
      });
      webhookClient.send(
        `Ha habido un error en **${message.guild.name} [ID Server: ${message.guild.id}] [ID Usuario: ${message.author.id}] [Owner: ${message.guild.ownerId}]**. Numero de usuarios: **${message.guild.memberCount}**\nMensaje: ${message.content}\n\nError: ${e}\n\n**------------------------------------**`
      );
      try {
        message.author
          .send(
            "Oops... Ha ocurrido un eror con el comando ejecutado. Aunque ya he notificado a mis desarrolladores del problema, ¿te importaría ir a discord.gg/nodebot y dar más información?\n\nMuchísimas gracias rey <a:corazonmulticolor:836295982768586752>"
          )
          .catch(e);
      } catch (e) {}
    }
  }
};
