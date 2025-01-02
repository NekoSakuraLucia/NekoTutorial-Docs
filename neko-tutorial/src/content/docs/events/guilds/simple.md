---
title: ตัวอย่างการใช้ Guild Member Event
description: ใช้เพื่อจับข้อความใหม่ที่ถูกส่งในช่องแชทของ Discord เมื่อมีข้อความใหม่โพสต์เข้ามาในเซิร์ฟเวอร์
---

ตัวอย่างโค้ดการใช้งาน `guildMemberAdd` และ `guildMemberRemove` ใน Discord.js

### โค้ดตัวอย่างเบื้องต้น
```js
// index.js

client.on('guildMemberAdd', member => {
  console.log(`${member.user.tag} has joined the server!`);
  // คุณสามารถส่งข้อความไปยังช่องทางที่ต้องการ หรือทำการต้อนรับสมาชิกใหม่ได้
  const welcomeChannel = member.guild.channels.cache.find(ch => ch.name === 'welcome'); // เปลี่ยน 'welcome' ให้ตรงกับชื่อช่อง
  if (welcomeChannel) {
    welcomeChannel.send(`ยินดีต้อนรับ ${member.user.tag} สู่เซิร์ฟเวอร์!`);
  }
});

client.on('guildMemberRemove', member => {
  console.log(`${member.user.tag} has left the server!`);
  // คุณสามารถส่งข้อความไปยังช่องทางที่ต้องการเมื่อสมาชิกออกจากเซิร์ฟเวอร์
  const leaveChannel = member.guild.channels.cache.find(ch => ch.name === 'goodbye'); // เปลี่ยน 'goodbye' ให้ตรงกับชื่อช่อง
  if (leaveChannel) {
    leaveChannel.send(`ลาก่อน ${member.user.tag} เราจะคิดถึงคุณ!`);
  }
});
```

### การทำงานของโค้ด
- `guildMemberAdd`:
  - เมื่อมีสมาชิกใหม่เข้าร่วมเซิร์ฟเวอร์ (guild), อีเวนต์นี้จะถูกเรียกใช้งาน.
  - ฟังก์ชันนี้รับอ็อบเจ็กต์ `member` ซึ่งมีข้อมูลเกี่ยวกับสมาชิกใหม่.
  - ในตัวอย่างนี้จะค้นหาช่องที่ชื่อว่า `welcome` และส่งข้อความต้อนรับสมาชิกใหม่ไปยังช่องนั้น.

- `guildMemberRemove`:
  - เมื่อสมาชิกออกจากเซิร์ฟเวอร์, อีเวนต์นี้จะถูกเรียกใช้งาน.
  - จะทำงานคล้ายกับ `guildMemberAdd`, แต่จะถูกเรียกเมื่อสมาชิกออกจากเซิร์ฟเวอร์.
  - ในตัวอย่างนี้จะค้นหาช่องที่ชื่อว่า `goodbye` และส่งข้อความลาตามช่องนั้น.

### อธิบายหลักการทำงาน
- `guildMemberAdd`:
  - เมื่อสมาชิกใหม่เข้าร่วมเซิร์ฟเวอร์, Discord.js จะส่งข้อมูลของสมาชิกนั้นในอ็อบเจ็กต์ member.
  - คุณสามารถใช้ข้อมูลนี้เพื่อส่งข้อความต้อนรับสมาชิกใหม่, เก็บข้อมูล, หรือทำสิ่งต่างๆ.

- `guildMemberRemove`:
  - จะถูกเรียกเมื่อสมาชิกออกจากเซิร์ฟเวอร์.
  - คุณสามารถทำการส่งข้อความลาหรือการกระทำอื่นๆ ตามที่ต้องการ.


### สิ่งที่ต้องระวัง
- ตรวจสอบว่า บอทมีสิทธิ์ในการส่งข้อความ ในช่องที่คุณต้องการ.
- ต้องตรวจสอบว่า ช่องที่ต้องการมีอยู่จริง ในเซิร์ฟเวอร์ เช่น ช่อง `welcome` และ `goodbye`.

-----

- **`client.on('guildMemberAdd', ...)`**:
  - ใช้ในการจับเหตุการณ์ที่สมาชิกเข้าร่วมเซิร์ฟเวอร์.
- **`client.on('guildMemberRemove', ...)`**:
  - ใช้ในการจับเหตุการณ์ที่สมาชิกออกจากเซิร์ฟเวอร์.
- **`member.guild.channels.cache.find(...)`**:
  - ค้นหาช่องที่ชื่อว่า `welcome` หรือ `goodbye` ในเซิร์ฟเวอร์เพื่อทำการส่งข้อความ.

-----

<p align="right">
หน้านี้แก้ใขล่าสุดเมื่อ 2 ม.ค พ.ศ 2568 เวลา 17:44 น. <br />
Edit page by: NekoSakuraLucia
</p>