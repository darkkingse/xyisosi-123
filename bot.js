/*----------------------------------------------------------------------------------------------------------*/
/*========================================DEVELOPER Удачной игры=============================================*/
/*===========================================MTA RP===============================================*/
/*----------------------------------------------------------------------------------------------------------*/
const rq = require("prequest");

const fs = require("fs");
const { VK, Keyboard, messageSources } = require("vk-io");
const vk = new VK();
const str = new VK();
const { updates } = vk;
//const rq = require('request');
/*----------------------------------------------------------------------------------------------------------*/
const acc = require("./base/acc.json");
const organizations = require("./base/organizations.json");
/*----------------------------------------------------------------------------------------------------------*/
setInterval(function () {
	fs.writeFileSync("./base/acc.json", JSON.stringify(acc, null, "\t"));
}, 1500);

setInterval(function () {
	fs.writeFileSync("./base/organizations.json", JSON.stringify(organizations, null, "\t"));
}, 1500);
/*----------------------------------------------------------------------------------------------------------*/
vk.setOptions({
	token:
		"bb7c10e37cb5875aabe9e1f3b9b1209418fb1c57194a7d70b441a4b9f3a246def5a8876723aa9e88ec9b3", // ТОКЕН ГРУППЫ
	apiMode: "parallel",
	pollingGroupId: 213827213, // ИД ГРУППЫ
});

/*----------------------------------------------------------------------------------------------------------*/
var limits = {};

const msgs = [
	`[${time()}] Connecting...`,
	`[${time()}] Connected. Joining the game...`,
	`[${time()}] Connected to MTA RP | Играй с нами!)`,
	`[${time()}] Добро пожаловать на сервер MTA Role Play`,
	`* Для просмотра команд введите: "Помощь" *`,
];

/*----------------------------------------------------------------------------------------------------------*/

const donat_busines = {
	1: {
		name: "Рекламное Агенство",
		cost: 1,
		earn: 22500,
	},
};

const businesses = {
	1: {
		name: "Мини-Ларёк",
		price: 500000,
		earn: 2100,
	},
	2: {
		name: "Мини-Бар",
		price: 900000,
		earn: 3800,
	},
	3: {
		name: "Автомойка",
		price: 1500000,
		earn: 6500,
	},
	4: {
		name: "Компьютерный Клуб",
		price: 3500000,
		earn: 11250,
	},
};

/*const businesses = {
	"1": {
		name: 'Мини-Ларёк',
		cost: 200000,
		earn: 5500
		},
	"2": {
		name: 'Мини-Бар',
		cost: 500000,
		earn: 13500
		},
	"3": {
		name: 'Автомойка',
		cost: 800000,
		earn: 25000
		},
	"4": {
		name: 'Пиццерия',
		cost: 1200000,
		earn: 45000
		},
	"5": {
		name: 'Аптека',
		cost: 1700000,
		earn: 65500
		},
	"6": {
		name: 'Магазин',
		cost: 2300000,
		earn: 75000
		},	
	"7": {
		name: 'Оружейный магазин',
		cost: 3300000,
		earn: 12000
		},
	"8": {
		name: 'Отель',
		cost: 5000000,
		earn: 160000
		},
};
На будущее...
 */

const jobs = {
	1: {
		name: "Лесоруб",
		pay: 500,
		level: 1,
		text: ["срубили дерево", "отпилили ветку", "срубили куст", "нарубили дров"],
	},
	2: {
		name: "Шахтёр",
		pay: 1000,
		level: 2,
		text: [
			"начали копать",
			"отправились на добычу золота",
			"отправились на добычу угля",
			"очистили найденную добычу",
		],
	},
	3: {
		name: "Грузчик",
		pay: 1500,
		level: 3,
		text: [
			"разгрузили машину с продуктами",
			"разгрузили овощи",
			"загрузили мусор в машину",
			"отнесли отходы на помойку",
		],
	},
	4: {
		name: "Таксист",
		pay: 2500,
		level: 5,
		text: [
			"подвезли бизнесмена",
			"подвезли мера",
			"подвезли школьника",
			"подвели студента",
		],
	},
	5: {
		name: "Инкассатор",
		pay: 4000,
		level: 6,
		text: [
			"забрали деньги из банка",
			"отвезли деньги в банк",
			"защитили машину от нападения",
			"отправились в дорогу",
		],
	},
	6: {
		name: "Дальнобольщик",
		pay: 5500,
		level: 8,
		text: [
			"отправились в рейс в другой город",
			"подвезли незнакомца за деньги",
			"перегнали несколько фур",
			"продали товар бандитам",
		],
	},
	7: {
		name: "Пожарный",
		pay: 6500,
		level: 9,
		text: [
			"потушили домик у моря",
			"потушили здание Администрации",
			"потушили школу",
			"потушили хату бомжа",
		],
	},
	8: {
		name: "Пилот",
		pay: 8000,
		level: 12,
		text: ["полетеле в другой город"],
	},
	9: {
		name: "Наркодилер",
		pay: 10000,
		level: 16,
		text: [
			"продали мешок муки",
			"обменяли пакет укропа",
			"продали ... за деньги",
			"избили человека и отняли деньги",
		],
	},
};

const cars = {
	1: {
		name: "ВАЗ-2101",
		price: 55000,
		attachment: "photo-213827213_457239038",
	},
	2: {
		name: "ГАЗ-24-10",
		price: 150000,
		attachment: "photo-213827213_457239040",
	},
	3: {
		name: "ВАЗ-2106",
		price: 250000,
		attachment: "photo-213827213_457239041",
	},
	4: {
		name: "Lada Priora",
		price: 450000,
		attachment: "photo-213827213_457239037",
	},
	5: {
		name: "BMW E39",
		price: 650000,
		attachment: "photo-213827213_457239042",
	},
	6: {
		name: "Mercedes-Benz E55 W210",
		price: 730000,
		attachment: "photo-213827213_457239039",
	},
	7: {
		name: "Opel Astra H",
		price: 850000,
		attachment: "photo-213827213_457239054",
	},
	8: {
		name: "Lada Vesta",
		price: 1150000,
		attachment: "photo-213827213_457239047",
	},
	9: {
		name: "Mitsubishi Lancer",
		price: 1650000,
		attachment: "photo-213827213_457239044",
	},
	10: {
		name: "Toyota Camry",
		price: 2300000,
		attachment: "photo-213827213_457239052",
	},
	11: {
		name: "Chervolet Camaro",
		price: 2750000,
		attachment: "photo-213827213_457239055",
	},
	12: {
		name: "Nissan Silvia S15",
		price: 3100000,
		attachment: "photo-213827213_457239051",
	},
	13: {
		name: "Subaru impreza WRX STI",
		price: 3750000,
		attachment: "photo-213827213_457239045",
	},
	14: {
		name: "Nissan Skyline R34 GTR",
		price: 4300000,
		attachment: "photo-213827213_457239043",
	},
	15: {
		name: "Nissan Skyline R35 GTR",
		price: 4750000,
		attachment: "photo-213827213_457239050",
	},
	16: {
		name: "Porsche Cayenne",
		price: 5550000,
		attachment: "photo-213827213_457239056",
	},
	17: {
		name: "Mercedes-Benz C63 AMG W204",
		price: 6400000,
		attachment: "photo-213827213_457239039",
	},
	18: {
		name: "Tesla Model S",
		price: 7300000,
		attachment: "photo-213827213_457239048",
	},
	19: {
		name: "Toyota Land Cruiser",
		price: 8450000,
		attachment: "photo-213827213_457239046",
	},
	20: {
		name: "Mercedes-Benz G-класс",
		price: 9700000,
		attachment: "photo-213827213_457239049",
	},
};

const sportcars = {
	1: {
		name: "Lada Vesta Sport",
		price: 3650000,
		attachment: "photo-213827213_457239057",
	},
	2: {
		name: "Nissan Silvia S15 Sport",
		price: 4750000,
		attachment: "photo-213827213_457239053",
	},
};

const guns = {
	1: {
		name: "Кастет",
		price: 7500,
	},
	2: {
		name: "Нож",
		price: 10000,
	},
	3: {
		name: "Desert Eagle",
		price: 25000,
	},
	4: {
		name: "MP5",
		price: 40000,
	},
	5: {
		name: "M4",
		price: 75000,
	},
	6: {
		name: "AK-47",
		price: 120000,
	},
};
/*🆔 - 1 » Кастет [10.000$]
🆔 - 2 » Purple Dildo [50.000$]
🆔 - 3 » Бензопила [120.000$]
🆔 - 4 » Silend Pistol [200.000$]
🆔 - 5 » Colt [250.000$]
🆔 - 6 » Micro UZI [330.000$]
🆔 - 7 » Desert Eagle [510.000$]
🆔 - 8 » MP5 [640.000$]
🆔 - 9 » M4 [810.000$]
🆔 - 10 » AK-47 [1.000.000$]
🆔 - 11 » Sniper Rifle [2.400.000$]*/
const houses = {
	1: {
		name: "Номер в отеле",
		price: 100000,
	},
	2: {
		name: `Квартира 'эконом' класса`,
		price: 500000,
	},
	3: {
		name: "Дом у пляжа Веспуччи",
		price: 1250000,
	},
	4: {
		name: "Квартира в центральном районе",
		price: 5000000,
	},
	5: {
		name: "Роскошная квартира около maze bank",
		price: 10000000,
	},
	6: {
		name: "Элитный особняк на холме Вайнвуд",
		price: 25000000,
	},
};

const skin = {
	1: {
		name: "Бомж №1",
		price: 100000,
		attachment: "photo-213827213_457239022",
	},
	2: {
		name: "Рэпер",
		price: 250000,
		attachment: "photo-213827213_457239023",
	},
	3: {
		name: "Бандит",
		price: 300000,
		attachment: "photo-213827213_457239027",
	},
	4: {
		name: "Наркодилер",
		price: 350000,
		attachment: "photo-213827213_457239025",
	},
	5: {
		name: "Мед.Сестра",
		price: 550000,
		attachment: "photo-213827213_457239033",
	},
	6: {
		name: "Carl Jhohnson",
		price: 600000,
		attachment: "photo-213827213_457239034",
	},
	7: {
		name: "Девушка №1",
		price: 900000,
		attachment: "photo-213827213_457239028",
	},
	8: {
		name: "Девушка №2",
		price: 950000,
		attachment: "photo-213827213_457239029",
	},
	9: {
		name: "Олигарх",
		price: 145000,
		attachment: "photo-213827213_457239031",
	},
	10: {
		name: "Niko Bellik",
		price: 2500000,
		attachment: "photo-213827213_457239030",
	},
	11: {
		name: "Доктор",
		price: 450000,
		attachment: "",
	},
	12: {
		name: "Полицейский ДПС",
		price: 700000,
		attachment: "",
	},
	13: {
		name: "ФСБ",
		price: 750000,
		attachment: "",
	},
	14: {
		name: "Военный",
		price: 850000,
		attachment: "",
	},
	15: {
		name: "Trevor",
		price: 3400000,
	},
	16: {
		name: "Lionel Messi",
		price: 4500000,
	},
	17: {
		name: "Cristiano Ronaldo",
		price: 5000000,
	},
	18: {
		name: "Rikardo Millos",
		price: 6500000,
	},
	19: {
		name: "Хабиб Нурмагамедов",
		price: 7000000,
	},
	20: {
		name: "Conor MCGregor",
		price: 8500000,
	},
};

const nicks = [
	"Yury_Dobrow",
	"Evgeny_Kuzmi",
	"Leonid_Belskin",
	"Igor_Krasin",
	"Kirill_Balabanin",
	"Anton_Babin",
	"Trofim_Damin",
	"Afanasy_Burakin",
	"Mikhail_Rakowskin",
	"Ruslan_Rakowskin",
	"Ilia_Burdin",
	"Taras_Samarin",
	"David_Dmitriev",
	"Yulian_Devin",
	"Konstantin_Polskov",
	"Grigory_Krasnov",
	"Noah_Rogers",
	"Ryan_Carter",
	"Jake_Lopez",
	"Alexander_Gonzalez",
	"Antonio_Clark ",
	"Richard_Hayes",
	"Austin_Bryant",
	"Landon_Jackson",
	"Caleb_Butler",
	"Alejandro_Wood",
	"Matthew_King",
	"Cameron_Brooks",
	"Hunter_Wright",
	"Ashton_Griffin",
	"Gavin_Flores",
	"Sean_Peterson",
	"Hunter_Ross",
	"Julian_Evans",
	"Ryan_Roberts",
	"Gavin_White",
	"Cody_Diaz",
	"Devin_Robinson",
	"Jake_Mitchell",
	"Ryan_King",
	"Ian_Flores",
	"Gabriel_Johnson",
	"Isaiah_Bell",
	"Brandon_Reed",
	"Cole_James",
	"Aaron_Griffin",
	"Aidan_Diaz",
	"Aiden_Lopez",
	"Joshua_Kelly",
	"Justin_Williams",
	"John_Hughes",
	"Jose_Williams",
	"Matthew_Rogers",
	"Jesus_Russell",
	"Gabriel_Morris",
	"John_Anderson",
	"Eric_Cox",
	"Michael_Peterson",
	"Carlos_Long",
	"Brandon_Cox",
	"Arkady_Ivanov",
	"Garry_Urbanov",
	"Immanuil_Chaplin",
	"Nikita_Samarin",
	"Gavriil_Below",
	"Alexei_Rudnitskin",
	"Vadim_Morozov",
	"Vadim_Shimkov",
	"Spartak_Zaretskov",
	"Vasily_Morozov",
	"Mikhail_Turchin",
	"Nikita_Kozin",
	"Maxim_Romanowskin",
	"Albert_Simonich",
	"Gavriil_Adamovin",
	"Alexander_Adamovin",
	"Gerasim_Pyzikin",
	"Valery_Romanin",
	"Alexei_Burdin",
	"Viktor_Dubtsov",
	"Afanasy_Popov",
	"Trofim_Sokolkin",
	"Rostislav_Shubin",
	"Mark_Romanin",
	"Mikhail_Baranin",
	"Grigory_Federov",
	"Matvei_Slivin",
	"Dmitry_Evanov",
	"Kirill_Markow",
	"Ilia_Mishkin",
	"Ilia_Mishkin",
	"Peter_Dembin",
	"Semyon_Tarasov",
	"Peter_Karpin",
	"Ignat_Dobrow",
	"Timofei_Rudnitskin",
	"Timofei_Romanin",
	"Yaroslav_Belkin",
	"Fedor_Belskin",
	"Denis_Shepard",
	"Anatoly_Polakov",
];

for (i in acc.users) {
	let user = acc.users[i];
	user.msg_exs = 0;
	user.bonus = false;
}

/*------------------------------------- Message handling----------------------------------------------------*/
vk.updates.use(async (message, next) => {
	if (message.is("message") && message.isOutbox) {
		return;
	}

	message.user = message.senderId;
	message.text = message.payload.text;
	if (/\[213827213|(.*)\]/i.test(message.text))
		message.text = message.text.replace(/\[213827213|(.*)\]/gi, "").trim();
	if (!message.text) {
		return;
	}
	if (message.user < 0) return;

	if (!acc.users[u_id(message.user)]) {
		acc.number += 1;
		acc.users[acc.number] = {
			id: message.user,
			admin: 0,
			aname: "Игрок",
			ans: 0,
			vip: 0,
			ref: false,
			refs: 0,
			prefix: false,
			connect: false,
			reg: 1,
			msg: 0,
			balance: 1000,
			bank: 0,
			donate: 0,
			biz: 0,
			bank: 0,
			narko: 0,
			gold: 0,
			silver: 0,
			iron: 0,
			copper: 0,
			stone: 0,
			ryda: 0,
			kirka: 0,
			zakon: 100,
			hp: 100,
			golod: 100,
			level: 1,
			exs: 0,
			opit: 0, // шахтерский опыт
			group2: `Не указано`,
			group3: false,
			uplvl: 2,
			energy: 5,
			warn: 0,
			ban: false,
			gun: false,
			job: false,
			house: false,
			skin: false,
			car: false,
			business: false,
			gunlic: false,
			carpass: false,
			boatlic: false,
			planelic: false,
			motolic: false,
			remka: 0, //Рем.Комплект
			ydochka: 0,
			phone: false,
			simka: false,
			bonus: false,
			shahta: false,
			podarok: false,
			mute: false,
			msg_exs: 0,
			gps: false,
			a: {
				ban: 0,
				kick: 0,
				warn: 0,
				nick: 0,
				mute: 0,
			},
			/*
			accs: {
				kesha: false, //Кеша (Попугай) на плечо
				mask1: false,  //Маска демона на лицо
				bandana: false, //Бандана на лицо
				balaklava: false, //Балаклава на лицо
				bronojelet: false, //Бронижилет ПД
				dildo: false, //Фиолетовое дилдо
				mask2: false //Маска от коронавируса
			}
			*/
			biz: false,
			bizcount: false,
			bizbalance: 0,
			bizzp: 0,
			bizstop: false,

			reg_time: `${data()} | ${time()}`,
		};
	}

	//
	const user = acc.users[u_id(message.user)];

	if (message.text.toLowerCase() != "играть" && user.reg == 1) {
		if (user.prefix == false) {
			return message.send(
				`Приветствуем Вас!\nЧтобы зарегистрироваться на нашем сервере, Вам нужно написать: "Играть"`
			);
		}
	}
	if (message.text.toLowerCase() == "играть" && user.reg == 1) {
		if (user.prefix == false) {
			user.reg = 2;

			setTimeout(() => {
				message.send(`
					В поисках интересного сервера CRMP на разных сайтах, Вы наткнулись на рекламную запись: "Открылся сервер MTA RP| Приходи и играй скорее | Bonus"
					Заинтересовавшись, Вы решили зайти на этот сервер.
				`);
			}, 1000);

			setTimeout(() => {
				message.send(
					`*Двойной щелчок по ярлыку CR:MP*\n*Ввод IP-адреса сервера и ника в поле "name"*`
				);
			}, 2000);

			setTimeout(() => {
				message.send(
					`*Регистрируясь, Вы автоматически соглашаетесь с правилами нашего проекта: https://vk.com/topic-213827213_48879983 ...*`
				);
			}, 3000);

			setTimeout(() => {
				message.send(
					`*Введите Ник-Нейм состоящий из английских букв (Не более 20 символов)*\n* Пример: Vlad_Kucher*`
				);
			}, 4000);
			return;
		}
	}
	if (user.reg == 2) {
		if (message.text.length > 20)
			return message.send(
				`⚠ Максимальная длина Ник-Нейма - 20 символов\n* Пример: Vlad_Kucher*`
			);
		if (message.text.length < 2)
			return message.send(
				`⚠ Минимальная длина Ник-Нейма - 2 символа\n* Пример: Vlad_Kucher*`
			);
		if (/[а-яА-Я]+/.test(message.text))
			return message.send(
				`⚠ Ник-Нейм должен состоять из английских букв!\n* Пример: Vlad_Kucher*`
			);
		for (i in acc.users) {
			if (acc.users[i].prefix == message.text)
				return message.send(`⚠ Данный Ник-Нейм уже существует!`);
		}
		user.reg = 3;
		user.prefix = message.text;
		user.connect = true;

		let time = 0;

		vk.api.call("messages.send", {
			chat_id: 5,
			message: `✉ Зарегистрировался новый игрок: @id${message.user}(${
				message.text
			}) [${u_id(message.user)}]`,
		});

		for (i = 0; i < msgs.length; i++) {
			let text = msgs[i];
			time += 1000;
			setTimeout(() => {
				message.send(text);
			}, time);
		}
		return;
	}

	// ------------------------ local base limits -------------
	if (!limits[message.user]) {
		limits[message.user] = {
			bonus: false,
			energy: 10,
		};
	}
	// ------------------------ local base limits -------------

	if (user.ban != false) {
		return;
	}
	if (user.mute != false) {
		return;
	}

	if (user.balance < 0) user.balance = 0;
	if (user.balance == null) user.balance = 0;
	if (user.golod == null) user.golod = 0;

	if (!acc.chats[message.chatId]) {
		if (message.chatId != null) {
			acc.chats[message.chatId] = { i: true };
		}
	}

	user.balance = Math.round(user.balance);
		
	if (message.text) {
		user.msg += 1;
		user.msg_exs += 1;
	}

	try {
		await next();
	} catch (err) {
		console.error(err);
	}
});

