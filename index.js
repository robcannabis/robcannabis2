const { Client, MessageAttachment, RichPresence, MessageEmbed } = require('discord.js-selfbot-v13'); 
const exp = require('express'); 
const req = require("node-fetch");
const s = exp(); 
const bot = new Client({

 checkUpdate: false
 }); 
 const change = [
  "Enjoying Life",
  "Until when do I stop running from reality",
  "Don't forget to keep smiling even though your day is dk",
  "Life is indeed unfair, so get used to it",
 ]; 
 const textmain = "Youtube"
 const texttwo = " " 
 const textthree = "⏰（ {hours}:{minutes} ）" 
 const textfour = "📅（ {dates}/{month}/{year} ）"
 const type = "STREAMING" 
 const pictureGede = "mp:/attachments/1062757196288512100/1087358001993748480/robb2.gif"
 const nameButtonone = "​ ​"
 const linkButtonone = "https://www.youtube.com/watch?v=kLhERCbuVw0"
 const nameButtontwo = "​ ​"
 const linkButtontwo = "https://www.youtube.com/watch?v=0688CGcR5Iw"

s.all('/', (req, res) => { 
  res.send("Ready Dek") 
 })

s.listen(8080, () => { 
  console.log("Port : 8080") 
 })

 bot.on('debug', (a) => {
  if(a.startsWith("Hit a 429")) process.kill(1)
 })

 bot.on('ready', async () => { 
  setInterval(() => { 
    function dim(m, y) { 
      return new Date(y, m, 0).getDate() 
     }
    function getOrdinalNum(n) { 
       return n + (n > 0 ? ['', '', '', ''][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10] : ''); 
     }

    const second = change[Math.floor(Math.random() * change.length)]; 
     const date = new Date() 
    let dates = getOrdinalNum(date.getDate()) 
    let lD = dim(date.getMonth() + 1, date.getFullYear()) 
     let H = date.getHours() 
     let hours = (H + 7) % 24
     let M = date.getMinutes() 
     let minutes = (M + 0) 
     let months = date.getMonth()
     let dy = date.getDate()
     let year = date.getFullYear()
     let monthst = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "Desember"
     ]
     let month = monthst[months]
    if (hours < 10) hours = `0${hours}` 
     if (minutes < 10) minutes = `0${minutes}` 
     if (dy == lD) dates = `Now` 
     let resultone = textmain.replace(/{dates}/g, dates).replace(/{minutes}/g, minutes).replace(/{change}/g, second).replace(/{hours}/g, hours).replace(/{month}/g, month).replace(/{year}/g, year)
     let resulttwo = texttwo.replace(/{dates}/g, dates).replace(/{minutes}/g, minutes).replace(/{change}/g, second).replace(/{hours}/g, hours).replace(/{month}/g, month).replace(/{year}/g, year)
     let resultthree = textthree.replace(/{dates}/g, dates).replace(/{minutes}/g, minutes).replace(/{change}/g, second).replace(/{hours}/g, hours).replace(/{month}/g, month).replace(/{year}/g, year)
     let resultfour = textfour.replace(/{dates}/g, dates).replace(/{minutes}/g, minutes).replace(/{change}/g, second).replace(/{hours}/g, hours).replace(/{month}/g, month).replace(/{year}/g, year)
     let pr = new RichPresence() 
       .setName(`${resultone}`) 
       .setURL('https://www.youtube.com/watch?v=fkc2UgJdgJ8') 
       .setType(`${type}`.toUpperCase()) 
       .setApplicationId("993210680859701369")
       .setAssetsLargeImage(`${pictureGede}`) 
       .setAssetsSmallImage(null) 
       .setAssetsLargeText(`${resultfour}`) 
       .setAssetsSmallText(`DC - ${bot.user.tag}`)
       .setState(` ${resulttwo}`) 
       .setDetails(`${resultthree}`) 
       .addButton(`${nameButtonone}`, `${linkButtonone}`) 
       .addButton(`${nameButtontwo}`, `${linkButtontwo}`)

     bot.user.setActivity(pr.toJSON()) 
   }, 30 * 1000)
   console.log(`${bot.user.tag} Is Ready!`) 
 })

 bot.login(process.env.token) 