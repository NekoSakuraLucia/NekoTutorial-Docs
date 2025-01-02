---
title: GatewayIntentBits เป็นฟังก์ชันที่ช่วยในการกำหนดประเภทของข้อมูลบอท
description: ที่ต้องการรับจาก Discord Gateway ในการเชื่อมต่อกับ Discord API โดยจะใช้เพื่อกำหนดว่าบอทจะรับข้อมูลประเภทใดจากเซิร์ฟเวอร์ Discord บ้าง
---

`GatewayIntentBits` เป็นฟังก์ชันที่ช่วยในการกำหนดประเภทของข้อมูลที่บอทต้องการรับจาก Discord Gateway ในการเชื่อมต่อกับ Discord API โดยจะใช้เพื่อกำหนดว่าบอทจะรับข้อมูลประเภทใดจากเซิร์ฟเวอร์ Discord บ้าง เช่น ข้อความ, การเข้าร่วมเซิร์ฟเวอร์, การอัปเดตสถานะผู้ใช้, หรือข้อมูลอื่นๆ

ในเวอร์ชันก่อนๆ (เช่น v13) เราจะใช้ `Intents` ในการกำหนดแต่ละประเภทข้อมูลที่บอทสามารถรับได้ แต่ใน v14 จะเปลี่ยนมาใช้ `GatewayIntentBits` แทน เพื่อให้โค้ดอ่านเข้าใจได้ง่ายและเป็นระเบียบยิ่งขึ้น

### ชนิดของ GatewayIntentBits
ใน Discord.js v14, เราสามารถเลือกใช้อินเทนต์ต่างๆ ผ่าน `GatewayIntentBits` ซึ่งมีทั้งหมดหลายประเภท ดังนี้:
1. `GatewayIntentBits.Guilds` - ให้บอทสามารถเข้าถึงข้อมูลเซิร์ฟเวอร์ (guilds) เช่น ข้อมูลเกี่ยวกับการเข้าร่วม, ออกจากเซิร์ฟเวอร์, และข้อมูลเซิร์ฟเวอร์อื่นๆ
2. `GatewayIntentBits.GuildMembers` - ให้บอทสามารถเข้าถึงข้อมูลสมาชิกของเซิร์ฟเวอร์ เช่น การเข้าร่วมหรือออกจากเซิร์ฟเวอร์, การอัปเดตข้อมูลสมาชิก
3. `GatewayIntentBits.GuildBans` - ให้บอทสามารถเข้าถึงข้อมูลการแบนสมาชิกจากเซิร์ฟเวอร์
4. `GatewayIntentBits.GuildEmojisAndStickers` - ให้บอทสามารถเข้าถึงข้อมูลเกี่ยวกับอีโมจิและสติกเกอร์ในเซิร์ฟเวอร์
5. `GatewayIntentBits.GuildIntegrations` - ให้บอทสามารถเข้าถึงข้อมูลเกี่ยวกับการบูรณาการต่างๆ ในเซิร์ฟเวอร์
6. `GatewayIntentBits.GuildWebhooks` - ให้บอทสามารถเข้าถึงข้อมูล webhook ของเซิร์ฟเวอร์
7. `GatewayIntentBits.GuildInvites` - ให้บอทสามารถเข้าถึงข้อมูลเกี่ยวกับการเชิญชวนเข้าสู่เซิร์ฟเวอร์
8. `GatewayIntentBits.GuildVoiceStates` - ให้บอทสามารถเข้าถึงข้อมูลสถานะเสียงในเซิร์ฟเวอร์ เช่น การเข้าหรือออกจากห้องเสียง
9. `GatewayIntentBits.GuildPresences` - ให้บอทสามารถเข้าถึงข้อมูลการออนไลน์และสถานะของสมาชิก
10. `GatewayIntentBits.MessageContent` - ให้บอทสามารถอ่านเนื้อหาของข้อความที่ผู้ใช้ส่งในเซิร์ฟเวอร์
11. `GatewayIntentBits.DMMessages` - ให้บอทสามารถรับข้อมูลเกี่ยวกับข้อความใน DM (Direct Message)
12. `GatewayIntentBits.DMReactions` - ให้บอทสามารถเข้าถึงข้อมูลการรีแอคใน DM
13. `GatewayIntentBits.MessageReactions` - ให้บอทสามารถเข้าถึงข้อมูลการรีแอคในเซิร์ฟเวอร์
14. `GatewayIntentBits.Typing` - ให้บอทสามารถตรวจสอบสถานะการพิมพ์ข้อความของสมาชิกในเซิร์ฟเวอร์
15. `GatewayIntentBits.Presences` - ให้บอทสามารถรับข้อมูลสถานะการออนไลน์/ออฟไลน์ของผู้ใช้
16. `GatewayIntentBits.Moderation` - ให้บอทสามารถเข้าถึงข้อมูลเกี่ยวกับการคุมแบนหรือการคุมสมาชิก