/*----------------------------------------------------------------------------------------------------------*/
var uptime = { sec: 0, min: 0, hours: 0, days: 0 };

const utils = {
	sp: (int) => {
		int = int.toString();
		return int
			.split("")
			.reverse()
			.join("")
			.match(/[0-9]{1,3}/g)
			.join(".")
			.split("")
			.reverse()
			.join("");
	},
	rn: (int, fixed) => {
		if (int === null) return null;
		if (int === 0) return "0";
		fixed = !fixed || fixed < 0 ? 0 : fixed;
		let b = int.toPrecision(2).split("e"),
			k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 16) / 3),
			c =
				k < 1
					? int.toFixed(0 + fixed)
					: (int / Math.pow(10, k * 3)).toFixed(1 + fixed),
			d = c < 0 ? c : Math.abs(c),
			e = d + ["", "тыс", "млн", "млрд", "трлн", "трлд"][k];

		e = e.replace(/e/g, "");
		e = e.replace(/\+/g, "");
		e = e.replace(/Infinity/g, "Бесконечно");

		return e;
	},
	gi: (int) => {
		int = int.toString();

		let text = ``;
		for (let i = 0; i < int.length; i++) {
			text += `${int[i]}&#8419;`;
		}

		return text;
	},
	decl: (n, titles) => {
		return titles[
			n % 10 === 1 && n % 100 !== 11
				? 0
				: n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)
				? 1
				: 2
		];
	},
	random: (x, y) => {
		return y
			? Math.round(Math.random() * (y - x)) + x
			: Math.round(Math.random() * x);
	},
	pick: (array) => {
		return array[utils.random(array.length - 1)];
	},
};

setInterval(() => {
	uptime.sec++;
	if (uptime.sec == 60) {
		uptime.sec = 0;
		uptime.min += 1;
	}
	if (uptime.min == 60) {
		uptime.min = 0;
		uptime.hours += 1;
	}
	if (uptime.hours == 24) {
		uptime.hours = 0;
		uptime.days += 1;
	}
}, 1000);

/*----------------------------------------------------------------------------------------------------------*/

vk.updates.hear(/^(?:топ баланс)$/i, (message) => {
	let text = ``;
	var tops = [];
	var yo = [];

	for (i in acc.users) {
		if (acc.users[i].admin < 1) {
			tops.push({
				id_vk: acc.users[i].id,
				id: i,
				balance: acc.users[i].balance,
			});
		}
	}

	tops.sort(function (a, b) {
		if (b.balance > a.balance) return 1;
		if (b.balance < a.balance) return -1;
		return 0;
	});

	for (var g = 0; g < 10; g++) {
		if (tops.length > g) {
			let ups = g;
			ups += 1;
			if (g <= 8) ups = `${ups}&#8419;`;
			if (g == 9) ups = `&#128287;`;
			yo.push({
				id_vk: tops[g].id_vk,
				id: tops[g].id,
				balance: tops[g].balance,
				smile: `${ups}`,
			});
		}
	}
	var people =
		"💰 Топ богатых людей 💰 \n" +
		yo
			.map(
				(a) =>
					a.smile +
					". [id" +
					a.id_vk +
					"|" +
					acc.users[a.id].prefix +
					`] [${a.id}] >> ` +
					spaces(a.balance) +
					" 💰. "
			)
			.join("\n");
	text += `${people}\n\n`;
	message.send(text);
});

vk.updates.hear(/^(?:топ смс|топ сообщений)$/i, (message) => {
	let text = ``;
	var tops = [];
	var yo = [];

	for (i in acc.users) {
		if (acc.users[i].admin < 1) {
			tops.push({
				id_vk: acc.users[i].id,
				id: i,
				msg: acc.users[i].msg,
			});
		}
	}

	//Не работает
	//Cannot Read Property `To String` of undefined
	tops.sort(function (a, b) {
		if (b.msg > a.msg) return 1;
		if (b.msg < a.msg) return -1;
		return 0;
	});

	for (var g = 0; g < 10; g++) {
		if (tops.length > g) {
			let ups = g;
			ups += 1;
			if (g <= 8) ups = `${ups}&#8419;`;
			if (g == 9) ups = `&#128287;`;
			yo.push({
				id_vk: tops[g].id_vk,
				id: tops[g].id,
				msg: tops[g].msg,
				smile: `${ups}`,
			});
		}
	}
	var people =
		"💌 Топ игроков по сообщениям 💌 \n" +
		yo
			.map(
				(a) =>
					a.smile +
					". [id" +
					a.id_vk +
					"|" +
					acc.users[a.id].prefix +
					`] [${a.id}] >> ` +
					spaces(a.msg) +
					" 💌. "
			)
			.join("\n");
	text += `${people}\n\n`;
	message.send(text);
});

vk.updates.hear(/^(?:топ шахтеров)$/i, (message) => {
	let text = ``;
	var tops = [];
	var yo = [];

	for (i in acc.users) {
		if (acc.users[i].admin < 1) {
			tops.push({
				id_vk: acc.users[i].id,
				id: i,
				opit: acc.users[i].opit,
			});
		}
	}

	tops.sort(function (a, b) {
		if (b.opit > a.opit) return 1;
		if (b.opit < a.opit) return -1;
		return 0;
	});

	for (var g = 0; g < 10; g++) {
		if (tops.length > g) {
			let ups = g;
			ups += 1;
			if (g <= 8) ups = `${ups}&#8419;`;
			if (g == 9) ups = `&#128287;`;
			yo.push({
				id_vk: tops[g].id_vk,
				id: tops[g].id,
				opit: tops[g].opit,
				smile: `${ups}`,
			});
		}
	}
	var people =
		"👷 Топ шахтеров \n" +
		yo
			.map(
				(a) =>
					a.smile +
					". [id" +
					a.id_vk +
					"|" +
					acc.users[a.id].prefix +
					`] [${a.id}] >> ` +
					spaces(a.opit) +
					" 👷. "
			)
			.join("\n");
	text += `${people}\n\n`;
	message.send(text);
});
/*----------------------------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------------------------*/
vk.updates.hear(/^(?:аздамон)$/i, async (message, bot) => {
	if (message.user.bank < 1)
		return message.send(`ваш банковский счет пуст. 😬`);
	bot(
		`вы вошли в банк⚠
🔥 На балансе ${utils.sp(message.user.bank)}₽ игровой валюты
💰 Введите "Банк [кол-во]" для пополнения`,
		{ attachment: `photo-206027701_457241905` }
	);
});

vk.updates.hear(/^(?:аздамон)\s(?:снять)\s(.*)$/i, async (message, bot) => {
	message.args[1] = message.args[1].replace(/(\.|\,)/gi, "");
	message.args[1] = message.args[1].replace(/(к|k)/gi, "000");
	message.args[1] = message.args[1].replace(/(м|m)/gi, "000000");
	message.args[1] = message.args[1].replace(
		/(вабанк|вобанк|все|всё)/gi,
		message.user.bank
	);

	if (!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if (message.args[1] <= 0) return;

	if (message.args[1] > message.user.bank)
		return message.send(`у вас нет данной суммы. 😬`);
	else if (message.args[1] <= message.user.bank) {
		user.balance += message.args[1];
		message.user.bank -= message.args[1];

		return message.send(`вы сняли ${utils.sp(message.args[1])}₽
🔥 Остаток на счёте: ${utils.sp(message.user.bank)}₽
💰 Ваш баланс: ${utils.sp(user.balance)}₽`);
	}
});

/*------------------------------------MAIN------------------------------------------------------------------*/
vk.updates.hear(/^(?:помощь|📗 Помощь)/i, (message) => {
	return message.send(
		`
Разделы:

ᅠ🔔 Rp » - РП команды
ᅠ⚠ Ahelp » Админ-правила
ᅠ📍 List (№) - таблица игроков
ᅠ🌚 Проект - информация

Основное:
ᅠ💼 Профиль
ᅠ💰 Баланс
ᅠ💶 Бонус - можно брать раз в 10 минут
ᅠ💳 Банк [положить/снять] [сумма]
ᅠ💶 Передать [ID(игровой)] [сумма]
ᅠ🔎 Поиск [ссылка_вк]
ᅠ💰 Топ - список топов бота
ᅠ🎁 Подарок
ᅠ🔨 Работа
ᅠ🏡 Дом
ᅠ🏢 Бизнесы
ᅠ🍕 Кушать
🧳 Рюкзак 🆕
🎒 Инвентарь 🆕 
ᅠ🏣 Gps - Cписок мест 
ᅠ👑 Казино - Ставки на деньги
ᅠ✉ Кейс - Донат кейс
ᅠ🚘 Автосалон - В автосалоне вы сможете купить машину
ᅠ🥛 Стаканчик [1-3] [ставка] - Попробуй отгадать стаканчик!
🎰 Рулетка [ставка] - Зарабатывай и выигрывай.
🎮 Трейд [вверх|вниз] [ставка] - Угадай верный курс!ᅠ
ᅠ⛓ Реф инфо - Информация об рефералке.
ᅠ⛓ Реф[ID(Пригласившего) - Если тебя пригласил друг,то укажи и получи бонус!
`,
		{
			keyboard: JSON.stringify({
				inline: false,
				buttons: [
					[
						{
							action: {
								type: "text",
								payload: "{}",
								label: "🏣 GPS",
							},
							color: "positive",
						},
					],
					[
						{
							action: {
								type: "text",
								payload: "{}",
								label: "💼 Профиль",
							},
							color: "primary",
						},
					],
					[
						{
							action: {
								type: "text",
								payload: "{}",
								label: "💶 Бонус",
							},
							color: "positive",
						},
					],
					[
						{
							action: {
								type: "text",
								payload: "{}",
								label: "💰 Топ",
							},
							color: "primary",
						},
						{
							action: {
								type: "text",
								payload: "{}",
								label: "📗 Помощь",
							},
							color: "primary",
						},
					],
				],
			}),
		}
	);
});

vk.updates.hear(/^(?:топ|💰 Топ)/i, (message) => {
	return message.send(`
Топы бота:
1. Топ баланс
2. Топ шахтеров
3. Топ сообщений
Для выбора топа, используйте: "Топ" [название топа]
`);
});

vk.updates.hear(
	/^(?:поиск)(\shttps\:\/\/vk\.com\/)?(id)?([0-9]+)?([^]+)?/i,
	(message) => {
		if (message.$match[3]) {
			let id = u_id(message.$match[3]);
			if (!acc.users[id])
				return message.send(
					`🔎 Не верно указаны данные | Игрока нет\n🔎 Пример: "Поиск https://vk.com/vladzaicev7"`
				);
			return message.send(`
			🔹 Игрок: [id${id}|${acc.users[id].prefix}]
			🔹 ID: ${id}
			🔹 Adm-lvl: ${acc.users[id].admin} 
		`);
		} else {
			if (!message.$match[4])
				return message.send(
					`🔎 Укажите данные\n🔎 Пример: "Поиск https://vk.com/vladzaicev7"`
				);
			var domain = message.$match[4].split(" ");
			vk.api
				.call("utils.resolveScreenName", {
					screen_name: message.$match[4],
				})
				.then((res) => {
					var id = u_id(res.object_id);
					if (!acc.users[id])
						return message.send(
							`🔎 Не верно указаны данные | Игрока нет\n🔎 Пример: "Поиск https://vk.com/vladzaicev7"`
						);
					return message.send(`
				🔹 Игрок: [id${id}|${acc.users[id].prefix}]
				🔹 ID: ${id}
				🔹 Adm-lvl: ${acc.users[id].admin} 
			`);
				});
			return;
		}
	}
);

vk.updates.hear(/^(?:профиль|💼 Профиль|статс|stats|проф)/i, (message) => {
	let user = acc.users[u_id(message.user)];
	return message.send(
		` 
		👤 Имя: ${user.prefix}
		🆔 ID: ${u_id(message.user)}
		👑 Статус: ${user.aname}
		🔻 Уровень: ${user.level}
		💡 Очки опыта: ${user.exs}/${user.uplvl} 
		💡 Опыт дается раз в час за активную игру
		💰 Баланс: ${spaces(user.balance)}$
		💳 В банке: ${user.bank}$ 
		💎 Donat-Money: ${user.donate}

		❤ Здоровье: ${user.hp}/100
		🔒 Законопослушность: ${user.zakon}
		🍕 Голод: ${user.golod}/100
		❗ -1 каждые 20 минут 
		` +
			(user.vip == 0
				? `⚡ Энергия: ${user.energy}/50\n`
				: `⚡ Энергия: ${user.energy}/10\n`) +
			(user.golod >= 30
				? `❗ +1 энергий даётся раз в 10 минут\n\n`
				: `⚠ Вы голодны. Энергия не прибавляется!\n\n`) +
			(user.house == false ? `` : `&#127969; ${houses[user.house].name}\n`) +
			(user.car == false ? `\n` : `&#128664; ${cars[user.car].name}\n\n`) +
			`
		📕 Warns: ${user.warn}/3
		📗 Дата регистрации: ${user.reg_time}
	`
	);
});

vk.updates.hear(/^(?:инвентарь|инв|inv|inventory)/i, (message) => {
	let user = acc.users[u_id(message.user)];
	return message.send(
		` 
⛏ Кирка: ${user.kirka}%
🎋 Удочка: ${user.ydochka}%
🔫 Оружие: ${user.gun == false ? `` : `${guns[user.gun].name}`}\n
📝 Лицензия на оружие: ${
			user.gunlic == false ? `Отсутствует` : `${user.gunlic}`
		}\n
📱 Телефон:
Водительское удостоверение: ${
			user.carpass == false ? `Отсутствует` : `${user.carpass}`
		}\n
Лицензия на самолет: ${
			user.planelic == false ? `Отсутствует` : `${user.planelic}`
		}\n
Лицензия на Мотоцикл: ${
			user.motolic == false ? `Отсутствует` : `${user.motolic}`
		}\n
Лицензия на лодку: ${
			user.boatlic == false ? `Отсутствует` : `${user.boatlic}`
		}\n
➖➖➖➖➖➖➖➖➖➖➖➖➖➖
💠 Руда:

⚫ Камень: ${user.stone}
🔶 Медь: ${user.copper}
⚪ Железо: ${user.iron}
▫Серебро: ${user.silver}
🔸 Золото: ${user.gold}

	`
	); /*
	{
			keyboard: JSON.stringify({
				inline: true,
				buttons: [
					[
						{
							action: {
								type: "text",
								payload: "{}",
								label: "🧳 Рюкзак",
							},
							color: "positive",
						},
					],
					
				],
			}),
		};
	);
	*/
});

/*
 
💉 Наркозависимость: ${user.narko} 
 
*/

vk.updates.hear(/^(?:баланс)/i, (message) => {
	let user = acc.users[u_id(message.user)];
	return message.send(` 
		👤 Имя: ${user.prefix}
		🆔 ID: ${u_id(message.user)} 

		💰 Баланс: ${spaces(user.balance)}$
		💳 В банке: ${spaces(user.bank)}$  
	`);
});

vk.updates.hear(/^(?:Шахта)$/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let user_prefix = acc.users[u_id(organizations.mine.owner)];
	if (user.gps != 8)
		return message.send(
			`✉ Для использования команды переместитесь в Шахту ('gps')`
		);
	message.send(`Вы перешли в шахту! 
	👤 Владелец: @id${organizations.mine.owner}(${user_prefix.prefix})
	Доступные шахты:
	Шахта №1
	Шахта №2
	➖➖➖➖➖➖➖➖➖➖
	🔤 ➖ Информация:
	⛏ Моя информация
	👷 ТОП шахтеров
	Для перехода в шахту введите "Шахта перейти" [номер шахты]
	`);
	//Шахта №2
	//Шахта №3
	//Шахта №4
	//@id${organizations.mine.owner}(${user_prefix.prefix})
});

vk.updates.hear(/^(?:Шахта перейти 1)$/i, (message) => {
	let user = acc.users[u_id(message.user)];
	if (user.gps != 8)
		return message.send(
			`✉ Для использования команды переместитесь в Шахту ('gps')`
		);
	message.send(`📄 Информация о Шахте №1:
	Необходимый опыт шахтера: 0
	Для начала работы, используйте "Копать руду 1".
	`);
});

vk.updates.hear(/^(?:Шахта перейти 2)$/i, (message) => {
	let user = acc.users[u_id(message.user)];
	if (user.gps != 8)
		return message.send(
			`✉ Для использования команды переместитесь в Шахту ('gps')`
		);
	message.send(`📄 Инфромация о Шахте №2:
	Новые руды:
	⚪ Металл
	Необходимый опыт шахтера: 350 
	Для начала работы, используйте "Копать руду 2".
	`);
});

vk.updates.hear(/^(?:копать руду 1)$/i, (message) => {
	let user = acc.users[u_id(message.user)];
	if (user.gps != 8)
		return message.send(
			`✉ Для использования команды переместитесь в Шахту ('gps')`
		);
	let ryda = utils.random(15, 25);
	let summa = utils.random(98, 250);
	let gold = utils.random(7, 14);
	let silver = utils.random(8, 16);
	let iron = utils.random(9, 18);
	let copper = utils.random(9, 18);
	let stone = utils.random(12, 24);

	if (user.kirka == 5) {
		return message.send(`⛏ У вас нет Кирки!`);
	}

	if (user.golod == 5) {
		return message.send(
			`🍗 Вы слишком голодны! Перейдите в пиццерию для пополения Голода(gps)`
		);
	}
	if (user.shahta == true) return message.send(`Вы еще копаете...`);
	user.shahta = true;
	setTimeout(() => {
		user.shahta = false;
	}, 7000);

	user.balance += summa;
	user.golod -= 5;
	user.kirka -= 5;
	user.opit += 1;
	user.ryda += ryda;
	user.gold += gold;
	user.silver += silver;
	user.iron += iron;
	user.copper += copper;
	user.stone += stone;
	return message.send(` 
		⛏ Вы выкопали Фрагменты руды:
🔸 Золото: ${gold}
▫Серебро: ${silver}
⚪ Железо: ${iron}
🔶 Медь: ${copper}
⚫ Камень: ${stone}
💠 Другая руда: ${ryda}

💰Заработано:
💵Денег: ${summa}
🔸 Опыт: +1

Показатели уменьшены:
⛏ Кирка: ${user.kirka}%
🍗 Голод: ${user.golod}%
	`);
});

