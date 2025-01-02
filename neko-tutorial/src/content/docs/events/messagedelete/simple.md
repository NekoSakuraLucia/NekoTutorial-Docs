---
title: ตัวอย่างการใช้ messageDelete
description: ใช้เพื่อจับข้อความใหม่ที่ถูกส่งในช่องแชทของ Discord เมื่อมีข้อความใหม่โพสต์เข้ามาในเซิร์ฟเวอร์
---

### 1. messageDelete
- ใช้เมื่อข้อความถูกลบ
- Event นี้จะถูกส่งเมื่อข้อความถูกลบจากเซิร์ฟเวอร์
- รูปแบบการใช้:
```js
// index.js

client.on('messageDelete', (message) => {
  console.log(`ลบข้อความแล้ว: ${message.content}`);
});
```
- `message` คือข้อความที่ถูกลบ ซึ่งคุณสามารถใช้ข้อมูลจากข้อความนี้ได้

-----

<p align="right">
หน้านี้แก้ใขล่าสุดเมื่อ 2 ม.ค พ.ศ 2568 เวลา 15:36 น. <br />
Edit page by: NekoSakuraLucia
</p>