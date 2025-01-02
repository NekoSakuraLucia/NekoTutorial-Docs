---
title: ตัวอย่างการใช้ messageReaction ต่างๆ
description: ใช้เพื่อจับข้อความใหม่ที่ถูกส่งในช่องแชทของ Discord เมื่อมีข้อความใหม่โพสต์เข้ามาในเซิร์ฟเวอร์
---

### 1. messageReactionAdd
- ใช้เมื่อมีการเพิ่มรีแอคชันให้กับข้อความ
- Event นี้จะถูกส่งเมื่อมีผู้ใช้เพิ่มรีแอคชันให้กับข้อความ
- รูปแบบการใช้:
```js
// index.js

client.on('messageReactionAdd', (reaction, user) => {
  console.log(`${user.tag} โต้ตอบด้วย ${reaction.emoji.name}`);
});
```
- `reaction` คือการรีแอคชัน (สามารถเข้าถึงข้อมูล emoji) และ user คือผู้ที่เพิ่มรีแอคชันนั้น

### 2. messageReactionRemove
- ใช้เมื่อมีการเอารีแอคชันออกจากข้อความ
- Event นี้จะถูกส่งเมื่อมีการลบรีแอคชันออกจากข้อความ
- รูปแบบการใช้:
```js
// index.js

client.on('messageReactionRemove', (reaction, user) => {
  console.log(`${user.tag} ลบรีแอคชั่น ${reaction.emoji.name}`);
});
```
- `reaction` และ `user` จะเหมือนกับใน `messageReactionAdd` แต่จะถูกเรียกเมื่อรีแอคชันถูกลบออก

### 3. messageReactionRemoveAll
- ใช้เมื่อรีแอคชันทั้งหมดถูกลบออกจากข้อความ
- Event นี้จะถูกเรียกเมื่อรีแอคชันทั้งหมดถูกลบออกจากข้อความ
- รูปแบบการใช้:
```js
// index.js

client.on('messageReactionRemoveAll', (message) => {
  console.log(`ลบรีแอคชั่นทั้งหมดออกจากข้อความแล้ว: ${message.content}`);
});
```
- `message` คือข้อความที่รีแอคชันถูกลบออกทั้งหมด

-----

<p align="right">
หน้านี้แก้ใขล่าสุดเมื่อ 2 ม.ค พ.ศ 2568 เวลา 17:00 น. <br />
Edit page by: NekoSakuraLucia
</p>