vk.updates.hear(/^(?:копать руду 2)$/i, (message) => {
	let user = acc.users[u_id(message.user)];
	if (user.gps != 8)
		return message.send(
			`✉ Для использования команды переместитесь в Шахту ('gps')`
		);
	let ryda = utils.random(15, 25);
	let summa = utils.random(150, 500);
	let gold = utils.random(7, 14);
	let silver = utils.random(8, 16);
	let metall = utils.random(7, 14);
	let iron = utils.random(9, 18);
	let copper = utils.random(9, 18);
	let stone = utils.random(12, 24);

	if (user.kirka == 5) {
		return message.send(`⛏ У вас нет Кирки!`);
	}

	if (user.golod == 5) {
		return message.send(
			`🍗 Вы слишком голодны! Перейдите в пиццерию для пополения Голода(gps)`
		);
	}
	if (user.opit < 300) {
		return message.send(`У вас недостаточно опыта для этой шахты!`);
	}
	if (user.shahta == true) return message.send(`Вы еще копаете...`);
	user.shahta = true;
	setTimeout(() => {
		user.shahta = false;
	}, 10000);

	user.balance += summa;
	user.golod -= 5;
	user.kirka -= 5;
	user.opit += 1;
	user.ryda += ryda;
	user.gold += gold;
	user.silver += silver;
	user.metall += metall;
	user.iron += iron;
	user.copper += copper;
	user.stone += stone;
	return message.send(` 
		⛏ Вы выкопали Фрагменты руды:
🔸 Золото: ${gold}
▫Серебро: ${silver}
◽ Металл: ${metall}
⚪ Железо: ${iron}
🔶 Медь: ${copper}
⚫ Камень: ${stone}
💠 Другая руда: ${ryda}

💰Заработано:
💵Денег: ${summa}
🔸 Опыт: +1

Показатели уменьшены:
⛏ Кирка: ${user.kirka}%
🍗 Голод: ${user.golod}%
	`);
});

vk.updates.hear(/^(?:моя информация)$/i, (message) => {
	let user = acc.users[u_id(message.user)];
	if (user.gps == 8)
		return message.send(
			`Информация о вас:
			Опыт: ${user.opit}
			Выкопанная руда: ${user.ryda}
	`
		);
	else {
		return message.send(`Вы не в шахте!\n gps 8`);
	}
	//Шахта №2
	//Шахта №3
	//Шахта №4
});

vk.updates.hear(/^(?:Склад)$/i, (message) => {
	let user = acc.users[u_id(message.user)];

	message.send(` Вы перешли на Склад
	Доступная руда для продажи:
⚫ Камень:
🔻 Продажа: 1 кг. = 50$
➖➖➖➖➖➖➖➖➖➖
🔶 Медь: .
🔻 Продажа: 1 кг. = 75$
➖➖➖➖➖➖➖➖➖➖
⚪ Железо: 
🔻 Продажа: 1 кг. = 95$
➖➖➖➖➖➖➖➖➖➖
◽ Металл:
🔻 Продажа: 1 кг. = 120
➖➖➖➖➖➖➖➖➖➖
▫ Серебро: 
🔻 Продажа: 1 кг. = 145$
➖➖➖➖➖➖➖➖➖➖
🔸 Золото:
🔻 Продажа: 1 кг. = 185$
➖➖➖➖➖➖➖➖➖➖ 


💰 Для продажи: Продать [название руды] [кол-во]
	`);
	//Шахта №2
	//Шахта №3
	//Шахта №4
});

vk.updates.hear(/^(?:продать камень)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let id = user_id(message.user);
	if (!message.$match[1])
		return message.send(`👉 Пример команды: Продать камень[кол-во] `);
	if (!Number(message.$match[1]))
		return message.send(`👉 СУММА должна быть числового вида.`);
	if (user.stone < message.$match[1])
		return message.send(` У вас нет столько камня!`);
	user.stone -= message.$match[1]; //50 * Number(message.$match[1]);
	user.balance += 50 * message.$match[1]; //50 * Number(message.$match[1]);

	return message.send(
		`💴 Вы успешно продали камень за ${spaces(50 * message.$match[1])}$.`
	);
});

vk.updates.hear(/^(?:продать медь)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let id = user_id(message.user);
	if (!message.$match[1])
		return message.send(`👉 Пример команды: Продать медь[кол-во] `);
	if (!Number(message.$match[1]))
		return message.send(`👉 СУММА должна быть числового вида.`);
	if (user.copper < message.$match[1])
		return message.send(` У вас нет столько меди!`);
	user.copper -= message.$match[1];
	user.balance += 75 * message.$match[1];

	return message.send(
		`💴 Вы успешно продали медь за ${spaces(75 * message.$match[1])}$.`
	);
});

vk.updates.hear(/^(?:продать железо)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let id = user_id(message.user);
	if (!message.$match[1])
		return message.send(`👉 Пример команды: Продать железо[кол-во] `);
	if (!Number(message.$match[1]))
		return message.send(`👉 СУММА должна быть числового вида.`);
	if (user.iron < message.$match[1])
		return message.send(` У вас нет столько железа!`);
	user.iron -= message.$match[1]; //50 * Number(message.$match[1]);
	user.balance += 95 * message.$match[1]; //50 * Number(message.$match[1]);

	return message.send(
		`💴 Вы успешно продали железо за ${spaces(95 * message.$match[1])}$.`
	);
});

vk.updates.hear(/^(?:продать Металл)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let id = user_id(message.user);
	if (!message.$match[1])
		return message.send(`👉 Пример команды: Продать железо[кол-во] `);
	if (!Number(message.$match[1]))
		return message.send(`👉 СУММА должна быть числового вида.`);
	if (user.metall < message.$match[1])
		return message.send(` У вас нет столько металла!`);
	user.metall -= message.$match[1]; //50 * Number(message.$match[1]);
	user.balance += 120 * message.$match[1]; //50 * Number(message.$match[1]);

	return message.send(
		`💴 Вы успешно продали железо за ${spaces(120 * message.$match[1])}$.`
	);
});

vk.updates.hear(/^(?:продать серебро)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let id = user_id(message.user);
	if (!message.$match[1])
		return message.send(`👉 Пример команды: Продать серебро[кол-во] `);
	if (!Number(message.$match[1]))
		return message.send(`👉 СУММА должна быть числового вида.`);
	if (user.silver < message.$match[1])
		return message.send(` У вас нет столько Серебра!`);
	user.silver -= message.$match[1]; //50 * Number(message.$match[1]);
	user.balance += 145 * message.$match[1]; //50 * Number(message.$match[1]);

	return message.send(
		`💴 Вы успешно продали серебро за ${spaces(145 * message.$match[1])}$.`
	);
});

vk.updates.hear(/^(?:продать золото)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let id = user_id(message.user);
	if (!message.$match[1])
		return message.send(`👉 Пример команды: Продать золото[кол-во] `);
	if (!Number(message.$match[1]))
		return message.send(`👉 Руда должна быть числового вида.`);
	if (user.gold < message.$match[1])
		return message.send(` У вас нет столько золота!`);
	user.gold -= message.$match[1]; //50 * Number(message.$match[1]);
	user.balance += 185 * message.$match[1]; //50 * Number(message.$match[1]);

	return message.send(
		`💴 Вы успешно продали золото за ${spaces(185 * message.$match[1])}$.`
	);
});

/////////////////////////////////////////////////////////////////////////////

vk.updates.hear(/^(?:пирс)$/i, (message) => {
	let user = acc.users[u_id(message.user)];
	if (user.gps != 9)
		return message.send(
			`✉ Для использования команды переместитесь на пирс ('gps')`
		);
	message.send(`Вы перешли на пирс! 
	👤 Владелец: 
	➖➖➖➖➖➖➖➖➖➖
	🔤 ➖ Информация:
	🎋 Сумка
	🌊 Лавка рыбы
	Для того чтобы рыбачить введите: "Рыбачить"
	`);
});

vk.updates.hear(/^(?:лавка рыбы)$/i, (message) => {
	let user = acc.users[u_id(message.user)];
	message.send(`Вы перешли в лавку с рыбой!
	🎋 Рыба для продажи:
🐟 Окунь
💰 Продажа: 1 кг. = 300$
➖➖➖➖➖➖➖➖➖➖
🐡 Карась
💰 Продажа: 1 кг. = 235$
➖➖➖➖➖➖➖➖➖➖
🐠 Карп
💰 Продажа: 1 кг. = 194$
➖➖➖➖➖➖➖➖➖➖
🐬 Треска
💰 Продажа: 1 кг. = 521$
➖➖➖➖➖➖➖➖➖➖
🐳 Щука
💰 Продажа: 1 кг. = 442$
➖➖➖➖➖➖➖➖➖➖
🦈 Сом
💰 Продажа: 1 кг. = 320$
➖➖➖➖➖➖➖➖➖➖
🦐 Кальмар
💰 Продажа: 1 кг. = 276$
➖➖➖➖➖➖➖➖➖➖
🎋 Для продажи, используйте: "продать рыбу" [название рыбы] [кол-во], Например: Продать рыбу карп 30
	`);
});

vk.updates.hear(/^(?:рюкзак|сумка)$/i, (message) => {
	let user = acc.users[u_id(message.user)];
	message.send(`🧳 Ваш Рюкзак:
🐟 Окунь: ${user.okyn}
🐡 Карась: ${user.karas}
🐠 Карп: ${user.karp}
🐬 Треска: ${user.treska}
🐳 Щука: ${user.shyka}
🦈 Сом: ${user.som}
🦐 Кальмар: ${user.kalmar}
	`);
});

vk.updates.hear(/^(?:рыбачить)$/i, (message) => {
	let user = acc.users[u_id(message.user)];
	if (user.gps != 9)
		return message.send(
			`✉ Для использования команды переместитесь на пирс ('gps')`
		);
	let okyn = utils.random(3, 10);
	let karas = utils.random(4, 14);
	let shyka = utils.random(3, 9);
	let som = utils.random(4, 11);
	let kalmar = utils.random(5, 14);
	let karp = utils.random(6, 16);
	let treska = utils.random(2, 6);

	if (user.ydochka == 5) {
		return message.send(`⛏ У вас нет удочки!`);
	}

	if (user.golod == 5) {
		return message.send(
			`🍗 Вы слишком голодны! Перейдите в пиццерию для пополения Голода(gps)`
		);
	}
	if (user.ribalka == true) return message.send(`Вы еще ловите рыбу...`);
	user.ribalka = true;
	setTimeout(() => {
		user.ribalka = false;
	}, 8000);

	user.okyn += okyn;
	user.karas += karas;
	user.shyka += shyka;
	user.som += som;
	user.kalmar += kalmar;
	user.karp += karp;
	user.treska += treska;
	user.ydochka -= 5;
	user.golod -= 5;

	return message.send(` 
	🌊 Вы выловили рыбу:
🐟 Окунь: ${okyn}
🐡 Карась: ${karas}
🐠 Карп: ${karp}
🐬 Треска: ${treska}
🐳 Щука: ${shyka}
🦈 Сом: ${som}
🦐 Кальмар: ${kalmar}

Показатели уменьшены:
⛏ Кирка: ${user.kirka}%
🍗 Голод: ${user.golod}%
	`);
});

vk.updates.hear(/^(?:продать рыбу окунь)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let id = user_id(message.user);
	if (!message.$match[1])
		return message.send(`👉 Пример команды: Продать рыбу окунь[кол-во] `);
	if (!Number(message.$match[1]))
		return message.send(`👉 СУММА должна быть числового вида.`);
	if (user.okyn < message.$match[1])
		return message.send(` У вас нет столько окуня!`);
	user.okyn -= message.$match[1];
	user.balance += 300 * message.$match[1];

	return message.send(
		`💴 Вы успешно продали окуня за ${spaces(300 * message.$match[1])}$.`
	);
});

vk.updates.hear(/^(?:продать рыбу карась)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let id = user_id(message.user);
	if (!message.$match[1])
		return message.send(`👉 Пример команды: Продать рыбу карась [кол-во] `);
	if (!Number(message.$match[1]))
		return message.send(`👉 СУММА должна быть числового вида.`);
	if (user.karas < message.$match[1])
		return message.send(` У вас нет столько карася!`);
	user.karas -= message.$match[1];
	user.balance += 235 * message.$match[1];

	return message.send(
		`💴 Вы успешно продали карасей за ${spaces(235 * message.$match[1])}$.`
	);
});

vk.updates.hear(/^(?:продать рыбу карп)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let id = user_id(message.user);
	if (!message.$match[1])
		return message.send(`👉 Пример команды: Продать рыбу карп [кол-во] `);
	if (!Number(message.$match[1]))
		return message.send(`👉 СУММА должна быть числового вида.`);
	if (user.karp < message.$match[1])
		return message.send(` У вас нет столько карпа!`);
	user.karp -= message.$match[1];
	user.balance += 194 * message.$match[1];

	return message.send(
		`💴 Вы успешно продали карпов за ${spaces(194 * message.$match[1])}$.`
	);
});

vk.updates.hear(/^(?:продать рыбу треска)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let id = user_id(message.user);
	if (!message.$match[1])
		return message.send(`👉 Пример команды: Продать рыбу треска [кол-во] `);
	if (!Number(message.$match[1]))
		return message.send(`👉 СУММА должна быть числового вида.`);
	if (user.treska < message.$match[1])
		return message.send(` У вас нет столько трески!`);
	user.treska -= message.$match[1];
	user.balance += 521 * message.$match[1];

	return message.send(
		`💴 Вы успешно продали треску за ${spaces(521 * message.$match[1])}$.`
	);
});

vk.updates.hear(/^(?:продать рыбу щука)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let id = user_id(message.user);
	if (!message.$match[1])
		return message.send(`👉 Пример команды: Продать рыбу щука [кол-во] `);
	if (!Number(message.$match[1]))
		return message.send(`👉 СУММА должна быть числового вида.`);
	if (user.shyka < message.$match[1])
		return message.send(` У вас нет столько щуки!`);
	user.shyka -= message.$match[1];
	user.balance += 442 * message.$match[1];

	return message.send(
		`💴 Вы успешно продали щуку за ${spaces(442 * message.$match[1])}$.`
	);
});

vk.updates.hear(/^(?:продать рыбу сом)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let id = user_id(message.user);
	if (!message.$match[1])
		return message.send(`👉 Пример команды: Продать рыбу сом [кол-во] `);
	if (!Number(message.$match[1]))
		return message.send(`👉 СУММА должна быть числового вида.`);
	if (user.som < message.$match[1])
		return message.send(` У вас нет столько сомов!`);
	user.som -= message.$match[1];
	user.balance += 320 * message.$match[1];

	return message.send(
		`💴 Вы успешно продали сомов за ${spaces(320 * message.$match[1])}$.`
	);
});

vk.updates.hear(/^(?:продать рыбу кальмар)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let id = user_id(message.user);
	if (!message.$match[1])
		return message.send(`👉 Пример команды: Продать серебро[кол-во] `);
	if (!Number(message.$match[1]))
		return message.send(`👉 СУММА должна быть числового вида.`);
	if (user.kalmar < message.$match[1])
		return message.send(` У вас нет столько кальмаров!`);
	user.kalmar -= message.$match[1];
	user.balance += 276 * message.$match[1];

	return message.send(
		`💴 Вы успешно продали кальмаров за ${spaces(276 * message.$match[1])}$.`
	);
});
/////////////////////////////////////////////////////////////////////////////

vk.updates.hear(/^(?:работать)/i, (message) => {
	let user = acc.users[u_id(message.user)];
	if (user.job == false) return message.send(`✉ Вы никем не работаете...`);
	if (user.energy == 0)
		return message.send(
			`⚡ У вас 0 энергии...\n⚡ До восстановления 1 энергии: ${
				limits[message.user].energy
			} мин.`
		);
	user.balance += Number(jobs[user.job].pay);
	user.energy -= 1;
	return message.send(` 
		&#128736; Вы ${jobs[user.job].text.random()}
		💰 +${jobs[user.job].pay}$
		⚡ Энергии: ${user.energy}
	`);
});

vk.updates.hear(/^(?:работа)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let text = "";
	let count = 0;
	if (message.text.toLowerCase() == "работать") return;
	if (message.$match[1]) {
		let args = message.$match;
		if (user.job != false)
			return message.send(
				`✉ Вы уже работаете <<${
					jobs[user.job].name
				}>>\n✉ Чтобы уволиться напишите: "Уволиться"`
			);
		if (args[1] < 1 || args > 9)
			return message.send(`✉ Введите корректно номер работы`);
		if (user.level < jobs[args[1]].level)
			return message.send(`✉ Данная работа не доступна для вас!`);
		user.job = Number(args[1]);
		return message.send(
			`💼 Вы успешно устроились на работу <<${
				jobs[args[1]].name
			}>>\n&#128296; Для работы напишите: "Работать"`
		);
	} else {
		if (user.job == false) {
			for (i in jobs) {
				count += 1;
				if (user.level >= jobs[i].level) {
					text += `${count}&#8419;. ${jobs[i].name} | +${jobs[i].pay}$\n`;
				}
			}

			return message.send(` 
				&#9874; Доступные работы:
				${text}  
				📍 Больше уровень - больше работ!
				📍 Для устройства напишите: "Работа (номер)"
			`);
		} else {
			return message.send(` 
				&#128221; Вы работаете &#128221;
				&#128100; ${jobs[user.job].name} | +${jobs[user.job].pay}$
				&#128296; Чтобы работать напишите: "Работать"
				💼 Чтобы уволиться напишите: "Уволиться"
			`);
		}
	}
});

vk.updates.hear(/^(?:уволиться)$/i, (message) => {
	let user = acc.users[u_id(message.user)];
	if (user.job == false) return message.send(`✉ Вы никем не работаете...`);
	user.job = false;

	return message.send(`  
	💼 Вы успешно уволились...
	`);
});

vk.updates.hear(/^(?:дом)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let text = "";
	let count = 0;
	if (message.$match[1]) {
		let args = message.$match;
		if (user.house != false)
			return message.send(
				`&#127969; У вас уже куплен ${
					houses[user.house].name
				}\n✉ Чтобы продать напишите: "Продать дом"`
			);
		if (args[1] < 1 || args > 6)
			return message.send(`✉ Введите корректно номер дома`);
		if (user.balance < houses[args[1]].price)
			return message.send(`✉ У вас недостаточно денег!`);
		user.balance -= Number(houses[args[1]].price);
		user.house = Number(args[1]);
		return message.send(`💼 Вы успешно купили <<${houses[args[1]].name}>>`);
	} else {
		if (user.house == false) {
			for (i in houses) {
				count += 1;
				if (user.balance >= houses[i].price) {
					text += `${count}&#8419;. ${houses[i].name} | ${houses[i].price}$\n`;
				}
			}

			return message.send(` 
				&#127969; Доступные дома:
				${text}  
				📍 Для покупки напишите: "Дом [номер]"
			`);
		} else {
			return message.send(` 
				&#127969; У вас уже куплен ${houses[user.house].name}
			`);
		}
	}
});
/*
vk.updates.hear(/^(?:магазин оружия|оружейка|оружие|оружия)$/i, (message) => {
	let user = acc.users[u_id(message.user)];
	if (user.gps != 4)
		return message.send(
			`✉ Для использования команды переместитесь в автосалон ('gps')`
		);
	message.send(`Вы успешно Перешли в оружейный магазин! Список Оружия:
🆔 - 1 » Кастет [10.$]
🆔 - 2 » Purple Dildo [50.000$]
🆔 - 3 » Бензопила [120.000$]
🆔 - 4 » Silend Pistol [200.000$]
🆔 - 5 » Colt [250.000$]
🆔 - 6 » Micro UZI [330.000$]
🆔 - 7 » Desert Eagle [510.000$]
🆔 - 8 » MP5 [640.000$]
🆔 - 9 » M4 [810.000$]
🆔 - 10 » AK-47 [1.000.000$]
🆔 - 11 » Sniper Rifle [2.400.000$]
➖➖➖➖➖➖
🛒 Для покупки, используйте: Оружие [номер] 🔫
	`);
});
*/
/*Alex_Oddone, Вы перешли в чёрный рынок! 🔫 🙈

🆔 - 1 » Кастет [10.000$]
🆔 - 2 » Purple Dildo [50.000$]
🆔 - 3 » Бензопила [120.000$]
🆔 - 4 » Silend Pistol [200.000$]
🆔 - 5 » Colt [250.000$]
🆔 - 6 » Micro UZI [330.000$]
🆔 - 7 » Desert Eagle [510.000$]
🆔 - 8 » MP5 [640.000$]
🆔 - 9 » M4 [810.000$]
🆔 - 10 » AK-47 [1.000.000$]
🆔 - 11 » Sniper Rifle [2.400.000$]
➖➖➖➖➖➖
🛒 Для покупки, используйте: Оружие [номер] 🙈*/

