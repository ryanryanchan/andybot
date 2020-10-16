var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./botToken.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 3).toLowerCase() == 'im ') {    
        bot.sendMessage({
                    to: channelID,
                    message: 'Hi ' + message.slice(3) + ' I\'m dad'
                });
     }
     if (message.substring(0, 4).toLowerCase() == 'i\'m ') {    
        bot.sendMessage({
                    to: channelID,
                    message: 'Hi ' + message.slice(4) + ' I\'m dad'
                });
     }
});