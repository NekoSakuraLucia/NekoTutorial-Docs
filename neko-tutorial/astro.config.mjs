// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Neko-Tutorial',
			social: {
				github: 'https://github.com/NekoSakuraLucia/NekoTutorial-Docs',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'วิธีการติดตั้งเบื้องต้น', slug: 'guides/installation/example' },
						{ label: 'วิธีการใช้งาน Event Message', slug: 'guides/eventmessage/example' },
						{ label: 'วิธีการใช้งาน Activity Status', slug: 'guides/activity/example' },
						{ label: 'อธิบายเกี่ยวกับ GatewayIntentBits', slug: 'guides/gatewayintentbits/example' },
					],
				},
				{
					label: 'Event Message',
					items: [
						{ label: 'ตัวอย่าง messageUpdate', slug: 'events/messageupdate/simple' },
						{ label: 'ตัวอย่าง messageDelete', slug: 'events/messagedelete/simple' },
						{ label: 'ตัวอย่าง messageDeleteBulk', slug: 'events/messagedeletebulk/simple' },
						{ label: 'ตัวอย่าง messageReaction', slug: 'events/messagereaction/simple' },
						{ label: 'ตัวอย่าง Guild Member Event', slug: 'events/guilds/simple' },
					]
				}
			],
			editLink: {
				baseUrl: 'https://github.com/NekoSakuraLucia/NekoTutorial-Docs/edit/main/neko-tutorial',
			},
		}),
	],
});
