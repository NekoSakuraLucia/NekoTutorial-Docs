---
title: วิธีการติดตั้งและใช้งาน setActivity
description: การตั้งค่า Activity Status (สถานะกิจกรรม) คือการตั้งค่าข้อมูลที่แสดงอยู่ใต้ชื่อผู้ใช้ของบอทใน Discord เช่นการแสดงว่า "เล่นเกม" หรือ "สตรีมมิ่ง" หรืออื่น ๆ
---

ใน discord.js v14 การตั้งค่า Activity Status (สถานะกิจกรรม) คือการตั้งค่าข้อมูลที่แสดงอยู่ใต้ชื่อผู้ใช้ของบอทใน Discord เช่นการแสดงว่า "เล่นเกม" หรือ "สตรีมมิ่ง" โดยสามารถใช้ Client หรือ Presence ในการตั้งค่ากิจกรรมนี้ได้ ซึ่งจะมีผลเมื่อบอททำการออนไลน์ในเซิร์ฟเวอร์ Discord

### ตัวอย่างโค้ด
```js
// index.js

const { ActivityType } = require('discord.js');

client.user.setActivity('activity', { type: ActivityType.Watching });
client.user.setActivity('activity', { type: ActivityType.Listening });
client.user.setActivity('activity', { type: ActivityType.Competing });
```

### อธิบายโค้ด
- client.user.setActivity: ใช้ในการตั้งค่ากิจกรรมและสถานะของบอท
  - name: กิจกรรมที่ต้องการให้บอทแสดง
  - type: ประเภทกิจกรรม (เช่น ActivityType.Playing, ActivityType.Streaming, ActivityType.Listening, ActivityType.Watching)

### ประเภทของกิจกรรม (ActivityType)
- 1. Playing - ใช้สำหรับแสดงเกมที่บอทกำลังเล่น
- 2. Streaming - ใช้สำหรับแสดงว่าเป็นการสตรีม
- 3. Listening - ใช้สำหรับแสดงว่าบอทกำลังฟังเพลง
- 4. Watching - ใช้สำหรับแสดงว่าเป็นการดูบางสิ่งบางอย่าง

-----

<p align="right">
หน้านี้แก้ใขล่าสุดเมื่อ 7 ม.ค พ.ศ 2568 เวลา 17:31 น. <br />
Edit page by: NekoSakuraLucia
</p>