### วิธีการใช้ GatewayIntentBits
ในการใช้ `GatewayIntentBits` ในการกำหนด intents สำหรับบอทของคุณใน Discord.js, คุณต้องกำหนด intents เมื่อสร้าง `Client` ตัวอย่างโค้ดด้านล่างนี้จะเป็นตัวอย่างวิธีการใช้:
```js
// index.js

const { Client, GatewayIntentBits } = require('discord.js');

// กำหนด intents ที่บอทต้องการใช้
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,                  // เข้าถึงข้อมูลเกี่ยวกับเซิร์ฟเวอร์
    GatewayIntentBits.GuildMembers,            // เข้าถึงข้อมูลสมาชิก
    GatewayIntentBits.GuildMessages,           // เข้าถึงข้อมูลข้อความในเซิร์ฟเวอร์
    GatewayIntentBits.MessageContent,          // เข้าถึงเนื้อหาของข้อความ
    GatewayIntentBits.GuildVoiceStates,        // เข้าถึงข้อมูลสถานะเสียง
    GatewayIntentBits.GuildPresences           // เข้าถึงข้อมูลสถานะออนไลน์ของสมาชิก
  ]
});
```
ในตัวอย่างนี้:
- `GatewayIntentBits.Guilds`: ให้บอทสามารถรับข้อมูลเกี่ยวกับเซิร์ฟเวอร์
- `GatewayIntentBits.GuildMembers`: ให้บอทสามารถรับข้อมูลเกี่ยวกับสมาชิก
- `GatewayIntentBits.GuildMessages`: ให้บอทสามารถรับข้อมูลเกี่ยวกับข้อความในเซิร์ฟเวอร์
- `GatewayIntentBits.MessageContent`: บอทสามารถอ่านเนื้อหาของข้อความได้

### การกำหนด Intent ที่จำเป็น
บาง intents เช่น `MessageContent` จะต้องเปิดใช้งานในแดชบอร์ดของ Discord Developer Portal (ถ้าบอทของคุณต้องการเข้าถึงเนื้อหาของข้อความในข้อความที่ไม่ได้ถูกส่งโดยบอทตัวเอง)

### สรุป
`GatewayIntentBits` เป็นเครื่องมือที่ช่วยให้บอทสามารถเลือกประเภทข้อมูลที่ต้องการรับจาก Discord โดยการกำหนด intents ต่างๆ ที่จะใช้ใน `Client` ตัวบอทของคุณ ทำให้สามารถควบคุมข้อมูลที่บอทจะได้รับจาก Discord API ได้อย่างละเอียดและเหมาะสม

-----

<p align="right">
หน้านี้แก้ใขล่าสุดเมื่อ 2 ม.ค พ.ศ 2568 เวลา 18:51 น. <br />
Edit page by: NekoSakuraLucia
</p>