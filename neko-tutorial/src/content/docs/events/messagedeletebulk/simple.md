---
title: ตัวอย่างการใช้ messageDeleteBulk
description: ใช้เพื่อจับข้อความใหม่ที่ถูกส่งในช่องแชทของ Discord เมื่อมีข้อความใหม่โพสต์เข้ามาในเซิร์ฟเวอร์
---

### 1. messageDeleteBulk
- ใช้เมื่อมีข้อความหลายข้อความถูกลบพร้อมกัน
- Event นี้จะถูกส่งเมื่อข้อความหลายข้อความถูกลบในเวลาเดียวกัน (Bulk Delete)
- รูปแบบการใช้:
```js
// index.js

client.on('messageDeleteBulk', (messages) => {
  console.log(`Bulk deleted messages:`);
  messages.forEach(msg => {
    console.log(msg.content);
  });
});
```
- `messages` คือ Collection ของข้อความที่ถูกลบ ซึ่งสามารถทำการวนลูปเพื่อดูข้อมูลของข้อความที่ถูกลบได้

-----

<p align="right">
หน้านี้แก้ใขล่าสุดเมื่อ 2 ม.ค พ.ศ 2568 เวลา 16:27 น. <br />
Edit page by: NekoSakuraLucia
</p>