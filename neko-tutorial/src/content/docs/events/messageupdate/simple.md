---
title: ตัวอย่างการใช้ messageUpdate
description: ใช้เพื่อจับข้อความใหม่ที่ถูกส่งในช่องแชทของ Discord เมื่อมีข้อความใหม่โพสต์เข้ามาในเซิร์ฟเวอร์
---

### 1. messageUpdate
- ใช้เมื่อข้อความถูกแก้ไข (edit) โดยผู้ใช้
- Event นี้จะถูกส่งเมื่อข้อความของผู้ใช้ถูกแก้ไข
- รูปแบบการใช้:
```js
// index.js

client.on('messageUpdate', (oldMessage, newMessage) => {
  console.log(`แก้ไขข้อความจาก: ${oldMessage.content} ถึง: ${newMessage.content}`);
});
```
- ในที่นี้ oldMessage จะเก็บข้อความก่อนที่จะแก้ไข และ newMessage จะเก็บข้อความหลังจากที่ถูกแก้ไขแล้ว

-----

<p align="right">
หน้านี้แก้ใขล่าสุดเมื่อ 2 ม.ค พ.ศ 2568 เวลา 15:28 น. <br />
Edit page by: NekoSakuraLucia
</p>