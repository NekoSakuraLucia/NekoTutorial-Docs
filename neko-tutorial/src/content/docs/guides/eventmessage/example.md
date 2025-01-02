---
title: วิธีการใช้งาน Event Message เบื้องต้น
description: ทดสอบ
---

ใน Discord.js, การใช้งาน Event Message หรือการรับข้อความที่ส่งใน Discord โดยใช้ event handler ของ messageCreate เป็นวิธีที่ใช้กันบ่อยในการทำบอทที่สามารถตอบกลับข้อความในช่องแชทต่างๆ ใน Discord นี่คือลำดับขั้นตอนและตัวอย่างเบื้องต้นในการใช้งาน:

### 1. ติดตั้ง Discord.js (หากยังไม่ได้ติดตั้ง)
```shell
$ npm install discord.js
```

### 2. สร้างไฟล์ index.js (หากยังไม่ได้สร้าง)
เมื่อคุณติดตั้งแล้ว ให้สร้างไฟล์ index.js หรือไฟล์หลักของโปรเจกต์คุณ

### 3. เขียนโค้ดเบื้องต้น
ในโค้ดนี้ เราจะใช้ event `messageCreate` เพื่อให้บอทรับข้อความที่ถูกส่งใน Discord และตอบกลับข้อความตามที่เรากำหนด:
- ก่อนจะเขียนต้องตรวจสอบด้วยนะ ว่าคุณเพิ่ม `GatewayIntentBits` ในส่วน MessageContent แล้วน่ะ
```js
// index.js

// นำเข้า Discord.js
const { Client, GatewayIntentBits } = require('discord.js');

// สร้าง client ใหม่
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,             // ติดตามการเข้าร่วมและออกจากเซิร์ฟเวอร์
    GatewayIntentBits.GuildMessages,      // ติดตามข้อความในเซิร์ฟเวอร์
    GatewayIntentBits.MessageContent      // ติดตามเนื้อหาของข้อความ
  ]
});

// ฟังก์ชันที่จะรันเมื่อมีข้อความใหม่เข้ามา
client.on('messageCreate', (message) => {
  // ตรวจสอบให้แน่ใจว่าไม่ให้บอทตอบกลับข้อความของตัวเอง
  if (message.author.bot) return;

  // ถ้าข้อความเป็นคำสั่ง "!ping" ให้บอทตอบกลับ
  if (message.content === '!ping') {
    message.channel.send('Pong!');
  }
});
```

### 4. คำอธิบายโค้ด
- Client: สร้าง client ที่เชื่อมต่อกับ Discord API
- GatewayIntentBits: ใช้กำหนดสิทธิ์ของบอทในการเข้าถึงข้อมูลต่างๆ เช่น ข้อความ, เซิร์ฟเวอร์, และเนื้อหาของข้อความ
- messageCreate: เป็น event ที่จะถูกเรียกทุกครั้งที่มีข้อความใหม่ในเซิร์ฟเวอร์ที่บอทเข้าร่วม
- message.author.bot: ตรวจสอบว่าไม่ให้บอทตอบกลับข้อความของตัวเอง
- message.content: ดึงเนื้อหาของข้อความที่ถูกส่งมา

### 5. การตอบกลับ
ตอนนี้บอทจะตอบกลับ "Pong!" เมื่อมีข้อความ "!ping" ในช่องแชทใดๆ ที่บอทเข้าร่วม

### 6. ข้อควรระวัง
ใน Discord.js, MessageContent intent ต้องเปิดใช้งานใน Developer Portal ของบอท หากบอทไม่สามารถอ่านข้อความได้ ให้เข้าไปที่ Discord Developer Portal, เลือกบอทของคุณ และเปิด Intent MESSAGE CONTENT INTENT.