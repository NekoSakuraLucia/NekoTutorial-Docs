---
title: วิธีการติดตั้งเบื้องต้น และ ใช้งาน
description: ก่อนที่คุณจะเริ่มสร้างและใช้งาน Discord bot คุณจะต้องติดตั้งเครื่องมือพื้นฐานบางประการก่อน เพื่อให้สามารถพัฒนาบอทได้อย่างราบรื่น
---

-----

ก่อนที่คุณจะเริ่มสร้างและใช้งาน Discord bot คุณจะต้องติดตั้งเครื่องมือพื้นฐานบางประการก่อน เพื่อให้สามารถพัฒนาบอทได้อย่างราบรื่น

วิธีการติดตั้งเบื้องต้นและใช้งาน:
- ติดตั้ง Node.js และ Discord.js
- สร้างแอพ Discord บน Developer Portal และรับ Token
- สร้างไฟล์บอทด้วยโค้ดเบื้องต้น
- รันบอทบนเครื่องของคุณ
- เชิญบอทเข้าร่วมเซิร์ฟเวอร์ Discord และเริ่มใช้งาน!

-----

### วิธีการติดตั้ง Node.js

- สามารถติดตั้งผ่านได้ลิงก์นี้ได้เลย [Node.js installation](https://nodejs.org/en)
- แนะนำให้โหลดเวอร์ชั่น v18 ขึ้นไปมันจะตอบสนองดีมาก
- หลังจากติดตั้งอะไรเสร็จเรียบร้อยแล้ว ให้คุณลองพิมพ์ `node -v` ใน terminal เพื่อตรวจสอบเวอร์ชั่นที่คุณติดตั้ง
- เช่นหากพิมพ์แล้วมันจะได้ผลลัพธ์ว่า
```shell
$ node -v
v20.18.1
```

-----

### ต่อไปหลังจากติดตั้ง Node.js เสร็จแล้ว
จะเริ่มขั้นตอนการสร้างโฟลเดอร์เพื่อเริ่มการสร้างบอทดิสคอร์ดแล้ว
- ด้านล่างนี่คือโครงสร้างสำหรับการสร้างโฟลเดอร์เบื้องต้น
```css
neko-node-project/
├── node_modules/
├── package.json
├── package-lock.json
├── index.js
├── .gitignore
└── README.md
```

- หลังจากที่คุณสร้างโฟลเดอร์ หรือ init ไฟล์ครบแล้วให้เริ่มทำการติดตั้ง Lib ที่จำเป็นในการทำบอท
- ด้านล่างนี้คือคำสั่งสำหรับการติดตั้ง Lib ที่จำเป็น
```shell
$ npm install discord.js
```

-----

### ขั้นตอนการเริ่มสร้างบอทจริง
ต่อจากนี้จะเริ่มทำการเขียนโค้ดบอทจริงแล้ว

- 1. ให้คุณทำการเปิดไฟล์ `index.js` ของคุณมา และ ให้เพิ่มโค้ดสำหรับการใช้งานเบื้องต้น
```js
// index.js

// นำเข้า Discord.js
const { Client, GatewayIntentBits } = require('discord.js');

// สร้าง client ใหม่
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages
    ],
});

// เมื่อบอทออนไลน์แล้ว
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// เข้าสู่ระบบบอทด้วย token ของคุณ
client.login('YOUR_BOT_TOKEN');
```
- 2. หลังจากที่คุณรันแล้ว หากคุณใส่โทเค้นของบอทถูกจะได้ผลลัพธ์ดังนี้
```shell
$ node index.js
Logged in as NekoToturial-BOT!
```

-----

### วิธีเชิญบอทเข้าสู่เซิร์ฟเวอร์
- 1.ไปที่หน้าแอปพลิเคชันใน Discord Developer Portal
- 2.เลือกแอปพลิเคชันของคุณ
- 3.ไปที่ OAuth2 แล้วเลือก URL Generator
- 4.เลือก bot ใน SCOPES และเลือก Send Messages ใน BOT PERMISSIONS
- 5,คัดลอก URL ที่สร้างขึ้นและใช้มันเพื่อเชิญบอทเข้าสู่เซิร์ฟเวอร์ของคุณ

-----

<p align="right">
หน้านี้แก้ใขล่าสุดเมื่อ 2 ม.ค พ.ศ 2568 <br />
Edit page by: NekoSakuraLucia
</p>

[Edit this page on GitHub](https://github.com/NekoSakuraLucia/NekoTutorial-Docs/blob/main/neko-tutorial/src/content/docs/guides/installation/example.md)