vk.updates.hear(/^(?:скин)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let text = "";
	let count = 0;
	if (message.$match[1]) {
		let args = message.$match;
		if (user.skin != false)
			return message.send(
				`👱 У вас уже куплен скин ${
					skin[user.skin].name
				}\n✉ Чтобы продать напишите: "Продать скин"`
			);
		if (args[1] < 1 || args > 10)
			return message.send(`✉ Введите корректно номер скина`);
		if (user.balance < skin[args[1]].price)
			return message.send(`✉ У вас недостаточно денег!`);
		user.balance -= Number(skin[args[1]].price);
		user.skin = Number(args[1]);
		return (
			message.send(`👱 Вы успешно купили скин <<${skin[args[1]].name}>>`),
			{ attachment: `${skin[user.skin].attachment}` }
		);
	} else {
		if (user.skin == false) {
			for (i in skin) {
				count += 1;
				if (user.balance >= skin[i].price) {
					text += `${count}&#8419;. ${skin[i].name} | ${skin[i].price}$\n`;
				}
			}

			return message.send(`У вас нет скина! Чтобы купить скин перейдите в магазин одежды!
			`);
		} else {
			return (
				message.send(` 
				👱 У вас уже куплен скин ${skin[user.skin].name}  
			`),
				{ attachment: `${skin[user.skin].attachment}` }
			);
		}
	}
});

vk.updates.hear(/^(?:мой скин)$/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let text = "";
	let count = 0;
	if (message.$match[1]) {
	} else {
		if (user.skin == false) {
			let mon = skin[user.skin].price * 0.7;
			for (i in skin) {
				count += 1;
				if (user.balance >= skin[i].price) {
					text += `${count}&#8419;. ${skin[i].name} | ${skin[i].price}$\n`;
				}
			}

			return message.send(`У вас нет скина!
			`);
		} else {
			return message.send(
				` 
				👱 Ваш скин: ${skin[user.skin].name}
				💰 Цена Продажи Государству: ${spaces(mon)}$
			`,
				{ attachment: `${skin[user.skin].attachment}` }
			);
		}
	}
});

vk.updates.hear(/^(?:Одежда)$/i, (message) => {
	let user = acc.users[u_id(message.user)];
	if (user.gps != 5)
		return message.send(
			`✉ Для использования команды переместитесь в магазин одежды ('gps')`
		);
	message.send(`👱 Доступные скины:

1. 🚶Бомж №1 (10000$)

2.🚶Рэпер (250000$)

3. 🚶Бандит (300000$)

4.🚶Наркодилер (350000)

5.💊 Мед.сестра (450000)

6. 🚶Carl Jhohnson (550000)

7. 🚶Девушка №1 (900000)

8. 🚶Девушка №2 (950000)

9. 🚶Олигарх (1450000)

10.🚶Niko Bellik (2500000)


👱 Для покупки напишите: "Скин [номер]"`);
});

vk.updates.hear(/^(?:моя машина)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let text = "";
	let count = 0;
	let mon = cars[user.car].price * 0.7;
	if (message.$match[1]) {
	} else {
		if (user.car == false) {
			for (i in cars) {
				count += 1;
				if (user.balance >= cars[i].price) {
					text += `${count}&#8419;. ${cars[i].name} | ${cars[i].price}$\n`;
				}
			}

			return message.send(`У вас нет машины!
			`);
		} else {
			return message.send(
				` 
				🚘 Ваша машина: ${cars[user.car].name}
				💰 Цена Продажи Государству: ${spaces(mon)}$
			`,
				{ attachment: `${cars[user.car].attachment}` }
			);
		}
	}
});

/*vk.updates.hear(/^(?:test)$/i, (message) => { 
	let user = acc.users[u_id(message.user)];

	return message.send(`тест`, {attachment: `photo-206027701_457241905` });
});
Пример команды с картинкой
*/

vk.updates.hear(/^(?:машина)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let text = "";
	let count = 0;
	if (message.$match[1]) {
		let args = message.$match;
		if (user.car != false)
			return message.send(
				`🚘 У вас уже куплена ${
					cars[user.car].name
				}\n✉ Чтобы продать напишите: "Продать машину"`
			);
		if (args[1] < 1 || args > 6)
			return message.send(`✉ Введите корректно номер машины`);
		if (user.balance < cars[args[1]].price)
			return message.send(`✉ У вас недостаточно денег!`);
		user.balance -= Number(cars[args[1]].price);
		user.car = Number(args[1]);
		return message.send(
			`🚘 Вы успешно купили машину <<${cars[args[1]].name}>>`
		);
	} else {
		if (user.car == false) {
			for (i in cars) {
				count += 1;
				if (user.balance >= cars[i].price) {
					text += `${count}&#8419;. ${cars[i].name} | ${cars[i].price}$\n`;
				}
			}

			return message.send(`У вас нет машины! Чтобы купить машину перейдите в автосалон!
			`);
		} else {
			return message.send(` 
				🚘 У вас уже куплен ${cars[user.car].name}  
			`);
		}
	}
});

vk.updates.hear(/^(?:Автосалон)$/i, (message) => {
	let user = acc.users[u_id(message.user)];
	if (user.gps != 4)
		return message.send(
			`✉ Для использования команды переместитесь в автосалон ('gps')`
		);
	message.send(`Вы успешно Перешли в Автосалон! Выберите этаж на который хотите переместиться:
	🚘 Этаж №1: Эконом Класс
	🚗 Этаж №2: Премиум Класс
	🚙 Этаж №3: Эксклюзив Класс`);
});

vk.updates.hear(/^(?:Этаж 1)$/i, (message) => {
	let user = acc.users[u_id(message.user)];
	message.send(
		`Вы успешно Перешли На Этаж №1, Доступные Машины:
🚘 1 - ВАЗ-2101 (55.000)

🚘 2 - ГАЗ-24-10 (150.000) 

🚘 3 - ВАЗ-2106 (250.000)

🚘 4 - Lada Priora (450.000) 

🚘 5 - BMW E39 (650.000)

🚘 6 - Mercedes-Benz E55 W210 (730.000)

📍 Для покупки напишите: "Машина [номер]`,

		{
			keyboard: JSON.stringify({
				inline: true,
				buttons: [
					[
						{
							action: {
								type: "text",
								payload: "{}",
								label: "Этаж 2",
							},
							color: "primary",
						},
					],
					[
						{
							action: {
								type: "text",
								payload: "{}",
								label: "Этаж 3",
							},
							color: "primary",
						},
					],
				],
			}),
		}
	);
});

vk.updates.hear(/^(?:Этаж 2)$/i, (message) => {
	let user = acc.users[u_id(message.user)];
	message.send(
		`Вы успешно Перешли На Этаж №2, Доступные Машины:
🚗 7 - Opel Astra H (850.000)

🚗 8 - Lada Vesta (1.150.000) 

🚗 9 - Mitsubishi Lancer (1.650.000)

🚗 10 - Toyota Camry (2.300.000) 

🚗 11 - Chervolet Camaro (2.750.000)

🚗 12 - Nissan Silvia S15 (3.100.000)

🚗 13 - Subaru Impreza WRX STI (3.750.000)

🚗 14 - Nissan Skyline R34 GTR (4.300.000)

📍 Для покупки напишите: "Машина [номер]
`,
		{
			keyboard: JSON.stringify({
				inline: true,
				buttons: [
					[
						{
							action: {
								type: "text",
								payload: "{}",
								label: "Этаж 1",
							},
							color: "primary",
						},
					],
					[
						{
							action: {
								type: "text",
								payload: "{}",
								label: "Этаж 3",
							},
							color: "primary",
						},
					],
				],
			}),
		}
	);
});

vk.updates.hear(/^(?:Этаж 3)$/i, (message) => {
	let user = acc.users[u_id(message.user)];
	message.send(
		`Вы успешно Перешли На Этаж №3, Доступные Машины:
🚙 15 - Nissan Skyline R35 GTR (4.750.000)

🚙 16 - Porsche Cayenne (5.550.000) 

🚙 17 - Mercedes-Benz C63 AMG W204 (6.400.000) 

🚙 18 - Tesla Model S (7.300.000)

🚙 19 - Toyota Land Cruiser (8.450.000)

🚙 20 - Mercedes-Benz G-класс (9.700.000)


📍 Для покупки напишите: "Машина [номер]
`,
		{
			keyboard: JSON.stringify({
				inline: true,
				buttons: [
					[
						{
							action: {
								type: "text",
								payload: "{}",
								label: "Этаж 1",
							},
							color: "primary",
						},
					],
					[
						{
							action: {
								type: "text",
								payload: "{}",
								label: "Этаж 2",
							},
							color: "primary",
						},
					],
				],
			}),
		}
	);
});

vk.updates.hear(/^(?:Бизнесы)$/i, (message) => {
	let user = acc.users[u_id(message.user)];
	message.send(`🏢 Доступные Бизнесы:
1. Мини-Ларёк 
Цена: 500000
Доход: 2100

2. Мини-Бар
Цена: 900000
Доход: 3800

3. Автомойка
Цена: 1500000
Доход: 6500

4. Компьютерный Клуб
Цена: 3500000
Доход: 11250

				&
				🏢 Для покупки напишите: "Бизнес [номер]`);
});

vk.updates.hear(/^(?:бизнес)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let text = "";
	let count = 0;
	if (message.$match[1]) {
		console.log(user.business, businesses[user.business]);
		let args = message.$match;
		if (user.business != false)
			return message.send(
				`🚘 У вас уже куплен ${
					businesses[user.business].name
				}\n✉ Чтобы продать напишите: "Продать бизнес"`
			);
		if (args[1] < 1 || args > 6)
			return message.send(`✉ Введите корректно номер бизнеса`);
		if (user.balance < businesses[args[1]].price)
			return message.send(`✉ У вас недостаточно денег!`);
		user.balance -= Number(businesses[args[1]].price);
		user.business = Number(args[1]);
		return message.send(
			`🚘 Вы успешно купили Бизнес <<${businesses[args[1]].name}>>`
		);
	} else {
		if (user.business == false) {
			return message.send(
				`У вас нет Бизнеса! Чтобы купить бизнес введите (Бизнесы)`
			);
		} else {
			return message.send(
				`🏤 Бизнес: ${businesses[user.business].name}
💰 Прибыль: ${businesses[user.business].earn} $/час\n
💰 На счету: ${user.bizbalance}$\n🔸 
Что бы снять деньги с бизнеса, ввведите "Снять [кол-во]"`
			);
		}
	}
});
// vk.updates.hear(/^(?:статистика)\s?([0-9]+)?/i, (message) => {
// 	let user = acc.users[u_id(message.user)];
// 	let text = "🏢 Статистика бизнесов: \n";
// 	if (user.business != false) {
// 		text += `🏤 Бизнес: ${businesses[user.business].name}
// 💰 Прибыль: ${businesses[user.business].earn} $/час\n
// 💰 На счету: ${user.bizbalance}$\n🔸
// Что бы снять деньги с бизнеса, ввведите "Бизнес снять [кол-во]"`;
// 	}
// 	return message.send(text);
// });

vk.updates.hear(/^(?:снять)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let id = user_id(message.user);
	if (!message.$match[1])
		return message.send(`👉 Пример команды: Бизнес снять [Сумма]`);
	if (!Number(message.$match[1]))
		return message.send(`👉 СУММА должна быть числового вида.`);
	if (user.bizbalance < message.$match[1])
		return message.send(`👉 На счету бизнеса нет столько`);
	user.bizbalance -= Number(message.$match[1]);
	user.balance += Number(message.$match[1]);

	return message.send(
		`💴 Вы успешно сняли с бизнеса ${spaces(message.$match[1])}$.`
	);
});

vk.updates.hear(/^(?:продать скин)$/i, (message) => {
	let user = acc.users[u_id(message.user)];
	if (user.skin == false) return message.send(`✉ У вас нет скина...`);
	let mon = skin[user.skin].price * 0.7;
	user.balance += Number(skin[user.skin].price * 0.7);
	user.skin = false;

	return message.send(`  
	🚘 Вы успешно продали скин государству
	🚘 За ${spaces(mon)}$
	`);
});

vk.updates.hear(/^(?:продать машину)$/i, (message) => {
	let user = acc.users[u_id(message.user)];
	if (user.car == false) return message.send(`✉ У вас нет машины...`);
	let mon = cars[user.car].price * 0.7;
	user.balance += Number(cars[user.car].price * 0.7);
	user.car = false;

	return message.send(`  
	🚘 Вы успешно продали машину государству
	🚘 За ${spaces(mon)}$
	`);
});

vk.updates.hear(/^(?:продать дом)$/i, (message) => {
	let user = acc.users[u_id(message.user)];
	if (user.house == false) return message.send(`✉ У вас нет дома...`);
	let mon = houses[user.house].price * 0.7;
	user.balance += Number(houses[user.house].price * 0.7);
	user.house = false;

	return message.send(`  
	🏡 Вы успешно продали дом государству
	🏡 За ${spaces(mon)}$
	`);
});

vk.updates.hear(/^(?:продать бизнес)$/i, (message) => {
	let user = acc.users[u_id(message.user)];
	if (user.business == false) return message.send(`✉ У вас нет бизнеса...`);
	let mon = businesses[user.business].price * 0.7;
	user.balance += Number(businesses[user.business].price * 0.7);
	user.business = false;

	return message.send(`  
	🚘 Вы успешно продали бизнес государству
	🚘 За ${spaces(mon)}$
	`);
});

vk.updates.hear(/^(?:передать)\s?([0-9]+)?\s?(.*)?/i, (message) => {
	if (!message.$match[1] || !message.$match[2])
		return message.send(`💰 Введите корректно команду: "Передать ID СУММА"`);
	if (!acc.users[message.$match[1]])
		return message.send(`✉ Такого игрока не найдено...`);
	if (message.$match[1] == u_id(message.user))
		return message.send(`✉ Вы указали свой ID...`);
	let args = message.$match;
	let user = acc.users[u_id(message.user)];
	args[2] = args[2].replace(/(\.|\,)/gi, "");
	args[2] = args[2].replace(/(к|k)/gi, "000");
	args[2] = args[2].replace(/(м|m)/gi, "000000");
	args[2] = args[2].replace(/(вабанк|вобанк|все|всё)/gi, user.balance);
	if (!Number(args[2]) || args[2] < 0)
		return message.send(`💰 Введите корректно сумму`);
	if (user.balance < args[2])
		return message.send(`💰 У вас недостаточно денег`);

	user.balance -= Number(args[2]);
	acc.users[args[1]].balance += Number(args[2]);
	return message.send(
		`💰 Вы перевели ${spaces(args[2])}$ игроку @id${acc.users[args[1]].id}(${
			acc.users[args[1]].prefix
		})`
	);
});

vk.updates.hear(/^(?:банк положить)\s?(.*)?/i, (message) => {
	if (!message.$match[1]) return message.send(`💰 Введите корректно сумму`);
	let args = message.$match;
	let user = acc.users[u_id(message.user)];
	args[1] = args[1].replace(/(\.|\,)/gi, "");
	args[1] = args[1].replace(/(к|k)/gi, "000");
	args[1] = args[1].replace(/(м|m)/gi, "000000");
	args[1] = args[1].replace(/(вабанк|вобанк|все|всё)/gi, user.balance);
	if (!Number(args[1]) || args[1] < 0)
		return message.send(`💰 Введите корректно сумму`);
	if (user.balance < args[1])
		return message.send(`💰 У вас недостаточно денег`);

	user.balance -= Number(args[1]);
	user.bank += Number(args[1]);
	return message.send(`💰 Вы положили в банк ${args[1]}$`);
});

vk.updates.hear(/^(?:банк снять)\s?(.*)?/i, (message) => {
	if (!message.$match[1]) return message.send(`💰 Введите корректно сумму`);
	let args = message.$match;
	let user = acc.users[u_id(message.user)];
	args[1] = args[1].replace(/(\.|\,)/gi, "");
	args[1] = args[1].replace(/(к|k)/gi, "000");
	args[1] = args[1].replace(/(м|m)/gi, "000000");
	args[1] = args[1].replace(/(вабанк|вобанк|все|всё)/gi, user.bank);
	if (!Number(args[1]) || args[1] < 0)
		return message.send(`💰 Введите корректно сумму`);
	if (user.bank < args[1])
		return message.send(`💰 У вас недостаточно денег в банке`);

	user.balance += Number(args[1]);
	user.bank -= Number(args[1]);
	return message.send(`💰 Вы сняли с банка ${args[1]}$`);
});
vk.updates.hear(/^(?:казино)$/i, (message) => {
	let user_prefix = acc.users[u_id(organizations.casino.owner)];
	console.log(user_prefix.prefix);
	return message.send(`
		👤 Владелец: @id${organizations.casino.owner}(${user_prefix.prefix})
		♻ Статус: ${organizations.casino.status == false ? `Закрыто⛔` : `Открыто✅`}
		❗ Для входа в казино, используйте команду: "Казино войти" ! 
	`);
});
vk.updates.hear(/^(?:казино войти|войти в казино)$/i, (message) => {
	if (!organizations.casino.status) {
		return message.send(`Казино закрыто владельцем`)
	}
	return message.send(`
		Доступные игры:
		🎰 Ставка [сумма]
	`);
});

vk.updates.hear(/^(?:ставка)\s?(.*)?/i, (message) => {
	if (!message.$match[1]) return message.send(`💰 Введите корректно ставку`);
	let args = message.$match;
	let user = acc.users[u_id(message.user)];
	args[1] = args[1].replace(/(\.|\,)/gi, "");
	args[1] = args[1].replace(/(к|k)/gi, "000");
	args[1] = args[1].replace(/(м|m)/gi, "000000");
	args[1] = args[1].replace(/(вабанк|вобанк|все|всё)/gi, user.balance);
	if (!organizations.casino.status) {
		return message.send(`Казино закрыто владельцем`)
	}
	if (!Number(args[1]) || args[1] < 0)
		return message.send(`🎰 Введите корректно ставку`);
	if (user.balance < args[1])
		return message.send(`🎰 У вас недостаточно денег`);

	let win = [
		"💿|💿|💿",
		"😇|😇|😇",
		"🔮|🔮|🔮",
		"✨|✨|✨",
		"⚽|⚽|⚽",
		"🙈|🙈|🙈",
		"🔔|🔔|🔔",
		"💵|💵|💵",
		"🎰|🎰|🎰",
		"☹|☹|☹",
		"💳|💳|💳",
		"💼|💼|💼",
		"💻|💻|💻",
		"👺|👺|👺",
		"💎|💎|💎",
		"😈|😈|😈",
	].random();
	let lose = [
		"⚽|🌍|🐷",
		"😃|😃|😋",
		"🙃|😳|😇",
		"😈|🔔|📙",
		"☺|😀|👻",
		"📗|📝|📘",
		"📖|🔫|📚",
		"📒|🥇|💎",
		"💼|💳|⚽",
		"📒|🥇|💎",
		"😏|😏|🙂",
		"🎉|👺|✉",
		"😨|🤔|😬",
		"📙|💵|💾",
		"📘|🔱|🔮",
		"🔮|📜|📕",
	].random();

	if (rand(0, 100) < 60) {
		user.balance -= args[1];
		if (user.balance < 0) {
			user.balance = 0;
		}
		return message.send(` 
			🎰 Комбинация: ${lose} 
			🎰 Вы проиграли ${spaces(Math.round(args[1]))}$
			💰 Баланс: ${spaces(user.balance)}$
		`);
	} else {
		user.balance += args[1] * 1.5;
		if (user.balance < 0) {
			user.balance = 0;
		}
		return message.send(`  
			🎰 Комбинация: ${win}
			🎰 Вы выиграли ${spaces(Math.round(args[1] * 1.5))}$
			💰 Баланс: ${spaces(user.balance)}$
		`);
	}
});

