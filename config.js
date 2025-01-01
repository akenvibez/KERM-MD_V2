//#ENJOY BRO😍
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Kermd237@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Kgtech-cmr/KERM_MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.devs = "https://wa.me/237650564445 , https://wa.me/237656520674";
global.sudo = process.env.SUDO || "237650564445";
global.owner = process.env.OWNER_NUMBER || "237656520674";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/kbc224.mp4,https://files.catbox.moe/dhii42.mp4,https://files.catbox.moe/lgj91g.mp4,https://files.catbox.moe/hvjoe6.mp4,https://files.catbox.moe/4ogeum.mp4,https://files.catbox.moe/0cmaxl.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kgtech-v2-session.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMk1kS2NoRE9STUFkVm9CbDNCYmJxUExnVkZ2L09OL0tTVFllNDdnSTdYYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRTZpWE1ScUt6aGc2WEZiaE9tNkgwR0lGU2F3UHg0NWlMRnVpK2hEUitFbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjSzYzZ3BoL1ZJM1E1bW5MMG9iQTBrZld0NC9MUGZXZ0Q0Y013ZmZWbjBvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIRTBjcHN3TVFSb0NybGdSY2VyTWN0cmpDeWg5b1FKL3dtNmcwV1ZQeDBZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndORkRpb0FWNTA3L3VwOUFwR2hhOVQvamFXdm4xTnVkamNubTNGWUU5M009In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpHUFZDUDg1V0RoM2FZdXhkUzl0b0ZMRnVJSlVwd0ZHZHVBRmhIVU01ekk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0htWVhLdG4yUWhNd2U2VG1EN1BFWDM2Q1lDUUJQdUdJalhkWTNKQmJuWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYTlnSW9rRS95Q0NYNTZCYUZQTzdtclpnODcrKzI2eDlNZmx6QVFYWEtSaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjN1UFVua3J1T3grOFJPbXRkZ01xY2lQakkwSVVzbmRCN1NXTFRIZHRMeVpnNGRqUFhLTFRWbk5NQU9qMmVWa29tS2RvQnVsZVFpSkhoYkNTRFBKcEFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzIsImFkdlNlY3JldEtleSI6InpDQ2pBbnFBd1hFQUg3NnZ4ZVlkSk9YZlNtZWI0bjZlUTZ5YjI4MHlaZ1U9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NzU3MTU4MzVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRTNGRjlGMjQ4RkEwOTE2MkE1OTRFODM4NjE3RUIzMzMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczNTcwNzA4MH0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NzU3MTU4MzVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiOTI1NzBBOTBDNjNCQzdGQjY5MzJFODFBQTUxRTU4RDkifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczNTcwNzA4MX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoic2daSWV4UC1TWi1aOEtTX0hIOXA1USIsInBob25lSWQiOiIzZGQ4MDA4MC05ZDM2LTQ0NjYtOGZkNi1mZjg2YWQ4MmRlMjEiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkNvNzRzUVYrdGMxdmM3WGdFRkNGMnlHRzJZPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRkelMySU4vVmwvMlI0WTJPTTlhWkRsdThMQT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI0UVZYMlhBRCIsIm1lIjp7ImlkIjoiOTQ3NzU3MTU4MzU6MTVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2QgPCdkIrwnZCE8J2QjSDwnZCm8J2QnSDwnZCb8J2QqPCdkK0ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BpTHp1NEZFTGVUMDdzR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImFjUzdDOHI1RmRicWF1d25oS24vOTJkNXZLQllQVmxONDNONFUzSUNtU009IiwiYWNjb3VudFNpZ25hdHVyZSI6Ik9wRlR0R1hPNUlRS3gxemlDdzFvWFVCRjMzSXhGVm1TcGF1VUJkV0Y1STlMS0pwcFRxZG0xZmJDMzJSWnJld20xUmhBSEl5c1hwU3dIUFFEZWl3M0F3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiIrNEZwNkdLRzF1TS9PanRqbytKbVZzWlk1REw2Q1pMTEFVeERka0Vlb1djamhhVjBaL1Vub0lTaUVEVE8yY2IwM2ZFNUxnT1NOZndJU01POHBhbnVBQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0Nzc1NzE1ODM1OjE1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlduRXV3dksrUlhXNm1yc0o0U3AvL2RuZWJ5Z1dEMVpUZU56ZUZOeUFwa2oifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzU3MDcwNzcsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRDFWIn0=="
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜ KG TECH⌝☜`",
  author: process.env.PACK_AUTHER || "KG TECH",
  packname: process.env.PACK_NAME || "Kerm-MD-V2",
  botname: process.env.BOT_NAME || "ᵏᵍ┘𝙺𝙴𝚁𝙼_𝙼𝙳_𝚅𝟸𖤐",
  ownername: process.env.OWNER_NAME || "☞⌜ KG TECH⌝☜",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "KERM").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