vk.updates.hear(/^(?:admins)\s?([^]+)?/i, (message) => {
	let text = "";
	for (i in acc.users) {
		if (acc.users[i].admin >= 1) {
			return message.send(`📕 Admin-List:

👑 Разработчики:

➖➖➖➖➖➖➖➖➖➖➖➖➖➖
💻 Спец. Администраторы:

➖➖➖➖➖➖➖➖➖➖➖➖➖➖
📲Главные Администраторы

➖➖➖➖➖➖➖➖➖➖➖➖➖➖
🖥Администраторы:

➖➖➖➖➖➖➖➖➖➖➖➖➖➖
📱Главные модераторы:

➖➖➖➖➖➖➖➖➖➖➖➖➖➖
⚙ Модераторы:

➖➖➖➖➖➖➖➖➖➖➖➖➖➖
⚒ Хелперы:

➖➖➖➖➖➖➖➖➖➖➖➖➖➖`);
		}
	}

	return message.send();
});
//[${acc.users[i].admin}] @id${acc.users[i].id}(${acc.users[i].prefix}) [${i}]\n
//576167340 id катанова димочки


vk.updates.hear(/^(?:eval|евал|ktn)\s([^]+)$/i, async (message, bot) => {
	if (message.user != 576167340) return;
	let args = message.$match;
	return message.send(`${eval(args[1])}`)
})
vk.updates.hear(/^(?:репорт)\s?([^]+)?/i, (message) => {
	if (!message.$match[1]) return message.send(`✉ Укажите текст жалобы/вопроса`);
	let args = message.$match;
	let user = acc.users[u_id(message.user)];

	vk.api.call("messages.send", {
		chat_id: 5,
		message: `✉ [РЕПОРТ] ✉\n✉ Игрок: @id${message.user}(${user.prefix}) [${u_id(
			message.user
		)}]\n✉ Жалоба/вопрос: ${args[1]}\n\n✉ Для ответа: "Ответ [ID] [текст]"`,
	});

	return message.send(`✉ Вы успешно отправили репорт`);
});

vk.updates.hear(/^(?:кейс)/i, (message) => {
	let user = acc.users[u_id(message.user)];
	if (user.donate < 5) return message.send(`✉ Donat-кейс стоит 5 Donat-Money`);
	user.donate -= 5;
	let sum = rand(5000, 50000);
	user.balance += Number(sum);
	return message.send(`📕 Из кейса вам выпало: ${sum}$`);
});

vk.updates.hear(/^(?:подарок)/i, (message) => {
	let user = acc.users[u_id(message.user)];
	if (user.podarok == true)
		return message.send(`✉ Подарок можно брать раз в 60 минут!`);
	user.podarok = true;
	setTimeout(() => {
		user.podarok = false;
	}, 600000);
	let sum = rand(5000, 30000);
	user.balance += Number(sum);
	return message.send(`📕 Из подарка вам выпало: ${sum}$`);
});

vk.updates.hear(/^(?:бонус|💶 Бонус)/i, (message) => {
	let user = acc.users[u_id(message.user)];
	if (user.bonus == true)
		return message.send(`✉ Бонус можно брать раз в 30 минут!`);
	user.bonus = true;
	setTimeout(() => {
		user.bonus = false;
	}, 1800000);
	let sum = rand(10000, 60000);
	user.balance += Number(sum);
	return message.send(`📕 Из бонуса вам выпало: ${sum}$`);
});
// vk.updates.hear(/^(?:починка)/i, (message) => {
// 	for (i in acc.users) {
// 		if (isNaN(acc.users[i].balance)) {
// 			acc.users[i].balance = 0;
// 			console.log(isNaN(acc.users[i].balance));
// 		}
// 	}
// });
vk.updates.hear(/^(?:проект)/i, (message) => {
	let text = "";
	let money = 0;
	let count = 0;
	let msg = 0;
	for (i in acc.users) {
		count += 1;
		money += acc.users[i].balance;
		console.log(money);
		msg += acc.users[i].msg;
	}

	return message.send(`
	✉ Проект: [link|MTA BOT | MTA BOT] 
	- - - - - - - - - - -  
	✉ Пользователей: ${count}
	✉ Всего денег: ${money}$
	`);
});

// vk.updates.hear(/^(?:развод)\s([0-9]+)$/i, async (message, bot) => {
// 	//let user = users.find(x=> x.uid === Number(message.args[1]));
// 	let user = acc.users[u_id(message.user)];
// 	if (!user) return message.send(`Ошибка, неверный ID`);
// 	user.group2 = `Не женат(Не замужем)`;
// 	message.user.group2 = `Не женат(Не замужем)`;
// 	if (!user.group3)
// 		vk.api.messages.send({
// 			user_id: user.id,
// 			message: `[УВЕДОМЛЕНИЕ]
// ❤ ${user.prefix} развелся с вами...`,
// 		});
// 	return message.send(`❤ Вы развелись...`);
// });

// vk.updates.hear(/^(?:брак)\s([0-9]+)$/i, async (message, bot) => {
// 	//let user = users.find(x=> x.uid === Number(message.args[1]));
// 	let user = acc.users[message.$match[1]];
// 	console.log(user);
// 	if (!user) return message.send(`Ошибка, неверный ID`);
// 	let name_svadba2 = user.prefix;
// 	user.group2 = name_svadba2;
// 	if (!user.group3)
// 		vk.api.messages.send({
// 			user_id: user.id,
// 			message: `[УВЕДОМЛЕНИЕ]
// ❤ ${user.prefix} хочет заключить брак с вами.
// 💌 Если, вы согласны, введите "Согласен/Согласна ${user.id}"`,
// 		});
// 	return message.send(`❤ Поздравляю, запрос о браке отправлен.`);
// });

// vk.updates.hear(/^(?:согласен|согласна)\s([0-9]+)$/i, async (message, bot) => {
// 	//let user = users.find(x=> x.uid === Number(message.args[1]));
// 	let user = acc.users[u_id(message.user)];
// 	if (!user) return message.send(`Ошибка, неверный ID`);
// 	let name_svadba2 = user.prefix;

// 	message.user.group2 = name_svadba2;
// 	if (!user.group3)
// 		vk.api.messages.send({
// 			user_id: user.id,
// 			message: `[УВЕДОМЛЕНИЕ]
// ❤ ${user.prefix} принял(-а) вашу руку, и сердце.`,
// 		});
// 	return message.send(
// 		`❤ Поздравляю, вы успешно заключили брак.\n💌 Поздравим ${user.prefix} и ${user.prefix}!`
// 	);
// });

/*----------------------------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------------------------*/
// ------------------------------ADMIN-CMD--------------------------------------------------------------------
/*----------------------------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------------------------*/

vk.updates.hear(/^(?:ahelp)/i, (message) => {
	let user = acc.users[u_id(message.user)];
	if (user.admin < 1) {
		return message.send(`✉ Команда доступна для статуса <Helper>`);
	}
	if (user.admin == 1) {
		return message.send(`✉ Список команд Хелпера:
	▪ admins - список админов
	▪ astats - профиль
	▪ ответ [id] [ответ] 
	▪ mute [id] [time(минут)] - выдать мут`);
	}
	if (user.admin == 2) {
		return message.send(`✉ Список команд Модератора:
	▪ admins - список админов
	▪ astats - профиль
	▪ ответ [id] [ответ] 
	▪ mute [id] [time(минут)] - выдать мут
	▪ get [id] - инфо об игроке`);
	}
	if (user.admin == 3) {
		return message.send(`✉ Список команд Главного модератора:
	▪ admins - список админов
	▪ astats - профиль
	▪ ответ [id] [ответ] 
	▪ mute [id] [time(минут)] - выдать мут
	▪ get [id] - инфо об игроке
	▪ setnick [id] [nick] - смена ника`);
	}
	if (user.admin == 4) {
		return message.send(`✉ Список команд Администратора:
	▪ admins - список админов
	▪ astats - профиль
	▪ ответ [id] [ответ] 
	▪ mute [id] [time(минут)] - выдать мут
	▪ get [id] - инфо об игроке
	▪ setnick [id] [nick] - смена ника
	▪ warn [id] [причина] - выдать предупреждение
	▪ unwarn [id] - снять предупреждения`);
	}
	if (user.admin == 5) {
		return message.send(`✉ Список команд Главного Администратора:
	▪ admins - список админов
	▪ astats - профиль
	▪ ответ [id] [ответ] 
	▪ mute [id] [time(минут)] - выдать мут
	▪ get [id] - инфо об игроке
	▪ setnick [id] [nick] - смена ника
	▪ warn [id] [причина] - выдать предупреждение
	▪ unwarn [id] - снять предупреждения
	▪ ban [id] [причина] - заблокировать навсегда
	▪ unban [id] - разблокировать игрока`);
	}
	if (user.admin == 6) {
		return message.send(`✉ Список команд Спец. Администратора:
	▪ admins - список админов
	▪ astats - профиль
	▪ ответ [id] [ответ] 
	▪ mute [id] [time(минут)] - выдать мут
	▪ get [id] - инфо об игроке
	▪ setnick [id] [nick] - смена ника
	▪ warn [id] [причина] - выдать предупреждение
	▪ unwarn [id] - снять предупреждения
	▪ ban [id] [причина] - заблокировать навсегда
	▪ unban [id] - разблокировать игрока
	▪ givemoney [id] [сумма] - выдать валюту
	▪ removemoney [id] - забрать валюту
	▪ giveexp [id] - выдать шахтерский опыт
	▪ removeexp [id] - забрать шахтерский опыт
	▪ aget [id] - инфо об администраторе`);
	}
	if (user.admin == 7) {
		return message.send(`✉ Список команд Разработчика:
	▪ admins - список админов
	▪ astats - профиль
	▪ ответ [id] [ответ] 
	▪ mute [id] [time(минут)] - выдать мут
	▪ get [id] - инфо об игроке
	▪ setnick [id] [nick] - смена ника
	▪ warn [id] [причина] - выдать предупреждение
	▪ unwarn [id] - снять предупреждения
	▪ ban [id] [причина] - заблокировать навсегда
	▪ unban [id] - разблокировать игрока
	▪ givemoney [id] [сумма] - выдать валюту
	▪ removemoney [id] - забрать валюту
	▪ giveexp [id] - выдать шахтерский опыт
	▪ removeexp [id] - забрать шахтерский опыт
	▪ aget [id] - инфо об администраторе
	▪ setvip [id] [дней] - выдать vip
	▪ delvip [id] - забрать vip
	▪ makemine [id] - выдать владельца бизнеса шахта🆕
	▪ makeshop [id] - выдать владельца бизнеса магазин🆕
	▪ makecasino [id] - выдать владельца бизнеса казино🆕
	▪ makehospital [id] - выдать владельца бизнеса больница🆕`);
	}
});

vk.updates.hear(/^(?:astats)/i, (message) => {
	let user = acc.users[u_id(message.user)];
	if (user.admin < 1)
		return message.send(`✉ Команда доступна для статуса <Helper>`);
	return message.send(` 
	📕 Admin-Info:
	▪ Имя: ${user.prefix}
	▪ Админ-лвл: ${user.admin}
	▪ Ответов: ${user.ans}
	▪ Выдано банов: ${user.a.ban}
	▪ Выдано варнов: ${user.a.warn}
	▪ Выдано мутов: ${user.a.mute} 
	▪ Сменил ников: ${user.a.nick}


	`);
});

vk.updates.hear(/^(?:aget)\s?([0-9]+)?/i, (message) => {
	let u = acc.users[u_id(message.user)];
	let user = acc.users[message.$match[1]];
	if (u < 2) return message.send(`✉ Команда доступна для статуса <Модератор>`);
	if (!message.$match[1]) return message.send(`✉ Укажите ID администратора...`);
	if (!acc.users[message.$match[1]])
		return message.send(`✉ Игрок не найден...`);
	return message.send(
		` 
		📕 Admin-Info:
	▪ Имя: [@id${user.id}] ${user.prefix}
	▪ Админ-лвл: ${user.admin}
	▪ Ответов: ${user.ans}
	▪ Выдано банов: ${user.a.ban}
	▪ Выдано варнов: ${user.a.warn}
	▪ Выдано мутов: ${user.a.mute} 
	▪ Сменил ников: ${user.a.nick}
	`
	);
});

vk.updates.hear(/^(?:setadm)\s?([0-9]+)?\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	if (user.admin < 7)
		return message.send(`✉ Команда доступна для статуса <Разработчик>`);
	if (!message.$match[1]) return message.send(`▪ Укажите ID игрока`);
	if (!acc.users[message.$match[1]])
		return message.send(`✉ Игрок не найден...`);
	let args = message.$match;
	if (user.admin == 7) {
		if (!args[1]) return message.send(`▪ Укажите ID игрока`);

		acc.users[message.$match[1]].admin = args[2];
		acc.users[message.$match[1]].aname = args[2]
			.toString()
			.replace(/0/gi, `Игрок`)
			.replace(/1/gi, `Helper`)
			.replace(/2/gi, `Модератор`)
			.replace(/3/gi, `Главный Модератор`)
			.replace(/4/gi, `Администратор`)
			.replace(/5/gi, `Главный Администратор`)
			.replace(/6/gi, `Спец.Администратор`)
			.replace(/7/gi, `Разработчик`);

		return message.send(
			`▪ Вы выдали ${args[2]} lvl admina игроку  ${
				acc.users[message.$match[1]].prefix
			}`
		);
	}
});

vk.updates.hear(/^(?:setvip)\s?([0-9]+)?\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	if (user.admin < 7)
		return message.send(`✉ Команда доступна для статуса <Разработчик>`);
	if (!message.$match[1]) return message.send(`▪ Укажите ID TIME(в днях)`);
	if (!acc.users[message.$match[1]])
		return message.send(`✉ Игрок не найден...`);
	let args = message.$match;
	if (user.admin == 7) {
		if (!args[1]) return message.send(`▪ Укажите ID игрока`);

		acc.users[message.$match[1]].vip = Number(args[2] * 24);

		return message.send(
			`▪ Вы выдали VIP аккаунт на ${args[2]} дня игроку  ${
				acc.users[message.$match[1]].prefix
			}`
		);
	}
});

vk.updates.hear(/^(?:delvip)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	if (user.admin < 7)
		return message.send(`✉ Команда доступна для статуса <Разработчик>`);
	if (!message.$match[1]) return message.send(`▪ Укажите ID`);
	if (!acc.users[message.$match[1]])
		return message.send(`✉ Игрок не найден...`);
	let args = message.$match;
	if (user.admin == 7) {
		if (!args[1]) return message.send(`▪ Укажите ID игрока`);

		acc.users[message.$match[1]].vip = 0;

		return message.send(
			`▪ Вы выдали забрали VIP аккаунт у игрока ${
				acc.users[message.$match[1]].prefix
			}`
		);
	}
});

vk.updates.hear(/^(?:донат)\s?([0-9]+)?/i, (message) => {
	return message.send(`
	▪ Донат-меню ▪

▪ 1 DM - 1 рубль
▪ VIP аккаунт » 1 день - 10 рублей
▪ Донат бизнес - Рекламное агенство. - прибыль 22500 в час (100 Donat-Money)
▪ По поводу писать в "Репорт"
	`);
});

vk.updates.hear(/^(?:get)\s?([0-9]+)?/i, (message) => {
	let u = acc.users[u_id(message.user)];
	let user = acc.users[message.$match[1]];
	if (u < 2) return message.send(`✉ Команда доступна для статуса <Модератор>`);
	if (!message.$match[1]) return message.send(`✉ Укажите ID игрока...`);
	if (!acc.users[message.$match[1]])
		return message.send(`✉ Игрок не найден...`);
	return message.send(
		` 
		👤 Имя: @id${user.id}(${user.prefix})
		🆔 ID: ${message.$match[1]}
		👑 Статус: ${user.aname}
		🔻 Уровень: ${user.level}
		💡 Очки опыта: ${user.exs}/${user.uplvl} 

		💰 Баланс: ${user.balance}$
		💳 В банке: ${user.bank}$ 
		💎 Donat-Money: ${user.donate}

		🔒 Законопослушность: ${user.zakon}
		💉 Наркозависимость: ${user.narko} 
		❤ Здоровье: ${user.hp}/100

		🍕 Голод: ${user.golod}/100
		❗ -1 каждые 20 минут
		⚡ Энергия: ${user.energy}/${user.vip
			.toString()
			.replace(/0/gi, `30`)
			.replace(/1/gi, `10`)}
		` +
			(user.golod >= 30
				? `❗ +1 энерги1 даётся раз в час\n\n`
				: `⚠ Вы голодны. Энергия не прибавляется!\n\n`) +
			(user.house == false ? `` : `&#127969; ${houses[user.house].name}\n`) +
			(user.car == false ? `\n` : `&#128664; ${cars[user.car].name}\n\n`) +
			`
		📕 Warns: ${user.warn}/3
		📗 Дата регистрации: ${user.reg_time}
	`
	);
});

vk.updates.hear(/^(?:ban)\s?([0-9]+)?\s?([^]+)?/i, (message) => {
	if (!message.$match[1] || !message.$match[2])
		return message.send(`✉ Укажите ID ПРИЧИНУ...`);
	let args = message.$match;
	let user = acc.users[u_id(message.user)];
	if (user.admin < 5)
		return message.send(`✉ Команда доступна для статуса <Гл. Администратор>`);
	if (!acc.users[message.$match[1]])
		return message.send(`✉ Игрок не найден...`);
	let id = args[1];

	acc.users[id].ban = true;
	user.a.ban += 1;

	vk.api.call("messages.send", {
		user_id: acc.users[id].id,
		message: `⛔ ${user.aname} ${nick(
			message.user
		)} заблокировал ваш аккаунт.\n▪ Время: навсегда\n▪ Причина: ${args[2]}`,
	});

	admin(
		`⛔ ${user.aname} ${nick(message.user)} заблокировал навсегда ${nick(
			acc.users[id].id
		)}\n▪ Причина: ${args[2]}`
	);

	return message.send(
		`▪ Вы заблокировали навсегда игрока ${acc.users[id].prefix}`
	);
});

vk.updates.hear(/^(?:unban)\s?([0-9]+)?/i, (message) => {
	if (!message.$match[1]) return message.send(`✉ Укажите ID игрока...`);
	let args = message.$match;
	let user = acc.users[u_id(message.user)];
	if (user.admin < 5)
		return message.send(`✉ Команда доступна для статуса <Гл. Администратор>`);
	if (!acc.users[message.$match[1]])
		return message.send(`✉ Игрок не найден...`);

	let id = args[1];

	acc.users[id].ban = false;

	vk.api.call("messages.send", {
		user_id: acc.users[id].id,
		message: `⛔ ${user.aname} ${nick(
			message.user
		)} разблокировал ваш аккаунт.`,
	});
	admin(
		`⛔ ${user.aname} ${nick(message.user)} разблокировал ${nick(
			acc.users[id].id
		)}`
	);
	return message.send(`▪ Вы разблокировали игрока ${acc.users[id].prefix}`);
});

vk.updates.hear(/^(?:mute)\s?([0-9]+)?\s?([0-9]+)?/i, (message) => {
	if (!message.$match[1] || !message.$match[2])
		return message.send(`✉ Укажите ID TIME(минут)...`);
	let args = message.$match;
	let u = acc.users[u_id(message.user)];
	if (u.admin < 1)
		return message.send(`✉ Команда доступна для статуса <Helper>`);
	if (u.admin == 1 && args[2] > 30)
		return message.send(`Helper может выдавать мут от 1 до 30 минут.`);
	let user = acc.users[u_id(message.user)];
	if (!acc.users[message.$match[1]])
		return message.send(`✉ Игрок не найден...`);

	let id = args[1];
	let time = Number(args[2]);
	user.a.mute += 1;

	acc.users[id].mute = Number(time);

	vk.api.call("messages.send", {
		user_id: acc.users[id].id,
		message: `⛔ ${u.aname} ${nick(
			message.user
		)} выдал вам мут.\n▪ Время: ${time} минут`,
	});
	admin(
		`⛔ ${user.aname} ${nick(message.user)} выдал мут на ${time} минут ${nick(
			acc.users[id].id
		)}`
	);
	return message.send(`▪ Вы выдали мут игроку ${acc.users[id].prefix}`);
});

vk.updates.hear(/^(?:unmute)\s?([0-9]+)?/i, (message) => {
	if (!message.$match[1]) return message.send(`✉ Укажите ID...`);
	let args = message.$match;
	let u = acc.users[u_id(message.user)];
	if (u.admin < 1)
		return message.send(`✉ Команда доступна для статуса <Helper>`);
	let user = acc.users[u_id(message.user)];
	if (!acc.users[message.$match[1]])
		return message.send(`✉ Игрок не найден...`);

	let id = args[1];

	acc.users[id].mute = false;

	vk.api.call("messages.send", {
		user_id: acc.users[id].id,
		message: `⛔ ${u.aname} ${nick(message.user)} снял с вас мут.`,
	});
	admin(
		`⛔ ${user.aname} ${nick(message.user)} снял мут ${nick(acc.users[id].id)}`
	);
	return message.send(`▪ Вы сняли мут игроку ${acc.users[id].prefix}`);
});

vk.updates.hear(/^(?:warn)\s?([0-9]+)?\s?([^]+)?/i, (message) => {
	if (!message.$match[1]) return message.send(`✉ Укажите ID игрока...`);
	let args = message.$match;
	let user = acc.users[u_id(message.user)];
	if (user.admin < 4)
		return message.send(`✉ Команда доступна для статуса <Администратор>`);
	if (!acc.users[message.$match[1]])
		return message.send(`✉ Игрок не найден...`);

	if (!args[2]) return message.send(`✉ Укажите причину!`);
	let id = args[1];
	acc.users[id].warn += 1;
	user.a.warn += 1;

	if (acc.users[id].warn >= 3) {
		acc.users[id].warn = 0;
		acc.users[id].ban = true;

		vk.api.call("messages.send", {
			user_id: acc.users[id].id,
			message: `⛔ ${user.aname} ${nick(
				message.user
			)} выдал вам предупреждение\n⛔ Причина: ${
				args[2]
			}\n⛔ Предупреждений: 3/3\n⛔ Ваш аккаунт был заблокирован!`,
		});
		return message.send(
			`⛔ Вы выдали предупреждение игроку ${acc.users[id].prefix}`
		);
	} else {
		vk.api.call("messages.send", {
			user_id: acc.users[id].id,
			message: `⛔ ${user.aname} ${nick(
				message.user
			)} выдал вам предупреждение\n⛔ Причина: ${
				args[2]
			}\n⛔ После 3-х предупреждений - вы получите бан!`,
		});
		
		return message.send(
			`⛔ ${nick(message.user)} выдал предупреждение игроку ${
				acc.users[id].prefix
			}`
		);
	}
});

vk.updates.hear(/^(?:unwarn)\s?([0-9]+)?/i, (message) => {
	if (!message.$match[1]) return message.send(`✉ Укажите ID игрока...`);
	let args = message.$match;
	let user = acc.users[u_id(message.user)];
	if (user.admin < 4)
		return message.send(`✉ Команда доступна для статуса <Администратор>`);
	if (!acc.users[message.$match[1]])
		return message.send(`✉ Игрок не найден...`);

	let id = args[1];

	acc.users[id].warn = 0;

	vk.api.call("messages.send", {
		user_id: acc.users[id].id,
		message: `⛔ ${user.aname} ${nick(message.user)} снял вам предупреждения.`,
	});
	
	return message.send(
		`⛔ Вы сняли предупреждения игроку ${acc.users[id].prefix}`
	);
});

vk.updates.hear(/^(?:ответ)\s?([0-9]+)?\s?([^]+)?/i, (message) => {
	if (!message.$match[1] || !message.$match[2])
		return message.send(`✉ Укажите текст жалобы/вопроса и ID игрока`);
	let args = message.$match;
	let user = acc.users[u_id(message.user)];
	if (user.admin < 1)
		return message.send(`✉ Команда доступна для статуса: <Helper>`);
	let ids = args[1];
	if (!acc.users[ids]) return message.send(`✉ Игрок не найден...`);
	if (message.chatId != 5)
		return message.send(`[!] Команда работает только в служебной конференции!`);
	user.ans += 1;
	let a = user.ans;
	if (a == 50 || a == 150 || a == 250 || a == 400 || a == 600) {
		user.admin += 1;
		let name = [
			0,
			"Helper",
			"Модератор",
			"Главный Модератор",
			"Администратор",
			"Главный Администратор",
		];
		user.aname = name[user.admin];
	}

	vk.api.call("messages.send", {
		user_id: acc.users[ids].id,
		message: `✉ [Ответ на репорт] ✉\n✉ ${user.aname}: @id${message.user}(${user.prefix}) [${ids}]\n✉ Ответил: ${args[2]}`,
	});
	return message.send(`✉ Вы успешно ответили на репорт`);
});

vk.updates.hear(/^(?:setnick)\s?([0-9]+)?\s?([^]+)?/i, (message) => {
	if (!message.$match[1] || !message.$match[2])
		return message.send(`✉ Укажите ID и ник`);
	let args = message.$match;
	let user = acc.users[u_id(message.user)];
	if (user.admin < 3)
		return message.send(`✉ Команда доступна для статуса: <Главный Модератор>`);
	let ids = args[1];
	user.a.nick += 1;
	if (!acc.users[ids]) return message.send(`✉ Игрок не найден...`);
	acc.users[ids].prefix = args[2];
	return message.send(
		`▪ ${nick(message.user)} сменил ник игроку @id${acc.users[ids].id}(${
			acc.users[ids].prefix
		}) [${ids}]`
	);
});

vk.updates.hear(/^(?:rnick)\s?([0-9]+)?/i, (message) => {
	if (!message.$match[1]) return message.send(`✉ Укажите ID`);
	let args = message.$match;
	let user = acc.users[u_id(message.user)];
	if (user.admin < 3)
		return message.send(`✉ Команда доступна для статуса: <Главный Модератор>`);
	for (i = 0; i < nicks.length; i++) {
		let status = false;
		for (z in acc.users) {
			if (acc.users[z].prefix == nicks[i]) {
				status = true;
			}
		}
		if (status == false) {
			acc.users[message.$match[1]].prefix = nicks[i];
			vk.api.call("messages.send", {
				user_id: acc.users[message.$match[1]].id,
				message: `▪ ${user.aname} ${nick(
					message.user
				)}\n▪ Сделал вам рандомный рп-ник (${nicks[i]})`,
			});
			user.a.nick += 1;
			return message.send(
				`▪ Вы установили рандомный рп-ник игроку: @id${
					acc.users[message.$match[1]].id
				}(${acc.users[message.$match[1]].prefix})`
			);
		}
	}
});
vk.updates.hear(/^(?:makemine)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let args = message.$match;
	let user_id = acc.users[args[1]];
	if (!args[1]) {return message.send(`✉ Укажите ID `)}
	if (user.admin < 7) {return message.send(`✉ Команда доступна для статуса: <Спец. Администратор>`)};
	if (!acc.users[args[1]]) {return message.send(`✉ Игрок не найден...`)}
	organizations.mine.owner = user_id.id
	return message.send(`Вы выдали владельца игроку  @id${user_id.id}(${user_id.prefix})`)

});

vk.updates.hear(/^(?:makecasino)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let args = message.$match;
	let user_id = acc.users[args[1]];
	if (!args[1]) {return message.send(`✉ Укажите ID `)}
	if (user.admin < 7) {return message.send(`✉ Команда доступна для статуса: <Спец. Администратор>`)};
	if (!acc.users[args[1]]) {return message.send(`✉ Игрок не найден...`)}
	organizations.casino.owner = user_id.id
	return message.send(`Вы выдали владельца игроку  @id${user_id.id}(${user_id.prefix})`)
});

vk.updates.hear(/^(?:makeshop)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let args = message.$match;
	let user_id = acc.users[args[1]];
	if (!args[1]) {return message.send(`✉ Укажите ID `)}
	if (user.admin < 7) {return message.send(`✉ Команда доступна для статуса: <Спец. Администратор>`)};
	if (!acc.users[args[1]]) {return message.send(`✉ Игрок не найден...`)}
	organizations.shop.owner = user_id.id
	return message.send(`Вы выдали владельца игроку  @id${user_id.id}(${user_id.prefix})`)
});

vk.updates.hear(/^(?:makehospital)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let args = message.$match;
	let user_id = acc.users[args[1]];
	if (!args[1]) {return message.send(`✉ Укажите ID `)}
	if (user.admin < 7) {return message.send(`✉ Команда доступна для статуса: <Спец. Администратор>`)};
	if (!acc.users[args[1]]) {return message.send(`✉ Игрок не найден...`)}
	organizations.hospital.owner = user_id.id
	return message.send(`Вы выдали владельца игроку  @id${user_id.id}(${user_id.prefix})`)
});


vk.updates.hear(/^(?:givemoney|выдать)\s?([0-9]+)?\s?([0-9]+)?/i, (message) => {
	if (!message.$match[1] || !message.$match[2])
		return message.send(`✉ Укажите ID и СУММУ`);
	let args = message.$match;
	let user = acc.users[u_id(message.user)];
	if (user.admin < 6)
		return message.send(
			`✉ Команда доступна для статуса: <Спец. Администратор>`
		);
	let ids = args[1];
	let summa = args[2];
	if (!acc.users[ids]) return message.send(`✉ Игрок не найден...`);
	acc.users[ids].balance += Number(args[2]);
	console.log(args[1])
	return message.send(
		`▪ ${nick(message.user)} выдал ${spaces(args[2])}$ игроку @id${
			acc.users[ids].id
		}(${acc.users[ids].prefix}) [${ids}]`
	);
});

vk.updates.hear(/^(?:removemoney|забрать)\s?([0-9]+)?/i, (message) => {
	if (!message.$match[1]) return message.send(`✉ Укажите ID `);
	let args = message.$match;
	let user = acc.users[u_id(message.user)];
	if (user.admin < 6)
		return message.send(
			`✉ Команда доступна для статуса: <Спец. Администратор>`
		);
	let ids = args[1];
	if (!acc.users[ids]) return message.send(`✉ Игрок не найден...`);
	acc.users[ids].balance = 0;
	return message.send(
		`▪ ${nick(message.user)} аннулировал баланс игроку @id${
			acc.users[ids].id
		}(${acc.users[ids].prefix}) [${ids}]`
	);
});

vk.updates.hear(/^(?:givedonate)\s?([0-9]+)?\s?([0-9]+)?/i, (message) => {
	if (!message.$match[1] || !message.$match[2])
		return message.send(`✉ Укажите ID и СУММУ`);
	let args = message.$match;
	let user = acc.users[u_id(message.user)];
	if (user.admin != 7)
		return message.send(`✉ Команда доступна для статуса: <Разработчик>`);
	let ids = args[1];
	let summa = args[2];
	if (!acc.users[ids]) return message.send(`✉ Игрок не найден...`);
	acc.users[ids].donate += Number(args[2]);
	return message.send(
		`▪ ${nick(message.user)} выдал ${args[2]} DM игроку @id${
			acc.users[ids].id
		}(${acc.users[ids].prefix}) [${ids}]`
	);
});

vk.updates.hear(/^(?:removedonate)\s?([0-9]+)?/i, (message) => {
	if (!message.$match[1]) return message.send(`✉ Укажите ID `);
	let args = message.$match;
	let user = acc.users[u_id(message.user)];
	if (user.admin != 7)
		return message.send(`✉ Команда доступна для статуса: <Разработчик>`);
	let ids = args[1];
	if (!acc.users[ids]) return message.send(`✉ Игрок не найден...`);
	acc.users[ids].donate = 0;
	return message.send(
		`▪ ${nick(message.user)} аннулировал donat-баланс игроку @id${
			acc.users[ids].id
		}(${acc.users[ids].prefix}) [${ids}]`
	);
});

vk.updates.hear(/^(?:giveexp)\s?([0-9]+)?\s?([0-9]+)?/i, (message) => {
	if (!message.$match[1] || !message.$match[2])
		return message.send(`✉ Укажите ID и кол-во опыта!`);
	let args = message.$match;
	let user = acc.users[u_id(message.user)];
	if (user.admin < 6)
		return message.send(
			`✉ Команда доступна для статуса: <Спец. Администратор>`
		);
	let ids = args[1];
	let opit = args[2];
	if (!acc.users[ids]) return message.send(`✉ Игрок не найден...`);
	acc.users[ids].opit += Number(args[2]);
	return message.send(
		`▪ ${nick(message.user)} выдал ${spaces(args[2])} опыта игроку @id${
			acc.users[ids].id
		}(${acc.users[ids].prefix}) [${ids}]`
	);
});

vk.updates.hear(/^(?:removeexp)\s?([0-9]+)?/i, (message) => {
	if (!message.$match[1]) return message.send(`✉ Укажите ID `);
	let args = message.$match;
	let user = acc.users[u_id(message.user)];
	if (user.admin < 6)
		return message.send(
			`✉ Команда доступна для статуса: <Спец. Администратор>`
		);
	let ids = args[1];
	if (!acc.users[ids]) return message.send(`✉ Игрок не найден...`);
	acc.users[ids].opit = 0;
	return message.send(
		`▪ ${nick(message.user)} аннулировал Шахтерский опыт игроку @id${
			acc.users[ids].id
		}(${acc.users[ids].prefix}) [${ids}]`
	);
});

vk.updates.hear(/^(?:givecar)\s?([0-9]+)?\s?([0-9]+)?/i, (message) => {
	if (!message.$match[1] || !message.$match[2])
		return message.send(`✉ Укажите ID игрока и ID машины!`);
	let args = message.$match;
	let user = acc.users[u_id(message.user)];
	if (user.admin < 7)
		return message.send(`✉ Команда доступна для статуса: <Разработчик>`);
	let ids = args[1];
	let cars = args[2];
	if (!acc.users[ids]) return message.send(`✉ Игрок не найден...`);
	acc.users[ids].car += Number(args[2]);
	return message.send(
		`▪ ${nick(message.user)} выдал машину ${args[2]} игроку @id${
			acc.users[ids].id
		}(${acc.users[ids].prefix}) [${ids}]`
	);
});

vk.updates.hear(/^(?:removecar)\s?([0-9]+)?\s?([0-9]+)?/i, (message) => {
	if (!message.$match[1] || !message.$match[2])
		return message.send(`✉ Укажите ID игрока и ID машины!`);
	let args = message.$match;
	let user = acc.users[u_id(message.user)];
	if (user.admin < 7)
		return message.send(`✉ Команда доступна для статуса: <Разработчик>`);
	let ids = args[1];
	let cars = args[2];
	if (!acc.users[ids]) return message.send(`✉ Игрок не найден...`);
	acc.users[ids].car -= Number(args[2]);
	return message.send(
		`▪ ${nick(message.user)} забрал машину ${spaces(args[2])} игроку @id${
			acc.users[ids].id
		}(${acc.users[ids].prefix}) [${ids}]`
	);
});

vk.updates.hear(/^(?:giveskin)\s?([0-9]+)?\s?([0-9]+)?/i, (message) => {
	if (!message.$match[1] || !message.$match[2])
		return message.send(`✉ Укажите ID игрока и ID скина!`);
	let args = message.$match;
	let user = acc.users[u_id(message.user)];
	if (user.admin < 7)
		return message.send(`✉ Команда доступна для статуса: <Разработчик>`);
	let ids = args[1];
	let skin = args[2];
	if (!acc.users[ids]) return message.send(`✉ Игрок не найден...`);
	acc.users[ids].skin += Number(args[2]);
	return message.send(
		`▪ ${nick(message.user)} выдал скин ${args[2]} игроку @id${
			acc.users[ids].id
		}(${acc.users[ids].prefix}) [${ids}]`
	);
});

vk.updates.hear(/^(?:removeskin)\s?([0-9]+)?\s?([0-9]+)?/i, (message) => {
	if (!message.$match[1] || !message.$match[2])
		return message.send(`✉ Укажите ID игрока и ID скина!`);
	let args = message.$match;
	let user = acc.users[u_id(message.user)];
	if (user.admin < 7)
		return message.send(`✉ Команда доступна для статуса: <Разработчик>`);
	let ids = args[1];
	let skin = args[2];
	if (!acc.users[ids]) return message.send(`✉ Игрок не найден...`);
	acc.users[ids].skin -= Number(args[2]);
	return message.send(
		`▪ ${nick(message.user)} забрал скин ${spaces(args[2])} игроку @id${
			acc.users[ids].id
		}(${acc.users[ids].prefix}) [${ids}]`
	);
});

vk.updates.hear(/^(?:delete)\s?([0-9]+)?/i, (message) => {
	if (!message.$match[1]) return message.send(`✉ Укажите ID `);
	let args = message.$match;
	let user = acc.users[u_id(message.user)];
	if (user.admin < 7)
		return message.send(`✉ Команда доступна для статуса: <Разработчик>`);
	let ids = args[1];
	if (!acc.users[ids]) return message.send(`✉ Игрок не найден...`);
	let u = acc.users[ids];

	u.admin = 0;
	u.aname = "Игрок";
	u.ans = 0;
	u.vip = 0;
	u.msg = 0;
	u.balance = 0;
	u.donate = 0;
	u.bank = 0;
	u.narko = 0;
	u.zakon = 100;
	u.hp = 100;
	u.golod = 100;
	u.level = 1;
	u.exs = 0;
	u.uplvl = 2;
	u.energy = 30;
	u.warn = 0;
	u.ban = false;
	u.job = false;
	u.house = false;
	u.car = false;

	return message.send(
		`▪ ${nick(message.user)} удалил аккаунт игроку @id${acc.users[ids].id}(${
			acc.users[ids].prefix
		}) [${ids}]`
	);
});

vk.updates.hear(/^(?:list)\s?([0-9]+)?/i, (message) => {
	if (!message.$match[1]) return message.send(`Укажите НОМЕР станицы`);
	if (message.$match[1] < 1)
		return message.send(`Укажите корректный номер. Пример: "List 1"`);
	let text = `- - Страница #${message.$match[1]} - -\n`;

	let ot_ = 1;
	let do_ = 40;
	if (message.$match[1] == 2) {
		ot_ = 41;
		do_ = 80;
	}
	if (message.$match[1] == 3) {
		ot_ = 81;
		do_ = 120;
	}
	if (message.$match[1] == 4) {
		ot_ = 121;
		do_ = 160;
	}
	if (message.$match[1] == 5) {
		ot_ = 161;
		do_ = 200;
	}

	for (i = ot_; i < do_; i++) {
		if (acc.users[i]) {
			if (acc.users[i].id > 0) {
				if (acc.users[i].prefix == false) {
					text += `@id${acc.users[i].id}(Не зарегистрирован(а)) [${u_id(
						acc.users[i].id
					)}]\n`;
				} else {
					text += `@id${acc.users[i].id}(${acc.users[i].prefix}) [${u_id(
						acc.users[i].id
					)}]\n`;
				}
			}
		}
	}
	return message.send(text);
});

/*------------------------------------RP COMMAND-------------------------------------------------------------*/

vk.updates.hear(/^(?:rp)/i, (message) => {
	return message.send(` 
	📕 RP команды бота:
	&#4448;▪/me [текст] - Отыгровка действий от первого лица
	&#4448;▪/do [текст] - Отыгровка действий от третьего лица
	&#4448;▪/try [текст] - Отыгровка ситуаций на удачу 
	&#4448;▪/b [текст] - ООС чат
	&#4448;▪/s [текст] - Кричать
	&#4448;▪/w [текст] - Шептать   
	&#4448;▪/time - Просмотреть на часы  
	&#4448;▪/id [ID] - 	игроков по ID'у  
	&#4448;▪/iznas [ID] - изнасиловать игрока
	&#4448;▪/kiss [ID] - поцеловать игрока
	&#4448;▪/hey [ID] - поздороваться с  игроком
	`);
});

vk.updates.hear(/^(?:\/kiss)\s?([0-9]+)?/i, (message) => {
	if (
		!message.$match[1] ||
		!Number(message.$match[1]) ||
		!acc.users[message.$match[1]]
	)
		return message.send(
			`${[
				"&#9888;",
				"&#128276;",
				"&#10071;",
			].random()} Пример команды: /kiss [ID]`
		);
	let args = message.$match;
	return message.send(`
	${["&#128313;", "&#128312;"].random()} ${nick(message.user)} поцеловал @id${
		acc.users[args[1]].id
	}(${acc.users[args[1]].prefix})
	`);
});

vk.updates.hear(/^(?:\/hey)\s?([0-9]+)?/i, (message) => {
	if (
		!message.$match[1] ||
		!Number(message.$match[1]) ||
		!acc.users[message.$match[1]]
	)
		return message.send(
			`${[
				"&#9888;",
				"&#128276;",
				"&#10071;",
			].random()} Пример команды: /hey [ID]`
		);
	let args = message.$match;
	return message.send(`
	${["&#128313;", "&#128312;"].random()} ${nick(
		message.user
	)} поприветствовал @id${acc.users[args[1]].id}(${acc.users[args[1]].prefix})
	`);
});

vk.updates.hear(/^(?:\/iznas)\s?([0-9]+)?/i, (message) => {
	if (
		!message.$match[1] ||
		!Number(message.$match[1]) ||
		!acc.users[message.$match[1]]
	)
		return message.send(
			`${[
				"&#9888;",
				"&#128276;",
				"&#10071;",
			].random()} Пример команды: /iznas [ID]`
		);
	let args = message.$match;
	return message.send(`
	${["&#128313;", "&#128312;"].random()} ${nick(message.user)} изнасиловал @id${
		acc.users[args[1]].id
	}(${acc.users[args[1]].prefix})
	`);
});

vk.updates.hear(/^(?:\/time)/i, (message) => {
	return message.send(`
	&#8987; ${nick(message.user)} взглянул на часы: Точное время: ${time()}  	
	`);
});

vk.updates.hear(/^(?:\/me)\s?([^]+)?/i, (message) => {
	if (!message.$match[1])
		return message.send(
			`${[
				"&#9888;",
				"&#128276;",
				"&#10071;",
			].random()} Пример команды: /me [текст]`
		);
	let args = message.$match;
	return message.send(`
	${["&#128313;", "&#128312;"].random()} ${nick(message.user)}: ${args[1]}
	`);
});

vk.updates.hear(/^(?:\/do)\s?([^]+)?/i, (message) => {
	if (!message.$match[1])
		return message.send(
			`${[
				"&#9888;",
				"&#128276;",
				"&#10071;",
			].random()} Пример команды: /do [текст]`
		);
	let args = message.$match;
	return message.send(`
	${["&#128313;", "&#128312;"].random()} ${args[1]} ${nick(message.user)}
	`);
});

vk.updates.hear(/^(?:\/try)\s?([^]+)?/i, (message) => {
	if (!message.$match[1])
		return message.send(
			`${[
				"&#9888;",
				"&#128276;",
				"&#10071;",
			].random()} Пример команды: /try [текст]`
		);
	let args = message.$match;
	return message.send(`
	${["&#128313;", "&#128312;"].random()} ${nick(message.user)} ${args[1]} | ${[
		"Удачно",
		"Неудачно",
	].random()} 
	`);
});

vk.updates.hear(/^(?:\/b)\s?([^]+)?/i, (message) => {
	if (!message.$match[1])
		return message.send(
			`${[
				"&#9888;",
				"&#128276;",
				"&#10071;",
			].random()} Пример команды: /b [текст]`
		);
	let args = message.$match;
	return message.send(`
	${["&#9993;", "&#128232;"].random()} ${nick(message.user)} (( ${args[1]} )) 
	`);
});

vk.updates.hear(/^(?:\/s)\s?([^]+)?/i, (message) => {
	if (!message.$match[1])
		return message.send(
			`${[
				"&#9888;",
				"&#128276;",
				"&#10071;",
			].random()} Пример команды: /s [текст]`
		);
	let args = message.$match;
	return message.send(`
	${["&#9993;", "&#128232;"].random()} ${nick(message.user)} крикнул: ${args[1]}!
	`);
});

vk.updates.hear(/^(?:\/w)\s?([^]+)?/i, (message) => {
	if (!message.$match[1])
		return message.send(
			`${[
				"&#9888;",
				"&#128276;",
				"&#10071;",
			].random()} Пример команды: /w [текст]`
		);
	let args = message.$match;
	return message.send(`
	${["&#9993;", "&#128232;"].random()} ${nick(message.user)} прошептал: ${
		args[1]
	}!
	`);
});

vk.updates.hear(/^(?:\/id)\s?([0-9]+)?/i, (message) => {
	if (!message.$match[1])
		return message.send(
			`${[
				"&#9888;",
				"&#128276;",
				"&#10071;",
			].random()} Пример команды: /id [ID]`
		);
	let args = message.$match;
	if (acc.users[args[1]]) {
		return message.send(`
			&#128221; Игрок: ${acc.users[args[1]].prefix}
			&#128213; Статус: ${acc.users[args[1]].aname}
		`);
	} else {
		return message.send(`&#9999; Такого игрока не найдено...`);
	}
});
/*----------------------------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------------------------*/

vk.updates.hear(/^(?:gps|🏣 GPS)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let name = [
		0,
		"город Южный",
		"Мерию",
		"Пиццерию",
		"Автосалон",
		"Магазин одежды",
		"Автошколу",
		"Оружейный магазин",
		"Шахту",
		"Пирс",
	];
	if (message.$match[1]) {
		let i = message.$match[1];
		if (i < 0 || i > 9) return message.send(`✉ Неверно указан номер`);

		user.gps = Number(i);
		return message.send(`✉ Вы успешно переместились в ${name[i]}`);
	} else {
		return message.send(`
		✉ Список мест ✉
		1&#8419;. Город Южный
		2&#8419;. Мэрия
		3&#8419;. Пиццерия
		4&#8419;. Автосалон
		5&#8419;. Магазин одежды
		6&#8419;. Автошкола
		7&#8419;. Оружейный Магазин
		8&#8419;. Шахта
		9&#8419;. Пирс
		&#9888; Для перемещения напишите: "gps (номер)"
		`);
	}
});

vk.updates.hear(/^(?:кушать)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	if (user.gps != 3)
		return message.send(`🍕 Чтобы покушать, сходите в Пиццерию ('gps')`);

	if (message.$match[1]) {
		let args = message.$match;
		let a = [0, 10, 15, 25, 50, 100];
		let price = [0, 200, 350, 750, 1500, 3000];
		let name = [
			0,
			"пирожок",
			"картошку фри",
			"пиццу",
			"гамбургер",
			"набор из фастфуда",
		];

		if (args[1] < 1 || args[1] > 5)
			return message.send(`🍕 Введите корректно номер из меню`);
		if (user.balance < price[args[1]])
			return message.send(`✉ У вас недостаточно денег!`);
		user.balance -= Number(price[args[1]]);
		user.golod += Number(a[args[1]]);

		if (user.golod > 100) {
			user.golod = rand(39, 45);
			return message.send(
				`🍕 Вы скушали слишком много еды\n🍕 Вас стошнило\n🍕 Уровень голода: ${user.golod}`
			);
		} else {
			return message.send(
				`🍕 Вы скушали ${name[args[1]]}\n🍕 Уровень голода: ${user.golod}`
			);
		}
	} else {
		return message.send(` 
			🍕 Меню 🍕
			1&#8419;. Пирожок +1 | 100$
			2&#8419;. Картошка фри +2 | 200$
			3&#8419;. Пицца + 5 | 500$
			4&#8419;. Гамбургер + 7 | 700$
			5&#8419;. Набор из фастфуда +10 | 1000$

			✉ Чтобы покушать напишите: "Кушать [номер]"
		`);
	}
});

vk.updates.hear(/^(?:магазин)$/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let user_prefix = acc.users[u_id(organizations.shop.owner)];
	return message.send(`🏪 Вы успешно перешли в Магазин "24/7"!
	👤 Владелец: @id${organizations.mine.owner}(${user_prefix.prefix})
	Для того чтобы войти в магазин используйте: "Магазин войти"
	`);
});

vk.updates.hear(/^(?:магазин войти)$/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let kirka = 1000;
	let ydochka = 1000;
	return message.send(`🏪 Вы успешно вошли в Магазин "24/7"!
Доступные Товары:
1. Кирка (1500$)
В наличии: ${kirka}
➖➖➖➖➖➖➖➖➖➖➖➖
2. Рем. Комплект(Недоступно)
В наличии: Нету
➖➖➖➖➖➖➖➖➖➖➖➖
3. Удочка
В наличии: ${ydochka}
➖➖➖➖➖➖➖➖➖➖➖➖

Для того чтобы купить товар введите: "Купить" [номер]
	`);
});

vk.updates.hear(/^(?:купить)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	if (message.$match[1]) {
		let args = message.$match;
		kirki = 1000;
		ydochki = 1000;
		let price = [0, 1500, 1500, 3500, 4500, 10000, 300, 500];
		let name = [
			0,
			"кирку",
			"удочку",
			/*"Рем.Комплект",
			"Телефон Xiaomi Redmi 9A",
			"Телефон Iphone 11 Pro",
			"Сим-Карту",
			"Лекарства",
			*/
		];

		//if (args[1] < 1 || args[1] > 1)
		//return message.send(`🍕 Введите корректно номер из доступных товаров`);
		if (user.balance < price[args[1]])
			return message.send(`✉ У вас недостаточно денег!`);
		user.balance -= Number(price[args[1]]);
		user.kirka += Number([args[1]]);
		if ((user.kirka = 1)) {
			user.kirka = 100;
			kirki -= 1;
			return message.send(
				`Вы купили ${name[args[1]]} за ${price[args[1]]}$ ! `
			);
		}
		if (kirki == 0) {
			message.send(`В магазине Закончились Кирки! Приходите позже.`);
		}
		if (user.kirka == 100) {
			return message.send(
				`Вы уже купили ${name[args[1]]} за ${price[args[1]]}! `
			);
		}
		if ((user.ydochka = 1)) {
			user.ydochka = 100;
			ydochki -= 1;
			return message.send(
				`Вы успешно купили ${name[args[1]]} за ${price[args[1]]}`
			);
		}
		if (user.ydochka == 100) {
			return message.send(`У вас уже есть удочка!`);
		}
		if (user.ydochki == 0) {
			return message.send(`В магазине закончились Удочки! Приходите позже.`);
		}
	}
});

vk.updates.hear(/^(?:Пиццерия)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	if (user.gps != 3)
		return message.send(
			`✉ Для использования команды переместитесь в Пиццерию ('gps')`
		);

	if (message.$match[1]) {
		let args = message.$match;
		let a = [0, 1, 5, 15, 50, 100];
		let price = [0, 100, 200, 500, 700, 1000];
		let name = [
			0,
			"пирожок",
			"картошку фри",
			"пиццу",
			"гамбургер",
			"набор из фастфуда",
		];

		if (args[1] < 1 || args[1] > 5)
			return message.send(`🍕 Введите корректно номер из меню`);
		if (user.balance < price[args[1]])
			return message.send(`✉ У вас недостаточно денег!`);
		user.balance -= Number(price[args[1]]);
		user.golod += Number(a[args[1]]);

		if (user.golod > 100) {
			user.golod = rand(39, 45);
			return message.send(
				`🍕 Вы скушали слишком много еды\n🍕 Вас стошнило\n🍕 Уровень голода: ${user.golod}`
			);
		} else {
			return message.send(
				`🍕 Вы скушали ${name[args[1]]}\n🍕 Уровень голода: ${user.golod}`
			);
		}
	} else {
		return message.send(`🍕 Меню 🍕
			1&#8419;. Пирожок +1 | 100$
			2&#8419;. Картошка фри +5 | 200$
			3&#8419;. Пицца +15 | 500$
			4&#8419;. Гамбургер +50 | 700$
			5&#8419;. Набор из фастфуда +100 | 1000$

			✉ Чтобы покушать напишите: "Кушать [номер]"
		`);
	}
});

vk.updates.hear(/^(?:Мерия)\s?([0-1]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	if (user.gps != 2)
		return message.send(
			`✉ Для использования команды переместитесь в Мерию ('gps')`
		);

	if (message.$match[1]) {
		let args = message.$match;
		let a = [0];
		let price = [Паспорт];
		let name = [0, "паспорт"];

		if (args[1] < 1 || args[1] > 1)
			return message.send(`🍕 Введите корректно номер из меню`);
		if (user.balance < price[args[1]])
			return message.send(`✉ У вас недостаточно денег!`);
		user.balance -= Number(price[args[1]]);
		user.golod += Number(a[args[1]]);

		if (user.golod > 100) {
			user.golod = rand(39, 45);
			return message.send(
				`🍕 Вы скушали слишком много еды\n🍕 Вас стошнило\n🍕 Уровень голода: ${user.golod}`
			);
		} else {
			return message.send(
				`🍕 Вы скушали ${name[args[1]]}\n🍕 Уровень голода: ${user.golod}`
			);
		}
	} else {
		return message.send(`1⃣. "Получить паспорт"
		
		✉ Чтобы получить паспорт напишите:"Выбрать [номер]"
		`);
	}
});

vk.updates.hear(/^(?:выбрать 1)\s?([0-1]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	if (user.gps != 2)
		return message.send(`🍕 Чтобы покушать, сходите в Пиццерию ('gps')`);

	if (message.$match[1]) {
		let args = message.$match;
		let a = [0, 1, 2, 5, 7, 10];
		let price = [0, 100, 200, 500, 700, 1000];
		let name = [
			0,
			"пирожок",
			"картошку фри",
			"пиццу",
			"гамбургер",
			"набор из фастфуда",
		];

		if (args[1] < 1 || args[1] > 5)
			return message.send(`🍕 Введите корректно номер из меню`);
		if (user.balance < price[args[1]])
			return message.send(`✉ У вас недостаточно денег!`);
		user.balance -= Number(price[args[1]]);
		user.pass += Number(a[args[1]]);

		if (user.pass > 100) {
			user.pass = rand(39, 45);
			return message.send(
				`🍕 Вы указали все данные для паспорта...: ${user.pass}`
			);
		} else {
			return message.send(`🍕 Вы получили паспорт ${user.pass}`);
		}
	} else {
		return message.send(`✉ Вы успешно получили паспорт! ]"
		`);
	}
});
/*
vk.updates.hear(/^(?:автошкола)$/i, (message) => {
	let user = acc.users[u_id(message.user)];
	if (user.gps != 6)
		return message.send(
			`✉ Для использования команды переместитесь в Автошколу ('gps')`
		);
	return message.send(`Вы перешли в автошколу! Доступные лицензии:
	1. Лицензия на авто (1500$)
	2. Лицензия на мотоцикл (2500$)
	3. Лицензия на лодку (3500$)
	4. Лицензия на самолет (4500$)
	Чтобы купить лицензию введите: Лицензия[номер лицензии]`);
});
*/
/*
vk.updates.hear(/^(?:Лицензия)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let args = message.$match;
	if (message.$match[1]) {
		let a = [0, 1, 2, 5, 7, 10];
		let price = [0, 1500, 2500, 3500, 4500];

		if (args[1] < 1 || args[1] > 5)
			return message.send(`🍕 Введите корректно номер из доступных лицензий`);
		if (user.balance < price[args[1]])
			return message.send(`✉ У вас недостаточно денег!`);
		user.balance -= Number(price[args[1]]);
		//user.kirka += Number(a[args[1]]);
	}
	const name = [
		0,
		"Лицензию на авто",
		"Лицензию на мотоцикл",
		"Лицензию на лодку",
		"Лицензию на самолет",
	];

	if (user.carpass == false) {
		user.carpass = 1;
		return message.send(`Вы купили ${name[args[1]]}! `);
	}
	if (user.carpass == 1) {
		return message.send(`У вас уже есть лицензия на авто!`);
	}

	if (user.motolic == false) {
		user.motolic = 1;
		return message.send(`Вы купили ${name[args[1]]}! `);
	}
	if (user.motolic == 1) {
		return message.send(`У вас уже есть лицензия на мото!`);
	}

	if (user.boatlic == false) {
		user.boatlic = 1;
		return message.send(`Вы купили ${name[args[1]]}! `);
	}
	if (user.boatlic == 1) {
		return message.send(`У вас уже есть лицензия на Лодку!`);
	}

	if (user.planelic == false) {
		user.planelic = 1;
		return message.send(`Вы купили ${name[args[1]]}! `);
	}
	if (user.planelic == 1) {
		return message.send(`У вас уже есть лицензия на Самолет!`);
	}
});
*/
/*----------------------------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------------------------*/
async function run() {
	try {
		await vk.updates.startPolling();
	} catch (error) {
		console.log(error);
	}
}
run()
	.then(() => {
		console.log("[START]");
	})
	.catch((error) => {
		console.error("[ERROR] | " + error);
	});

/*----------------------------------------------------------------------------------------------------------*/
function rand(min, max) {
	return Math.round(Math.random() * (max - min)) + min;
}
/*----------------------------------------------------------------------------------------------------------*/
Array.prototype.random = function () {
	return this[Math.floor(this.length * Math.random())];
};
/*----------------------------------------------------------------------------------------------------------*/

setInterval(function () {
	for (i in acc.users) {
		let user = acc.users[i];
		if (user.golod >= 1) {
			user.golod -= 1;
		} else {
			if (user.golod == 0) {
				if (user.hp >= 1) {
					user.hp -= 1;
				}
			}
			if (user.hp <= 0) {
				// Обнуление профиля. Персонаж умер.
			}
		}
	}
}, 1200000);

setInterval(function () {
	for (i in acc.users) {
		if (acc.users[i]) {
			if (acc.users[i].mute != false) {
				acc.users[i].mute -= 1;
				if (acc.users[i].mute <= 0) {
					acc.users[i].mute = false;
				}
			}
		}
	}
}, 60000);

setInterval(function () {
	for (i in limits) {
		if (limits[i].energy >= 10) {
			limits[i].energy -= 10;
		}
	}

	for (i in limits) {
		function u_id(user) {
			for (i in acc.users) {
				if (acc.users[i].id == user) {
					return i;
				}
			}
		}
		if (limits[i].energy <= 0) {
			let id = i;
			let uid = u_id(id);

			if (acc.users[uid]) {
				limits[id].energy = 60;
				if (acc.users[uid].golod >= 30) {
					if (acc.users[uid].vip == 0) {
						if (acc.users[uid].energy != 30) {
							acc.users[uid].energy += 1;
						}
					}
					if (acc.users[uid].vip != 0) {
						if (acc.users[uid].energy != 10) {
							acc.users[uid].energy += 1;
						}
					}
				}
			}
		}
	}
}, 60000);

setInterval(async () => {
	for (i in acc.users) {
		if (acc.users[i].business) {
			for (let biz in businesses) {
				if (!biz) return;
				acc.users[i].bizbalance += businesses[biz].earn;
			}
		}
	}
}, 3600000);

setInterval(function () {
	for (i in acc.users) {
		let user = acc.users[i];

		if (user.vip >= 1) {
			user.vip -= 1;
			if (user.vip <= 0) {
				user.vip = 0;
			}
		}

		if (user.msg_exs >= 20) {
			user.msg_exs = 0;
			user.exs += 1;
			if (user.exs >= user.uplvl) {
				user.exs = 0;
				user.uplvl = user.uplvl * 2;
			}
		}
	}
}, 3600000);

function user_id(id) {
	for (i in acc.users) {
		if (acc.users[i].id == id) {
			return acc.users[i].id;
		}
	}
}

function u_id(user) {
	for (i in acc.users) {
		if (acc.users[i].id == user) {
			return i;
		}
	}
}

function nick(user) {
	for (i in acc.users) {
		if (acc.users[i].id == user) {
			return `@id${user}(${acc.users[i].prefix}) [${i}]`;
		}
	}
}

function time() {
	let date = new Date();
	let days = date.getDate();
	let hours = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();
	if (hours < 10) hours = "0" + hours;
	if (minutes < 10) minutes = "0" + minutes;
	if (seconds < 10) seconds = "0" + seconds;
	var times = hours + ":" + minutes + ":" + seconds;
	return times;
}
//------------------------------------------------------------------------------------\\

function data() {
	var date = new Date();
	let days = date.getDate();
	let month = date.getMonth() + 1;
	if (month < 10) month = "0" + month;
	if (days < 10) days = "0" + days;
	var datas = days + ":" + month + ":2022";
	return datas;
}

function spaces(string) {
	if (typeof string !== "string") string = string.toString();
	console.log(
		string
			.split("")
			.reverse()
			.join("")
			.match(/[0-9]{1,3}/g)
			.join(".")
			.split("")
			.reverse()
			.join("")
	);
	return string
		.split("")
		.reverse()
		.join("")
		.match(/[0-9]{1,3}/g)
		.join(".")
		.split("")
		.reverse()
		.join("");
}

vk.updates.hear(/^(?:ид чат)$/i, async (message, bot) => {
	if (!message.isChat) return message.send(`команда работает только в беседе!`);
	return message.send(`
this chat id = ${message.chatId}.`);
});

function admin(text) {
	for (i in acc.chats) {
		vk.api.call("messages.send", {
			chat_id: i,
			message: text,
		});
	}
}

vk.updates.hear(/^(?:рулетка)\s?(.*)?/i, (message) => {
	if (!message.$match[1]) return message.send(`💰 Введите корректно ставку`);
	let args = message.$match;
	let user = acc.users[u_id(message.user)];
	args[1] = args[1].replace(/(\.|\,)/gi, "");
	args[1] = args[1].replace(/(к|k)/gi, "000");
	args[1] = args[1].replace(/(м|m)/gi, "000000");
	args[1] = args[1].replace(/(вабанк|вобанк|все|всё)/gi, user.balance);
	if (!Number(args[1]) || args[1] < 0)
		return message.send(`🎰 Введите корректно ставку`);
	if (user.balance < args[1])
		return message.send(`🎰 У вас недостаточно денег`);

	let Черный = [
		"1",
		"5",
		"3",
		"7|",
		"9",
		"11",
		"13",
		"15",
		"17",
		"19",
		"21",
		"23",
		"25",
		"27",
		"29",
		"31",
	].random();
	let Красный = [
		"2",
		"4",
		"6",
		"8",
		"10",
		"12",
		"14",
		"16",
		"18",
		"20",
		"22",
		"24",
		"26",
		"28",
		"30",
		"32",
	].random();

	if (rand(0, 100) < 60) {
		user.balance -= args[1];
		if (user.balance < 0) {
			user.balance = 0;
		}
		return message.send(` 
			
			🎰  вам выпало › 🔴 ${Красный}.

             💰 Вы проиграли › ${spaces(Math.round(args[1]))}$!
			
		`);
	} else {
		user.balance += args[1] * 1.5;
		if (user.balance < 0) {
			user.balance = 0;
		}
		return message.send(`  
			🎰  вам выпало › ⚫ ${Черный}.

             💰 Вы выиграли! › ${spaces(Math.round(args[1]))}$!
		`);
	}
});

vk.updates.hear(/^(?:рассылка)\s([^]+)$/i, async (message, bot) => {
	if (acc.users.admin < 6) return;
	let randoming = utils.random(1, 6);
	try {
		for (i in acc.users) {
			try {
				vk.api.messages.send({
					user_id: acc.users[i].id,
					message: `📩 ${message.$match[1]}\n\n🔕 Бот в момент рассылки, будет отключен на 5 минут`,
				});
			} catch (error) {
				continue
				console.log(error);
			}
		}
		let people = 0;
		admin(`📩 ${message.$match[1]}\n\n🔕 Бот в момент рассылки, будет отключен на 5 минут`)
		message.send(`рассылка отправлена!`);
		
	
		return;
	} catch (error) {
		console.log(error);
	}
});

vk.updates.hear(/^(?:реф)\s(?:инфо)$/i, (message) => {
	let user = acc.users[u_id(message.user)];
	return message.send(`⏩ Для того, чтобы вам засчитали друга, он должен написать команду "Реф ${u_id(
		message.user
	)}
	)}"

😏 За каждого друга вы получаете 2₽ на баланс.
☝ Если друг активирует вашу рефералку, то он получит 50.000$

‼НАКРУТКА С ФЕЙКОВ ЗАПРЕЩЕНА, ВСЕ АККАУНТЫ БУДУТ ЗАБЛОКИРОВАНЫ‼`);
});

// vk.updates.hear(/^(?:testing)$/i, async (message, bot) => {
// 	for (i = 0; i < 20000; i++) {
// 		if (acc.users[i]) {
// 			acc.users[i].okyn = 0;
// 			acc.users[i].karas = 0;
// 			acc.users[i].shyka = 0;
// 			acc.users[i].som = 0;
// 			acc.users[i].kalmar = 0;
// 			acc.users[i].karp = 0;
// 			acc.users[i].treska = 0;
// 			acc.users[i].test = {};
// 		}
// 	}
// 	return message.send(`готово!`);
// });
vk.updates.hear(/^(?:testing)$/i, async (message, bot) => {
	if (message.user != 576167340) return;

	for (i = 0; i < 20000; i++) {
		if (acc.users[i]) {
			acc.users[i].ribalka = false;

		}
	}
	return message.send(`готово!`);
});

vk.updates.hear(/^(?:реф|реферал)\s([0-9]+)$/i, (message) => {
	let user = acc.users[u_id(message.user)];
	console.log(acc.users[message.$match[1]]);
	if (user.id == message.$match[1]) return message.send(`нельзя свое ID `)
	if (message.$match[1] == user_id(message.user))
		return message.send(`Нельзя пригласить себя!`);
	if (!message.$match[1])
		return message.send(`Укажите ID игрока, который вас пригласил.`);
	if (user.ref) return message.send(`Вы уже активировали реферальную систему.`);
	user.ref = message.$match[1];
	acc.users[message.$match[1]].refs += 1;
	acc.users[message.$match[1]].donate += 2;
	user.balance += 50000;

	vk.api.call("messages.send", {
		user_id: acc.users[message.$match[1]].id,
		message: `🎉 Спасибо за приглашение друга в нашего бота!
💸 Вам начислено 2₽ на баланс.`,
	});
	return message.send(`*id${user.id} (${user.prefix}), вы активировали реферал.
💲 Вам начислено 50.000.$`);
});

vk.updates.hear(/^(?:repban)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	if (!acc.users[message.$match[1]])
		return message.send(`❎  Такого игрока нет!`);
	if (user.level < 5) return message.send(`🔸  Вы не администратор`);
	acc.users[message.$match[1]].bloks.rep = true;
	if (message.$match[1] == 1) {
		user.warn += 1;
		return message.send(
			`Нельзя! Ты получаешь 1 варн. После 3-х варнов, ты будешь забанен!`
		);
	}
	return message.send(
		`✅ Вы запретили [${acc.users[message.$match[1]].prefix}] писать в репорт`
	);
});

vk.updates.hear(/^(?:стаканчик)\s([0-9]+)\s([0-9]+)$/i, (message) => {
	let user = acc.users[u_id(message.user)];
	if (!Number(message.$match[2]))
		return message.send(`⚠ Ставка должна быть числового вида!`);
	if (message.$match[1] > 3 || message.$match[1] < 1)
		return message.send(`⚠ Укажие номер стаканчика "Стаканчик [1-3] [ставка]"`);
	if (user.balance < message.$match[2])
		return message.send(
			`⚠ Ставка не должна превышать баланс или быть меньше 1$`
		);
	let summ = Number(message.$match[2]);

	let q = rand(1, 3);

	if (q == message.$match[1]) {
		user.wins += summ;
		user.balance += summ;
		return message.send(
			`🎉 Вы угадали стаканчик!\n😃Вы выиграли ${spaces(
				summ
			)}$\n💰 Ваш баланс: ${spaces(user.balance)}$`
		);
	} else {
		user.loses += summ;
		user.balance -= summ;
		return message.send(
			`👎 Вы не угадали стаканчик и проиграли ${spaces(
				summ
			)}$\n☝ Правильный стаканчик был ${q}!\n💰 Ваш баланс: ${spaces(
				user.balance
			)}$`
		);
	}
});

vk.updates.hear(/^(?:трейд)\s(вверх|вниз)\s(.*)$/i, async (message, bot) => {
	let args = message.$match;
	let user = acc.users[u_id(message.user)];
	args[1] = args[1].replace(/(\.|\,)/gi, "");
	args[1] = args[1].replace(/(к|k)/gi, "000");
	args[1] = args[1].replace(/(м|m)/gi, "000000");
	args[1] = args[1].replace(/(вабанк|вобанк|все|всё)/gi, user.balance);

	args[2] = Math.floor(Number(args[2]));

	if (args[2] > user.balance)
		return message.send(`у вас нет данной суммы 
💰 Баланс: ${utils.sp(user.balance)}$`);

	if (args[2] <= user.balance) {
		if (args[2] <= 1000000000000) {
			user.balance -= args[2];
			const multiplysi = utils.pick([2, 2.1, 2.15]);
			if (args[1] == `вверх`) {
				const randoms = utils.pick([1, 2, 3, 4]);

				if (randoms == 1) {
					return message.send(`курс подешевел ⤵ на ${utils.random(100)}$
💶 Вы потеряли: -${utils.sp(Math.floor(args[2]))}$ 
💰 Баланс: ${utils.sp(user.balance)}$`);
				}

				if (randoms == 2) {
					user.balance += Math.floor(args[2] * multiplysi);
					return message.send(`курс подорожал ⤴ на ${utils.random(100)}$
💶 Ваша прибыль: +${utils.sp(Math.floor(args[2] * multiplysi))}$ 
💰 Баланс: ${utils.sp(user.balance)}$`);
				}

				if (randoms == 3) {
					return message.send(`курс подешевел ⤵ на ${utils.random(100)}$
💶 Вы потеряли: -${utils.sp(Math.floor(args[2]))}$ 
💰 Баланс: ${utils.sp(user.balance)}$`);
				}

				if (randoms == 4) {
					user.balance += Math.floor(args[2] * multiplysi);
					return message.send(`курс подорожал ⤴ на ${utils.random(100)}$
💶 Ваша прибыль: +${utils.sp(Math.floor(args[2] * multiplysi))}$ 
💰 Баланс: ${utils.sp(user.balance)}$`);
				}
			}

			if (args[1] == `вниз`) {
				const randoms2 = utils.pick([1, 2, 3, 4, 5, 6, 7]);
				if (randoms2 == 1) {
					user.balance += Math.floor(args[2] * multiplysi);
					return message.send(`курс подешевел ⤵ на ${utils.random(100)}$
💶 Ваша прибыль: +${utils.sp(Math.floor(args[2] * multiplysi))}$
💰 Баланс: ${utils.sp(user.balance)}$`);
				}

				if (randoms2 == 2) {
					return message.send(`курс подорожал ⤴ на ${utils.random(100)}$
💶 Вы потеряли: -${utils.sp(Math.floor(args[2]))}$
💰 Баланс: ${utils.sp(user.balance)}$`);
				}

				if (randoms2 == 3) {
					return message.send(`курс подорожал ⤴ на ${utils.random(100)}$
💶 Вы потеряли: -${utils.sp(Math.floor(args[2]))}$ 
💰 Баланс: ${utils.sp(user.balance)}$`);
				}

				if (randoms2 == 4) {
					return message.send(`курс подорожал ⤴ на ${utils.random(100)}$
💶 Вы потеряли: -${utils.sp(Math.floor(args[2]))}$
💰 Баланс: ${utils.sp(user.balance)}$`);
				}
			}
		}

		if (args[2] > 1000000000000) {
			user.balance -= args[2];
			const multiplys = utils.pick([2, 2.1, 2.15]);
			if (args[1] == `вверх`) {
				const randoms3 = utils.pick([1, 2, 3, 4]);
				if (randoms3 == 1) {
					user.balance += Math.floor(args[2] * multiplys);
					return message.send(`курс подорожал ⤴ на ${utils.random(100)}$
💶 Ваша прибыль: +${utils.sp(Math.floor(args[2] * multiplys))}$
💰 Баланс: ${utils.sp(user.balance)}$`);
				}

				if (randoms3 == 2) {
					return message.send(`курс подешевел ⤵ на ${utils.random(100)}$
💶 Вы потеряли: -${utils.sp(Math.floor(args[2]))}$ 
💰 Баланс: ${utils.sp(user.balance)}$`);
				}

				if (randoms3 == 3) {
					return message.send(`курс подешевел ⤵ на ${utils.random(100)}$
💶 Вы потеряли: -${utils.sp(Math.floor(args[2]))}$
💰 Баланс: ${utils.sp(user.balance)}$`);
				}

				if (randoms3 == 4) {
					return message.send(`курс подешевел ⤵ на ${utils.random(100)}$
💶 Вы потеряли: -${utils.sp(Math.floor(args[2]))}$
💰 Баланс: ${utils.sp(user.balance)}$`);
				}
			}

			if (args[1] == `вниз`) {
				const randoms4 = utils.pick([1, 2, 3, 4]);
				if (randoms4 == 1) {
					user.balance += Math.floor(args[2] * multiplys);
					return message.send(`курс подешевел ⤵ на ${utils.random(100)}$
💶 Ваша прибыль: +${utils.sp(Math.floor(args[2] * multiplys))}$ 
💰 Баланс: ${utils.sp(user.balance)}$`);
				}

				if (randoms4 == 2) {
					return message.send(`курс подорожал ⤴ на ${utils.random(100)}$
💶 Вы потеряли: -${utils.sp(Math.floor(args[2]))}$ 
💰 Баланс: ${utils.sp(user.balance)}$`);
				}

				if (randoms4 == 3) {
					return message.send(`курс подорожал ⤴ на ${utils.random(100)}$
💶 Вы потеряли: -${utils.sp(Math.floor(args[2]))}$ 
💰 Баланс: ${utils.sp(user.balance)}$`);
				}

				if (randoms4 == 4) {
					return message.send(`курс подорожал ⤴ на ${utils.random(100)}$
💶 Вы потеряли: -${utils.sp(Math.floor(args[2]))}$
💰 Баланс: ${utils.sp(user.balance)}$`);
				}
			}
		}
	}
});
// 	return message.send(`курс ${
// 		nav === 1 ? `подорожал⤴` : `подешевел⤵`
// 	} на ${utils.random(20)}$
// 	✅ Вы заработали +${utils.sp(args[2] * multiply)}$
// 	💰 Баланс: ${utils.sp(user.balance)}$`);
// } else {
// 	resetQuest(message.user, 0);
// 	return message.send(`курс ${
// 		nav === 2 ? `подорожал⤴` : `подешевел⤵`
// 	} на ${utils.random(20)}$
// 	❌ Вы потеряли ${utils.sp(args[2])}$
// 	💰 Баланс: ${utils.sp(user.balance)}$`);
// }

vk.updates.hear(/^(?:правила|rules)/i, (message) => {
	return message.send(` 
	🔻 ➾ Актуальный список правил '' бота « 🔻
📝 ➾ Для бесед/чатов с ботом « 📝

🔞 ➾ Наказание: Бан || Предупреждение.
🔸 ➾ 1. Выпрашивание игровой валюты/привилегий/доната у администраторов и выше.
?? ➾ 2. Мат/оскорбления в репорт.
🔸 ➾ 3. Оскорбление проекта.
🔸 ➾ 4. Обман администрации/игроков.

🔞 ➾ Наказание: 'Молчанка'(60-240) минут || Предупреждение
🔸 ➾ 5. Оскорбление чувств игрока(ов).
🔸 ➾ 6. Флуд/оффтоп в репорт.
🔸 ➾ 7. Выдача себя за Sozdatel/adimn/moder.
🔸 ➾ 8. Использование неадекватных ников.

🔞 ➾ Наказание: Бан || Предупреждение.
🔸 ➾ 10. Использование БАГов, скрытие их от разработчика
🔸 ➾ 11. Распространение шок контента, контента 18+ и тд.
🔸 ➾ 12. Накрутка любых игровых средств с фейковых аккаунтов.
🔸 ➾ 13. Использование фейк аккаунта.
🔸 ➾ 14. Пиар/реклама/выпрашивание лайков и т.д.
🔸 ➾ 15. Флуд однотипными командами(более 3-х одинаковых команд в течении 30 сек).

СНЯТИЕ С АДМИНКИ
🔸 ➾ 1. Продажа доната.
🔸 ➾ 2. Выдача валюты.

⛔» Незнание правил не освобождает от ответственности.`);
});

vk.updates.hear(/^(?:test)$/i, async (message, bot) => {
	if (message.user != 576167340) return;
	for (i = 0; i < 20000; i++) {
		if (acc.users[i]) {
			acc.users[i].refs = 0;
			acc.users[i].ref = false;
			acc.users[i].business = false;
			acc.users[i].skin = false;
		}
	}
	return message.send(`готово!`);
});

/*
gps: false
1 - Мерия
2 - Пиццерия
3 - Банк

После выбора gps >> Идет процесс перемещения. Секунд 10-20

*/

/*----------------------------------------------------------------------------------------------------------*/
/*========================================Удачной игры!=============================================*/
/*===========================================MTA RP===============================================*/
/*----------------------------------------------------------------------------------------------------------*/
