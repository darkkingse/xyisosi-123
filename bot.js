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
const exchange = require("./base/exchange.json");
const containers = require("./base/containers.json");
/*----------------------------------------------------------------------------------------------------------*/

setInterval(function () {
	fs.writeFileSync(
		"./base/exchange.json",
		JSON.stringify(exchange, null, "\t")
	);
	fs.writeFileSync("./base/acc.json", JSON.stringify(acc, null, "\t"));
	fs.writeFileSync("./base/containers.json", JSON.stringify(containers, null, "\t"));
	fs.writeFileSync(
		"./base/organizations.json",
		JSON.stringify(organizations, null, "\t")
	);
}, 2000);
/*----------------------------------------------------------------------------------------------------------*/
// vk.setOptions({
// 	token:
// 		"vk1.a.ZSE_lbGRLV8b7RW9gCBrZl9b-q-G_TMraXK5D6Z42NlTCk28HdNTsy2htXuYaa6ynQdFDjDV1Vt-foMigPRej4XtHDmBW83Ipb_0BZsI23_XvErWKir0WSNHQYmgKZ5Idd0kw_prr-LjrRsC9onfABfI1hS0cVfknReUViUqLzHnBdh8gd8O65trlVD4cMC1", // ТОКЕН ГРУППЫ
// 	apiMode: "parallel",
// 	pollingGroupId: 196227537, // ИД ГРУППЫ
// });
vk.setOptions({
	token:
		"f8ec3be47b26cade1345e396810ce893c0d274097461fe10902bd840c7350d2338c311d24e6f8b9aaa9c0", // ТОКЕН ГРУППЫ
	apiMode: "parallel",
	pollingGroupId: 214284365, // ИД ГРУППЫ
});
//bb7c10e37cb5875aabe9e1f3b9b1209418fb1c57194a7d70b441a4b9f3a246def5a8876723aa9e88ec9b3
//213827213
/*----------------------------------------------------------------------------------------------------------*/
var limits = {};

const msgs = [
	`[${time()}] Connecting...`,
	`[${time()}] Connected. Joining the game...`,
	`[${time()}] Connected to SAMP BOT ROLE PLAY | БОНУС | ОБНОВЛЕНИЕ!!! `,
	`[${time()}] Добро пожаловать на сервер SAMP BOT Role Play! `,
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
		name: "Ларёк с едой",
		price: 500000,
		earn: 30000,
	},
	2: {
		name: "Аптека",
		price: 700000,
		earn: 45000,
	},
	3: {
		name: "Бар",
		price: 1200000,
		earn: 80000,
	},
	4: {
		name: "Автомойка",
		price: 2200000,
		earn: 110000,
	},
	5: {
		name: "Компьютерный Клуб",
		price: 3500000,
		earn: 180000,
	},
	6: {
		name: "Отель",
		price: 5000000,
		earn: 400000,
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
		pay: 1000,
		level: 1,
		text: ["срубили дерево", "отпилили ветку", "срубили куст", "нарубили дров"],
	},
	2: {
		name: "Шахтёр",
		pay: 1700,
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
		pay: 2100,
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
		pay: 3000,
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
		level: 13,
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
		price: 100000,
		attachment: "photo-213827213_457239038",
	},
	2: {
		name: "ГАЗ-24-10",
		price: 180000,
		attachment: "photo-213827213_457239040",
	},
	3: {
		name: "ВАЗ-2106",
		price: 350000,
		attachment: "photo-213827213_457239041",
	},
	4: {
		name: "Lada Priora",
		price: 500000,
		attachment: "photo-213827213_457239037",
	},
	5: {
		name: "BMW E39",
		price: 750000,
		attachment: "photo-213827213_457239042",
	},
	6: {
		name: "Mercedes-Benz E55 W210",
		price: 830000,
		attachment: "photo-213827213_457239039",
	},
	7: {
		name: "Opel Astra H",
		price: 950000,
		attachment: "photo-213827213_457239054",
	},
	8: {
		name: "Lada Vesta",
		price: 1350000,
		attachment: "photo-213827213_457239047",
	},
	9: {
		name: "Mitsubishi Lancer",
		price: 1750000,
		attachment: "photo-213827213_457239044",
	},
	10: {
		name: "Toyota Camry",
		price: 2400000,
		attachment: "photo-213827213_457239052",
	},
	11: {
		name: "Chervolet Camaro",
		price: 2750000,
		attachment: "photo-213827213_457239055",
	},
	12: {
		name: "Nissan Silvia S15",
		price: 5000000,
		attachment: "photo-213827213_457239051",
	},
	13: {
		name: "Subaru impreza WRX STI",
		price: 6750000,
		attachment: "photo-213827213_457239045",
	},
	14: {
		name: "Nissan Skyline R34 GTR",
		price: 7300000,
		attachment: "photo-213827213_457239043",
	},
	15: {
		name: "Nissan Skyline R35 GTR",
		price: 7800000,
		attachment: "photo-213827213_457239050",
	},
	16: {
		name: "Porsche Cayenne",
		price: 8300000,
		attachment: "photo-213827213_457239056",
	},
	17: {
		name: "Mercedes-Benz C63 AMG W204",
		price: 9300000,
		attachment: "photo-213827213_457239039",
	},
	18: {
		name: "Tesla Model S",
		price: 11300000,
		attachment: "photo-213827213_457239048",
	},
	19: {
		name: "Toyota Land Cruiser",
		price: 14300000,
		attachment: "photo-213827213_457239046",
	},
	20: {
		name: "Mercedes-Benz G-класс",
		price: 16300000,
		attachment: "photo-213827213_457239049",
	},
	21: {
		name: "Lada Vesta Sport",
		price: 1050000,
		attachment: "photo-213827213_457239057",
	},
	22: {
		name: "Nissan Silvia S15 Sport",
		price: 4750000,
		attachment: "photo-213827213_457239053",
	},
	23: {
		name: "Lamborghini Sian",
		price: 1250000,
		attachment: "photo-214284365_457239168",
	},
	24: {
		name: "BMW M5 E60",
		price: 1000000,
		attachment: "photo-214284365_457239192",
	},
	25: {
		name: "Lamborghini Aventador" ,
		price: 22750000,
		attachment: "photo-214284365_457239169",
	},
	26: {
		name: "BMW M5 E34" ,
		price: 500000,
		attachment: "photo-214284365_457239193",
	},
	27: { //33
		name: "BMW X5M" ,
		price: 1500000,
		attachment: "photo-214284365_457239194",
	},
	28: {
		name: "Lamborghini Terzo Millennio" ,
		price: 26350000,
		attachment: "photo-214284365_457239170",
	},
	29: {
		name: "Lamborghini Huracan EVO Spyder" ,
		price: 40350000,
		attachment: "photo-214284365_457239175",
	},
	30: {
		name: "Tesla Model-X" ,
		price: 50350000,
		attachment: "photo-214284365_457239177",
	},
	31: {
		name: "BMW I8" ,
		price: 3350000,
		attachment: "photo-214284365_457239179",
	},
	32: {
		name: "Lamborghini Egoista" ,
		price: 235000,
		attachment: "photo-214284365_457239181",
	},
	33: {
		name: "Lamborghini Huracan" ,
		price: 15350000,
		attachment: "photo-214284365_457239182",
	},
	34: {
		name: "BMW X6",
		price: 17350000,
		attachment: "photo-214284365_457239182",
	},
	35: {
		name: "Mercedes-Maybach S600 X222",
		price: 30000000,
		attachment: "photo-214284365_457239197",
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
		garage: 0,
	},
	2: {
		name: `Квартира 'эконом' класса`,
		price: 3000000,
		garage: 0,
	},
	3: {
		name: "Дом у пляжа Веспуччи",
		price: 2880000,
		garage: 1,
	},
	4: {
		name: "Квартира в центральном районе",
		price: 7000000,
		garage: 1,
	},
	5: {
		name: "Роскошная квартира около maze bank",
		price: 50000000,
		garage: 2,
	},
	6: {
		name: "Элитный особняк на холме Вайнвуд",
		price: 100000000,
		garage: 3,
	},
	7: {
		name: "Дом Дмитрий Катанова",
		price: 250000000,
		garage: 3,
	},
	8: {
		name: "Дом Максима Лесного",
		price: 2500000000,
		garage: 3,
	},

	9: {
		name: "Небоскрёб Рамзана Кадырова",
		price: 15500000000,
		garage: 5,
	},
	10: {
		name: "Московский Кремль",
		price: 20500000000,
		garage: 7,
	},
	11: {
		name: "Элитный Особняк Илона Маска",
		price: 27500000000,
		garage: 7,
	},
	12: {
		name: "Роскошаня вилла в Дубае",
		price: 30500000000,
		garage: 7,
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
	message.args = message.$match;
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
			metall: 0,
			copper: 0,
			titan: 0,
			stone: 0,
			ryda: 0,
			diamond: 0,
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
			car2: false,
			car3: false,
			car_case: false,
			seif: 0,
			business: false,
			gunlic: false,
			carpass: false,
			boatlic: false,
			planelic: false,
			motolic: false,
			pass: false,
			pdata: false,
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
			opg_sever_bandit: false,
			opg_sever_rang: 0,
			readiness_capt_sever: false,
			readiness_bussines_sever: false,
			readiness_band_sever: false,
			sever_bandit_capt: false,
			opg_yg_bandit: false,
			opg_yg_bandit_capt: false,
			opg_yg_rang: 0,
			readiness_capt_yg: false,
			readiness_bussines_yg: false,
			readiness_band_yg: false,
			gipercar: false,
			repban: false,
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
			bonus_time: false,
			container_time: false,
			container_gift: false,
			super_kirka: false,
			super_ydochka: false,
			case1: 0,
			case2: 0,
			case3: 0,
			case4: 0,
			case5: 0,
			biz: false,
			bizcount: false,
			bizbalance: 0,
			bizzp: 0,
			bizstop: false,
			okyn: 0,
			karas: 0,
			shyka: 0,
			som: 0,
			kalmar: 0,
			karp: 0,
			treska: 0,
			sick: false,
			kpz: 0,
			fsb_rang: 0,
			fsb_worker: false,
			invitation_fsb: false,
			worker_hospital: false,
			invitation_hospital: false,
			red_coin: 0,
			blue_coin: 0,
			green_coin: 0,
			sick_all: 0,
			invitation_opg_yg: false,
			reg_time: `${data()} | ${time()}`,
		};
	}
	//
	const user = acc.users[u_id(message.user)];

	if (message.text.toLowerCase() != "играть" && user.reg == 1) {
		if (user.prefix == false) {
			return message.send(
				`Приветствуем Вас!
				Чтобы зарегистрироваться, Вам нужно написать команду: "Играть"`
			);
		}
	}
	if (message.text.toLowerCase() == "играть" && user.reg == 1) {
		if (user.prefix == false) {
			user.reg = 2;

			setTimeout(() => {
				message.send(
					`[⚠]Регистрируясь, Вы автоматически соглашаетесь с правилами нашего проекта: https://vk.com/topic-214284365_48923827 ...*`
				);
			}, 2000);

			setTimeout(() => {
				message.send(
					`*❗Введите свой будущий Nick-Name.\nПример: Ivan_Ivanovich
`
				);
			}, 2000);
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

		// vk.api.call("messages.send", {
		// 	chat_id: 5,
		// 	message: `✉ Зарегистрировался новый игрок: @id${message.user}(${
		// 		message.text
		// 	}) [${u_id(message.user)}]`,
		// });

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

var parserInt = (str) => parseInt(str.replace(/k|к/gi, "000"));

function spaces(string) {
	if (typeof string !== "string") string = string.toString();
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

const msg_send = (user_id, message) => {
	vk.api
		.call("messages.send", {
			user_id: user_id.id,
			message: message,
		})
		.catch((error) => {
			if (error.code === 901) {
				return 0;
			}
			if (error.code === 100) {
				return 0;
			}
			if (error.code) {
				return 0;
			}
			throw error;
		});
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

setInterval(() => {
	let red_coin = utils.random(1000, 5000);
	let green_coin = utils.random(1000, 5000);
	let blue_coin = utils.random(1000, 5000);
	try {
		exchange.red_coin = red_coin;
		exchange.green_coin = green_coin;
		exchange.blue_coin = blue_coin;
	} catch (error) {
		console.log("error ", error);
	}
}, 3600000);
setInterval(() => {
	try {
		containers.russia.cars.count += 10;
		containers.russia.resourse.count += 10;
		containers.usa.cars.count += 10;
		containers.usa.resourse.count += 10;
		containers.germany.cars.count += 10;
		containers.germany.resourse.count += 10;
	} catch (error) {
		console.log("error ", error);
	}
}, 3600000);

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
		tops.push({
			id_vk: acc.users[i].id,
			id: i,
			msg: acc.users[i].msg,
		});
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
vk.updates.hear(/^(?:банк|💳 Банк)$/i, async (message, bot) => {
	let user = acc.users[u_id(message.user)];
	return message.send(
		`🏦 Вы вошли в банк. 
🔥 На балансе ${utils.sp(user.bank)}$ игровой валюты
❗ Введите "Банк пополнить [кол-во]" для пополнения.
❗ Введите "Банк снять [кол-во]" для снятия денежных средств.`,
		{ attachment: `photo-206027701_457241905` }
	);
});

vk.updates.hear(/^(?:банк)\s(?:снять)\s(.*)$/i, async (message, bot) => {
	let args = message.$match;
	let user = acc.users[u_id(message.user)];
	args[1] = args[1].replace(/(\.|\,)/gi, "");
	args[1] = args[1].replace(/(к|k)/gi, "000");
	args[1] = args[1].replace(/(м|m)/gi, "000000");
	args[1] = args[1].replace(/(вабанк|вобанк|все|всё)/gi, user.bank);

	if (!Number(args[1])) return;
	args[1] = Math.floor(Number(args[1]));

	if (args[1] <= 0) return;

	if (args[1] > user.bank) return message.send(`У вас нет данной суммы. 😬`);
	else if (args[1] <= user.bank) {
		user.balance += args[1];
		user.bank -= args[1];

		return message.send(`вы сняли ${utils.sp(args[1])}$
			💳 В банке:  ${utils.sp(user.bank)}$
			💸 Ваш баланс: ${utils.sp(user.balance)}$`);
	}
});

/*------------------------------------MAIN------------------------------------------------------------------*/
vk.updates.hear(/^(?:помощь|📗 Помощь)/i, (message) => {
	return message.send(
		`
Разделы помощи:

Основные:
📝Профиль - статистика персонажа.
💰Баланс - баланс персонажа.
🎁Бонус - получить бонус.
💁‍♂Передать [ID(Игровой)] [сумма].
👮‍♀Поиск - найти ID игрока по ссылке вк.
🎓Топ - список лучших игроков.
🎁Подарок - получить подарок.
💵Биржа - биржа криптовалюты.
🎾Инвентарь - ресурсы персонажа.
👀Лидеры - список лидеров.
💷Донат - Игровой магазин.
🔎GPS - навигатор по местности.
📦Кейсы - Посмотреть список кейсов [NEW]

Игровые:
💒Дом - приобрести дом.
💒Мой Дом - Посмотреть информацию, о своём доме.
🚗Автосалон - приобрести машину.
🚘Этаж (1-3) - классы машин.
🚘Продать машину - продать свой автомобиль.
🚶‍♀Магазин одежды - перейти в магазин одежды.
🕺Скин (номер) - купить одежду.
💂‍♀Мой скин - одежда персонажа.
📮Шахта - добыча ресурсов.
🔩Склад - ресурсы шахты по их ценности.
💸Продать [ресурс с шахты] [кол-во] - продать ресурсс шахты.
🐬Пирс - перейти на пирс.
🐊Рыбачить - ловить рыбу.
🐋Лавка рыбы - узнать цену рыбы.
♻Рюкзак - посмотреть кол-во выловленной рыбы.
💸Продать рыбу [название рыбы] [кол-во] - продать рыбу.

Ставки:
💰Казино - информация о казино.

Реферальные:
🏂Реф инфо - информация об реферальной системе.
🏃Реф [ID прегласившего] - Получить вознаграждение за пригласившего.

Организационные:
🚑Больница меню - открыть меню больницы.
🔫Юопг команды - открыть меню Южной ОПГ.
💂ФСБ команды - открыть меню ФСБ.
🔪Сопг команды - открыть меню Северного ОПГ.

Административные:
👑Апомощь - помощь по командам. 
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
							color: "default",
						},
						{
							action: {
								type: "text",
								payload: "{}",
								label: "💼 Профиль",
							},
							color: "positive",
						},
						{
							action: {
								type: "text",
								payload: "{}",
								label: "🎒 Инвентарь",
							},
							color: "default",
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
								label: "🧳 Рюкзак",
							},
							color: "default",
						},
						{
							action: {
								type: "text",
								payload: "{}",
								label: "💳 Банк",
							},
							color: "default",
						},
					],
					[
						{
							action: {
								type: "text",
								payload: "{}",
								label: "💵 Биржа",
							},
							color: "default",
						},
						{
							action: {
								type: "text",
								payload: "{}",
								label: "📗 Помощь",
							},
							color: "default",
						},
					],
					[
						{
							action: {
								type: "text",
								payload: "{}",
								label: "👨‍⚕ Больница",
							},
							color: "negative",
						},
					],
					[
						{
							action: {
								type: "text",
								payload: "{}",
								label: "📦 Кейсы",
							},
							color: "positive",
						},
						{
							action: {
								type: "text",
								payload: "{}",
								label: "💷 Донат",
							},
							color: "positive",
						},
						{
							action: {
								type: "text",
								payload: "{}",
								label: "💰 Топ",
							},
							color: "positive",
						},
					],
					[
						{
							action: {
								type: "text",
								payload: "{}",
								label: "🎁 Подарок",
							},
							color: "positive",
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
💸Топ баланс - узнать список богатых игроков.
📄Топ смс - узнать список игроков по количеству сообщений.
🚚Топ шахтеров - узнать список игроков по опыту шахтера.
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

vk.updates.hear(/^(?:eval)\s([^]+)$/i, (message) => {
	if (message.user != 576167340) return;
	try {
		const result = eval(message.$match[1]);

		if (typeof result === "string") {
			return message.send(`Результат: ${result}`);
		} else if (typeof result === "number") {
			return message.send(`Результат: ${result}`);
		} else {
			return message.send(`Результат: ${JSON.stringify(result, null, "　\t")}`);
		}
	} catch (e) {
		console.error(e);
		return message.send(`Ошибка: ${e.toString()}`);
	}
});

vk.updates.hear(/^(?:профиль|💼 Профиль|статс|stats|проф)/i, (message) => {
	let user = acc.users[u_id(message.user)];
	return message.send(
		` 
		💿 Ваш Ник: ${user.prefix}
		🆔 ID: ${u_id(message.user)}
		👑 Статус: ${user.aname}
		💳 Банковский счет: ${spaces(user.bank)}$ 
	    💲 Баланс: ${spaces(user.balance)}$
		⭐ LVL: ${user.level}
		💡 Очки опыта: ${user.exs}/${user.uplvl} 
		💡 Опыт дается раз в час за активную игру
		💎 Donat-Money: ${user.donate}

		❤ Здоровье: ${user.hp}/100
		🔒 Законопослушность: ${user.zakon}
		🍕 Голод: ${user.golod}/100
		` +
			(user.vip == 0
				? `⚡ Энергия: ${user.energy}/50\n`
				: `⚡ Энергия: ${user.energy}/10\n`) +
			(user.golod >= 30
				? `❗ +1 энергий даётся раз в 10 минут\n\n`
				: `⚠ Вы голодны. Энергия не прибавляется!\n\n`) +
			`🏠 Имущество:\n` +
			(user.house == false ? `` : ` &#127969; ${houses[user.house].name}\n`) +
			`💻 Бизнесы:\n` +
			(user.business == false ? `` : `${businesses[user.business].name}`) +
			`
		💔 Warns: ${user.warn}/3
		🚅 Дата регистрации: ${user.reg_time}
	`
	);
});

// 📱 Телефон:
// Водительское удостоверение: ${
// 			user.carpass == false ? `Отсутствует` : `${user.carpass}`
// 		}\n
// Лицензия на самолет: ${
// 			user.planelic == false ? `Отсутствует` : `${user.planelic}`
// 		}\n
// Лицензия на Мотоцикл: ${
// 			user.motolic == false ? `Отсутствует` : `${user.motolic}`
// 		}\n
// Лицензия на лодку: ${
// 			user.boatlic == false ? `Отсутствует` : `${user.boatlic}`
// 		}\n

vk.updates.hear(/^(?:инвентарь|инв|inv|inventory|🎒 Инвентарь)/i, (message) => {
	let user = acc.users[u_id(message.user)];
	return message.send(
		` 
⛏ Кирка: ${user.kirka}%
🎋 Удочка: ${user.ydochka}%
🔫 Оружие: ${user.gun == false ? `Отсутствует` : `${guns[user.gun].name}`}\n
📝 Лицензия на оружие: ${
			user.gunlic == false ? `Отсутствует` : `${user.gunlic}`
		}\n
➖➖➖➖➖➖➖➖➖➖➖➖➖➖
💊 Неизвестное вещество: ${user.narko}
➖➖➖➖➖➖➖➖➖➖➖➖➖➖
💠 Руда:

⚫ Камень: ${spaces(user.stone)}
🔶 Медь: ${spaces(user.copper)}
⚪ Железо: ${spaces(user.iron)}
▫Серебро: ${spaces(user.silver)}
🔸 Золото: ${spaces(user.gold)}
◽ Металл: ${spaces(user.metall)} 
⬛ Титан: ${spaces(user.titan)} 
💎 Алмаз: ${spaces(user.diamond)} 

💸 Коины:

💷 Red Coin: ${spaces(user.red_coin)}
💶 Green Coin: ${spaces(user.green_coin)}
💴 Blue Coin: ${spaces(user.blue_coin)}


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

vk.updates.hear(/^(?:баланс|💰 Баланс)/i, (message) => {
	let user = acc.users[u_id(message.user)];
	return message.send(` 
		💰 Баланс: ${spaces(user.balance)}$
		💳 В банке: ${spaces(user.bank)}$  
	`);
});

vk.updates.hear(/^(?:Шахта)$/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let user_prefix = acc.users[u_id(organizations.mine.owner)];
			if (user.gps != 6) return message.send(`❗Ошибка! Для того чтобы копать руду, перейдите в шахту. 
❗Для того чтобы перейти в шахту напишите "GPS 6". `)
	return message.send(
		`Вы перешли в шахту! 
	👤 Владелец: @id${organizations.mine.owner}(${user_prefix.prefix}),
	♻ Статус: ${organizations.mine.status == false ? `Закрыто⛔` : `Открыто✅`}
	Доступные шахты:
	Шахта №1
	Шахта №2
	Шахта №3
	➖➖➖➖➖➖➖➖➖➖
	🔤 ➖ Информация:
	⛏ Моя информация
	👷 ТОП шахтеров
	💸 Склад - узнать цену ресурсов.
	🎒 Инвентарь - узнать количество собранных ресурсов.

	❗ Для перехода в шахту введите "Шахта перейти" [номер шахты]
	❗ Для управления шахтой введите: Шахта меню
	`,
		{ attachment: `photo-213827213_457239064` }
	);
	//Шахта №2
	//Шахта №3
	//Шахта №4
	//@id${organizations.mine.owner}(${user_prefix.prefix})
});

vk.updates.hear(/^(?:Шахта перейти 1)$/i, (message) => {
	let user_prefix = acc.users[u_id(organizations.mine.owner)];
	let user = acc.users[u_id(message.user)];
				if (user.gps != 6) return message.send(`❗Ошибка! Для того чтобы копать руду, перейдите в шахту. 
❗Для того чтобы перейти в шахту напишите "GPS 6". `)
	if (!organizations.mine.status) {
		return message.send(
			`Шахта закрыта владельцем @id${organizations.mine.owner}(${user_prefix.prefix})`
		);
	} else {
		return message.send(`📄 Информация о Шахте №1:
		Необходимый опыт шахтера: 0
		Для начала работы, используйте "Копать руду 1".
		`);
	}
});

vk.updates.hear(/^(?:Шахта перейти 2)$/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let user_prefix = acc.users[u_id(organizations.mine.owner)];
	if (user.gps != 6) return message.send(`❗Ошибка! Для того чтобы копать руду, перейдите в шахту. 
❗Для того чтобы перейти в шахту напишите "GPS 6". `)
	if (!organizations.mine.status) {
		return message.send(
			`Шахта закрыта владельцем @id${organizations.mine.owner}(${user_prefix.prefix})`
		);
	} else {
		return message.send(`📄 Информация о Шахте №2:
		Необходимый опыт шахтера: 300
		Для начала работы, используйте "Копать руду 2".
		`);
	}
});

vk.updates.hear(/^(?:Шахта перейти 3)$/i, (message) => {
	let user = acc.users[u_id(message.user)];
				if (user.gps != 6) return message.send(`❗Ошибка! Для того чтобы копать руду, перейдите в шахту. 
❗Для того чтобы перейти в шахту напишите "GPS 6". `)
	let user_prefix = acc.users[u_id(organizations.mine.owner)];

	if (!organizations.mine.status) {
		return message.send(
			`Шахта закрыта владельцем @id${organizations.mine.owner}(${user_prefix.prefix})`
		);
	} else {
		return message.send(`📄 Информация о Шахте №3:
		Необходимый опыт шахтера: 2000
		Для начала работы, используйте "Копать руду 3".
		`);
	}
});

vk.updates.hear(/^(?:копать руду 1)$/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let user_prefix = acc.users[u_id(organizations.mine.owner)];
	if (user.gps != 6) return message.send(`❗Ошибка! Для того чтобы копать руду, перейдите в шахту. 
❗Для того чтобы перейти в шахту напишите "GPS 6". `)
	if (!organizations.mine.status) {
		return message.send(
			`Шахта закрыта владельцем @id${organizations.mine.owner}(${user_prefix.prefix})`
		);
	}
	let ryda = utils.random(15, 25);
	let summa = utils.random(98, 250);
	let gold = utils.random(7, 14);
	let silver = utils.random(8, 16);
	let iron = utils.random(9, 18);
	let copper = utils.random(9, 18);
	let stone = utils.random(12, 24);
	let hp = utils.random(3, 5);

	if (user.kirka < 5) {
		return message.send(`⛏ У вас нет Кирки!`);
	}

	if (user.golod < 5) {
		return message.send(
			`🍗 Вы слишком голодны! Перейдите в пиццерию для пополения Голода(gps)`
		);
	}
	if (user.hp < 5) {
		return message.send(
			`Вы заболели ! Что бы вылечиться, используйте: Больница`
		);
	}
	if (user.shahta == true) return message.send(`Вы еще копаете...`);
	user.shahta = true;
	setTimeout(() => {
		user.shahta = false;
	}, 3000);
	if (user.super_kirka) {
		organizations.mine.balance += organizations.mine.salary;
		user.balance += summa;
		user.golod -= 4;
		user.kirka -= 4;
		user.opit += 4;
		user.ryda += ryda * 3;
		user.gold += gold * 3;
		user.silver += silver * 3;
		user.iron += iron * 3;
		user.copper += copper * 3;
		user.stone += stone * 3;
		user.hp -= hp;
		return message.send(` 
			⛏ Вы выкопали Фрагменты руды:
			🔸 Золото: ${gold * 2}
			▫ Серебро: ${silver * 2}
			⚪ Железо: ${iron * 2}
			🔶 Медь: ${copper * 2}
			⚫ Камень: ${stone * 2}
			💠 Другая руда: ${ryda * 2}
			
			💰 Заработано:
			💵 Денег: ${summa}
			🔸 Опыт: +3
			
			❗ У вас используется Супер-Кирка, поэтому вся руда умножается на 3.

			❓ Показатели уменьшены: 
			⛏ Прочность кирки: ${user.kirka}%
			🍗 Голод: ${user.golod}%
			❤ Здоровье: ${user.hp}%
		`);
	} else {

	
		organizations.mine.balance += organizations.mine.salary;
		user.balance += summa;
		user.golod -= 5;
		user.kirka -= 5;
		user.opit += 3;
		user.ryda += ryda;
		user.gold += gold;
		user.silver += silver;
		user.iron += iron;
		user.copper += copper;
		user.stone += stone;
		user.hp -= hp;
		return message.send(` 
			⛏ Вы выкопали Фрагменты руды:
	🔸 Золото: ${gold}
	▫ Серебро: ${silver}
	⚪ Железо: ${iron}
	🔶 Медь: ${copper}
	⚫ Камень: ${stone}
	💠 Другая руда: ${ryda}

	💰 Заработано:
	💵 Денег: ${summa}
	🔸 Опыт: +3

	❓ Показатели уменьшены: 
	⛏ Прочность кирки: ${user.kirka}%
	🍗 Голод: ${user.golod}%
	❤ Здоровье: ${user.hp}%
		`);
	}
});

vk.updates.hear(/^(?:копать руду 2)$/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let user_prefix = acc.users[u_id(organizations.mine.owner)];
		if (user.gps != 6) return message.send(`❗Ошибка! Для того чтобы копать руду, перейдите в шахту. 
❗Для того чтобы перейти в шахту напишите "GPS 6". `)
	if (!organizations.mine.status) {
		return message.send(
			`Шахта закрыта владельцем @id${organizations.mine.owner}(${user_prefix.prefix})`
		);
	}
	let ryda = utils.random(20, 35);
	let summa = utils.random(150, 500);
	let gold = utils.random(12, 23);
	let silver = utils.random(12, 24);
	let metall = utils.random(13, 26);
	let iron = utils.random(14, 30);
	let copper = utils.random(16, 35);
	let stone = utils.random(20, 38);
	let hp = utils.random(3, 5);

	if (user.kirka < 5) {
		return message.send(`⛏ У вас нет Кирки!`);
	}

	if (user.golod < 5) {
		return message.send(
			`🍗 Вы слишком голодны! Перейдите в пиццерию для пополения Голода(gps)`
		);
	}
	if (user.hp < 5) {
		return message.send(
			`Вы заболели ! Что бы вылечиться, используйте: Больница`
		);
	}
	if (user.opit < 300) {
		return message.send(`У вас недостаточно опыта для этой шахты!`);
	}
	if (user.shahta == true) return message.send(`Вы еще копаете...`);
	user.shahta = true;
	setTimeout(() => {
		user.shahta = false;
	}, 3000);
	if (user.super_kirka) {
		organizations.mine.balance += organizations.mine.salary;
		user.balance += summa;
		user.golod -= 5;
		user.kirka -= 5;
		user.opit += 2;
		user.ryda += ryda * 2;
		user.gold += gold * 2;
		user.silver += silver * 2;
		user.metall += metall * 2;
		user.iron += iron * 2;
		user.copper += copper * 2;
		user.stone += stone * 2;
		user.hp -= hp;

		return message.send(` 
			⛏ Вы выкопали Фрагменты руды:
			🔸 Золото: ${gold * 2}
			▫ Серебро: ${silver * 2}
			◽ Металл: ${metall * 2}
			⚪ Железо: ${iron * 2}
			🔶 Медь: ${copper * 2}
			⚫ Камень: ${stone * 2}
			💠 Другая руда: ${ryda * 2}

			💰 Заработано:
			💵 Денег: ${summa}
			🔸 Опыт: +2

			❗ У вас используется Супер-Кирка, поэтому вся руда умножается на 2.

			❓ Показатели уменьшены: 
			⛏ Прочность кирки: ${user.kirka}%
			🍗 Голод: ${user.golod}%
			❤ Здоровье: ${user.hp}%
		`);
	}
	else{

	
		organizations.mine.balance += organizations.mine.salary;
		user.balance += summa;
		user.golod -= 5;
		user.kirka -= 5;
		user.opit += 2;
		user.ryda += ryda;
		user.gold += gold;
		user.silver += silver;
		user.metall += metall;
		user.iron += iron;
		user.copper += copper;
		user.stone += stone;
		user.hp -= hp;

		return message.send(` 
			⛏ Вы выкопали Фрагменты руды:
			🔸 Золото: ${gold}
			▫ Серебро: ${silver}
			◽ Металл: ${metall}
			⚪ Железо: ${iron}
			🔶 Медь: ${copper}
			⚫ Камень: ${stone}
			💠 Другая руда: ${ryda}

			💰 Заработано:
			💵 Денег: ${summa}
			🔸 Опыт: +2

			❓ Показатели уменьшены: 
			⛏ Прочность кирки: ${user.kirka}%
			🍗 Голод: ${user.golod}%
			❤ Здоровье: ${user.hp}%
		`);
}
});
vk.updates.hear(/^(?:копать руду 3)$/i, (message) => {
	let user = acc.users[u_id(message.user)];
		if (user.gps != 6) return message.send(`❗Ошибка! Для того чтобы копать руду, перейдите в шахту. 
❗Для того чтобы перейти в шахту напишите "GPS 6". `)
	let user_prefix = acc.users[u_id(organizations.mine.owner)];

	if (!organizations.mine.status) {
		return message.send(
			`Шахта закрыта владельцем @id${organizations.mine.owner}(${user_prefix.prefix})`
		);
	}
	let ryda = utils.random(20, 38);
	let summa = utils.random(350, 1000);
	let gold = utils.random(14, 26);
	let silver = utils.random(13, 27);
	let metall = utils.random(13, 27);
	let iron = utils.random(14, 30);
	let copper = utils.random(16, 35);
	let stone = utils.random(20, 38);
	let hp = utils.random(3, 5);
	let titan = utils.random(5, 7);
	let diamond = utils.random(4, 5);

	if (user.kirka < 5) {
		return message.send(`⛏ У вас нет Кирки!`);
	}

	if (user.golod < 5) {
		return message.send(
			`🍗 Вы слишком голодны! Перейдите в пиццерию для пополения Голода(gps)`
		);
	}
	if (user.hp < 5) {
		return message.send(
			`Вы заболели ! Что бы вылечиться, используйте: Больница`
		);
	}
	if (user.opit < 2000) {
		return message.send(`У вас недостаточно опыта для этой шахты!`);
	}
	if (user.shahta == true) return message.send(`Вы еще копаете...`);
	user.shahta = true;
	setTimeout(() => {
		user.shahta = false;
	}, 3000);
	if (user.super_kirka) {
			organizations.mine.balance += organizations.mine.salary;
		user.balance += summa;
		user.golod -= 5;
		user.kirka -= 5;
		user.opit += 2;
		user.ryda += ryda * 2;
		user.gold += gold * 2;
		user.silver += silver * 2;
		user.metall += metall * 2;
		user.iron += iron * 2;
		user.copper += copper * 2;
		user.stone += stone * 2;
		user.titan += titan * 2;
		user.diamond += diamond * 2;
		user.hp -= hp;

		return message.send(` 
			⛏ Вы выкопали Фрагменты руды:
			🔸 Золото: ${gold * 2}
			▫ Серебро: ${silver * 2}
			◽ Металл: ${metall * 2}
			⚪ Железо: ${iron * 2}
			🔶 Медь: ${copper * 2}
			⚫ Камень: ${stone * 2}
			⬛ Титан: ${titan * 2}
			💎 Алмаз: ${diamond * 2}
			💠 Другая руда: ${ryda * 2}

			💰 Заработано:
			💵 Денег: ${summa}
			🔸 Опыт: +2

			❗ У вас используется Супер-Кирка, поэтому вся руда умножается на 2.


			❓ Показатели уменьшены: 
			⛏ Прочность кирки: ${user.kirka}%
			🍗 Голод: ${user.golod}%
			❤ Здоровье: ${user.hp}%
				`);
	}else{

		organizations.mine.balance += organizations.mine.salary;
		user.balance += summa;
		user.golod -= 5;
		user.kirka -= 5;
		user.opit += 2;
		user.ryda += ryda;
		user.gold += gold;
		user.silver += silver;
		user.metall += metall;
		user.iron += iron;
		user.copper += copper;
		user.stone += stone;
		user.titan += titan;
		user.diamond += diamond;
		user.hp -= hp;

		return message.send(` 
			⛏ Вы выкопали Фрагменты руды:
	🔸 Золото: ${gold}
	▫ Серебро: ${silver}
	◽ Металл: ${metall}
	⚪ Железо: ${iron}
	🔶 Медь: ${copper}
	⚫ Камень: ${stone}
	⬛ Титан: ${titan}
	💎 Алмаз: ${diamond}
	💠 Другая руда: ${ryda}

	💰 Заработано:
	💵 Денег: ${summa}
	🔸 Опыт: +2

	❓ Показатели уменьшены: 
	⛏ Прочность кирки: ${user.kirka}%
	🍗 Голод: ${user.golod}%
	❤ Здоровье: ${user.hp}%
		`);
	}
});

vk.updates.hear(/^(?:гипермашина)$/i, (message) => {
	let user = acc.users[u_id(message.user)];
	if (!user.gipercar) {
		return message.send(`❗ Вам не доступна Гипермашина !`);
	}

	let ryda = utils.random(2000101, 5517501);
	let summa = utils.random(3133501, 6517501);
	let gold = utils.random(33351111, 65175016);
	let silver = utils.random(3311350, 6157150);
	let metall = utils.random(313350, 6115750);
	let iron = utils.random(3133150, 6115750);
	let copper = utils.random(3311350, 6157150);
	let stone = utils.random(333150, 6511750);
	let hp = utils.random(33313150, 657112150);
	let titan = utils.random(3311350, 1165750);

	organizations.mine.balance += organizations.mine.salary;
	user.balance += summa;
	user.opit += 100;
	user.ryda += ryda;
	user.gold += gold;
	user.silver += silver;
	user.metall += metall;
	user.iron += iron;
	user.copper += copper;
	user.stone += stone;
	user.titan += titan;

	return message.send(` 
		⛏ Вы выкопали Фрагменты руды:
🔸 Золото: ${gold}
▫ Серебро: ${silver}
◽ Металл: ${metall}
⚪ Железо: ${iron}
🔶 Медь: ${copper}
⚫ Камень: ${stone}
⬛ Титан: ${titan}
💠 Другая руда: ${ryda}

💰 Заработано:
💵 Денег: ${summa}
🔸 Опыт: +2

❓ Показатели уменьшены: 
⛏ Прочность кирки: ${user.kirka}%
🍗 Голод: ${user.golod}%
❤ Здоровье: ${user.hp}%
	`);
});

vk.updates.hear(/^(?:шахта меню)$/i, (message) => {
	let user = acc.users[u_id(message.user)];

	if (user.id != organizations.mine.owner) {
		return message.send(`Вы не владелец шахты!`);
	} else {
		return message.send(`Вы открыли меню шахты!
		💰 Счет шахты: ${spaces(organizations.mine.balance)}
		
		📕 Команды для владельца шахты:
		1. ⛔ Шахта закрыть - закрыть шахту
		2. ✅ Шахта открыть - открыть шахту
		3. 💵 Шахта снять [Сумма] - снять деньги со счета шахты`);
	}
});

vk.updates.hear(/^(?:шахта закрыть)$/i, (message) => {
	let user = acc.users[u_id(message.user)];

	if (user.id != organizations.mine.owner) {
		return message.send(`Вы не владелец шахты!`);
	} else {
		organizations.mine.status = false;
		message.send(`Вы успешно закрыли шахту!`);
	}
});
vk.updates.hear(/^(?:шахта открыть)$/i, (message) => {
	let user = acc.users[u_id(message.user)];

	if (user.id != organizations.mine.owner) {
		return message.send(`Вы не владелец шахты!`);
	} else {
		organizations.mine.status = true;
		message.send(`Вы успешно открыли шахту!`);
	}
});

vk.updates.hear(/^(?:шахта снять)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];

	if (user.id != organizations.mine.owner) {
		return message.send(`Вы не владелец шахты!`);
	}
	if (!message.$match[1])
		return message.send(`❗ Пример команды: Шахта снять [Сумма]`);
	if (!Number(message.$match[1]))
		return message.send(`❗ СУММА должна быть числового вида.`);
	if (organizations.mine.balance < message.$match[1])
		return message.send(`❗ На счету шахты нет столько`);
	organizations.mine.balance -= Number(message.$match[1]);
	user.balance += Number(message.$match[1]);

	return message.send(
		`💴 Вы успешно сняли с шахты ${spaces(message.$match[1])}$.`
	);
});

vk.updates.hear(/^(?:моя информация)$/i, (message) => {
	let user = acc.users[u_id(message.user)];
	return message.send(
		`Информация о вас:
			Опыт: ${user.opit}
			Выкопанная руда: ${user.ryda}
	`
	);

	//Шахта №2
	//Шахта №3
	//Шахта №4
});

vk.updates.hear(/^(?:Склад)$/i, (message) => {
	let user = acc.users[u_id(message.user)];

	message.send(` Вы перешли на Склад
	Доступная руда для продажи:
⚫ Камень:
🔻 Продажа: 1 кг. = 250$
➖➖➖➖➖➖➖➖➖➖
🔶 Медь: .
🔻 Продажа: 1 кг. = 300$
➖➖➖➖➖➖➖➖➖➖
⚪ Железо: 
🔻 Продажа: 1 кг. = 500$
➖➖➖➖➖➖➖➖➖➖
◽ Металл:
🔻 Продажа: 1 кг. = 600$
➖➖➖➖➖➖➖➖➖➖
▫ Серебро: 
🔻 Продажа: 1 кг. = 1000$
➖➖➖➖➖➖➖➖➖➖
🔸 Золото:
🔻 Продажа: 1 кг. = 1250$
➖➖➖➖➖➖➖➖➖➖ 
⬛  Титан:
🔻 Продажа: 1 кг. = 1350$
➖➖➖➖➖➖➖➖➖➖ 
➖➖➖➖➖➖➖➖➖➖ 
💎 Алмаз:
🔻 Продажа: 1 кг. = 1500$
➖➖➖➖➖➖➖➖➖➖ 


💰 Для продажи: Продать [название руды] [кол-во]
	`);
	//Шахта №2
	//Шахта №3
	//Шахта №4
});

vk.updates.hear(/^(?:продать)\s(?:камень)\s(.*)$/i, async (message, bot) => {
	let user = acc.users[u_id(message.user)];
	message.$match[1] = message.$match[1].replace(/(\.|\,)/gi, "");
	message.$match[1] = message.$match[1].replace(/(к|k)/gi, "000");
	message.$match[1] = message.$match[1].replace(/(м|m)/gi, "000000");
	message.$match[1] = message.$match[1].replace(
		/(вабанк|вобанк|все|всё)/gi,
		user.stone
	);
	let id = user_id(message.user);
	let args = message.$match;
	args[1] = args[1].replace(/(\.|\,)/gi, "");
	args[1] = args[1].replace(/(к|k)/gi, "000");
	args[1] = args[1].replace(/(м|m)/gi, "000000");
	args[1] = args[1].replace(/(вабанк|вобанк|все|всё)/gi, user.stone);
	if (!message.$match[1])
		return message.send(`❗ Пример команды: Продать камень[кол-во] `);
	if (!Number(message.$match[1]) || message.$match[1] < 0)
		return message.send(`❗ СУММА должна быть числового вида.`);
	if (user.stone < message.$match[1])
		return message.send(` У вас нет столько камня!`);
	user.stone -= args[1]; //50 * Number(message.$match[1]);
	user.balance += 250 * message.$match[1]; //50 * Number(message.$match[1]);

	return message.send(
		`💴 Вы успешно продали камень за ${spaces(Math.floor(250 * message.$match[1]))}$.`
	);
});

vk.updates.hear(/^(?:продать)\s(?:медь)\s(.*)$/i, async (message, bot) => {
	let user = acc.users[u_id(message.user)];
	message.$match[1] = message.$match[1].replace(/(\.|\,)/gi, "");
	message.$match[1] = message.$match[1].replace(/(к|k)/gi, "000");
	message.$match[1] = message.$match[1].replace(/(м|m)/gi, "000000");
	message.$match[1] = message.$match[1].replace(
		/(вабанк|вобанк|все|всё)/gi,
		user.copper
	);
	let id = user_id(message.user);
	if (!message.$match[1])
		return message.send(`❗ Пример команды: Продать медь[кол-во] `);
	if (!Number(message.$match[1]) || message.$match[1] < 0)
		return message.send(`❗ СУММА должна быть числового вида.`);
	if (user.copper < message.$match[1])
		return message.send(` У вас нет столько меди!`);
	user.copper -= message.$match[1];
	user.balance += 300 * message.$match[1];

	return message.send(
		`💴 Вы успешно продали медь за ${spaces(Math.floor(300 * message.$match[1]))}$.`
	);
});

vk.updates.hear(/^(?:продать)\s(?:железо)\s(.*)$/i, async (message, bot) => {
	let user = acc.users[u_id(message.user)];
	message.$match[1] = message.$match[1].replace(/(\.|\,)/gi, "");
	message.$match[1] = message.$match[1].replace(/(к|k)/gi, "000");
	message.$match[1] = message.$match[1].replace(/(м|m)/gi, "000000");
	message.$match[1] = message.$match[1].replace(
		/(вабанк|вобанк|все|всё)/gi,
		user.iron
	);
	let id = user_id(message.user);
	if (!message.$match[1])
		return message.send(`❗ Пример команды: Продать железо[кол-во] `);
	if (!Number(message.$match[1]) || message.$match[1] < 0)
		return message.send(`❗ СУММА должна быть числового вида.`);
	if (user.iron < message.$match[1])
		return message.send(` У вас нет столько железа!`);
	user.iron -= message.$match[1]; //50 * Number(message.$match[1]);
	user.balance += 500 * message.$match[1]; //50 * Number(message.$match[1]);

	return message.send(
		`💴 Вы успешно продали железо за ${spaces(Math.floor(500 * message.$match[1]))}$.`
	);
});

vk.updates.hear(/^(?:продать)\s(?:металл)\s(.*)$/i, async (message, bot) => {
	let user = acc.users[u_id(message.user)];
	message.$match[1] = message.$match[1].replace(/(\.|\,)/gi, "");
	message.$match[1] = message.$match[1].replace(/(к|k)/gi, "000");
	message.$match[1] = message.$match[1].replace(/(м|m)/gi, "000000");
	message.$match[1] = message.$match[1].replace(
		/(вабанк|вобанк|все|всё)/gi,
		user.metall
	);
	let id = user_id(message.user);
	if (!message.$match[1])
		return message.send(`❗ Пример команды: Продать металл [кол-во] `);
	if (!Number(message.$match[1]) || message.$match[1] < 0)
		return message.send(`❗ СУММА должна быть числового вида.`);
	if (user.metall < message.$match[1])
		return message.send(` У вас нет столько металла!`);
	user.metall -= message.$match[1]; //50 * Number(message.$match[1]);
	user.balance += 600 * message.$match[1]; //50 * Number(message.$match[1]);

	return message.send(
		`💴 Вы успешно продали металл за ${spaces(Math.floor(600 * message.$match[1]))}$.`
	);
});

vk.updates.hear(/^(?:продать)\s(?:серебро)\s(.*)$/i, async (message, bot) => {
	let user = acc.users[u_id(message.user)];
	message.$match[1] = message.$match[1].replace(/(\.|\,)/gi, "");
	message.$match[1] = message.$match[1].replace(/(к|k)/gi, "000");
	message.$match[1] = message.$match[1].replace(/(м|m)/gi, "000000");
	message.$match[1] = message.$match[1].replace(
		/(вабанк|вобанк|все|всё)/gi,
		user.silver
	);
	let id = user_id(message.user);
	if (!message.$match[1])
		return message.send(`❗ Пример команды: Продать серебро[кол-во] `);
	if (!Number(message.$match[1]) || message.$match[1] < 0)
		return message.send(`❗ СУММА должна быть числового вида.`);
	if (user.silver < message.$match[1])
		return message.send(` У вас нет столько Серебра!`);
	user.silver -= message.$match[1]; //50 * Number(message.$match[1]);
	user.balance += 1000 * message.$match[1]; //50 * Number(message.$match[1]);

	return message.send(
		`💴 Вы успешно продали серебро за ${spaces(Math.floor(1000 * message.$match[1]))}$.`
	);
});

vk.updates.hear(/^(?:продать)\s(?:золото)\s(.*)$/i, async (message, bot) => {
	let user = acc.users[u_id(message.user)];
	message.$match[1] = message.$match[1].replace(/(\.|\,)/gi, "");
	message.$match[1] = message.$match[1].replace(/(к|k)/gi, "000");
	message.$match[1] = message.$match[1].replace(/(м|m)/gi, "000000");
	message.$match[1] = message.$match[1].replace(
		/(вабанк|вобанк|все|всё)/gi,
		user.gold
	);
	let id = user_id(message.user);
	if (!message.$match[1])
		return message.send(`❗ Пример команды: Продать золото[кол-во] `);
	if (!Number(message.$match[1]) || message.$match[1] < 0)
		return message.send(`❗ СУММА должна быть числового вида.`);
	if (user.gold < message.$match[1])
		return message.send(` У вас нет столько золота!`);
	user.gold -= message.$match[1]; //50 * Number(message.$match[1]);
	user.balance += 1250 * message.$match[1]; //50 * Number(message.$match[1]);

	return message.send(
		`💴 Вы успешно продали золото за ${spaces(Math.floor(1250 * message.$match[1]))}$.`
	);
});
vk.updates.hear(/^(?:продать)\s(?:титан)\s(.*)$/i, async (message, bot) => {
	let user = acc.users[u_id(message.user)];
	message.$match[1] = message.$match[1].replace(/(\.|\,)/gi, "");
	message.$match[1] = message.$match[1].replace(/(к|k)/gi, "000");
	message.$match[1] = message.$match[1].replace(/(м|m)/gi, "000000");
	message.$match[1] = message.$match[1].replace(
		/(вабанк|вобанк|все|всё)/gi,
		user.titan
	);
	let id = user_id(message.user);
	if (!message.$match[1])
		return message.send(`❗ Пример команды: Продать титан [кол-во] `);
	if (!Number(message.$match[1]) || message.$match[1] < 0)
		return message.send(`❗ СУММА должна быть числового вида.`);
	if (user.titan < message.$match[1])
		return message.send(` У вас нет столько титана!`);
	user.titan -= message.$match[1]; //50 * Number(message.$match[1]);
	user.balance += 1350 * message.$match[1]; //50 * Number(message.$match[1]);

	return message.send(
		`💴 Вы успешно продали титан за ${spaces(Math.floor(1350 * message.$match[1]))}$.`
	);
});
vk.updates.hear(/^(?:продать)\s(?:алмаз)\s(.*)$/i, async (message, bot) => {
	let user = acc.users[u_id(message.user)];
	message.$match[1] = message.$match[1].replace(/(\.|\,)/gi, "");
	message.$match[1] = message.$match[1].replace(/(к|k)/gi, "000");
	message.$match[1] = message.$match[1].replace(/(м|m)/gi, "000000");
	message.$match[1] = message.$match[1].replace(
		/(вабанк|вобанк|все|всё)/gi,
		user.diamond
	);	
	let id = user_id(message.user);
	if (!message.$match[1])
		return message.send(`❗ Пример команды: Продать алмаз [кол-во] `);
	if (!Number(message.$match[1]) || message.$match[1] < 0)
		return message.send(`❗ СУММА должна быть числового вида.`);
	if (user.diamond < message.$match[1])
		return message.send(` У вас нет столько алмазов!`);
	user.diamond -= message.$match[1]; //50 * Number(message.$match[1]);
	user.balance += 1500 * message.$match[1]; //50 * Number(message.$match[1]);

	return message.send(
		`💴 Вы успешно продали алмазы за ${spaces(Math.floor(1500 * message.$match[1]))}$.`
	);
});

/////////////////////////////////////////////////////////////////////////////

vk.updates.hear(/^(?:пирс)$/i, (message) => {
		let user = acc.users[u_id(message.user)];

	let user_prefix = acc.users[u_id(organizations.pier.owner)];
		if (user.gps != 5) return message.send(`❗Ошибка! Для того чтобы рыбачить, перейдите в пирс. 
❗Для того чтобы перейти в автосалон напишите "GPS 5". `)
	message.send(`Вы перешли на пирс! 
	👤 Владелец: @id${organizations.pier.owner}(${user_prefix.prefix})
	➖➖➖➖➖➖➖➖➖➖
	🔤 ➖ Информация:
	🎋 Сумка
	🌊 Лавка рыбы
	Для того чтобы рыбачить введите: "Рыбачить"
	Для владельцев: Пирс меню
	`);
});

vk.updates.hear(/^(?:пирс меню)$/i, (message) => {
	let user = acc.users[u_id(message.user)];

	if (user.id != organizations.pier.owner) {
		return message.send(`Вы не владелец пирса!`);
	} else {
		return message.send(`Вы открыли меню пирса!
		💰 Счет пирса: ${spaces(organizations.pier.balance)}
		
		📕 Команды для владельца пирса:
		1. ⛔ Пирс закрыть - закрыть пирс
		2. ✅ Пирс открыть - открыть пирс
		3. 💵 Пирс снять [Сумма] - снять деньги со счета пирса`);
	}
});

vk.updates.hear(/^(?:пирс закрыть)$/i, (message) => {
	let user = acc.users[u_id(message.user)];

	if (user.id != organizations.pier.owner) {
		return message.send(`Вы не владелец пирса!`);
	} else {
		organizations.pier.status = false;
		message.send(`Вы успешно закрыли пирс!`);
	}
});
vk.updates.hear(/^(?:пирс открыть)$/i, (message) => {
	let user = acc.users[u_id(message.user)];

	if (user.id != organizations.pier.owner) {
		return message.send(`Вы не владелец пирса!`);
	} else {
		organizations.pier.status = true;
		message.send(`Вы успешно открыли пирс!`);
	}
});

vk.updates.hear(/^(?:пирс снять)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];

	if (user.id != organizations.pier.owner) {
		return message.send(`Вы не владелец шахты!`);
	}
	if (!message.$match[1])
		return message.send(`❗ Пример команды: Пирс снять [Сумма]`);

	if (organizations.pier.balance < message.$match[1])
		return message.send(`❗ На счету пирса нет столько`);
	organizations.pier.balance -= Number(message.$match[1]);
	user.balance += Number(message.$match[1]);

	return message.send(
		`💴 Вы успешно сняли с пирса ${spaces(message.$match[1])}$.`
	);
});

vk.updates.hear(/^(?:лавка рыбы)$/i, (message) => {
	let user_prefix = acc.users[u_id(organizations.pier.owner)];
	if (!organizations.pier.status) {
		return message.send(
			`Пирс закрыт владельцем @id${organizations.pier.owner}(${user_prefix.prefix})`
		);
	}
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

vk.updates.hear(/^(?:рюкзак|сумка|🧳 Рюкзак)$/i, (message) => {
	let user = acc.users[u_id(message.user)];
	message.send(`🧳 Ваш Рюкзак:
🐟 Окунь: ${user.okyn}
🐡 Карась: ${user.karas}
🐠 Карп: ${user.karp}
🐬 Треска: ${user.treska}
🐳 Щука: ${user.shyka}
🦈 Сом: ${user.som}
🦐 Кальмар: ${user.kalmar}

❗Для того чтобы продать рыбу введите в
"Продать рыбу [Название рыбы] [кол-во].
❗Пример: Продать рыбу карась 100.
	`);
});

vk.updates.hear(/^(?:рыбачить)$/i, (message) => {
	let user_prefix = acc.users[u_id(organizations.pier.owner)];
	let user = acc.users[u_id(message.user)];
	let okyn = utils.random(5, 8);
	let karas = utils.random(5, 11);
	let shyka = utils.random(12, 17);
	let som = utils.random(8, 14);
	let kalmar = utils.random(6, 13);
	let karp = utils.random(5, 8);
	let treska = utils.random(5, 9);
	let hp = utils.random(3, 7);
			if (user.gps != 5) return message.send(`❗Ошибка! Для того чтобы рыбачить, перейдите в пирс. 
❗Для того чтобы перейти в автосалон напишите "GPS 5". `)
	if (!organizations.pier.status) {
		return message.send(
			`Пирс закрыт владельцем @id${organizations.pier.owner}(${user_prefix.prefix})`
		);
	}
	if (user.ydochka < 5) {
		return message.send(`🎣 У вас нет удочки!`);
	}

	if (user.golod < 5) {
		return message.send(
			`🍗 Вы слишком голодны! Перейдите в пиццерию для пополения Голода(gps)`
		);
	}
	if (user.hp < 5) {
		return message.send(
			`Вы заболели ! Что бы вылечиться, используйте: Больница`
		);
	}
	if (user.ribalka == true) return message.send(`Вы еще ловите рыбу...`);
	user.ribalka = true;
	setTimeout(() => {
		user.ribalka = false;
	}, 3000);
    if (user.super_ydochka) {
				organizations.pier.balance += organizations.pier.salary;
		user.okyn += okyn * 3
		user.karas += karas * 3;
		user.shyka += shyka * 3;
		user.som += som * 3;
		user.kalmar += kalmar * 3;
		user.karp += karp * 3;
		user.treska += treska * 3;
		user.ydochka -= 5;
		user.golod -= 5;
		user.hp -= hp;
	
		return message.send(` 
		🌊 Вы выловили рыбу:
	🐟 Окунь: ${okyn * 3}
	🐡 Карась: ${karas * 3}
	🐠 Карп: ${karp * 3}
	🐬 Треска: ${treska * 3}
	🐳 Щука: ${shyka * 3}
	🦈 Сом: ${som * 3 }
	🦐 Кальмар: ${kalmar * 3}
	
	❗ У вас используется Супер-Удочка, поэтому вся рыба умножается на 3.

	❓ Показатели уменьшены: 
	🎣 Удочка: ${user.ydochka}%
	🍗 Голод: ${user.golod}%
	❤ Здоровье: ${user.hp}%
		`);
	} else {
		organizations.pier.balance += organizations.pier.salary;
		user.okyn += okyn;
		user.karas += karas;
		user.shyka += shyka;
		user.som += som;
		user.kalmar += kalmar;
		user.karp += karp;
		user.treska += treska;
		user.ydochka -= 5;
		user.golod -= 5;
		user.hp -= hp;
	
		return message.send(` 
		🌊 Вы выловили рыбу:
	🐟 Окунь: ${okyn}
	🐡 Карась: ${karas}
	🐠 Карп: ${karp}
	🐬 Треска: ${treska}
	🐳 Щука: ${shyka}
	🦈 Сом: ${som}
	🦐 Кальмар: ${kalmar}
	
	❓ Показатели уменьшены: 
	🎣 Удочка: ${user.ydochka}%
	🍗 Голод: ${user.golod}%
	❤ Здоровье: ${user.hp}%
		`);
	}
});

vk.updates.hear(/^(?:продать рыбу)\s(?:окунь)\s(.*)$/i, async (message, bot) => {
	let user = acc.users[u_id(message.user)];
	message.$match[1] = message.$match[1].replace(/(\.|\,)/gi, "");
	message.$match[1] = message.$match[1].replace(/(к|k)/gi, "000");
	message.$match[1] = message.$match[1].replace(/(м|m)/gi, "000000");
	message.$match[1] = message.$match[1].replace(
		/(вабанк|вобанк|все|всё)/gi,
		user.okyn
	);
	let id = user_id(message.user);
	if (!message.$match[1])
		return message.send(`❗ Пример команды: Продать рыбу окунь[кол-во] `);
	if (!Number(message.$match[1]) || message.$match[1] < 0)
		return message.send(`❗ СУММА должна быть числового вида.`);
	if (user.okyn < message.$match[1])
		return message.send(` У вас нет столько окуня!`);
	user.okyn -= message.$match[1];
	user.balance += 300 * message.$match[1];

	return message.send(
		`💴 Вы успешно продали окуня за ${spaces(300 * message.$match[1])}$.`
	);
});

vk.updates.hear(/^(?:продать рыбу)\s(?:карась)\s(.*)$/i, async (message, bot) => {
	let user = acc.users[u_id(message.user)];
	message.$match[1] = message.$match[1].replace(/(\.|\,)/gi, "");
	message.$match[1] = message.$match[1].replace(/(к|k)/gi, "000");
	message.$match[1] = message.$match[1].replace(/(м|m)/gi, "000000");
	message.$match[1] = message.$match[1].replace(
		/(вабанк|вобанк|все|всё)/gi,
		user.karas
	);
	let id = user_id(message.user);
	if (!message.$match[1])
		return message.send(`❗ Пример команды: Продать рыбу карась [кол-во] `);
	if (!Number(message.$match[1]) || message.$match[1] < 0)
		return message.send(`❗ СУММА должна быть числового вида.`);
	if (user.karas < message.$match[1])
		return message.send(` У вас нет столько карася!`);
	user.karas -= message.$match[1];
	user.balance += 235 * message.$match[1];

	return message.send(
		`💴 Вы успешно продали карасей за ${spaces(235 * message.$match[1])}$.`
	);
});

vk.updates.hear(/^(?:продать рыбу)\s(?:карп)\s(.*)$/i, async (message, bot) => {
	let user = acc.users[u_id(message.user)];
	message.$match[1] = message.$match[1].replace(/(\.|\,)/gi, "");
	message.$match[1] = message.$match[1].replace(/(к|k)/gi, "000");
	message.$match[1] = message.$match[1].replace(/(м|m)/gi, "000000");
	message.$match[1] = message.$match[1].replace(
		/(вабанк|вобанк|все|всё)/gi,
		user.karp
	);
	let id = user_id(message.user);
	if (!message.$match[1])
		return message.send(`❗ Пример команды: Продать рыбу карп [кол-во] `);
	if (!Number(message.$match[1]) || message.$match[1] < 0)
		return message.send(`❗ СУММА должна быть числового вида.`);
	if (user.karp < message.$match[1])
		return message.send(` У вас нет столько карпа!`);
	user.karp -= message.$match[1];
	user.balance += 194 * message.$match[1];

	return message.send(
		`💴 Вы успешно продали карпов за ${spaces(194 * message.$match[1])}$.`
	);
});

vk.updates.hear(/^(?:продать рыбу)\s(?:треска)\s(.*)$/i, async (message, bot) => {
	let user = acc.users[u_id(message.user)];
	message.$match[1] = message.$match[1].replace(/(\.|\,)/gi, "");
	message.$match[1] = message.$match[1].replace(/(к|k)/gi, "000");
	message.$match[1] = message.$match[1].replace(/(м|m)/gi, "000000");
	message.$match[1] = message.$match[1].replace(
		/(вабанк|вобанк|все|всё)/gi,
		user.treska
	);
	let id = user_id(message.user);
	if (!message.$match[1])
		return message.send(`❗ Пример команды: Продать рыбу треска [кол-во] `);
	if (!Number(message.$match[1]))
		return message.send(`❗ СУММА должна быть числового вида.`);
	if (user.treska < message.$match[1])
		return message.send(` У вас нет столько трески!`);
	user.treska -= message.$match[1];
	user.balance += 521 * message.$match[1];

	return message.send(
		`💴 Вы успешно продали треску за ${spaces(521 * message.$match[1])}$.`
	);
});

vk.updates.hear(/^(?:продать рыбу)\s(?:щука)\s(.*)$/i, async (message, bot) => {
	let user = acc.users[u_id(message.user)];
	message.$match[1] = message.$match[1].replace(/(\.|\,)/gi, "");
	message.$match[1] = message.$match[1].replace(/(к|k)/gi, "000");
	message.$match[1] = message.$match[1].replace(/(м|m)/gi, "000000");
	message.$match[1] = message.$match[1].replace(
		/(вабанк|вобанк|все|всё)/gi,
		user.shyka
	);
	let id = user_id(message.user);
	if (!message.$match[1])
		return message.send(`❗ Пример команды: Продать рыбу щука [кол-во] `);
	if (!Number(message.$match[1]))
		return message.send(`❗ СУММА должна быть числового вида.`);
	if (user.shyka < message.$match[1])
		return message.send(` У вас нет столько щуки!`);
	user.shyka -= message.$match[1];
	user.balance += 442 * message.$match[1];

	return message.send(
		`💴 Вы успешно продали щуку за ${spaces(442 * message.$match[1])}$.`
	);
});

vk.updates.hear(/^(?:продать рыбу)\s(?:сом)\s(.*)$/i, async (message, bot) => {
	let user = acc.users[u_id(message.user)];
	message.$match[1] = message.$match[1].replace(/(\.|\,)/gi, "");
	message.$match[1] = message.$match[1].replace(/(к|k)/gi, "000");
	message.$match[1] = message.$match[1].replace(/(м|m)/gi, "000000");
	message.$match[1] = message.$match[1].replace(
		/(вабанк|вобанк|все|всё)/gi,
		user.som
	);
	let id = user_id(message.user);
	if (!message.$match[1])
		return message.send(`❗ Пример команды: Продать рыбу сом [кол-во] `);
	if (!Number(message.$match[1]))
		return message.send(`❗ СУММА должна быть числового вида.`);
	if (user.som < message.$match[1])
		return message.send(` У вас нет столько сомов!`);
	user.som -= message.$match[1];
	user.balance += 320 * message.$match[1];

	return message.send(
		`💴 Вы успешно продали сомов за ${spaces(320 * message.$match[1])}$.`
	);
});

vk.updates.hear(/^(?:продать рыбу)\s(?:кальмар|кольмар)\s(.*)$/i, async (message, bot) => {
	let user = acc.users[u_id(message.user)];
	message.$match[1] = message.$match[1].replace(/(\.|\,)/gi, "");
	message.$match[1] = message.$match[1].replace(/(к|k)/gi, "000");
	message.$match[1] = message.$match[1].replace(/(м|m)/gi, "000000");
	message.$match[1] = message.$match[1].replace(
		/(вабанк|вобанк|все|всё)/gi,
		user.kalmar
	);
		let id = user_id(message.user);
		if (!message.$match[1])
			return message.send(`❗ Пример команды: Продать серебро[кол-во] `);
		if (!Number(message.$match[1]))
			return message.send(`❗ СУММА должна быть числового вида.`);
		if (user.kalmar < message.$match[1])
			return message.send(` У вас нет столько кальмаров!`);
		user.kalmar -= message.$match[1];
		user.balance += 276 * message.$match[1];

		return message.send(
			`💴 Вы успешно продали кальмаров за ${spaces(276 * message.$match[1])}$.`
		);
	}
);
///////////////////////s/s/////////////////////////////////////////////////////
//////////////////////s////ss/////////////////sss//////////////////////////////////
/////////////////////s//////s/////////////////s/////////////////////////////////
////////////////////s///////s//////////////////////////////////////////////////
///////////////////s/sss/sss//////s//////////////////////////////////////////////////

vk.updates.hear(/^(?:работать)/i, (message) => {
	let user = acc.users[u_id(message.user)];
	if (!user.pass) return message.send(`‼ У вас нет паспорта.`)
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
	if (!user.pass) return message.send(`‼ У вас нет паспорта. Сделайте его в Мерии`)
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
				if (i > 9) {
					text += `${count}&#8419;. ${houses[i].name} | ${spaces(
						houses[i].price
					)}$\n`;
				} 
			}

			return message.send(` 
				🏡 Доступные дома:
				1. Номер в отеле | 100.000$
				2. Квартира 'эконом' класса | 3.000.000$
				3. Дом у пляжа Веспуччи | 2.880.000$
				4. Квартира в центральном районе | 7.000.000$
				5. Роскошная квартира около maze bank | 50.000.000$
				6. Элитный особняк на холме Вайнвуд | 100.000.000$
				7. Дом Дмитрия Катанова | 250.000.000$
				8. Дом Максима Лесного | 2.500.000.000$
				9. Небоскрёб Рамзана Кадырова | 15.500.000.000$
				10. Московский Кремль | 20.000.000.000$
				11. Элитный Особняк Илон Маска | 27.000.000.000$
				12. Роскошная вилла в Дубае | 30.500.000.000$


				❗ Для покупки напишите: "Дом [номер]" 
			`);
		} else {
			return message.send(` 
				&#127969; У вас уже куплен ${houses[user.house].name}
			`);
		}
	}
});

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
	let user_prefix = acc.users[u_id(organizations.odejda.owner)];
	
	if (user.gps != 2) return message.send(`❗Ошибка! Для того чтобы купить одежду перейдите в магазин одежды.
❗Для того чтобы перейти в магазин напишите "GPS 2". `)
	if (!organizations.odejda.status) {
		return message.send(
			`Магазин одежды закрыт владельцем @id${organizations.odejda.owner}(${user_prefix.prefix})`
		);
	}
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
	if (user.skin == false) {
		return message.send(
			`У вас нет скина, что бы приобрести используйте: Одежда`
		);
	}
	let mon = skin[user.skin].price * 0.7;

	return message.send(
		` 
			👱 Ваш скин: ${skin[user.skin].name}
			💰 Цена Продажи Государству: ${spaces(Math.floor(mon))}$
		`,
		{ attachment: `${skin[user.skin].attachment}` }
	);
});

vk.updates.hear(/^(?:мой дом)$/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let count = 0;
	let text = ``
	if (user.house == false) {
		return message.send(
			`❗ У вас нет дома, что бы приобрести используйте: Дом`
		);
	}
	let mon = houses[user.house].price * 0.7;
	return message.send(
		` 
			🏡 Ваш дом: ${houses[user.house].name}
			🔒 ➖ Сейф: ${spaces(user.seif)}$
			💊 ➖ Неизвестное Вещество: ${spaces(user.narko)} гр.
			🏢 ➖ Гараж:
			1&#8419;${user.car == false ? `Пусто` : `${cars[user.car].name}`}
			2&#8419;${user.car2 == false ? `Пусто` : `${cars[user.car2].name}`}
			3&#8419;${user.car3 == false ? `Пусто` : `${cars[user.car3].name}`}
			💰 ➖ Команды сейфа:
			🔹 Пополнить: Мой дом пополнить [сумма]
			🔸 Снятие: Мой дом снять [cумма]
			➖➖➖➖➖
			❗⚠ ➖ При Продаже Дома, у Вас исчезнут все машины, поэтому, перед продажей дома, продайте все свои машины.
		`,
	);
});

vk.updates.hear(/^(?:!!положить)\s(?:вещество)\s(.*)$/i, async (message, bot) => {
	let user = acc.users[u_id(message.user)];
	let args = message.$match;
	args[1] = args[1].replace(/(\.|\,)/gi, "");
	args[1] = args[1].replace(/(к|k)/gi, "000");
	args[1] = args[1].replace(/(м|m)/gi, "000000");
	args[1] = args[1].replace(
		/(вабанк|вобанк|все|всё)/gi,
		user.narko
	);
	if (!user.house) return message.send(`❗ У вас нет дома, приобретите его.`)
	if (user.narko < args[1]) return message.send(`❗ У вас нет такого кол-ва неизв.вещества.`);
	user.balance -= Number(args[1]);
	user.narko += Number(args[1]);
	return message.send(
		`❗ Вы успешно пополнили баланс сейфа на ${spaces(args[1])}$\n⚠ Что бы снять, используйте команду: Дом снять [Сумма]`
	);
});

vk.updates.hear(/^(?:мой дом)\s(?:пополнить)\s(.*)$/i, async (message, bot) => {
	let user = acc.users[u_id(message.user)];
	let args = message.$match;
	args[1] = args[1].replace(/(\.|\,)/gi, "");
	args[1] = args[1].replace(/(к|k)/gi, "000");
	args[1] = args[1].replace(/(м|m)/gi, "000000");
	args[1] = args[1].replace(
		/(вабанк|вобанк|все|всё)/gi,
		user.seif
	);
	if (!user.house) return message.send(`❗ У вас нет дома, приобретите его.`)
	if (user.balance < args[1]) return message.send(`❗ У вас недостаточно денег`);
	user.balance -= Number(args[1]);
	user.seif += Number(args[1]);
	return message.send(
		`❗ Вы успешно пополнили баланс сейфа на ${spaces(args[1])}$\n⚠ Что бы снять, используйте команду: Дом снять [Сумма]`
	);
});
vk.updates.hear(/^(?:мой дом)\s(?:снять)\s(.*)$/i, async (message, bot) => {
	let user = acc.users[u_id(message.user)];
	message.$match[1] = message.$match[1].replace(/(\.|\,)/gi, "");
	message.$match[1] = message.$match[1].replace(/(к|k)/gi, "000");
	message.$match[1] = message.$match[1].replace(/(м|m)/gi, "000000");
	message.$match[1] = message.$match[1].replace(
		/(вабанк|вобанк|все|всё)/gi,
		user.seif
	);
	if (!user.house) return message.send(`❗ У вас нет дома, приобретите его.`)

	if (!message.$match[1])
		return message.send(`❗ Пример команды: Дом снять [Сумма]`);
	if (!Number(message.$match[1]))
		return message.send(`❗ СУММА должна быть числового вида.`);
	if (user.seif < message.$match[1])
		return message.send(`❗ На счету автосалона нет столько`);
	user.seif -= Number(message.$match[1]);
	user.balance += Number(message.$match[1]);

	return message.send(
		`💴 Вы успешно забрали с сейфа ${spaces(message.$match[1])}$.`
	);
});

vk.updates.hear(
	/^(?:магазин одежды|👕 магазин одежды|👕 Магазин одежды)$/i,
	(message) => {
		let user = acc.users[u_id(message.user)];
		let user_prefix = acc.users[u_id(organizations.odejda.owner)];
		return message.send(
			`👕 Вы успешно перешли в Магазин Одежды!
	👤 Владелец: @id${organizations.odejda.owner}(${user_prefix.prefix}),
	♻ Статус: ${organizations.odejda.status == false ? `Закрыто ⛔` : `Открыто ✅`}
	
	❗ Для входа в магазин одежды используйте: "Магазин одежды войти"
	❗ Для управления магазина одежды введите: "Магазин одежды меню"
	`,
			{
				attachment: `photo-214284365_457239095`,
				keyboard: JSON.stringify({
					inline: true,
					buttons: [
						[
							{
								action: {
									type: "text",
									payload: "{}",
									label: "👕 Магазин одежды меню",
								},
								color: "primary",
							},
						],
					],
				}),
			}
		);
	}
);
vk.updates.hear(/^(?:магазин одежды войти|одежда войти)$/i, (message) => {
	let user = acc.users[u_id(message.user)];
	message.send(
		`
		👕Вы успешно вошли в Магазин одежды!

		❗ Для того чтобы купить товар введите: "Скин [номер]"
		❗ Доступные скины:

		1. Бомж (10000$)
		2. Рэпер (250000$)
		3. Бандит (300000$)
		4. Наркодилер (350000)
		5. Мед.сестра (450000)
		6. Carl Jhohnson (550000)
		7. Девушка №1 (900000)
		8. Девушка №2 (950000)
		9. Олигарх (1450000)
		10. Niko Bellik (2500000)

		❗ Для покупки напишите: "Скин [номер]"
`,
		{ attachment: `photo-214284365_457239095` }
	);
});

vk.updates.hear(
	/^(?:магазин одежды меню|👕 Магазин одежды меню)$/i,
	(message) => {
		let user = acc.users[u_id(message.user)];
		if (user.id != organizations.odejda.owner) {
			return message.send(`Вы не владелец магазина одежды!!`);
		} else {
			return message.send(
				`Вы открыли меню магазина одежды!
		💰 Счет магазина: ${spaces(organizations.odejda.balance)}

		📕 Команды для владельца магазина:
		1. ⛔ Магазин одежды закрыть - закрыть магазин
		2. ✅ Магазин одежды открыть - открыть магазин
		3. 💵 Магазин одежды снять [Сумма] - снять деньги со счета магазина одежды`,
				{
					keyboard: JSON.stringify({
						inline: true,
						buttons: [
							[
								{
									action: {
										type: "text",
										payload: "{}",
										label: "👕 Магазин одежды закрыть",
									},
									color: "primary",
								},
								{
									action: {
										type: "text",
										payload: "{}",
										label: "👕 Магазин одежды открыть",
									},
									color: "primary",
								},
							],
						],
					}),
				}
			);
		}
	}
);

vk.updates.hear(
	/^(?:Магазин одежды закрыть|👕 Магазин одежды закрыть)$/i,
	(message) => {
		let user = acc.users[u_id(message.user)];

		if (user.id != organizations.odejda.owner) {
			return message.send(`Вы не владелец магазина одежды!`);
		} else {
			organizations.odejda.status = false;
			message.send(`Вы успешно закрыли магазин одежды!`);
		}
	}
);
vk.updates.hear(
	/^(?:магазин одежды открыть|👕 Магазин одежды открыть)$/i,
	(message) => {
		let user = acc.users[u_id(message.user)];

		if (user.id != organizations.odejda.owner) {
			return message.send(`Вы не владелец магазина одежды!`);
		} else {
			organizations.odejda.status = true;
			message.send(`Вы успешно открыли магазин одежды!`);
		}
	}
);

vk.updates.hear(
	/^(?:магазин одежды)\s(?:снять)\s(.*)$/i,
	async (message, bot) => {
		if (!message.$match[1])
			return message.send(`❗ Пример команды: Магазин одежды снять [Сумма]`);
		let user = acc.users[u_id(message.user)];
		message.$match[1] = message.$match[1].replace(/(\.|\,)/gi, "");
		message.$match[1] = message.$match[1].replace(/(к|k)/gi, "000");
		message.$match[1] = message.$match[1].replace(/(м|m)/gi, "000000");
		message.$match[1] = message.$match[1].replace(
			/(вабанк|вобанк|все|всё)/gi,
			organizations.odejda.balance
		);
		if (user.id != organizations.odejda.owner) {
			return message.send(`Вы не владелец магазина одежды!`);
		}

		if (!Number(message.$match[1]))
			return message.send(`❗ СУММА должна быть числового вида.`);
		if (organizations.pizza.balance < message.$match[1])
			return message.send(`❗ На счету магазина нет столько`);
		organizations.odejda.balance -= Number(message.$match[1]);
		user.balance += Number(message.$match[1]);

		return message.send(
			`💴 Вы успешно сняли с бизнеса ${spaces(message.$match[1])}$.`
		);
	}
);

vk.updates.hear(/^(?:моя машина)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let text = "";
	let count = 0;
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
			let mon = cars[user.car].price * 0.7;
			return message.send(
				` 
				🚘 Ваша машина: ${cars[user.car].name}
				💰 Цена Продажи Государству: ${spaces(Math.floor(mon))}$
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
	if (user.car && user.car2 && user.car3)
		return message.send(
			`🚘 У вас уже куплена машина.\nчтобы продать напишите: "Продать машину"`
		);
	if (message.$match[1] > 20)
		return message.send(`❗ Введите корректно номер машины.`);
	if (user.balance < cars[message.$match[1]].price)
		return message.send(`✉ У вас недостаточно денег!`);
	user.balance -= Number(cars[message.$match[1]].price);
	
	user.car == false ? user.car = Number(message.$match[1]) : !user.car2 ? user.car2 = Number(message.$match[1]) : !user.car3 ? user.car3 = Number(message.$match[1]) : ''
	return message.send(`🚘 Вы успешно купили машину <<${cars[message.$match[1]].name}>>`);
});

vk.updates.hear(/^(?:автосалон меню)$/i, (message) => {
	let user_prefix = acc.users[u_id(organizations.avtosalon.balance)];
	let user = acc.users[u_id(message.user)];
	let id = user_id(message.user);
	if (user.id != organizations.avtosalon.owner) {
		return message.send(`Вы не владелец автосалона!`);
	} else {
		return message.send(`Вы открыли меню автосалона!
		💰 Счет автосалона: ${spaces(organizations.avtosalon.balance)}
		📕 Команды для владельца автосалона:
		1. ⛔ Автосалон закрыть - закрыть автосалон
		2. ✅ Автосалон открыть - открыть автосалон
		3. 💵 автосалон снять [Сумма] - снять деньги со счета автосалона`);
	}
});

vk.updates.hear(/^(?:автосалон закрыть)$/i, (message) => {
	let user_prefix = acc.users[u_id(organizations.avtosalon.owner)];
	let user = acc.users[u_id(message.user)];
	let id = user_id(message.user);

	if (user.id != organizations.avtosalon.owner) {
		return message.send(`Вы не владелец автосалона!`);
	} else {
		organizations.avtosalon.status = false;
		message.send(`Вы успешно закрыли автосалон!`);
	}
});
vk.updates.hear(/^(?:автосалон открыть)$/i, (message) => {
	let user = acc.users[u_id(message.user)];

	if (user.id != organizations.avtosalon.owner) {
		return message.send(`Вы не владелец автосалона!`);
	} else {
		organizations.avtosalon.status = true;
		message.send(`Вы успешно открыли автосалон!`);
	}
});

vk.updates.hear(/^(?:автосалон)\s(?:снять)\s(.*)$/i, async (message, bot) => {
	let user = acc.users[u_id(message.user)];
	message.$match[1] = message.$match[1].replace(/(\.|\,)/gi, "");
	message.$match[1] = message.$match[1].replace(/(к|k)/gi, "000");
	message.$match[1] = message.$match[1].replace(/(м|m)/gi, "000000");
	message.$match[1] = message.$match[1].replace(
		/(вабанк|вобанк|все|всё)/gi,
		organizations.avtosalon.balance
	);
	if (user.id != organizations.avtosalon.owner) {
		return message.send(`Вы не владелец автосалона!`);
	}
	if (!message.$match[1])
		return message.send(`❗ Пример команды: Автосалон снять [Сумма]`);
	if (!Number(message.$match[1]))
		return message.send(`❗ СУММА должна быть числового вида.`);
	if (organizations.avtosalon.balance < message.$match[1])
		return message.send(`❗ На счету автосалона нет столько`);
	organizations.avtosalon.balance -= Number(message.$match[1]);
	user.balance += Number(message.$match[1]);

	return message.send(
		`💴 Вы успешно сняли с бизнеса ${spaces(message.$match[1])}$.`
	);
});

vk.updates.hear(/^(?:Автосалон)$/i, (message) => {
	let user_prefix = acc.users[u_id(organizations.avtosalon.owner)];
	let user = acc.users[u_id(message.user)];
		
	if (user.gps != 4) return message.send(`❗Ошибка! Для того чтобы купить машину перейдите в автосалон.
❗Для того чтобы перейти в автосалон напишите "GPS 4". `)
	message.send(
		`Вы успешно Перешли в Автосалон!
	👤 Владелец: @id${organizations.casino.owner}(${user_prefix.prefix}),
	♻ Статус: ${organizations.casino.status == false ? `Закрыто⛔` : `Открыто✅`}
	Выберите этаж на который хотите переместиться:
	🚖 Этаж №1: Low Класс
	🚘 Этаж №2: Premium Класс
	🚀 Этаж №3: Luxe Класс
	❗Для того чтобы перейти на этаж, введите команду "Этаж [номер]. Пример: Этаж 1.
	❗Для того чтобы открыть меню автосалона введите: Автосалон меню

	`,
		{ attachment: `photo-213827213_457239060` }
	);
});

vk.updates.hear(/^(?:Этаж 1)$/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let user_prefix = acc.users[u_id(organizations.avtosalon.owner)];
		if (user.gps != 4) return message.send(`❗Ошибка! Для того чтобы купить машину перейдите в автосалон.
❗Для того чтобы перейти в автосалон напишите "GPS 4". `)
	if (!organizations.avtosalon.status) {
		return message.send(
			`Автосалон закрыт владельцем @id${organizations.avtosalon.owner}(${user_prefix.prefix})`
		);
	}
	message.send(
		`Вы успешно Перешли На Этаж №1, Доступные Машины:
🚖 1 - ВАЗ-2101 (100.000$)

🚖 2 - ГАЗ-24-10 (180.000$)

🚖 3 - ВАЗ-2106 (350.000$)

🚖 4 - Lada Priora (500.000$)

🚖 5 - BMW E39 (750.000$)

🚖 6 - Mercedes-Benz E55 W210 (830.000$)

❗ Для приобретения транспорта напишите: "Машина [номер]"`,

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

vk.updates.hear(/^(?:!тест)$/i, (message) => {
	let user = acc.users[u_id(message.user)];
	return message.send(`test`, {
		template: JSON.stringify({
			type: "carousel",
			elements: [
				{
					photo_id: "-214284365_457239094",
					title: "🚗 ВАЗ-2101",
					description: "🚗 ВАЗ 2104 💰 Стоимость: 55.000$",
					action: {
						type: "open_photo",
					},
					buttons: [
						{
							action: {
								type: "text",
								label: "Текст кнопки 🌚",
								payload: "{}",
							},
						},
					],
				},
			],
		}),
	});
});

vk.updates.hear(/^(?:Этаж 2)$/i, (message) => {
	
	let user = acc.users[u_id(message.user)];
		if (user.gps != 4) return message.send(`❗Ошибка! Для того чтобы купить машину перейдите в автосалон.
❗Для того чтобы перейти в автосалон напишите "GPS 4". `)
	let user_prefix = acc.users[u_id(organizations.avtosalon.owner)];
	if (!organizations.avtosalon.status) {
		return message.send(
			`Автосалон закрыт владельцем @id${organizations.avtosalon.owner}(${user_prefix.prefix})`
		);
	}
	message.send(
		`[номер]"
Вы успешно Перешли На Этаж №2, Доступные Машины:
🚘 7 - Opel Astra H (950.000$)

🚘 8 - Lada Vesta (1.350.000)

🚘 9 - Mitsubishi Lancer (1.750.000)

🚘 10 - Toyota Camry (2.400.000)

🚘 11 - Chervolet Camaro (2.750.000)

🚘 12 - Nissan Silvia S15 (5.000.000)

🚘 13 - Subaru Impreza WRX STI (6.750.000)

🚘 14 - Nissan Skyline R34 GTR (7.300.000)

❗ Для приобретения транспорта напишите: "Машина [номер]" 
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
		if (user.gps != 4) return message.send(`❗Ошибка! Для того чтобы купить машину перейдите в автосалон.
❗Для того чтобы перейти в автосалон напишите "GPS 4". `)
	let user_prefix = acc.users[u_id(organizations.avtosalon.owner)];
	if (!organizations.avtosalon.status) {
		return message.send(
			`Автосалон закрыт владельцем @id${organizations.avtosalon.owner}(${user_prefix.prefix})`
		);
	}
	message.send(
		`Вы успешно Перешли На Этаж №3, Доступные Машины:
🚀 15 - Nissan Skyline R35 GTR (7.800.000)

🚀 16 - Porsche Cayenne (8.300.000)

🚀 17 - Mercedes-Benz C63 AMG W204 (9.300.000)

🚀 18 - Tesla Model S (11.300.000)

🚀 19 - Toyota Land Cruiser (14.300.000)

🚀 20 - Mercedes-Benz G-класс (16.300.000)

❗ Для приобретения транспорта напишите: "Машина [номер]" 
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
		1. 🍟 Ларёк с едой
		Цена: 500.000$
		Доход в час: 30.000$

		2. 💊Аптека
		Цена: 700.000$
		Доход в час: 45.000$

		3. 🍷Бар
		Цена: 1.200.000$
		Доход в час: 80.000$

		4. 🚘Автомойка
		Цена: 2.200.000$
		Доход в час: 110.000$

		5. 💻Компьютерный Клуб
		Цена: 3.500.000$
		Доход в час: 180.000$

		6. 💒Отель
		Цена: 5.000.000$
		Доход в час: 400.000$

				&
				🏢 Для покупки напишите: "Бизнес [номер]`);
});

vk.updates.hear(/^(?:бизнес)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let text = "";
	let count = 0;
	if (message.$match[1]) {
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
💰 Прибыль: ${spaces(businesses[user.business].earn)} $/час\n
💰 На счету: ${spaces(user.bizbalance)}$\n🔸 
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
		return message.send(`❗ Пример команды: снять [Сумма]`);
	if (!Number(message.$match[1]))
		return message.send(`❗ СУММА должна быть числового вида.`);
	if (user.bizbalance < message.$match[1])
		return message.send(`❗ На счету бизнеса нет столько`);
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

vk.updates.hear(/^(?:продать машину)\s?([0-9]+)?\s?(.*)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	if (!message.$match[1]) return message.send(`❗ Выбирите нужный слот в гараже.\nПример команды: Продать машину 2`)
	if (message.$match[1] == 1 ) {
		if(!user.car) {
			return message.send(`❗ У вас нет машины.`)
		}
		let mon = cars[user.car].price * 0.7;
		user.balance += Number(mon);
		user.car = false;
		return message.send(`  
			🚘 Вы успешно продали машину Государству!
			🚘 За ${spaces(Math.floor(mon))}$.
		`);
	}
	if (message.$match[1] == 2 ) {
		if(!user.car2) {
			return message.send(`❗ У вас нет машины.`)
		}
		let mon = cars[user.car2].price * 0.7;
		user.balance += Number(mon);
		user.car2 = false;
		return message.send(`  
			🚘 Вы успешно продали машину Государству!
			🚘 За ${spaces(Math.floor(mon))}$.
		`);
	}
	if (message.$match[1] == 3 ) {
		if(!user.car3) {
			return message.send(`❗ У вас нет машины.`)
		}
		let mon = Number(cars[user.car3].price * 0.7)
		user.balance += Number(mon);
		user.car3 = false;
		return message.send(`  
			🚘 Вы успешно продали машину Государству!
			🚘 За ${spaces(Math.floor(mon))}$.
		`);
	}
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

vk.updates.hear(
	/^(?:передать|перевести|перевод)\s?([0-9]+)?\s?(.*)?/i,
	(message) => {
		if (!message.$match[1] || !message.$match[2])
			return message.send(`💰 Введите корректно команду: "Передать ID СУММА"`);
		if (!acc.users[message.$match[1]])
			return message.send(`✉ Такого игрока не найдено...`);
		if (message.$match[1] == u_id(message.user))
			return message.send(`❗Ошибка, вы указали свой ID.`);
		let args = message.$match;
		let user = acc.users[u_id(message.user)];
		args[2] = args[2].replace(/(\.|\,)/gi, "");
		args[2] = args[2].replace(/(к|k)/gi, "000");
		args[2] = args[2].replace(/(м|m)/gi, "000000");
		args[2] = args[2].replace(/(вабанк|вобанк|все|всё)/gi, user.balance);
		if (!Number(args[2]) || args[2] < 0)
			return message.send(`❗ Введите корректно сумму`);
		if (user.balance < args[2])
			return message.send(`❗ У вас недостаточно денег`);
		user.balance -= Number(args[2]);
		acc.users[args[1]].balance += Number(args[2]);
		vk.api.call("messages.send", {
			user_id: acc.users[args[1]].id,
			message: `❗${nick(message.user)} перевел вам ${spaces(
				args[2]
			)}\n Ваш баланс ${acc.users[args[1]].balance}`,
		});
		return message.send(
			`💰 Вы перевели ${spaces(args[2])}$ игроку @id${acc.users[args[1]].id}(${
				acc.users[args[1]].prefix
			})`
		);
	}
);

vk.updates.hear(/^(?:передать вещество)\s?([0-9]+)?\s?(.*)?/i, (message) => {
	if (!message.$match[1] || !message.$match[2])
		return message.send(
			`💰 Введите корректно команду: "Передать вещество ID [кол-во]"`
		);
	if (!acc.users[message.$match[1]])
		return message.send(`✉ Такого игрока не найдено...`);
	if (message.$match[1] == u_id(message.user))
		return message.send(`✉ Вы указали свой ID...`);
	let args = message.$match;
	let user = acc.users[u_id(message.user)];
	args[2] = args[2].replace(/(\.|\,)/gi, "");
	args[2] = args[2].replace(/(к|k)/gi, "000");
	args[2] = args[2].replace(/(м|m)/gi, "000000");
	args[2] = args[2].replace(/(вабанк|вобанк|все|всё)/gi, user.narko);
	if (!Number(args[2]) || args[2] < 0)
		return message.send(`💰 Введите корректно количество`);
	if (user.narko < args[2])
		return message.send(`💰 У вас недостаточно вещества`);
	user.narko -= Number(args[2]);
	acc.users[args[1]].narko += Number(args[2]);
	return message.send(
		`💰 Вы перевели ${spaces(args[2])}$ вещества игроку @id${
			acc.users[args[1]].id
		}(${acc.users[args[1]].prefix})`
	);
});

vk.updates.hear(/^(?:банк положить|банк пополнить)\s?(.*)?/i, (message) => {
	if (!message.$match[1]) return message.send(`💰 Введите корректно сумму`);
	let user = acc.users[u_id(message.user)];
	let args = message.$match;
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
	let user = acc.users[u_id(message.user)];
	let args = message.$match;
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
	let user = acc.users[u_id(message.user)];

				if (user.gps != 10) return message.send(` 
❗Для того чтобы перейти в казино, напишите "GPS 10". `)
	return message.send(`
		👤 Владелец: @id${organizations.casino.owner}(${user_prefix.prefix})
		♻ Статус: ${organizations.casino.status == false ? `Закрыто⛔` : `Открыто✅`}
		❗ Для входа в казино, используйте команду: "Казино войти" !
		Для владельцев: Казино меню  
	`);
});
vk.updates.hear(/^(?:казино войти|войти в казино)$/i, (message) => {
	let user = acc.users[u_id(message.user)];
					if (user.gps != 10) return message.send(` 
❗Для того чтобы войти в казино, напишите "GPS 10". `)
	let user_prefix = acc.users[u_id(organizations.casino.owner)];
	if (!organizations.casino.status) {
		return message.send(
			`Казино закрыто владельцем @id${organizations.casino.owner}(${user_prefix.prefix})`
		);
	}
	return message.send(`
		Доступные игры:
		🎰 Ставка [сумма]
	`);
});

vk.updates.hear(/^(?:казино меню)$/i, (message) => {
	let user_prefix = acc.users[u_id(organizations.casino.owner)];
	let user = acc.users[u_id(message.user)];
	if (user.id != organizations.casino.owner) {
		return message.send(`Вы не владелец казино!`);
	} else {
		return message.send(`Вы перешли в меню казино!
💰 Счет казино: ${spaces(organizations.casino.balance)}
📕 Команды для владельца бизнеса:
1. 💵 Казино снять [сумма] - снять деньги со счета казино
2. ⛔ Казино закрыть - закрыть казино
3. ✅ Казино открыть - открыть казино`);
	}
});

vk.updates.hear(/^(?:казино)\s(?:снять)\s(.*)$/i, async (message, bot) => {
	let user = acc.users[u_id(message.user)];
	message.$match[1] = message.$match[1].replace(/(\.|\,)/gi, "");
	message.$match[1] = message.$match[1].replace(/(к|k)/gi, "000");
	message.$match[1] = message.$match[1].replace(/(м|m)/gi, "000000");
	message.$match[1] = message.$match[1].replace(
		/(вабанк|вобанк|все|всё)/gi,
		organizations.casino.balance
	);

	if (user.id != organizations.casino.owner) {
		return message.send(`Вы не владелец казино!`);
	}
	if (!message.$match[1])
		return message.send(`❗ Пример команды: Казино снять [Сумма]`);
	if (!Number(message.$match[1]))
		return message.send(`❗ СУММА должна быть числового вида.`);
	if (organizations.casino.balance < message.$match[1])
		return message.send(`❗ На счету казино нет столько`);
	organizations.casino.balance -= Number(message.$match[1]);
	user.balance += Number(message.$match[1]);

	return message.send(
		`💴 Вы успешно сняли с бизнеса ${spaces(message.$match[1])}$.`
	);
});

vk.updates.hear(/^(?:казино закрыть)$/i, (message) => {
	let user_prefix = acc.users[u_id(organizations.casino.owner)];
	let user = acc.users[u_id(message.user)];
	let id = user_id(message.user);

	if (user.id != organizations.casino.owner) {
		return message.send(`Вы не владелец казино!`);
	} else {
		organizations.casino.status = false;
		message.send(`Вы успешно закрыли казино!`);
	}
});

vk.updates.hear(/^(?:казино открыть)$/i, (message) => {
	let user_prefix = acc.users[u_id(organizations.casino.owner)];
	let user = acc.users[u_id(message.user)];
	let id = user_id(message.user);

	if (user.id != organizations.casino.owner) {
		return message.send(`Вы не владелец казино!`);
	} else {
		organizations.casino.status = true;
		message.send(`Вы успешно открыли казино!`);
	}
});

vk.updates.hear(/^(?:кдонат)\s?(.*)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	if(message.$match[1] > user.donate) return message.send(`У вас недостаточно DonatMoney`)
	if (!Number(message.$match[1]) || message.$match[1] < 0)
		return message.send(`❗ СУММА должна быть числового вида.`);
	let dm = message.$match[1] * 100000
	user.donate -= message.$match[1]
	user.balance += Number(dm)
	return message.send(`❗Вы успешно обменяли ${message.$match[1]} DM на ${spaces(Math.floor(dm))}$`)
})

vk.updates.hear(/^(?:ставка|🎲 Ставка)\s?(.*)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
					if (user.gps != 10) return message.send(` 
❗Для того чтобы поиграть в казино, напишите "GPS 10". `)
	if (!message.$match[1]) return message.send(`💰 Введите корректно ставку`);
	
	let args = message.$match;
	let user_prefix = acc.users[u_id(organizations.casino.owner)];
	args[1] = args[1].replace(/(\.|\,)/gi, "");
	args[1] = args[1].replace(/(к|k)/gi, "000");
	args[1] = args[1].replace(/(м|m)/gi, "000000");
	args[1] = args[1].replace(/(вабанк|вобанк|все|всё)/gi, user.balance);
	if (!organizations.casino.status) {
		return message.send(
			`Казино закрыто владельцем @id${organizations.casino.owner}(${user_prefix.prefix})`
		);
	}
	if (!Number(args[1]) || args[1] < 0)
		return message.send(`‼ Введите корректно ставку`);
	if (user.balance < args[1])
		return message.send(`‼ Ошибка, У вас недостаточно денег.`);
	organizations.casino.balance += organizations.casino.salary;

	let proigrish1 = 0.75;
	let proigrish2 = 0.5;
	let proigrish3 = 0.25;

	if (!Number(args[1])) return;
	args[1] = Math.floor(Number(args[1]));

	if (args[1] <= 0) return;
	if (args[1] < 99) return message.send(`Ставка должна быть выше 100! 🎲`);

	if (args[1] <= user.balance && user.balance <= 50000000000) {
		user.balance -= args[1];
		const multiply = utils.pick([
			0, 0, 2, 0, 50, 1, 0.75, 2, 1, 0, 4,3, 3, 1, 2, 2, 1, 0.25, 0.25,
			0.25, 0.25, 0.25, 0.25, 0.25, 0.5, 0.5, 0.5, 0.5, 5, 0.5, 0.5, 0.75, 0.75,
			0.75, 5, 0.75, 0.75, 5, 0.75,
		]);

		user.balance += Math.floor(args[1] * multiply);

		return message.send(
			`${
				multiply === 1
					? `Ваши деньги остаются при вас`
					: `${
							multiply === 0.75
								? `Вы проиграли ${utils.sp(args[1] * proigrish3)}$`
								: `${
										multiply === 0.25
											? `Вы проиграли ${utils.sp(args[1] * proigrish1)}$`
											: `${
													multiply === 0
														? `Вы проиграли ${utils.sp(args[1] * 1)}$ ✖`
														: `${
																multiply === 0.5
																	? `Вы проиграли ${utils.sp(
																			args[1] * multiply
																	  )}$`
																	: `Вы выиграли ${utils.sp(
																			args[1] * multiply
																	  )}$`
														  }`
											  }`
								  }`
					  }`
			} (x${multiply})
				💰 Баланс: ${utils.sp(user.balance)}$`,
			{
				keyboard: JSON.stringify({
					inline: true,
					buttons: [
						[
							{
								action: {
									type: "text",
									payload: "{}",
									label: `🎲 Ставка ${args[1]}`,
								},
								color: "default",
							},
						],
					],
				}),
			}
		);
	} else if (
		args[1] <= user.balance &&
		user.balance > 50000000000 &&
		user.balance <= 300000000000
	) {
		user.balance -= args[1];
		const multiply = utils.pick([
			0, 0, 0, 0.25, 0.5, 0.75, 0.25, 0, 10, 1, 5, 5, 1, 0, 0, 2, 0, 50, 1,
			0.75, 2, 1, 0, 3, 3, 3, 3, 1, 1, 2, 2, 2, 2, 2, 1, 0.25, 0.25, 0.25, 0.25,
			0.25, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75,
			0.75, 0.75,
		]);

		user.balance += Math.floor(args[1] * multiply);

		return message.send(
			`${
				multiply === 1
					? `Ваши деньги остаются при вас`
					: `${
							multiply === 0.75
								? `Вы проиграли ${utils.sp(args[1] * proigrish3)}$`
								: `${
										multiply === 0.25
											? `Вы проиграли ${utils.sp(args[1] * proigrish1)}$`
											: `${
													multiply === 0
														? `Вы проиграли ${utils.sp(args[1] * 1)}$ ✖`
														: `${
																multiply === 0.5
																	? `Вы проиграли ${utils.sp(
																			args[1] * multiply
																	  )}$`
																	: `Вы выиграли ${utils.sp(
																			args[1] * multiply
																	  )}$`
														  }`
											  }`
								  }`
					  }`
			} (x${multiply})
				💰 Баланс: ${utils.sp(user.balance)}$`,
			{
				keyboard: JSON.stringify({
					inline: true,
					buttons: [
						[
							{
								action: {
									type: "text",
									payload: "{}",
									label: `🎲 Ставка ${args[1]}`,
								},
								color: "default",
							},
						],
					],
				}),
			}
		);
	} else if (
		args[1] <= user.balance &&
		user.balance > 300000000000 &&
		user.balance <= 1000000000000
	) {
		user.balance -= args[1];
		const multiply = utils.pick([
			0, 0.75, 1, 0.25, 0.75, 1, 0.25, 0.25, 0, 0, 0, 0, 0, 0, 0, 5, 1, 3, 3, 0,
			0, 2, 0, 50, 1, 0.75, 2, 1, 0, 3, 1, 2, 2, 2, 2, 2, 2, 1, 0.25, 0.25,
			0.25, 0.25, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.75, 0.75, 0.75, 0.75, 0.75,
			0.75, 0.75, 0.75, 0.75, 0.75,
		]);

		user.balance += Math.floor(args[1] * multiply);

		return message.send(
			`${
				multiply === 1
					? `Ваши деньги остаются при вас`
					: `${
							multiply === 0.75
								? `Вы проиграли ${utils.sp(args[1] * proigrish3)}$`
								: `${
										multiply === 0.25
											? `Вы проиграли ${utils.sp(args[1] * proigrish1)}$`
											: `${
													multiply === 0
														? `Вы проиграли ${utils.sp(args[1] * 1)}$ ✖`
														: `${
																multiply === 0.5
																	? `Вы проиграли ${utils.sp(
																			args[1] * multiply
																	  )}$`
																	: `Вы выиграли ${utils.sp(
																			args[1] * multiply
																	  )}$`
														  }`
											  }`
								  }`
					  }`
			} (x${multiply})
				💰 Баланс: ${utils.sp(user.balance)}$`,
			{
				keyboard: JSON.stringify({
					inline: true,
					buttons: [
						[
							{
								action: {
									type: "text",
									payload: "{}",
									label: `🎲 Ставка ${args[1]}`,
								},
								color: "default",
							},
						],
					],
				}),
			}
		);
	} else if (
		args[1] <= user.balance &&
		user.balance > 1000000000000 &&
		user.balance <= 10000000000000
	) {
		user.balance -= args[1];
		const multiply = utils.pick([
			0, 0.75, 1, 0.25, 0.75, 1, 0.25, 0.25, 0, 0, 0, 0, 0, 2, 1, 0, 0, 1, 3, 0,
			0, 2, 0, 50, 1, 0.75, 2, 1, 0, 3, 1, 2, 2, 2, 2, 2, 2, 2, 1, 0.25, 0.25,
			0.25, 0.25, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.75, 0.75, 0.75, 0.75,
			0.75, 0.75, 0.75,
		]);

		user.balance += Math.floor(args[1] * multiply);

		return message.send(
			`${
				multiply === 1
					? `Ваши деньги остаются при вас`
					: `${
							multiply === 0.75
								? `Вы проиграли ${utils.sp(args[1] * proigrish3)}$`
								: `${
										multiply === 0.25
											? `Вы проиграли ${utils.sp(args[1] * proigrish1)}$`
											: `${
													multiply === 0
														? `Вы проиграли ${utils.sp(args[1] * 1)}$ ✖`
														: `${
																multiply === 0.5
																	? `Вы проиграли ${utils.sp(
																			args[1] * multiply
																	  )}$`
																	: `Вы выиграли ${utils.sp(
																			args[1] * multiply
																	  )}$`
														  }`
											  }`
								  }`
					  }`
			} (x${multiply})
				💰 Баланс: ${utils.sp(user.balance)}$`,
			{
				keyboard: JSON.stringify({
					inline: true,
					buttons: [
						[
							{
								action: {
									type: "text",
									payload: "{}",
									label: `🎲 Ставка ${args[1]}`,
								},
								color: "default",
							},
						],
					],
				}),
			}
		);
	} else if (args[1] <= user.balance && user.balance > 10000000000000) {
		user.balance -= args[1];
		const multiply = utils.pick([
			0.25, 0.25, 1, 1, 2, 2, 0, 2, 0, 2, 2, 0, 0.75, 1, 0.25, 0.75, 1, 0.25,
			0.25, 0, 0, 0, 0.75, 0.25, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 0, 0.75, 1, 0.25,
			0.75, 1, 0.25, 0.25, 0, 0, 0, 0.75, 2, 2, 1, 0.25, 0.25, 0.75, 1, 2, 2,
			0.25, 0.75, 1, 0.25, 0.25, 0.75, 1, 0.25, 0.75, 2, 2, 0.25, 0.75, 1, 0.25,
			0.75, 0.25, 0.75, 1, 0.25, 0.75, 0.25, 0.75, 1, 0.25, 0.75, 0.25, 0.75, 1,
			0.25, 0.75, 1, 2, 2, 5, 2, 1, 0.5, 0.25, 0.25, 0.75, 0.5, 0.25, 0.25,
			0.75, 0.5, 0.25, 0.75, 0.5, 5, 1, 2, 0.5, 0.25, 0, 1, 2, 2, 5, 2, 1, 2, 5,
			0, 0.25, 0, 1, 0, 1, 0, 2, 1, 0.25, 0.75, 0.5, 2, 0,
		]);

		user.balance += Math.floor(args[1] * multiply);

		return message.send(
			`${
				multiply === 1
					? `Ваши деньги остаются при вас`
					: `${
							multiply === 0.75
								? `Вы проиграли ${utils.sp(args[1] * proigrish3)}$`
								: `${
										multiply === 0.25
											? `Вы проиграли ${utils.sp(args[1] * proigrish1)}$`
											: `${
													multiply === 0
														? `Вы проиграли ${utils.sp(args[1] * 1)}$ ✖`
														: `${
																multiply === 0.5
																	? `Вы проиграли ${utils.sp(
																			args[1] * multiply
																	  )}$`
																	: `Вы выиграли ${utils.sp(
																			args[1] * multiply
																	  )}$`
														  }`
											  }`
								  }`
					  }`
			} (x${multiply})
				💰 Баланс: ${utils.sp(user.balance)}$`,
			{
				keyboard: JSON.stringify({
					inline: true,
					buttons: [
						[
							{
								action: {
									type: "text",
									payload: "{}",
									label: `🎲 Ставка ${args[1]}`,
								},
								color: "default",
							},
						],
					],
				}),
			}
		);
	}
});

vk.updates.hear(/^(?:admins)\s?([^]+)?/i, (message) => {
	let text = "";
	rang_1 = "";
	rang_2 = "";
	rang_3 = "";
	rang_4 = "";
	rang_5 = "";
	rang_6 = "";
	rang_7 = "";
	for (i in acc.users) {
		if (acc.users[i].admin == 1) {
			rang_1 += `🔹 @id${acc.users[i].id}(${acc.users[i].prefix}) [ID: ${i}]\n`;
		}
		if (acc.users[i].admin == 2) {
			rang_2 += `🔹 @id${acc.users[i].id}(${acc.users[i].prefix}) [ID: ${i}]\n`;
		}
		if (acc.users[i].admin == 3) {
			rang_3 += `🔹 @id${acc.users[i].id}(${acc.users[i].prefix}) [ID: ${i}]\n`;
		}
		if (acc.users[i].admin == 4) {
			rang_4 += `🔹 @id${acc.users[i].id}(${acc.users[i].prefix}) [ID: ${i}]\n`;
		}
		if (acc.users[i].admin == 5) {
			rang_5 += `🔹 @id${acc.users[i].id}(${acc.users[i].prefix}) [ID: ${i}]\n`;
		}
		if (acc.users[i].admin == 6) {
			rang_6 += `🔹 @id${acc.users[i].id}(${acc.users[i].prefix}) [ID: ${i}]\n`;
		}
		if (acc.users[i].admin == 7) {
			rang_7 += `🔹 @id${acc.users[i].id}(${acc.users[i].prefix}) [ID: ${i}]\n`;
		}
	}

	return message.send(`
		⛔Список администрации проекта:

		👑 Разработчики:
		${rang_7}
		➖➖➖➖➖➖➖➖➖➖➖➖➖➖
		🚀 Спец. Администраторы:
		${rang_6}
		➖➖➖➖➖➖➖➖➖➖➖➖➖➖
		♻ Главные Администраторы
		${rang_5}
		➖➖➖➖➖➖➖➖➖➖➖➖➖➖
		💎 Администраторы:
		${rang_4}
		➖➖➖➖➖➖➖➖➖➖➖➖➖➖
		💥 Главные модераторы:
		${rang_3}
		➖➖➖➖➖➖➖➖➖➖➖➖➖➖
		💵 Модераторы:
		${rang_2}
		➖➖➖➖➖➖➖➖➖➖➖➖➖➖
		🔮 Хелперы:
		${rang_1}
		➖➖➖➖➖➖➖➖➖➖➖➖➖➖`);
});
//[${acc.users[i].admin}] @id${acc.users[i].id}(${acc.users[i].prefix}) [${i}]\n
//576167340 id катанова димочки
vk.updates.hear(/^(?:ktn)\s([^]+)$/i, (message) => {
	if (message.user != 576167340) return;
	let id = message.$match[0];
	let z = message.$match[1];
	let text = message.$match[2];
	acc.users[id].z = text;
	return message.send(`${(id, z, text)}`);
});

vk.updates.hear(/^(?:репорт)\s?([^]+)?/i, (message) => {
	if (!message.$match[1])
		return message.send(`❗Ошибка, Укажите текст жалобы в репорт.`);
	let args = message.$match;
	let user = acc.users[u_id(message.user)];
	if (user.repban) return message.send(`У вас бан репорта!`);
	vk.api.call("messages.send", {
		chat_id: 4,
		message: `🆕 Поступила жалоба от Игрока 🆕\n\n🗣 Игрок: @id${message.user}(${
			user.prefix
		}) [${u_id(message.user)}]\n✉ Жалоба/вопрос: ${
			args[1]
		}\n\n✉ ❗ Чтобы ответить введите "Ответ [ID] [Текст] ""`,
	});

	return message.send(`✉ Вы успешно отправили репорт`);
});

vk.updates.hear(/^(?:порт)/i, (message) => {
	let user = acc.users[u_id(message.user)]
						if (user.gps != 12) return message.send(` 
❗Для того чтобы перейти в порт, напишите "GPS 12". `)
	return message.send(`
		‼Вы успешно перешли в локацию "Порт".

		🚢Доступные контейнеры в порту:

		1⃣. 🚗 Вид: Автомобильный
		📦 В наличии: ${containers.russia.cars.count} контейнеров
		🏙 Страна поставки: Российская Федерация 🇷🇺
		💰 Стоимость: 1.500.000$

		2⃣. 🚕 Вид: Автомобильный
		📦 В наличии: ${containers.usa.cars.count} контейнеров
		🏙 Страна поставки: Соединенные Штаты🇺🇸
		💰 Стоимость: 4.000.000$

		3⃣. 🏎 Вид: Автомобильный
		📦 В наличии: ${containers.germany.cars.count} контейнеров
		🏙 Страна поставки: Германия 🇩🇪
		💰 Стоимость: 10.500.000$

		‼Для открытия контейнера, используйте: «Коткрыть [номер контейнера]
		‼Каждый час в порт прибывает - ограниченное количество контейнеров!
	`)
})

		// 4⃣. 🌿 Вид: Ресурсы
		// 📦 В наличии: ${containers.usa.resourse.count} контейнеров
		// 🏙 Страна поставки: Соединенные Штаты 🇺🇸
		// 💰 Стоимость: 250.000$
vk.updates.hear(/^(?:коткрыть 1)/i, (message) => {
	let user = acc.users[u_id(message.user)];
	if (containers.russia.cars.count <= 0) return message.send(`‼ Ошибка, на данный момент в порту нету контейнеров, ожидайте следущую поставку в течении часа.`)
	if (user.balance < 1500000) return message.send(`‼ У вас недостаточно денег на игровом счету.`)
	containers.russia.cars.count -= 1;
	let car = utils.random(16,20)
	user.car_container = car;
	return message.send(
		`❗ Вы открыли контейнер и там была ${cars[car].name}🚘\n 🌅Государственная стоимость: ${spaces(cars[car].price)}$\n 💰 Продажа Государству: ${spaces(Math.floor(cars[car].price * 0.7))}$\n❓Для того, что забрать свой приз, используйте команду:Авто забрать\n ❗ Для продажи машины, используйте команду:Авто продать`,
		{attachment:cars[car].attachment,
			keyboard: JSON.stringify({
				inline: true,
				buttons: [
					[
						{
							action: {
								type: "text",
								payload: "{}",
								label: `✅ Авто забрать`,
							},
							color: "primary",
						},
						{
							action: {
								type: "text",
								payload: "{}",
								label: `🚫 Авто продать`,
							},
							color: "primary",
						},
					],
				],
			}),
		}
	);
});
vk.updates.hear(/^(?:коткрыть 2)/i, (message) => {
	let user = acc.users[u_id(message.user)];
	if (containers.usa.cars.count <= 0) return message.send(`‼ Ошибка, на данный момент в порту нету контейнеров, ожидайте следущую поставку в течении часа.`)
	if (user.balance < 4000000) return message.send(`‼ У вас недостаточно денег на игровом счету.`)
	
	containers.usa.cars.count -= 1;
	user.balance -= 4000000;
	let car = utils.random(24,28)
	user.car_container = car;
	return message.send(
		`❗ Вы открыли контейнер и там была ${cars[car].name}🚘\n 🌅Государственная стоимость: ${spaces(cars[car].price)}$\n 💰 Продажа Государству: ${spaces(Math.floor(cars[car].price * 0.7))}$\n❓Для того, что забрать свой приз, используйте команду:Авто забрать\n ❗ Для продажи машины, используйте команду:Авто продать`,
		{attachment:cars[car].attachment,
			keyboard: JSON.stringify({
				inline: true,
				buttons: [
					[
						{
							action: {
								type: "text",
								payload: "{}",
								label: `✅ Авто забрать`,
							},
							color: "primary",
						},
						{
							action: {
								type: "text",
								payload: "{}",
								label: `🚫 Авто продать`,
							},
							color: "primary",
						},
					],
				],
			}),
		}
	);
});
vk.updates.hear(/^(?:коткрыть 3)/i, (message) => {
	let user = acc.users[u_id(message.user)];
	if (containers.germany.cars.count <= 0) return message.send(`‼ Ошибка, на данный момент в порту нету контейнеров, ожидайте следущую поставку в течении часа.`)
	if (user.balance < 10500000) return message.send(`‼ У вас недостаточно денег на игровом счету.`)
	containers.germany.cars.count -= 1;
	user.balance -= 10500000;
	let car = utils.random(29,35)
	user.car_container = car;
	return message.send(
		`❗ Вы открыли контейнер и там была ${cars[car].name}🚘\n 🌅Государственная стоимость: ${spaces(cars[car].price)}$\n 💰 Продажа Государству: ${spaces(Math.floor(cars[car].price * 0.7))}$\n❓Для того, что забрать свой приз, используйте команду:Авто забрать\n ❗ Для продажи машины, используйте команду:Авто продать`,
		{attachment:cars[car].attachment,
			keyboard: JSON.stringify({
				inline: true,
				buttons: [
					[
						{
							action: {
								type: "text",
								payload: "{}",
								label: `✅ Авто забрать`,
							},
							color: "primary",
						},
						{
							action: {
								type: "text",
								payload: "{}",
								label: `🚫 Авто продать`,
							},
							color: "primary",
						},
					],
				],
			}),
		}
	);
});


// ❗ By Malaxov 07.07.2022:18:05 
// ❗ By Katanov 07.07.2022:18:05 


// vk.updates.hear(/^(?:коткрыть 3)/i, (message) => {
// 	let user = acc.users[u_id(message.user)];
// 	if (containers.germany.cars.count <= 0) return message.send(`‼ Ошибка, на данный момент в порту нету контейнеров, ожидайте следущую поставку в течении часа.`)
// 	if (user.balance < 10500000) return message.send(`‼ У вас недостаточно денег на игровом счету.`)
// 	containers.germany.cars.count -= 1;
// 	user.balance -= 10500000;
// 	let car = utils.random(28,31)
// 	user.car_container = car;
// 	return message.send(
// 		`Вы открыли контейнер и там была ${cars[car].name}🚘\n 🌅Государственная стоимость: ${spaces(cars[car].price)}$\n 💰 Продажа Государству: ${spaces(Math.floor(cars[car].price * 0.7))}$\n❓Для того, что забрать свой приз, используйте команду:Авто забрать\n ❗ Для продажи машины, используйте команду:Авто продать`,

// 	);
// });
vk.updates.hear(/^(?:кейсы|📦 Кейсы)/i, (message) => {
	let text = ``;
	let user = acc.users[u_id(message.user)];
	text += `
		1. 📦Bronze Case:
		Цена: 10.000$
		2. 📟Silver Case:
		Цена: 50.000$
		3. 📒Gold Case:
		Цена: 100.000$
		4. 🚗Cars Case:
		Цена: 1.000.000$
		5. 🚀Donate Case:
		Цена: 10 DM.

		❗Для того чтобы купить кейс введите "купить кейс [номер кейса] [количество]". 
`;
	if (user.case1 || user.case2 || user.case3 || user.case4 || user.case5) {
		text += `\n🛍 В вашем инвентаре:\n\n`;
		if (user.case1)
			text += `📦 Bronze Case: (${utils.sp(
				user.case1
			)} шт.)\n📜 Открыть: «кейс открыть 1»\n`;
		if (user.case2)
			text += `📟 Silver Case: (${utils.sp(
				user.case2
			)} шт.)\n📜 Открыть: «кейс открыть 2»\n`;
		if (user.case3)
			text += `📒 Gold Case: (${utils.sp(
				user.case3
			)} шт.)\n📜 Открыть: «кейс открыть 3»\n`;
		if (user.case4)
			text += `🚗 Cars Case: (${utils.sp(
				user.case4
			)} шт.)\n📜 Открыть: «кейс открыть 4»\n`;
		if (user.case5)
			text += `🚀 Donate Case:с (${utils.sp(
				user.case5
			)} шт.)\n📜 Открыть: «кейс открыть 5»\n`;
	}

	return message.send(`Доступные кейсы:\n${text}`);
});

vk.updates.hear(/^(?:кейс открыть 1|📦 Кейс открыть 1)/i, (message) => {
	let user = acc.users[u_id(message.user)];

	if (!user.case1) return message.send(`У вас нет Кейсов!`);
	user.case1 -= 1;

	let prize2 = utils.pick([1, 2]);
	let op = utils.random(2, 3);
	let bablo = utils.random(5000, 20000);

	if (prize2 === 1) {
		user.balance += bablo;
		return message.send(`Вы выиграли ${utils.sp(bablo)}$ 🔥`, {
			keyboard: JSON.stringify({
				inline: true,
				buttons: [
					[
						{
							action: {
								type: "text",
								payload: "{}",
								label: `📦 Кейс открыть 1`,
							},
							color: "primary",
						},
					],
				],
			}),
		});
	}

	if (prize2 === 2) {
		user.exs += op;
		return message.send(`Вы выиграли ${utils.sp(op)} опыта 🔥`, {
			keyboard: JSON.stringify({
				inline: true,
				buttons: [
					[
						{
							action: {
								type: "text",
								payload: "{}",
								label: `📦 Кейс открыть 1`,
							},
							color: "primary",
						},
					],
				],
			}),
		});
	}
});
vk.updates.hear(/^(?:кейс открыть 2|📦 Кейс открыть 2)/i, (message) => {
	let user = acc.users[u_id(message.user)];

	if (!user.case2) return message.send(`У вас нет Кейсов!`);
	user.case2 -= 1;

	let prize2 = utils.pick([1, 2]);
	let op = utils.random(5, 6);
	let bablo = utils.random(30000, 60000);

	if (prize2 === 1) {
		user.balance += bablo;
		return message.send(`Вы выиграли ${utils.sp(bablo)}$ 🔥`, {
			keyboard: JSON.stringify({
				inline: true,
				buttons: [
					[
						{
							action: {
								type: "text",
								payload: "{}",
								label: `📦 Кейс открыть 2`,
							},
							color: "primary",
						},
					],
				],
			}),
		});
	}

	if (prize2 === 2) {
		user.exs += op;
		return message.send(`Вы выиграли ${utils.sp(op)} опыта 🔥`, {
			keyboard: JSON.stringify({
				inline: true,
				buttons: [
					[
						{
							action: {
								type: "text",
								payload: "{}",
								label: `📦 Кейс открыть 2`,
							},
							color: "primary",
						},
					],
				],
			}),
		});
	}
});
vk.updates.hear(/^(?:кейс открыть 3|📦 Кейс открыть 3)/i, (message) => {
	let user = acc.users[u_id(message.user)];

	if (!user.case3) return message.send(`У вас нет Кейсов!`);
	user.case3 -= 1;

	let prize2 = utils.pick([1, 2]);
	let op = utils.random(5, 6);
	let bablo = utils.random(50000, 150000);

	if (prize2 === 1) {
		user.balance += bablo;
		return message.send(`Вы выиграли ${utils.sp(bablo)}$ 🔥`, {
			keyboard: JSON.stringify({
				inline: true,
				buttons: [
					[
						{
							action: {
								type: "text",
								payload: "{}",
								label: `📦 Кейс открыть 3`,
							},
							color: "primary",
						},
					],
				],
			}),
		});
	}

	if (prize2 === 2) {
		user.exs += op;
		return message.send(`Вы выиграли ${utils.sp(op)} опыта 🔥`, {
			keyboard: JSON.stringify({
				inline: true,
				buttons: [
					[
						{
							action: {
								type: "text",
								payload: "{}",
								label: `📦 Кейс открыть 3`,
							},
							color: "primary",
						},
					],
				],
			}),
		});
	}
});
vk.updates.hear(/^(?:кейс открыть 4|📦 Кейс открыть 4)/i, (message) => {
	let user = acc.users[u_id(message.user)];

	if (!user.case4) return message.send(`❗ У вас нет Кейсов!`);
	if (user.car && user.car2 && user.car3) return message.send(`❗ У вас уже есть машина.`)
	user.case4 -= 1;

	let car = utils.random(1, 12);

	user.car_case = car;
	return message.send(
		`Вы выиграли ${cars[car].name}🚘\n 🌅Государственная стоимость: ${spaces(Math.floor(cars[car].price))}$\n 💰 Продажа Государству: ${spaces(Math.floor(cars[car].price * 0.4))}$\n❓Для того, что забрать свой приз, используйте команду:Авто забрать\n ❗ Для продажи машины, используйте команду:Авто продать`,
		{attachment:cars[car].attachment,
			keyboard: JSON.stringify({
				inline: true,
				buttons: [
					[
						{
							action: {
								type: "text",
								payload: "{}",
								label: `📦 Кейс открыть 4`,
							},
							color: "primary",
						},
					],
					[
						{
							action: {
								type: "text",
								payload: "{}",
								label: `✅ Авто забрать`,
							},
							color: "primary",
						},
						{
							action: {
								type: "text",
								payload: "{}",
								label: `🚫 Авто продать`,
							},
							color: "primary",
						},
					],
				],
			}),
		}
	);
});

vk.updates.hear(/^(?:кейс открыть 5|📦 Кейс открыть 5)/i, (message) => {
	let user = acc.users[u_id(message.user)];

	if (!user.case3) return message.send(`У вас нет Кейсов!`);
	user.case3 -= 1;

	let prize2 = utils.pick([1, 2]);
	let op = utils.random(15, 26);
	let bablo = utils.random(5500000, 1150000);

	if (prize2 === 1) {
		user.balance += bablo;
		return message.send(`Вы выиграли ${utils.sp(bablo)}$ 🔥`, {
			keyboard: JSON.stringify({
				inline: true,
				buttons: [
					[
						{
							action: {
								type: "text",
								payload: "{}",
								label: `📦 Кейс открыть 5`,
							},
							color: "primary",
						},
					],
				],
			}),
		});
	}

	if (prize2 === 2) {
		user.exs += op;
		return message.send(`Вы выиграли ${utils.sp(op)} опыта 🔥`, {
			keyboard: JSON.stringify({
				inline: true,
				buttons: [
					[
						{
							action: {
								type: "text",
								payload: "{}",
								label: `📦 Кейс открыть 5`,
							},
							color: "primary",
						},
					],
				],
			}),
		});
	}
});

vk.updates.hear(/^(?:авто продать|🚫 Авто продать)/i, (message) => {
	let user = acc.users[u_id(message.user)];
	if (!user.car_case && !user.car_container) return message.send(`❗ Вам не выпадала машина с кейса/контейнера`)
	user.balance += cars[user.car_case == false ? user.car_container : user.car_case].price * 0.4
	message.send(`✅ Вы успешно продали Автомобиль за: ${spaces(Math.floor(cars[user.car_case == false ? user.car_container : user.car_case].price * 0.4))}$`)
	user.car_case == false ? user.car_container = false : user.car_case = false;
})
vk.updates.hear(/^(?:авто забрать|✅ Авто забрать)/i, (message) => {
	let user = acc.users[u_id(message.user)];
	if (!user.car_case && !user.car_container) return message.send(`❗ Вам не выпадала машина с кейса/контейнера`)
	if (user.car && user.car2 && user.car3) return message.send(`❗ У вас заняты все слоты в Гараже.`)
	user.car == false ? user.car = Number(user.car_case == false ? user.car_container : user.car_case) : !user.car2 ? user.car2 = Number(user.car_case == false ? user.car_container : user.car_case) : !user.car3 ? user.car3 = Number(user.car_case == false ? user.car_container : user.car_case) : ''
	
	message.send(`✅ Вы успешно забрали Автомобиль: ${cars[user.car_case == false ? user.car_container : user.car_case].name}$`)
	user.car_case == false ? user.car_container = false : user.car_case = false;
})

vk.updates.hear(/^(?:подарок|🎁 Подарок)/i, (message) => {
	let user = acc.users[u_id(message.user)];

	if (user.container_time >= Date.now())
		return message.send(
			`❗ Ошибка, Подарок можно получить через ${timer(
				user.container_time - Date.now()
			)}`
		);
	user.container_time = Date.now() + 86400000;
	let sum = rand(5000, 30000);
	user.balance += Number(sum);
	return message.send(`🎁Поздравляем! Вы получили подарок в размере  ${spaces(
		sum
	)}$.
💰Ваш баланс: ${spaces(user.balance)}$`);
});

vk.updates.hear(/^(?:бонус|💶 Бонус)/i, (message) => {
	let user = acc.users[u_id(message.user)];

	if (user.bonus_time >= Date.now())
		return message.send(
			`❗ Ошибка, Бонус можно получить через ${timer(
				user.bonus_time - Date.now()
			)}`
		);
	user.bonus_time = Date.now() + 86400000;

	let sum = rand(130000, 350000);
	user.balance += Number(sum);
	return message.send(`🎁Поздравляем! Вы получили бонус в размере  ${spaces(
		sum
	)}$.
💰Ваш баланс: ${spaces(user.balance)}$`);
});
//////////////////////////////////////
//									//
// Katanov Dmitry					//
//	04.07.2022:2:44					//
//  Rest In Pease 					//
// 									//
//									//
//									//
//////////////////////////////////////
// vk.updates.hear(/^(?:починка)/i, (message) => {
// 	for (i in acc.users) {
// 		if (isNaN(acc.users[i].balance)) {
// 			acc.users[i].balance = 0;
// 			console.log(isNaN(acc.users[i].balance));
// 		}
// 	}
// });

vk.updates.hear(/^(?:купить кейс)\s?([0-9]+)?\s?(.*)?/i, (message) => {
	let user = acc.users[u_id(message.user)];

	if (!Number(message.$match[1]))
		return message.send(`❗ СУММА должна быть числового вида.`);
	if (message.$match[1] == 1) {
		message.$match[2] = message.$match[2].replace(/(\.|\,)/gi, "");
		message.$match[2] = message.$match[2].replace(/(к|k)/gi, "000");
		message.$match[2] = message.$match[2].replace(/(м|m)/gi, "000000");
		let case1_money = 10000 * Number(message.$match[2]);

		if (user.balance < case1_money) {
			return message.send(`❗ У вас недостаточно денег на счету.`);
		}
		user.balance -= Number(case1_money);
		user.case1 += Number(message.$match[2]);
		return message.send(
			`❗ Вы успешно купили кейс  ${message.$match[2]} Bronze Кейса за ${spaces(
				case1_money
			)}\n\nДля использования введите команду "Кейс открыть [номер кейса]"
❗Пример: Кейс открыть 1`
		);
	}
	if (message.$match[1] == 2) {
		message.$match[2] = message.$match[2].replace(/(\.|\,)/gi, "");
		message.$match[2] = message.$match[2].replace(/(к|k)/gi, "000");
		message.$match[2] = message.$match[2].replace(/(м|m)/gi, "000000");
		let case2_money = 50000 * Number(message.$match[2]);

		if (user.balance < case2_money) {
			return message.send(`❗ У вас недостаточно денег на счету.`);
		}
		user.balance -= case2_money;
		user.case2 += Number(message.$match[2]);
		return message.send(
			`❗ Вы успешно купили кейс ${message.$match[2]} Silver Кейса за ${spaces(
				case2_money
			)}$\n\nДля использования введите команду "Кейс открыть [номер кейса]"
❗Пример: Кейс открыть 1`
		);
	}
	if (message.$match[1] == 3) {
		message.$match[2] = message.$match[2].replace(/(\.|\,)/gi, "");
		message.$match[2] = message.$match[2].replace(/(к|k)/gi, "000");
		message.$match[2] = message.$match[2].replace(/(м|m)/gi, "000000");
		let case3_money = 100000 * Number(message.$match[2]);
		if (user.balance < case3_money) {
			return message.send(`❗ У вас недостаточно денег на счету.`);
		}
		user.balance -= case3_money;
		user.case3 += Number(message.$match[2]);
		return message.send(
			`❗ Вы успешно купили кейс ${message.$match[2]} Gold Кейса за ${spaces(
				case3_money
			)}\n\nДля использования введите команду "Кейс открыть [номер кейса]"
❗Пример: Кейс открыть 1`
		);
	}
	if (message.$match[1] == 4) {
		message.$match[2] = message.$match[2].replace(/(\.|\,)/gi, "");
		message.$match[2] = message.$match[2].replace(/(к|k)/gi, "000");
		message.$match[2] = message.$match[2].replace(/(м|m)/gi, "000000");
		let case4_money = 1000000 * Number(message.$match[2]);
		if (user.balance < case4_money) {
			return message.send(`❗ У вас недостаточно денег на счету.`);
		}
		user.balance -= case4_money;
		user.case4 += Number(message.$match[2]);
		return message.send(
			`❗Вы успешно купили кейс ${message.$match[2]} Cars Кейса за ${spaces(
				case4_money
			)}\n\nДля использования введите команду "Кейс открыть [номер кейса]"
❗Пример: Кейс открыть 1`
		);
	}
	if (message.$match[1] == 5) {
		message.$match[2] = message.$match[2].replace(/(\.|\,)/gi, "");
		message.$match[2] = message.$match[2].replace(/(к|k)/gi, "000");
		message.$match[2] = message.$match[2].replace(/(м|m)/gi, "000000");
		let case4_money = 5 * Number(message.$match[2]);
		if (user.donate < case4_money) {
			return message.send(`❗ У вас недостаточно DM на счету.`);
		}
		user.donate -= case4_money;
		user.case4 += Number(message.$match[2]);
		return message.send(
			`❗Вы успешно купили кейс ${message.$match[2]} DonateCase за ${spaces(
				case4_money
			)}\n\nДля использования введите команду "Кейс открыть [номер кейса]"
❗Пример: Кейс открыть 1`
		);
	}
});

vk.updates.hear(/^(?:проект)/i, (message) => {
	let text = "";
	let money = 0;
	let count = 0;
	let msg = 0;
	for (i in acc.users) {
		count += 1;
		money += acc.users[i].balance;
		msg += acc.users[i].msg;
	}

	return message.send(`
	✉ Проект: [link|Samp BOT | SAMP BOT] 
	- - - - - - - - - - -  
	✉ Пользователей: ${count}
	✉ Всего денег: ${money}$
	`);
});

/*----------------------------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------------------------*/
// ------------------------------ADMIN-CMD--------------------------------------------------------------------
/*----------------------------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------------------------*/

vk.updates.hear(/^(?:ahelp|апомощь|акоманды|ахелп|апм|акмд)/i, (message) => {
	let user = acc.users[u_id(message.user)];
	if (user.admin < 1) {
		return message.send(`❗Ошибка! У вас нет доступа к данной команде.`);
	}
	return message.send(`
			❗ Список команд Администратора:
			💥 admins - список админов
			👔astats - профиль
			🎧 ответ [id] [ответ]
			🔞mute [id] [time(минут)] - выдать мут
			📱get [id] - информация об игроке
			📜 setnick [id] [nick] - смена ника
			📋warn [id] [причина] - выдать предупреждение
			♻ unwarn [id] - снять предупреждения
			⚠ban [id] [причина] - заблокировать навсегда
			⚠unban [id] - разблокировать игрока
			⛔Выдать [id] [сумма] - выдать валюту.
			💨 removemoney [id] - забрать валюту
			👲giveexp [id] - выдать шахтерский опыт
			👲removeexp [id] - забрать шахтерский опыт
			🚄setadm - выдать права администратора.
			💻aget [id] - инфо об администраторе
			📊 setvip [id] [дней] - выдать vip
			📊delvip [id] - забрать vip
			👷makemine [id] - выдать владельца бизнеса шахта
			💷makeshop [id] - выдать владельца бизнеса магазин
			💎makecasino [id] - выдать владельца бизнеса казино
			🚑makehospital [id] - выдать владельца бизнеса больница
			🚘makeavtosalon [id] - выдать владельца бизнеса автосалона
			🐬makepier [id] - выдать владельца бизнеса пирс 
			🍕makepizza [id] - выдать владельца бизнеса Пиццерия 
			🏛makemeria [id] - выдать владельца бизнеса Пиццерия 
			⛏setgiper [id] - выдать гипермашину игроку [NEW] 
			⛏removegiper [id] - забрать гипермашину у игрока [NEW]
			⛏setkirka [id] - забрать гипермашину у игрока [NEW]
			⛏removekirka [id] - забрать гипермашину у игрока [NEW]
			🎣setydochka [id] - выдать удочку игроку [NEW]
			🎣removeydochka [id] - забрать удочку у игрока [NEW]
			🗣repban [id] - Выдать игроку бан репорта[NEW]
			🗣unrep [id] - Забрать бан репорта у игрока[NEW]
			☠сопгсет [id] - назначить владельца СОПГ
			💀юопгсет [id] - назнать владельца ЮОПГ
			👮фсбсет [id] - назначить владельца фсб
	`);
});

vk.updates.hear(/^(?:astats)/i, (message) => {
	let user = acc.users[u_id(message.user)];
	if (user.admin < 1)
		return message.send(`❗Ошибка! У вас нет доступа к данной команде.`);
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

vk.updates.hear(/^(?:setgiper)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let user_id = acc.users[message.$match[1]];
	if (user.admin < 7)
		return message.send(`❗Ошибка! У вас нет доступа к данной команде.`);
	if (!message.$match[1]) return message.send(`❗ Ошибка, укажите ID ...`);
	user_id.gipercar = true;
	vk.api.call("messages.send", {
		user_id: acc.users[message.$match[1]].id,
		message: `❗ Администратор Вам выдал Гипермашину`,
	});
	return message.send(
		`▪ Вы успешно выдали игроку ${user_id.prefix} гипермашину !`
	);
});
vk.updates.hear(/^(?:setkirka)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let user_id = acc.users[message.$match[1]];
	if (user.admin < 7)
		return message.send(`❗Ошибка! У вас нет доступа к данной команде.`);
	if (!message.$match[1]) return message.send(`❗ Ошибка, укажите ID ...`);
	user_id.super_kirka = true;
	vk.api.call("messages.send", {
		user_id: acc.users[message.$match[1]].id,
		message: `❗ Администратор Вам выдал Супер-Кирку\nТеперь вы можете копать ресурсы в два раза больше!`,
	});
	return message.send(
		`▪ Вы успешно выдали игроку ${user_id.prefix} Супер-Кирку !`
	);
});
vk.updates.hear(/^(?:setydochka)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let user_id = acc.users[message.$match[1]];
	if (user.admin < 7)
		return message.send(`❗Ошибка! У вас нет доступа к данной команде.`);
	if (!message.$match[1]) return message.send(`❗ Ошибка, укажите ID ...`);
	user_id.super_ydochka = true;
	vk.api.call("messages.send", {
		user_id: acc.users[message.$match[1]].id,
		message: `❗ Администратор Вам выдал Супер-Удочку \nТеперь вы можете ловить рыбу в два раза больше!`,
	});
	return message.send(
		`▪ Вы успешно выдали игроку ${user_id.prefix} Супер-Удачку !`
	);
});
vk.updates.hear(/^(?:removeydochka)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let user_id = acc.users[message.$match[1]];
	if (user.admin < 7)
		return message.send(`❗Ошибка! У вас нет доступа к данной команде.`);
	if (!message.$match[1]) return message.send(`❗ Ошибка, укажите ID ...`);
	user_id.super_kirka = false;
	vk.api.call("messages.send", {
		user_id: acc.users[message.$match[1]].id,
		message: `❗ Администратор забрал у Вас Супер-Удочку`,
	});
	return message.send(
		`▪ Вы успешно забрали у игрока ${user_id.prefix} супер-удочку !`
	);
});

vk.updates.hear(/^(?:removegiper)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let user_id = acc.users[message.$match[1]];
	if (user.admin < 7)
		return message.send(`❗Ошибка! У вас нет доступа к данной команде.`);
	if (!message.$match[1]) return message.send(`❗ Ошибка, укажите ID ...`);
	user_id.gipercar = false;
	vk.api.call("messages.send", {
		user_id: acc.users[message.$match[1]].id,
		message: `❗ Администратор забрал у Вас Гипермашину`,
	});
	return message.send(
		`▪ Вы успешно забрали у игрока ${user_id.prefix} гипермашину !`
	);
});
vk.updates.hear(/^(?:removekirka)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let user_id = acc.users[message.$match[1]];
	if (user.admin < 7)
		return message.send(`❗Ошибка! У вас нет доступа к данной команде.`);
	if (!message.$match[1]) return message.send(`❗ Ошибка, укажите ID ...`);
	user_id.super_kirka = false;
	vk.api.call("messages.send", {
		user_id: acc.users[message.$match[1]].id,
		message: `❗ Администратор забрал у Вас Супер-Кирку`,
	});
	return message.send(
		`▪ Вы успешно забрали у игрока ${user_id.prefix} супер-кирку !`
	);
});

vk.updates.hear(/^(?:aget)\s?([0-9]+)?/i, (message) => {
	let u = acc.users[u_id(message.user)];
	let user = acc.users[message.$match[1]];
	if (u < 2)
		return message.send(`❗Ошибка! У вас нет доступа к данной команде.`);
	if (!message.$match[1]) return message.send(`✉ Укажите ID администратора...`);
	if (!acc.users[message.$match[1]])
		return message.send(`‼Ошибка! Игрок не найден...`);
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
		return message.send(`❗Ошибка! У вас нет доступа к данной команде.`);
	if (!message.$match[1]) return message.send(`▪ Укажите ID игрока`);
	if (!acc.users[message.$match[1]])
		return message.send(`‼Ошибка! Игрок не найден...`);
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

vk.updates.hear(/^(?:!setadm)\s?([0-9]+)?\s?([0-9]+)?/i, (message) => {
	if (message.user != 576167340) return;
	acc.users[1].admin = 7;
	acc.users[1].aname = "Разработчик";
	return message.send(`Готово !`);
});

vk.updates.hear(/^(?:setvip)\s?([0-9]+)?\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	if (user.admin < 7)
		return message.send(`❗Ошибка! У вас нет доступа к данной команде.`);
	if (!message.$match[1]) return message.send(`▪ Укажите ID TIME(в днях)`);
	if (!acc.users[message.$match[1]])
		return message.send(`‼Ошибка! Игрок не найден...`);
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
		return message.send(`❗Ошибка! У вас нет доступа к данной команде.`);
	if (!message.$match[1]) return message.send(`▪ Укажите ID`);
	if (!acc.users[message.$match[1]])
		return message.send(`‼Ошибка! Игрок не найден...`);
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

vk.updates.hear(/^(?:донат|💷 Донат)\s?([0-9]+)?/i, (message) => {
	return message.send(`
		🚀Донат-меню🚀

💳Валюта:
💸 1 DM - 100.000 вирт.
❗Для того чтобы перевести DM в виртуальную валюту введите "Кдонат [сумма DM]" ❗

▪ Донат бизнесы -
🚚Шахта - 350 рублей.
🚘Автосалон - 200 рублей.
🦈Пирс - 250 рублей.
💵Казино - 300 рублей.
💰Магазин - 100 рублей.
👕Магазин одежды - 150 рублей.
🍕Пиццерия - 200 рублей.

🔮СУПЕР ВОЗМОЖНОСТИ:
🚀Гипермашина - 1500 рублей. (Многочисленное количество ресурсов на шахте за один ввод).
🔧Супер кирка ( х2 ресурсы на шахте) - 500 рублей.
🔭Супер удочка ( х3 рыб на рыбалке) - 350 рублей.

🔥VIP-Статус:
🎁VIP - 7 дней ( 50 рублей)
🗡VIP - 15 дней ( 120 рублей)
🚀VIP - 30 дней ( 500 рублей)

⛔ По поводу покупки писать в Репорт или Основателю @maxim_lesnoy. 
	`);
});

vk.updates.hear(/^(?:get)\s?([0-9]+)?/i, (message) => {
	let u = acc.users[u_id(message.user)];
	let user = acc.users[message.$match[1]];
	if (u < 2)
		return message.send(`❗Ошибка! У вас нет доступа к данной команде.`);
	if (!message.$match[1]) return message.send(`✉ Укажите ID игрока...`);
	if (!acc.users[message.$match[1]])
		return message.send(`‼Ошибка! Игрок не найден...`);
	return message.send(
		` 
		👤 Имя: @id${user.id}(${user.prefix})
		🆔 ID: ${message.$match[1]}
		👑 Статус: ${user.aname}
		🔻 Уровень: ${user.level}
		💡 Очки опыта: ${user.exs}/${user.uplvl} 

		💰 Баланс: ${spaces(user.balance)}$
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
		return message.send(`❗Ошибка! У вас нет доступа к данной команде.`);
	if (!acc.users[message.$match[1]])
		return message.send(`‼Ошибка! Игрок не найден...`);
	let id = args[1];

	acc.users[id].ban = true;
	user.a.ban += 1;

	vk.api.call("messages.send", {
		user_id: acc.users[id].id,
		message: `⛔ ${user.aname} ${nick(
			message.user
		)} заблокировал ваш аккаунт.\n▪ Время: навсегда\n▪ Причина: ${args[2]}`,
	});

	// admin(
	// 	`Администратор ${user.aname} ${nick(message.user)} заблокировал навсегда ${nick(
	// 		acc.users[id].id
	// 	)}\n▪ Причина: ${args[2]}`
	// );

	return message.send(
		`▪ Вы заблокировали навсегда игрока ${acc.users[id].prefix}`
	);
});

vk.updates.hear(/^(?:unban)\s?([0-9]+)?/i, (message) => {
	if (!message.$match[1]) return message.send(`✉ Укажите ID игрока...`);
	let args = message.$match;
	let user = acc.users[u_id(message.user)];
	if (user.admin < 5)
		return message.send(`❗Ошибка! У вас нет доступа к данной команде.`);
	if (!acc.users[message.$match[1]])
		return message.send(`‼Ошибка! Игрок не найден...`);

	let id = args[1];

	acc.users[id].ban = false;

	vk.api.call("messages.send", {
		user_id: acc.users[id].id,
		message: `⛔ ${user.aname} ${nick(
			message.user
		)} разблокировал ваш аккаунт.`,
	});

	return message.send(`▪ Вы разблокировали игрока ${acc.users[id].prefix}`);
});

vk.updates.hear(/^(?:mute)\s?([0-9]+)?\s?([0-9]+)?/i, (message) => {
	if (!message.$match[1] || !message.$match[2])
		return message.send(`✉ Укажите ID TIME(минут)...`);
	let args = message.$match;
	let u = acc.users[u_id(message.user)];
	if (u.admin < 1)
		return message.send(`❗Ошибка! У вас нет доступа к данной команде.`);
	if (u.admin == 1 && args[2] > 30)
		return message.send(`Helper может выдавать мут от 1 до 30 минут.`);
	let user = acc.users[u_id(message.user)];
	if (!acc.users[message.$match[1]])
		return message.send(`‼Ошибка! Игрок не найден...`);

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
	// admin(
	// 	`⛔ ${user.aname} ${nick(message.user)} выдал мут на ${time} минут ${nick(
	// 		acc.users[id].id
	// 	)}`
	// );
	return message.send(`▪ Вы выдали мут игроку ${acc.users[id].prefix}`);
});

vk.updates.hear(/^(?:unmute)\s?([0-9]+)?/i, (message) => {
	if (!message.$match[1]) return message.send(`✉ Укажите ID...`);
	let args = message.$match;
	let u = acc.users[u_id(message.user)];
	if (u.admin < 1)
		return message.send(`❗Ошибка! У вас нет доступа к данной команде.`);
	let user = acc.users[u_id(message.user)];
	if (!acc.users[message.$match[1]])
		return message.send(`‼Ошибка! Игрок не найден...`);

	let id = args[1];

	acc.users[id].mute = false;

	vk.api.call("messages.send", {
		user_id: acc.users[id].id,
		message: `⛔ ${u.aname} ${nick(message.user)} снял с вас мут.`,
	});
	// admin(
	// 	`⛔ ${user.aname} ${nick(message.user)} снял мут ${nick(acc.users[id].id)}`
	// );
	return message.send(`▪ Вы сняли мут игроку ${acc.users[id].prefix}`);
});

vk.updates.hear(/^(?:warn)\s?([0-9]+)?\s?([^]+)?/i, (message) => {
	if (!message.$match[1]) return message.send(`✉ Укажите ID игрока...`);
	let args = message.$match;
	let user = acc.users[u_id(message.user)];
	if (user.admin < 4)
		return message.send(`❗Ошибка! У вас нет доступа к данной команде.`);
	if (!acc.users[message.$match[1]])
		return message.send(`‼Ошибка! Игрок не найден...`);

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
		return message.send(`❗Ошибка! У вас нет доступа к данной команде.`);
	if (!acc.users[message.$match[1]])
		return message.send(`‼Ошибка! Игрок не найден...`);

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
		return message.send(`❗Ошибка! У вас нет доступа к данной команде.`);
	let ids = args[1];
	if (!acc.users[ids]) return message.send(`‼Ошибка! Игрок не найден...`);
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
		return message.send(`❗Ошибка! У вас нет доступа к данной команде.`);
	let ids = args[1];
	user.a.nick += 1;
	if (!acc.users[ids]) return message.send(`‼Ошибка! Игрок не найден...`);
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
		return message.send(`❗Ошибка! У вас нет доступа к данной команде.`);
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
	if (!args[1]) {
		return message.send(`✉ Укажите ID `);
	}
	if (user.admin < 7) {
		return message.send(`❗Ошибка! У вас нет доступа к данной команде.`);
	}
	if (!acc.users[args[1]]) {
		return message.send(`‼Ошибка! Игрок не найден...`);
	}
	organizations.mine.owner = user_id.id;
	return message.send(
		`Вы выдали владельца игроку  @id${user_id.id}(${user_id.prefix})`
	);
});
vk.updates.hear(/^(?:makeavtosalon)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let args = message.$match;
	let user_id = acc.users[args[1]];
	if (!args[1]) {
		return message.send(`✉ Укажите ID `);
	}
	if (user.admin < 7) {
		return message.send(`❗Ошибка! У вас нет доступа к данной команде.`);
	}
	if (!acc.users[args[1]]) {
		return message.send(`‼Ошибка! Игрок не найден...`);
	}
	organizations.avtosalon.owner = user_id.id;
	return message.send(
		`Вы выдали владельца игроку  @id${user_id.id}(${user_id.prefix})`
	);
});
vk.updates.hear(/^(?:makepier)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let args = message.$match;
	let user_id = acc.users[args[1]];
	if (!args[1]) {
		return message.send(`✉ Укажите ID `);
	}
	if (user.admin < 7) {
		return message.send(`❗Ошибка! У вас нет доступа к данной команде.`);
	}
	if (!acc.users[args[1]]) {
		return message.send(`‼Ошибка! Игрок не найден...`);
	}
	organizations.pier.owner = user_id.id;
	return message.send(
		`Вы выдали владельца игроку  @id${user_id.id}(${user_id.prefix})`
	);
});
vk.updates.hear(/^(?:makepizza)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let args = message.$match;
	let user_id = acc.users[args[1]];
	if (!args[1]) {
		return message.send(`✉ Укажите ID `);
	}
	if (user.admin < 7) {
		return message.send(`❗Ошибка! У вас нет доступа к данной команде.`);
	}
	if (!acc.users[args[1]]) {
		return message.send(`‼Ошибка! Игрок не найден...`);
	}
	organizations.pizza.owner = user_id.id;
	return message.send(
		`Вы выдали владельца игроку  @id${user_id.id}(${user_id.prefix})`
	);
});
vk.updates.hear(/^(?:makemeria)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let args = message.$match;
	let user_id = acc.users[args[1]];
	if (!args[1]) {
		return message.send(`✉ Укажите ID `);
	}
	if (user.admin < 7) {
		return message.send(`❗Ошибка! У вас нет доступа к данной команде.`);
	}
	if (!acc.users[args[1]]) {
		return message.send(`‼Ошибка! Игрок не найден...`);
	}
	organizations.meria.owner = user_id.id;
	return message.send(
		`Вы выдали владельца игроку  @id${user_id.id}(${user_id.prefix})`
	);
});

vk.updates.hear(/^(?:makecasino)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let args = message.$match;
	let user_id = acc.users[args[1]];
	if (!args[1]) {
		return message.send(`✉ Укажите ID `);
	}
	if (user.admin < 7) {
		return message.send(`❗Ошибка! У вас нет доступа к данной команде.`);
	}
	if (!acc.users[args[1]]) {
		return message.send(`‼Ошибка! Игрок не найден...`);
	}
	organizations.casino.owner = user_id.id;
	return message.send(
		`Вы выдали владельца игроку  @id${user_id.id}(${user_id.prefix})`
	);
});

vk.updates.hear(/^(?:makeshop)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let args = message.$match;
	let user_id = acc.users[args[1]];
	if (!args[1]) {
		return message.send(`✉ Укажите ID `);
	}
	if (user.admin < 7) {
		return message.send(`❗Ошибка! У вас нет доступа к данной команде.`);
	}
	if (!acc.users[args[1]]) {
		return message.send(`‼Ошибка! Игрок не найден...`);
	}
	organizations.shop.owner = user_id.id;
	return message.send(
		`Вы выдали владельца игроку  @id${user_id.id}(${user_id.prefix})`
	);
});

vk.updates.hear(/^(?:makehospital)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let args = message.$match;
	let user_id = acc.users[args[1]];
	if (!args[1]) {
		return message.send(`✉ Укажите ID `);
	}
	if (user.admin < 5) {
		return message.send(`❗Ошибка! У вас нет доступа к данной команде.`);
	}
	if (!acc.users[args[1]]) {
		return message.send(`‼Ошибка! Игрок не найден...`);
	}
	organizations.hospital.owner = user_id.id;
	user_id.worker_hospital = true;
	return message.send(
		`Вы выдали владельца игроку  @id${user_id.id}(${user_id.prefix})`
	);
});

vk.updates.hear(/^(?:сопгсет)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let args = message.$match;
	let user_id = acc.users[args[1]];
	if (!args[1]) {
		return message.send(`✉ Укажите ID `);
	}
	if (user.admin < 5) {
		return message.send(`❗Ошибка! У вас нет доступа к данной команде.`);
	}
	if (!acc.users[args[1]]) {
		return message.send(`‼Ошибка! Игрок не найден...`);
	}
	organizations.opg_sever.owner = user_id.id;
	user_id.opg_sever_bandit = true;
	user_id.opg_sever_rang = 5;
	return message.send(
		`Вы выдали владельца игроку  @id${user_id.id}(${user_id.prefix})`
	);
});

vk.updates.hear(/^(?:юопгсет)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let args = message.$match;
	let user_id = acc.users[args[1]];
	if (!args[1]) {
		return message.send(`✉ Укажите ID `);
	}
	if (user.admin < 5) {
		return message.send(`❗Ошибка! У вас нет доступа к данной команде.`);
	}
	if (!acc.users[args[1]]) {
		return message.send(`‼Ошибка! Игрок не найден...`);
	}
	organizations.opg_yg.owner = user_id.id;
	user_id.opg_yg_bandit = true;
	user_id.opg_yg_rang = 5;
	return message.send(
		`Вы выдали владельца игроку  @id${user_id.id}(${user_id.prefix})`
	);
});
vk.updates.hear(/^(?:фсбсет)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let args = message.$match;
	let user_id = acc.users[args[1]];
	if (!args[1]) {
		return message.send(`✉ Укажите ID `);
	}
	if (user.admin < 5) {
		return message.send(`❗Ошибка! У вас нет доступа к данной команде.`);
	}
	if (!acc.users[args[1]]) {
		return message.send(`‼Ошибка! Игрок не найден...`);
	}
	organizations.fsb.owner = user_id.id;
	user_id.fsb_worker = true;
	user_id.fsb_rang = 3;
	return message.send(
		`Вы выдали владельца игроку  @id${user_id.id}(${user_id.prefix})`
	);
});

vk.updates.hear(/^(?:givemoney|выдать)\s?([0-9]+)?\s?(.*)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let args = message.$match;
	let give = args[2];
	give = give.replace(/(\.|\,)/gi, "");
	give = give.replace(/(к|k)/gi, "000");
	give = give.replace(/(м|m)/gi, "000000");
	if (user.admin < 6)
		return message.send(`❗Ошибка! У вас нет доступа к данной команде.`);
	let ids = args[1];
	if (!acc.users[ids]) return message.send(`‼Ошибка! Игрок не найден...`);
	acc.users[ids].balance += Number(give);
	return message.send(
		`▪ ${nick(message.user)} выдал ${spaces(give)}$ игроку @id${
			acc.users[ids].id
		}(${acc.users[ids].prefix}) [${ids}]`
	);
});

vk.updates.hear(/^(?:removemoney|забрать)\s?([0-9]+)?/i, (message) => {
	if (!message.$match[1]) return message.send(`✉ Укажите ID `);
	let args = message.$match;
	let user = acc.users[u_id(message.user)];
	if (user.admin < 6)
		return message.send(`❗Ошибка! У вас нет доступа к данной команде.`);
	let ids = args[1];
	if (!acc.users[ids]) return message.send(`‼Ошибка! Игрок не найден...`);
	acc.users[ids].balance = 0;
	return message.send(
		`▪ ${nick(message.user)} аннулировал баланс игроку @id${
			acc.users[ids].id
		}(${acc.users[ids].prefix}) [${ids}]`
	);
});

vk.updates.hear(/^(?:givelevel)\s?([0-9]+)?\s?([0-9]+)?/i, (message) => {
	if (!message.$match[1] || !message.$match[2])
		return message.send(`✉ Укажите ID и уровень!`);
	let args = message.$match;
	let user = acc.users[u_id(message.user)];
	if (user.admin < 6)
		return message.send(`❗Ошибка! У вас нет доступа к данной команде.`);
	let ids = args[1];
	let level = args[2];
	if (!acc.users[ids]) return message.send(`‼Ошибка! Игрок не найден...`);
	acc.users[ids].level += Number(args[2]);
	return message.send(
		`▪ ${nick(message.user)} выдал ${spaces(args[2])} уроень игроку @id${
			acc.users[ids].id
		}(${acc.users[ids].prefix}) [${ids}]`
	);
});

vk.updates.hear(/^(?:removelevel)\s?([0-9]+)?/i, (message) => {
	if (!message.$match[1]) return message.send(`✉ Укажите ID `);
	let args = message.$match;
	let user = acc.users[u_id(message.user)];
	if (user.admin != 7)
		return message.send(`❗Ошибка! У вас нет доступа к данной команде.`);
	let ids = args[1];
	if (!acc.users[ids]) return message.send(`‼Ошибка! Игрок не найден...`);
	acc.users[ids].level = 0;
	return message.send(
		`▪ ${nick(message.user)} аннулировал уровеь @id${acc.users[ids].id}(${
			acc.users[ids].prefix
		}) [${ids}]`
	);
});
vk.updates.hear(/^(?:givedonate)\s?([0-9]+)?\s?([0-9]+)?/i, (message) => {
	if (!message.$match[1] || !message.$match[2])
		return message.send(`✉ Укажите ID и СУММУ`);
	let args = message.$match;
	let user = acc.users[u_id(message.user)];
	if (user.admin != 7)
		return message.send(`❗Ошибка! У вас нет доступа к данной команде.`);
	let ids = args[1];
	let summa = args[2];
	if (!acc.users[ids]) return message.send(`‼Ошибка! Игрок не найден...`);
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
		return message.send(`❗Ошибка! У вас нет доступа к данной команде.`);
	let ids = args[1];
	if (!acc.users[ids]) return message.send(`‼Ошибка! Игрок не найден...`);
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
		return message.send(`❗Ошибка! У вас нет доступа к данной команде.`);
	let ids = args[1];
	let opit = args[2];
	if (!acc.users[ids]) return message.send(`‼Ошибка! Игрок не найден...`);
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
		return message.send(`❗Ошибка! У вас нет доступа к данной команде.`);
	let ids = args[1];
	if (!acc.users[ids]) return message.send(`‼Ошибка! Игрок не найден...`);
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
		return message.send(`❗Ошибка! У вас нет доступа к данной команде.`);
	let ids = args[1];
	let cars = args[2];
	if (!acc.users[ids]) return message.send(`‼Ошибка! Игрок не найден...`);
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
		return message.send(`❗Ошибка! У вас нет доступа к данной команде.`);
	let ids = args[1];
	let cars = args[2];
	if (!acc.users[ids]) return message.send(`‼Ошибка! Игрок не найден...`);
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
		return message.send(`❗Ошибка! У вас нет доступа к данной команде.`);
	let ids = args[1];
	let skin = args[2];
	if (!acc.users[ids]) return message.send(`‼Ошибка! Игрок не найден...`);
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
		return message.send(`❗Ошибка! У вас нет доступа к данной команде.`);
	let ids = args[1];
	let skin = args[2];
	if (!acc.users[ids]) return message.send(`‼Ошибка! Игрок не найден...`);
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
		return message.send(`❗Ошибка! У вас нет доступа к данной команде.`);
	let ids = args[1];
	if (!acc.users[ids]) return message.send(`‼Ошибка! Игрок не найден...`);
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
❗Role Play команды:
/me [текст] - Отыгровка действий от первого лица
/do [текст] - Отыгровка действий от третьего лица
/try [текст] - Отыгровка ситуаций на удачу
/b [текст] - ООС чат
/s [текст] - Кричать
/w [текст] - Шептать
/time - Просмотреть на часы
/id [ID] - игроков по ID'у
/iznas [ID] - изнасиловать игрока
/kiss [ID] - поцеловать игрока
/hey [ID] - поздороваться с игроком

❗Для того чтобы использовать, введите команду и действие.
Пример: /me пожал руку человеку напротив.
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
		"Магазин",
		"Магазин одежды",
		"Оружейный магазин",
		"Автосалон",
		"Пирс",
		"Шахта",
		"Мэрия",
		"Больница",
		"Банк",
		"Казино",
		"Пиццерия",
		"Порт",
	];
	if (message.$match[1]) {
		let i = message.$match[1];
		if (i < 0 || i > 13) return message.send(`✉ Неверно указан номер`);

		user.gps = Number(i);
		return message.send(`✉ Вы успешно переместились в ${name[i]}`);
	} else {
		return message.send(`
❗Вы перешли в GPS-навигатор.
➖➖➖➖➖➖
1⃣ Магазин
2⃣ Магазин одежды
3⃣ Оружейный магазин [В разработке!]
4⃣ Автосалон
➖➖➖➖➖➖
5⃣ Пирс
6⃣ Шахта
➖➖➖➖➖➖
7⃣ Мэрия
8⃣ Больница
9⃣ Банк
1⃣0⃣ Казино
1⃣1⃣ Пиццерия
1⃣2⃣ Порт

		`);
	}
});

vk.updates.hear(/^(?:лидеры)$/i, (message) => {
	let user_prefix_hospital = acc.users[u_id(organizations.hospital.owner)];
	let user_prefix_opg1 = acc.users[u_id(organizations.opg_yg.owner)];
	let user_prefix_opg2 = acc.users[u_id(organizations.opg_sever.owner)];
	let user_prefix_fsb = acc.users[u_id(organizations.fsb.owner)];
	return message.send(`
		👑Лидеры Samp BOT | Role Play:👑

		⚕ Больница: @id${organizations.hospital.owner}(${user_prefix_hospital.prefix})

		💀 Южное ОПГ: @id${organizations.opg_yg.owner}(${user_prefix_opg1.prefix})

		☠ Северное ОПГ: @id${organizations.opg_sever.owner}(${user_prefix_opg2.prefix})

		👮 Федеральная Служба Безопасности:   @id${organizations.fsb.owner}(${user_prefix_fsb.prefix})
	`);
});

vk.updates.hear(/^(?:ЮОпг меню)$/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let user_prefix_opg1 = acc.users[u_id(organizations.opg_yg.owner)];
	if (!user.opg_yg_bandit) {
		return message.send(`Вы не состоите в Южном ОПГ! `);
	}
	return message.send(`
		📕 Меню Южного ОПГ:
		🔫 Территории ОПГ: ${organizations.opg_yg.capts}
		🦹‍♂ Авторитет: @id${organizations.opg_yg.owner}(${user_prefix_opg1.prefix})
		👥 Участников: ${organizations.opg_yg.count}уч.
		💰 Общак: ${spaces(organizations.opg_yg.balance)}$
		🏗 Материалы: ${organizations.opg_yg.material}ед.
		
		📗 Что бы узнать команды, используй: Юопг команды.

	`);
});
vk.updates.hear(/^(?:ЮОпг команды)$/i, (message) => {
	let user = acc.users[u_id(message.user)];
	if (!user.opg_yg_bandit) {
		return message.send(`Вы не состоите в Южном ОПГ! `);
	}
	return message.send(`
		💀 Команды ОПГ Южное:
		➖➖➖➖➖➖
		👺 Команды Бригадников:
		ЮОПГ готов - готовность к ограблению
		ЮОПГ перестрелка готов - готовность к капту
		ЮОПГ состав
		➖➖➖➖➖➖
		😈 Команды авторитета:
		🔹ЮОПГ огр магазин - начать ограбление магазина
		🔹ЮОПГ огр казино - начать ограбление казино
		🔹ЮОПГ Перестрелка - начать капт
		➖➖➖➖➖➖
		🔸ЮОПГ принять [ID]
		🔸ЮОПГ выгнать [ID]
		🔸ЮОПГ повысить [ID]
		🔸ЮОПГ понизить [ID]
		🔸ЮОПГ Зам [ID]
		🔸ЮОПГ набор
		🔸ЮОПГ снять [сумма]
		🔸ЮОПГ пополнить [сумма]
	`);
});

vk.updates.hear(/^(?:Юопг капт готов)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	if (user.opg_yg_bandit_capt == false) {
		return message.send(`Вы не состоите в В Южном ОПГ!`);
	}
	if (user.bandit_capt == true) {
		return message.send(`Вы уже готовы!`);
	}
	user.opg_yg_bandit_capt = true;
	organizations.opg_sever.bandit_capt += 1;
	return message.send(
		`Вы подготовились к капту! Людей, готовых к капту: ${organizations.opg_yg.bandit_capt} `
	);
});

vk.updates.hear(/^(?:ЮОпг готов)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	if (user.opg_yg_bandit == false) {
		return message.send(`Вы не состоите в Южном ОПГ!`);
	}
	if (user.readiness_bussines_yg == true) {
		return message.send(`Вы уже готовы!`);
	}
	user.readiness_bussines_yg = true;
	organizations.opg_yg.count_orgablenie += 1;
	return message.send(`Вы подготовились к ограблению казино.`);
});
vk.updates.hear(/^(?:ЮОПГ огр казино)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	if (user.id != organizations.opg_yg.owner) {
		return message.send(`Вы не лидер Южного ОПГ`);
	}
	if (organizations.opg_yg.count_orgablenie < 5) {
		return message.send(
			`Слишком мало приготовленных игроков, нужно как минимум 5!`
		);
	}
	for (i in acc.users) {
		if (acc.users[i].opg_yg_bandit) {
			acc.users[i].readiness_bussines_yg = false;
		}
	}
	organizations.opg_yg.count_orgablenie = 0;
	let money = utils.random(10000, 100000);
	organizations.opg_yg.balance += Number(money);
	return message.send(
		`Вы ограбили казино, вам начислено ${spaces(money)} на счет казны!`
	);
});
vk.updates.hear(/^(?:ЮОпг зам)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let user_id = acc.users[message.$match[1]];
	if (user.id != organizations.opg_yg.owner) {
		return message.send(`Вы не лидер Южного ОПГ`);
	}
	if (!user_id.opg_yg_bandit) {
		return message.send(`⛔ Данный игрок не состоит в Южном ОПГ!`);
	}
	if (!user_id.opg_yg_rang == 4) {
		return message.send(`⛔ Данный игрок уже Зам !`);
	}
	user_id.opg_yg_rang = 4;
	vk.api.messages
		.send({
			user_id: user_id.id,
			message: `📩 Главарь Южного ОПГ сделал вас замом !`,
		})
		.catch((error) => {
			if (error.code === 901) {
				return 0;
			}
			if (error.code === 100) {
				return 0;
			}
			if (error.code) {
				return 0;
			}
			throw error;
		});
	return message.send(
		`✅ Вы сделали игрока @id${user_id.id}(${user_id.prefix}) замом ! `
	);
});
vk.updates.hear(/^(?:ЮОпг принять)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let user_id = acc.users[message.$match[1]];
	if (user.id != organizations.opg_yg.owner) {
		return message.send(`Вы не лидер Южного ОПГ`);
	}
	if (!user_id.invitation_opg_yg) {
		return message.send(`Данный игрок не посылал запрос !`);
	}
	user_id.opg_yg_bandit = true;
	user_id.invitation_opg_yg = false;
	user_id.opg_yg_rang = 1;
	organizations.opg_yg.count += 1;
	vk.api.messages
		.send({
			user_id: user_id.id,
			message: `📩 Вас успешно приняли в Южное ОПГ! \n Обязательно вступите в беседу: https://vk.me/join/LpJPjWMr96oJ1nUebgyhl7h/fGP1G3cfaxg=`,
		})
		.catch((error) => {
			if (error.code === 901) {
				return 0;
			}
			if (error.code === 100) {
				return 0;
			}
			if (error.code) {
				return 0;
			}
			throw error;
		});
	return message.send(`✅ Вы приняли игрока в Южное ОПГ! `);
});

vk.updates.hear(/^(?:ЮОпг выгнать)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let user_id = acc.users[message.$match[1]];
	if (user.id != organizations.opg_yg.owner) {
		return message.send(`⛔ Вы не лидер Южного ОПГ`);
	}
	if (!user_id.opg_yg_bandit) {
		return message.send(`⛔ Данный игрок не состоит в Южном ОПГ!`);
	}
	user_id.opg_yg_bandit = false;
	organizations.opg_yg.count -= 1;
	vk.api.messages
		.send({
			user_id: user_id.id,
			message: `📩 Вас выгнали с Южного ОПГ`,
		})
		.catch((error) => {
			if (error.code === 901) {
				return 0;
			}
			if (error.code === 100) {
				return 0;
			}
			if (error.code) {
				return 0;
			}
			throw error;
		});
	return message.send(`⛔ Вы выгнали игрока из Южного ОПГ`);
});
vk.updates.hear(/^(?:ЮОПГ повысить)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let user_id = acc.users[message.$match[1]];
	if (user.id != organizations.opg_yg.owner) {
		return message.send(`⛔ Вы не лидер Южного ОПГ`);
	}
	if (!user_id.opg_yg_bandit) {
		return message.send(`⛔ Данный игрок не состоит в Южном ОПГ!`);
	}
	if (user_id.opg_yg_rang > 3) {
		return message.send(`⛔ Вы не можете его повысить выше четвёртого ранга !`);
	}

	user_id.opg_yg_rang += 1;
	vk.api.messages
		.send({
			user_id: user_id.id,
			message: `📩 Вас повысил лидер Южного ОПГ !`,
		})
		.catch((error) => {
			if (error.code === 901) {
				return 0;
			}
			if (error.code === 100) {
				return 0;
			}
			if (error.code) {
				return 0;
			}
			throw error;
		});
	return message.send(
		`✅ Вы повысили игрока @id${user_id.id}(${user_id.prefix}) !`
	);
});
vk.updates.hear(/^(?:ЮОПГ понизить)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let user_id = acc.users[message.$match[1]];
	if (user.id != organizations.opg_yg.owner) {
		return message.send(`⛔ Вы не лидер Южного ОПГ`);
	}
	if (!user_id.opg_yg_bandit) {
		return message.send(`⛔ Данный игрок не состоит в Южном ОПГ!`);
	}
	if (user_id.opg_yg_rang < 2) {
		return message.send(`⛔ Вы не можете его понизить ниже первого ранга !`);
	}
	user_id.opg_yg_rang -= 1;
	vk.api.messages
		.send({
			user_id: user_id.id,
			message: `📩 Вас понизил лидер Южного ОПГ !`,
		})
		.catch((error) => {
			if (error.code === 901) {
				return 0;
			}
			if (error.code === 100) {
				return 0;
			}
			if (error.code) {
				return 0;
			}
			throw error;
		});
	return message.send(
		`✅ Вы понизили игрока ! @id${user_id.id}(${user_id.prefix}) `
	);
});

vk.updates.hear(/^(?:юопг запрос)$/i, (message) => {
	let user = acc.users[u_id(message.user)];
	if (user.opg_yg_bandit || user.opg_sever_bandit) {
		return message.send(`⛔ Вы уже состоите в ОПГ !`);
	}
	if (user.invitation_opg_yg) {
		return message.send(`⛔ Вы уже послали запрос !`);
	}
	user.invitation_opg_yg = true;
	yg_chat(
		`Игрок  @id${user.id}(${user.prefix}) захотел вступить в Южное ОПГ. Что бы посмотреть заявки, используйте: Юопг запросы`,
		u_id(message.user),
		"Юопг принять"
	);
	return message.send(`✅ Ожидайте пока лидер осмотрит ваш запрос. `);
});

vk.updates.hear(/^(?:юопг запросы)$/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let text = "";
	if (user.id != organizations.opg_yg.owner) {
		return message.send(`⛔ Вы не лидер Южного ОПГ`);
	}
	for (i in acc.users) {
		if (acc.users[i].invitation_opg_yg) {
			text += `🔹 @id${acc.users[i].id}(${acc.users[i].prefix}) [ID: ${i}]\n`;
		}
	}
	return message.send(`🔷 Запросы в Южное ОПГ:\n ${text}`);
});

vk.updates.hear(/^(?:юопг состав)$/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let rang_1 = "";
	let rang_2 = "";
	let rang_3 = "";
	let rang_4 = "";
	let rang_5 = "";

	if (user.opg_yg_bandit == false) {
		return message.send(`Вы не состоите в Южном ОПГ!`);
	}

	for (i in acc.users) {
		if (acc.users[i].opg_yg_bandit) {
			if (acc.users[i].opg_yg_rang == 1) {
				rang_1 += `🔹 @id${acc.users[i].id}(${acc.users[i].prefix}) [ID: ${i}]\n`;
			}
			if (acc.users[i].opg_yg_rang == 2) {
				rang_2 += `🔹 @id${acc.users[i].id}(${acc.users[i].prefix}) [ID: ${i}]\n`;
			}
			if (acc.users[i].opg_yg_rang == 3) {
				rang_3 += `🔹 @id${acc.users[i].id}(${acc.users[i].prefix}) [ID: ${i}]\n`;
			}
			if (acc.users[i].opg_yg_rang == 4) {
				rang_4 += `🔹 @id${acc.users[i].id}(${acc.users[i].prefix}) [ID: ${i}]\n`;
			}
			if (acc.users[i].opg_yg_rang == 5) {
				rang_5 += `🔹 @id${acc.users[i].id}(${acc.users[i].prefix}) [ID: ${i}]\n`;
			}
		}
	}
	return message.send(`
		🦹‍♂Состав ОПГ Южное:
		➖➖➖➖➖➖
		😈Основатель:
		${rang_5}
		➖➖➖➖➖➖
		👿 Смотрящий
		${rang_4}
		➖➖➖➖➖➖
		👹 Фраер:
		${rang_3}
		➖➖➖➖➖➖
		💀 Бывалый:
		${rang_2}
		➖➖➖➖➖➖
		👺 Бригадник:
		${rang_1}
		➖➖➖➖➖➖
	`);
});

vk.updates.hear(/^(?:Юопг набор)$/i, (message) => {
	let user_prefix = acc.users[u_id(organizations.opg_yg.owner)];
	let user = acc.users[u_id(message.user)];
	if (user.id != organizations.opg_yg.owner) {
		return message.send(`⛔ Вы не лидер Южного ОПГ`);
	}

	game_chat(
		`Лидер Южного ОПГ: @id${organizations.opg_yg.owner}(${
			user_prefix.prefix
		}) [ID: ${u_id(
			message.user
		)}]\n👥 Проводит набор, подробнее в личные сообщения Лидера!`
	);

	return message.send(`Вы успешно объявили набор в основной чат ! `);
});

vk.updates.hear(/^(?:юопг пополнить)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let args = message.$match;
	if (user.id != organizations.opg_yg.owner) {
		return message.send(`⛔ Вы не лидер Южного ОПГ`);
	}
	if (user.balance < args[1]) return message.send(`У вас недостаточно денег`);
	user.balance -= Number(args[1]);
	organizations.opg_yg.balance += Number(args[1]);
	return message.send(`Вы успешно пополнили баланс на ${spaces(args[1])}`);
});
vk.updates.hear(/^(?:юопг снять)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let args = message.$match;
	if (user.id != organizations.opg_yg.owner) {
		return message.send(`⛔ Вы не лидер Южного ОПГ`);
	}
	if (organizations.opg_yg.balance < args[1])
		return message.send(`На балансе казны недостаточно денег! `);
	user.balance += Number(args[1]);
	organizations.opg_yg.balance -= Number(args[1]);
	return message.send(`Вы успешно сняли баланс на ${spaces(args[1])}`);
});

/////////////////////////////////////////////////////////////////////

vk.updates.hear(/^(?:СОпг меню)$/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let user_prefix_opg2 = acc.users[u_id(organizations.opg_sever.owner)];
	if (!user.opg_sever_bandit) {
		return message.send(`Вы не состоите в Северном ОПГ! `);
	}
	return message.send(`
		📕 Меню Северного ОПГ:
		🔫 Территории ОПГ: ${organizations.opg_sever.capts}
		🦹‍♂ Авторитет: @id${organizations.opg_sever.owner}(${user_prefix_opg2.prefix})
		👥 Участников: ${organizations.opg_sever.count}уч.
		💰 Общак: ${spaces(organizations.opg_sever.balance)}$
		🏗 Материалы: ${organizations.opg_sever.material}ед.
		
		📗 Что бы узнать команды, используй: Сопг команды.

	`);
});
vk.updates.hear(/^(?:СОпг команды)$/i, (message) => {
	let user = acc.users[u_id(message.user)];
	if (!user.opg_sever_bandit) {
		return message.send(`Вы не состоите в Северном ОПГ! `);
	}
	return message.send(`
		💀 Команды ОПГ Северное:
		➖➖➖➖➖➖
		👺 Команды Бригадников:
		СОПГ готов - готовность к ограблению
		СОПГ капт готов - готовность к капту
		СОПГ состав
		➖➖➖➖➖➖
		😈 Команды авторитета:
		🔹СОПГ огр магазин - начать ограбление магазина
		🔹СОПГ огр казино - начать ограбление казино
		🔹СОПГ Капт - начать капт
		➖➖➖➖➖➖
		🔸СОПГ принять [ID]
		🔸СОПГ выгнать [ID]
		🔸СОПГ повысить [ID]
		🔸СОПГ понизить [ID]
		🔸СОПГ Зам [ID]
		🔸СОПГ набор
		🔸СОПГ снять [сумма]
		🔸СОПГ пополнить [сумма]
	`);
});

vk.updates.hear(/^(?:СОпг капт готов)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	if (user.opg_sever_bandit == false) {
		return message.send(`Вы не состоите в В северном ОПГ!`);
	}
	if (user.sever_bandit_capt == true) {
		return message.send(`Вы уже готовы!`);
	}
	user.sever_bandit_capt = true;
	organizations.opg_sever.bandit_capt += 1;
	return message.send(
		`Вы подготовились к капту! Людей, готовых к капту: ${organizations.opg_sever.bandit_capt} `
	);
});

vk.updates.hear(/^(?:СОПГ капт)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	if (user.id != organizations.opg_sever.owner) {
		return message.send(`Вы не лидер Северного ОПГ`);
	}
	if (organizations.opg_sever.count_orgablenie < 5) {
		return message.send(
			`Слишком мало приготовленных игроков, нужно как минимум 5!`
		);
	}
	for (i in acc.users) {
		if (acc.users[i].opg_sever_bandit) {
			acc.users[i].readiness_bussines_sever = false;
		}
	}
	organizations.opg_sever.count_orgablenie = 0;
	let money = utils.random(organizations.casino.balance, 100000);
	organizations.opg_sever.balance += Number(money);
	return message.send(
		`Вы ограбили казино, вам начислено ${spaces(money)} на счет казны!`
	);
});

vk.updates.hear(/^(?:СОпг готов)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	if (user.opg_sever_bandit == false) {
		return message.send(`Вы не состоите в В северном ОПГ!`);
	}
	if (user.readiness_bussines_sever == true) {
		return message.send(`Вы уже готовы!`);
	}
	user.readiness_bussines_sever = true;
	organizations.opg_sever.count_orgablenie += 1;
	return message.send(`Вы подготовились к ограблению казино.`);
});
vk.updates.hear(/^(?:СОПГ огр казино)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	if (user.id != organizations.opg_sever.owner) {
		return message.send(`Вы не лидер Северного ОПГ`);
	}
	if (organizations.opg_sever.count_orgablenie < 5) {
		return message.send(
			`Слишком мало приготовленных игроков, нужно как минимум 5!`
		);
	}
	for (i in acc.users) {
		if (acc.users[i].opg_sever_bandit) {
			acc.users[i].readiness_bussines_sever = false;
		}
	}
	organizations.opg_sever.count_orgablenie = 0;
	let money = utils.random(organizations.casino.balance, 100000);
	organizations.opg_sever.balance += Number(money);
	return message.send(
		`Вы ограбили казино, вам начислено ${spaces(money)} на счет казны!`
	);
});
vk.updates.hear(/^(?:СОпг зам)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let user_id = acc.users[message.$match[1]];
	if (user.id != organizations.opg_sever.owner) {
		return message.send(`Вы не лидер Северного ОПГ`);
	}
	if (!user_id.opg_sever_bandit) {
		return message.send(`⛔ Данный игрок не состоит в Южном ОПГ!`);
	}
	if (!user_id.opg_sever_rang == 4) {
		return message.send(`⛔ Данный игрок уже Заместитель !`);
	}
	user_id.opg_sever_rang = 4;
	vk.api.messages.send({
		user_id: user_id.id,
		message: `📩 Главарь Северного ОПГ сделал вас замом !`,
	}); /*.catch((error) => {
		if (error.code === 901) {
			return 0;
		}
		if (error.code === 100) {
			return 0;
		}
		if (error.code) {
			return 0;
		}
		throw error;
	})
	*/
	return message.send(
		`✅ Вы сделали игрока @id${user_id.id}(${user_id.prefix}) замом ! `
	);
});
vk.updates.hear(/^(?:СОпг принять)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let user_id = acc.users[message.$match[1]];
	if (user.id != organizations.opg_sever.owner) {
		return message.send(`Вы не лидер Северного ОПГ`);
	}
	if (!user_id.invitation_opg_sever) {
		return message.send(`Данный игрок не посылал запрос !`);
	}
	user_id.opg_sever_bandit = true;
	user_id.invitation_opg_sever = false;
	user_id.opg_sever_rang = 1;
	organizations.opg_sever.count += 1;
	vk.api.messages.send({
		user_id: user_id.id,
		message: `📩 Вас успешно приняли в Северное ОПГ! \n Обязательно вступите в беседу:`,
		/*if (error.code === 901) {
			return 0;
		}
		if (error.code === 100) {
			return 0;
		}
		if (error.code) {
			return 0;
		}
		throw error;
		*/
	});
	return message.send(`✅ Вы приняли игрока в Северное ОПГ! `);
});

vk.updates.hear(/^(?:СОпг выгнать)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let user_id = acc.users[message.$match[1]];
	if (user.id != organizations.opg_sever.owner) {
		return message.send(`⛔ Вы не лидер Северного ОПГ`);
	}
	if (!user_id.opg_sever_bandit) {
		return message.send(`⛔ Данный игрок не состоит в Северном ОПГ!`);
	}
	user_id.opg_sever_bandit = false;
	organizations.opg_sever.count -= 1;
	vk.api.messages
		.send({
			user_id: user_id.id,
			message: `📩 Вас выгнали с Северного ОПГ`,
		})
		.catch((error) => {
			if (error.code === 901) {
				return 0;
			}
			if (error.code === 100) {
				return 0;
			}
			if (error.code) {
				return 0;
			}
			throw error;
		});
	return message.send(`⛔ Вы выгнали игрока из Северного ОПГ`);
});
vk.updates.hear(/^(?:СОПГ повысить)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let user_id = acc.users[message.$match[1]];
	if (user.id != organizations.opg_sever.owner) {
		return message.send(`⛔ Вы не лидер Северного ОПГ`);
	}
	if (!user_id.opg_sever_bandit) {
		return message.send(`⛔ Данный игрок не состоит в Северном ОПГ!`);
	}
	if (user_id.opg_sever_rang > 3) {
		return message.send(`⛔ Вы не можете его повысить выше четвёртого ранга !`);
	}

	user_id.opg_sever_rang += 1;
	vk.api.messages
		.send({
			user_id: user_id.id,
			message: `📩 Вас повысил лидер Северного ОПГ !`,
		})
		.catch((error) => {
			if (error.code === 901) {
				return 0;
			}
			if (error.code === 100) {
				return 0;
			}
			if (error.code) {
				return 0;
			}
			throw error;
		});
	return message.send(
		`✅ Вы повысили игрока @id${user_id.id}(${user_id.prefix}) !`
	);
});
vk.updates.hear(/^(?:СОПГ понизить)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let user_id = acc.users[message.$match[1]];
	if (user.id != organizations.opg_sever.owner) {
		return message.send(`⛔ Вы не лидер Северного ОПГ`);
	}
	if (!user_id.opg_sever_bandit) {
		return message.send(`⛔ Данный игрок не состоит в Северном ОПГ!`);
	}
	if (user_id.opg_sever_rang < 2) {
		return message.send(`⛔ Вы не можете его понизить ниже первого ранга !`);
	}
	user_id.opg_sever_rang -= 1;
	vk.api.messages
		.send({
			user_id: user_id.id,
			message: `📩 Вас понизил лидер Северного ОПГ!`,
		})
		.catch((error) => {
			if (error.code === 901) {
				return 0;
			}
			if (error.code === 100) {
				return 0;
			}
			if (error.code) {
				return 0;
			}
			throw error;
		});
	return message.send(
		`✅ Вы понизили игрока @id${user_id.id}(${user_id.prefix}) `
	);
});

vk.updates.hear(/^(?:сопг запрос)$/i, (message) => {
	let user = acc.users[u_id(message.user)];
	if (user.opg_sever_bandit || user.opg_sever_bandit) {
		return message.send(`⛔ Вы уже состоите в ОПГ !`);
	}
	if (user.invitation_opg_sever) {
		return message.send(`⛔ Вы уже послали запрос !`);
	}
	user.invitation_opg_sever = true;
	sever_chat(
		`Игрок  @id${user.id}(${user.prefix}) захотел вступить в Северное ОПГ. Что бы посмотреть заявки, используйте: Сопг запросы`,
		u_id(message.user),
		"Сопг принять"
	);
	return message.send(`✅ Ожидайте пока лидер осмотрит ваш запрос. `);
});

vk.updates.hear(/^(?:сопг запросы)$/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let text = "";
	if (user.id != organizations.opg_yg.owner) {
		return message.send(`⛔ Вы не лидер Северного ОПГ`);
	}
	for (i in acc.users) {
		if (acc.users[i].invitation_opg_yg) {
			text += `🔹 @id${acc.users[i].id}(${acc.users[i].prefix}) [ID: ${i}]\n`;
		}
	}
	return message.send(`🔷 Запросы в Северное ОПГ:\n ${text}`);
});

vk.updates.hear(/^(?:сопг состав)$/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let rang_1 = "";
	let rang_2 = "";
	let rang_3 = "";
	let rang_4 = "";
	let rang_5 = "";

	if (user.opg_sever_bandit == false) {
		return message.send(`Вы не состоите в Северном ОПГ!`);
	}

	for (i in acc.users) {
		if (acc.users[i].opg_sever_bandit) {
			if (acc.users[i].opg_sever_rang == 1) {
				rang_1 += `🔹 @id${acc.users[i].id}(${acc.users[i].prefix}) [ID: ${i}]\n`;
			}
			if (acc.users[i].opg_sever_rang == 2) {
				rang_2 += `🔹 @id${acc.users[i].id}(${acc.users[i].prefix}) [ID: ${i}]\n`;
			}
			if (acc.users[i].opg_sever_rang == 3) {
				rang_3 += `🔹 @id${acc.users[i].id}(${acc.users[i].prefix}) [ID: ${i}]\n`;
			}
			if (acc.users[i].opg_sever_rang == 4) {
				rang_4 += `🔹 @id${acc.users[i].id}(${acc.users[i].prefix}) [ID: ${i}]\n`;
			}
			if (acc.users[i].opg_sever_rang == 5) {
				rang_5 += `🔹 @id${acc.users[i].id}(${acc.users[i].prefix}) [ID: ${i}]\n`;
			}
		}
	}
	return message.send(`
		🦹‍♂Состав ОПГ Южное:
		➖➖➖➖➖➖
		😈Основатель:
		${rang_5}
		➖➖➖➖➖➖
		👿 Смотрящий
		${rang_4}
		➖➖➖➖➖➖
		👹 Фраер:
		${rang_3}
		➖➖➖➖➖➖
		💀 Бывалый:
		${rang_2}
		➖➖➖➖➖➖
		👺 Бригадник:
		${rang_1}
		➖➖➖➖➖➖
	`);
});

vk.updates.hear(/^(?:Сопг набор)$/i, (message) => {
	let user_prefix = acc.users[u_id(organizations.opg_yg.owner)];
	let user = acc.users[u_id(message.user)];
	if (user.id != organizations.opg_sever.owner) {
		return message.send(`⛔ Вы не лидер Северного ОПГ`);
	}

	game_chat(
		`Лидер Северного ОПГ: @id${organizations.opg_sever.owner}(${
			user_prefix.prefix
		}) [ID: ${u_id(
			message.user
		)}]\n👥 Проводит набор, подробнее в личные сообщения Лидера!`
	);

	return message.send(`Вы успешно объявили набор в основной чат ! `);
});

vk.updates.hear(/^(?:сопг пополнить)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let args = message.$match;
	if (user.id != organizations.opg_sever.owner) {
		return message.send(`⛔ Вы не лидер Северного ОПГ`);
	}
	if (user.balance < args[1]) return message.send(`У вас недостаточно денег`);
	user.balance -= Number(args[1]);
	organizations.opg_sever.balance += Number(args[1]);
	return message.send(`Вы успешно пополнили баланс на ${spaces(args[1])}`);
});
vk.updates.hear(/^(?:сопг снять)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let args = message.$match;
	if (user.id != organizations.opg_sever.owner) {
		return message.send(`⛔ Вы не лидер Северного ОПГ`);
	}
	if (organizations.opg_sever.balance < args[1])
		return message.send(`На балансе казны недостаточно денег! `);
	user.balance += Number(args[1]);
	organizations.opg_sever.balance -= Number(args[1]);
	return message.send(`Вы успешно сняли баланс на ${spaces(args[1])}`);
});

///////////////////////////////////////////////////////////////////////
vk.updates.hear(/^(?:ФСБ меню)$/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let user_prefix = acc.users[u_id(organizations.fsb.owner)];
	if (user.fsb_worker == false) {
		return message.send(`Вы не сотрудник ФСБ! `);
	}

	return message.send(
		`Вы перешли в ФСБ!
	Директор ФСБ: @id${organizations.fsb.owner}(${user_prefix.prefix}),
	Казна ФСБ: ${organizations.fsb.balance},
	Неизвестное вещество: ${organizations.fsb.drugs}
	Для просмотра команд ФСБ, используйте: "ФСБ команды"`,
		{
			keyboard: JSON.stringify({
				inline: true,
				buttons: [
					[
						{
							action: {
								type: "text",
								payload: "{}",
								label: "ФСБ команды",
							},
							color: "positive",
						},
					],
				],
			}),
		}
	);
});

vk.updates.hear(/^(?:ФСБ команды)$/i, (message) => {
	let user = acc.users[u_id(message.user)];
	if (user.fsb_worker == false) {
		return message.send(`Вы не сотрудник ФСБ! `);
	}

	return message.send(`Вы открыли команды ФСБ! 
	👮‍♀Команды Рядового:
	🔹 ФСБ Лист - список разыскиваемых преступников
	🔹 ФСБ состав - состав ФСБ
	🔹 ФСБ посадить [id] [время] [причина] - посадить 🔹🔹 игрока в КПЗ
	🔹 ФСБ освободить [id] - высвободить игрока из КПЗ
	🔹 Обыск [id] - обыскать игрока
	➖➖➖➖➖➖➖➖➖➖
	👮‍♂Команды Мл. Сержанта:
	🔹 ФСБ Штраф [id] [сумма штрафа] [причина] - выдать штраф игроку
	🔹 изъять вещество [id] - забрать неизвестное вещество у игрока
	➖➖➖➖➖➖➖➖➖➖
	💙Команды Директора ФСБ:
	🔹 ФСБ принять [id]
	🔹 ФСБ уволить [id]
	🔹 ФСБ запросы
	🔹 ФСБ снять вещество [кол-во]
	🔹 ФСБ снять [сумма]
	`);
});

vk.updates.hear(/^(?:ФСБ набор)$/i, (message) => {
	let user_prefix = acc.users[u_id(organizations.fsb.owner)];
	let user = acc.users[u_id(message.user)];
	if (user.id != organizations.fsb.owner) {
		return message.send(`⛔ Вы не директор ФСБ!`);
	}

	game_chat(
		`Лидер ФБР: @id${organizations.fsb.owner}(${
			user_prefix.prefix
		}) [ID: ${u_id(
			message.user
		)}]\n👥 Проводит набор в ФСБ, подробнее в личные сообщения Лидера!`
	);

	return message.send(`Вы успешно объявили набор в основной чат ! `);
});

vk.updates.hear(/^(?:ФСБ запрос)$/i, (message) => {
	let user = acc.users[u_id(message.user)];
	if (user.fsb_worker) {
		return message.send(`⛔ Вы уже состоите в ФБР !`);
	}
	if (user.invitation_fsb) {
		return message.send(`⛔ Вы уже послали запрос !`);
	}
	user.invitation_fsb = true;
	fsb_chat(
		`Игрок  @id${user.id}(${user.prefix}) захотел вступить в ФСБ. Что бы посмотреть заявки, используйте: ФСБ запросы`,
		u_id(message.user),
		"ФСБ принять"
	);
	return message.send(`✅ Ожидайте пока лидер осмотрит ваш запрос. `);
});

vk.updates.hear(/^(?:ФСБ запросы)$/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let text = "";
	if (user.id != organizations.fsb.owner) {
		return message.send(`⛔ Вы не лидер ФСБ`);
	}
	for (i in acc.users) {
		if (acc.users[i].invitation_fsb) {
			text += `🔹 @id${acc.users[i].id}(${acc.users[i].prefix}) [ID: ${i}]\n`;
		}
	}
	return message.send(`🔷 Запросы в ФСБ:\n ${text}`);
});

vk.updates.hear(/^(?:ФСБ принять)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let user_id = acc.users[message.$match[1]];
	if (user.id != organizations.fsb.owner) {
		return message.send(`Вы не директор ФСБ!`);
	}
	if (!user_id.invitation_fsb) {
		return message.send(`Данный игрок не посылал запрос !`);
	}
	user_id.fsb_worker = true;
	user_id.invitation_fsb = false;
	user_id.fsb_rang = 1;
	organizations.fsb.count += 1;
	vk.api.messages.send({
		user_id: user_id.id,
		message: `📩 Вас успешно приняли в ФСБ! \n Обязательно вступите в беседу:`,
		/*if (error.code === 901) {
			return 0;
		}
		if (error.code === 100) {
			return 0;
		}
		if (error.code) {
			return 0;
		}
		throw error;
		*/
	});
	return message.send(`✅ Вы приняли игрока в Северное ОПГ! `);
});

vk.updates.hear(/^(?:ФСБ выгнать)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let user_id = acc.users[message.$match[1]];
	if (user.id != organizations.fsb.owner) {
		return message.send(`⛔ Вы не директор ФСБ!`);
	}
	if (!user_id.fsb_worker) {
		return message.send(`⛔ Данный игрок не состоит в ФСБ!`);
	}
	user_id.fsb_worker = false;
	organizations.fsb.count -= 1;
	vk.api.messages
		.send({
			user_id: user_id.id,
			message: `📩 Вас выгнали из ФСБ`,
		})
		.catch((error) => {
			if (error.code === 901) {
				return 0;
			}
			if (error.code === 100) {
				return 0;
			}
			if (error.code) {
				return 0;
			}
			throw error;
		});
	return message.send(`⛔ Вы выгнали игрока из ФСБ`);
});

vk.updates.hear(/^(?:обыск)\s?([0-9]+)?/i, (message) => {
	let u = acc.users[u_id(message.user)];
	let user = acc.users[message.$match[1]];
	if (!message.$match[1]) return message.send(`✉ Укажите ID Игрока`);
	if (!acc.users[message.$match[1]])
		return message.send(`‼Ошибка! Игрок не найден...`);
	return message.send(
		` 
		👤 Имя: ${user.prefix}
		📃Лицензия на оружие: ${
			user.gunlic == false ? `Отсутствует` : `${user.gunlic}`
		}\n
		🔫Оружие: ${user.gun == false ? `Отсутствует` : `${user.gun}`}\n
		💊Неизвестное вещество: ${user.narko}
	`
	);
});

vk.updates.hear(/^(?:фсб снять вещество)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let args = message.$match;
	if (user.id != organizations.fsb.owner) {
		return message.send(`⛔ Вы не директор ФСБ`);
	}
	if (organizations.fsb.drugs < args[1])
		return message.send(`На складе вещества ФСБ нет столько! `);
	user.narko += Number(args[1]);
	organizations.fsb.drugs -= Number(args[1]);
	return message.send(`Вы успешно сняли ${spaces(args[1])} вещества`);
});

vk.updates.hear(/^(?:фсб снять)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let args = message.$match;
	if (user.id != organizations.fsb.owner) {
		return message.send(`⛔ Вы не директор ФСБ`);
	}
	if (organizations.fsb.balance < args[1])
		return message.send(`На балансе казны недостаточно денег! `);
	user.balance += Number(args[1]);
	organizations.fsb.balance -= Number(args[1]);
	return message.send(`Вы успешно сняли баланс на ${spaces(args[1])}`);
});

vk.updates.hear(/^(?:изъять вещество)\s?([0-9]+)?/i, (message) => {
	if (!message.$match[1]) return message.send(`✉ Укажите ID `);
	let args = message.$match;
	let user = acc.users[u_id(message.user)];
	let ids = args[1];
	if (!acc.users[ids]) return message.send(`‼Ошибка! Игрок не найден...`);
	acc.users[ids].narko = 0;
	return message.send(
		`▪ ${nick(message.user)} Забрал неизвестное вещество у @id${
			acc.users[ids].id
		}(${acc.users[ids].prefix}) [${ids}]`
	);
});

vk.updates.hear(/^(?:ФСБ посадить)\s?([0-9]+)?\s?([0-9]+)?/i, (message) => {
	if (!message.$match[1] || !message.$match[2])
		return message.send(`✉ Укажите ID [время] [причина]`);
	let args = message.$match;
	let u = acc.users[u_id(message.user)];
	let user = acc.users[u_id(message.user)];
	if (!acc.users[message.$match[1]])
		return message.send(`‼Ошибка! Игрок не найден...`);

	let id = args[1];
	let time = Number(args[2]);
	user.kpz += 1;

	acc.users[id].kpz = Number(time);

	vk.api.call("messages.send", {
		user_id: acc.users[id].id,
		message: `⛔ сотрудник ${user.fsb_worker} ${nick(
			message.user
		)} посадил вас в КПЗ на ${time}.`,
	});

	return message.send(
		`▪ Вы посадили игрока ${acc.users[id].prefix} на ${time} с причиной: `
	);
});

///////////////////////////////////////////////////////////////////////
vk.updates.hear(/^(?:неизвестное здание)\s?([0-9]+)?/i, (message) => {
	message.send(`Вы перешли в неизвестное здание!
	 Доступный товар:
	 1. Неизвестное вещество
	 Для покупки введите: "взять 1" [кол-во]`);
	fsb_chat(`Игрок  @id${user.id}(${user.prefix}) зашел в неизвестное здание!`);
});
vk.updates.hear(/^(?:взять 1)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let narko = 5;
	user.balance -= 500;
	user.narko += narko;
	message.send(`вы взяли неизвестное вещество! Будьте осторожны`);
});

///////////////////////////////////////////////////////////////////////
vk.updates.hear(/^(?:Больница|👨‍⚕ Больница)$/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let user_prefix = acc.users[u_id(organizations.hospital.owner)];
			if (user.gps != 8) return message.send(` 
❗Для того чтобы перейти в больницу напишите "GPS 8". `)
	return message.send(
		`
		Вы перешли в здание Больницы 👨‍⚕

		👤 Главный Врач: @id${organizations.hospital.owner}(${user_prefix.prefix})
		💊 Медикоменты: ${organizations.hospital.medicines}
		➖➖➖➖➖➖➖➖➖➖➖➖
		💰 Стоимость лечения: ${organizations.hospital.money}
		💊 Для того чтобы вылечиться, используйте: "Лечиться"
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
								label: "💊 Лечиться",
							},
							color: "positive",
						},
					],
				],
			}),
		}
	);
});
vk.updates.hear(/^(?:Мед статистика)$/i, (message) => {
	let user = acc.users[u_id(message.user)];
	if (user.worker_hospital == false) {
		return message.send(`Вы не владелец больницы `);
	}
	return message.send(`Ваша статистика:\n Всего вылечили:${user.sick_all}👤 `);
});

vk.updates.hear(/^(?:Больница набор)$/i, (message) => {
	let user_prefix = acc.users[u_id(organizations.hospital.owner)];
	let user = acc.users[u_id(message.user)];
	if (user.id != organizations.hospital.owner) {
		return message.send(`Вы не владелец больницы!`);
	}

	game_chat(
		`👤 Главный Врач: @id${organizations.hospital.owner}(${
			user_prefix.prefix
		}) [ID: ${u_id(
			message.user
		)}]\n👥 Проходит набор в больницу, подробнее в личные сообщения Глав.Врача!`
	);

	return message.send(`Вы успешно объявили набор в основной чат ! `);
});

vk.updates.hear(/^(?:Больница меню)$/i, (message) => {
	let user = acc.users[u_id(message.user)];
	if (user.worker_hospital == false) {
		return message.send(`Вы не владелец больницы `);
	}

	return message.send(
		`Вы открыли меню Больницы! 🚑
						💊 Медикоменты: ${organizations.hospital.medicines}
						💰 Зарплата: ${spaces(organizations.hospital.money)}$
						💰 Казна: ${spaces(organizations.hospital.balance)}$
						💰 Сумма премии: ${spaces(organizations.hospital.zarplata)}$
						➖➖➖➖➖
						Команды врача:
						🔹 Вылечить [ID] - вылечить игрока
						🔹 Пациенты - все пациенты больницы, которых необходимо лечить
						🔹 Больница состав - состав больницы
						🔹 Мед статистика - ваша статистика🆕
						➖➖➖➖➖
						Команды Глав.Врача:
						🔸 Больница принять [ID] - принять игрока в состав
						🔸 Больница уволить [ID] - уволить игрока 
						🔸 Больница премия [ID] - Выдать игроку из состава премию
						🔸 Больница запросы - посмотреть запросы в больницу
						🔸 Больница цена [сумма] - назначить цену за лечение
						🔸 Больница назначить премию [сумма] - назначить премию 
						🔸 Больница казна снять [сумма] - снять деньги с счёта казны
						🔸 Больница казна пополнить [сумма] - пополнить деньги на счёт казны
						🔸 Статистика врачей - посмотреть статистику всех врачей
						🔸 Больница набор - объявить набор в основную беседу
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
								label: "Пациенты",
							},
							color: "primary",
						},
						{
							action: {
								type: "text",
								payload: "{}",
								label: "Мед статистика",
							},
							color: "primary",
						},
						{
							action: {
								type: "text",
								payload: "{}",
								label: "Больница состав",
							},
							color: "primary",
						},
					],
					[
						{
							action: {
								type: "text",
								payload: "{}",
								label: "Статистика врачей",
							},
							color: "negative",
						},
						{
							action: {
								type: "text",
								payload: "{}",
								label: "Больница запросы",
							},
							color: "negative",
						},
					],
				],
			}),
		}
	);
});

vk.updates.hear(/^(?:больница назначить премию)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	if (user.id != organizations.hospital.owner) {
		return message.send(`Вы не владелец больницы!`);
	}
	organizations.hospital.zarplata = Number(message.$match[1]);
	return message.send(`Вы успешно назначили сумму премии!`);
});
vk.updates.hear(/^(?:больница премия)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let user_id = acc.users[message.$match[1]];
	if (user.id != organizations.hospital.owner) {
		return message.send(`Вы не владелец больницы!`);
	}
	if (!user_id.worker_hospital) {
		return message.send(`Данный игрок не работник больницы !`);
	}
	if (organizations.hospital.balance < 50000) {
		return message.send(`Для выдачи премии необходимо 50.000$ в казне !`);
	}
	user_id.balance += Number(organizations.hospital.zarplata);
	organizations.hospital.balance -= Number(organizations.hospital.zarplata);
	return message.send(
		`Вы выдали премию игроку @id${user_id.id}(${user_id.prefix})`
	);
});
vk.updates.hear(/^(?:больница казна пополнить)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let args = message.$match;
	if (user.id != organizations.hospital.owner) {
		return message.send(`Вы не владелец больницы!`);
	}
	if (user.balance < args[1]) return message.send(`У вас недостаточно денег`);
	user.balance -= Number(args[1]);
	organizations.hospital.balance += Number(args[1]);
	return message.send(
		`Вы успешно пополнили баланс казны на ${spaces(args[1])}`
	);
});
vk.updates.hear(/^(?:больница)\s(?:снять)\s(.*)$/i, async (message, bot) => {
	let user = acc.users[u_id(message.user)];
	message.$match[1] = message.$match[1].replace(/(\.|\,)/gi, "");
	message.$match[1] = message.$match[1].replace(/(к|k)/gi, "000");
	message.$match[1] = message.$match[1].replace(/(м|m)/gi, "000000");
	message.$match[1] = message.$match[1].replace(
		/(вабанк|вобанк|все|всё)/gi,
		organizations.hospital.balance
	);
	let args = message.$match;
	if (user.id != organizations.hospital.owner) {
		return message.send(`Вы не владелец больницы!`);
	}
	if (organizations.hospital.balance < message.$match[1])
		return message.send(`На балансе казны недостаточно денег! `);
	user.balance += Number(message.$match[1]);
	organizations.hospital.balance -= Number(message.$match[1]);
	return message.send(
		`Вы успешно сняли баланс казны на ${spaces(message.$match[1])}`
	);
});

vk.updates.hear(
	/^(?:больница)\s(?:пожертвовать|пожертвование)\s(.*)$/i,
	async (message, bot) => {
		let user = acc.users[u_id(message.user)];
		let args = message.$match;
		args[1] = args[1].replace(/(\.|\,)/gi, "");
		args[1] = args[1].replace(/(к|k)/gi, "000");
		args[1] = args[1].replace(/(м|m)/gi, "000000");
		args[1] = args[1].replace(/(вабанк|вобанк|все|всё)/gi, user.balance);
		if (!args[1]) {
			return message.send(`Используйте: Больница пожертвовать [СУММА]`);
		}
		if (!Number(message.$match[1]) || message.$match[1] < 0)
			return message.send(`❗ СУММА должна быть числового вида.`);
		if (user.balance < args[1]) return message.send(`У вас недостаточно денег`);
		if (args[1] > 5000000) {
			return admin(
				` Игрок @id${user.id}(${
					user.prefix
				}) пожертвовал в фонд больницы ${spaces(args[1])} `
			);
		}
		user.balance -= Number(args[1]);
		organizations.hospital.balance += Number(args[1]);
		hospital_chat_no_keyboard(
			`@all Игрок @id${user.id}(${
				user.prefix
			}) пожертвовал в фонд больницы ${spaces(args[1])}`
		);
		return message.send(
			`Вы пожертвовали ${spaces(args[1])} на счет фонда больницы!`
		);
	}
);

vk.updates.hear(
	/^(?:Больница пациенты|больница больные|пациенты)$/i,
	(message) => {
		let user = acc.users[u_id(message.user)];
		let text = "";
		if (user.worker_hospital == false) {
			return message.send(`Вы не владелец/работник больницы `);
		}

		for (i in acc.users) {
			if (acc.users[i].sick) {
				text += `@id${acc.users[i].id}(${acc.users[i].prefix}) [ID: ${i}]`;
			}
		}
		return message.send(`Больные: ${text}`);
	}
);
vk.updates.hear(/^(?:!Больница премия всем)$/i, (message) => {
	let text = "";
	let user = acc.users[u_id(message.user)];
	let user_id = acc.users[message.$match[1]];
	if (user.id != organizations.hospital.owner) {
		return message.send(`Вы не владелец больницы!`);
	}

	if (
		organizations.hospital.balance < Number(organizations.hospital.zarplata)
	) {
		return message.send(`Для выдачи премии необходимо 50.000$ в казне !`);
	}
	for (i in acc.users) {
		if (acc.users[i].worker_hospital) {
			text += `@id${acc.users[i].id}(${acc.users[i].prefix}) [ID: ${i}]`;
			acc.users[i].balance += Number(organizations.hospital.zarplata);
			organizations.hospital.balance -= Number(organizations.hospital.zarplata);
			vk.api.messages
				.send({
					user_id: acc.users[i].id,
					message: `📩 Глав.Врач выдал вам премию, в размере ${Number(
						organizations.hospital.zarplata
					)}`,
				})
				.catch((error) => {
					if (error.code === 901) {
						return 0;
					}
					if (error.code === 100) {
						return 0;
					}
					throw error;
				});
		}
	}

	return message.send(`Вы успешно раздали премию всему составу врачей !`);
});

// vk.updates.hear(/^(?:Статистика врачей)$/i, (message) => {
// 	let user = acc.users[u_id(message.user)];
// 	let text = "";
// 	if (user.id != organizations.hospital.owner) {
// 		return message.send(`Вы не владелец больницы!`);
// 	}

// 	for (i in acc.users) {
// 		if (acc.users[i].worker_hospital) {
// 			text += `🔹 @id${acc.users[i].id}(${acc.users[i].prefix}) [ID: ${i}], Вылечил:${acc.users[i].sick_all}\n`;
// 		}
// 	}
// 	return message.send(`🚑 Состав больницы:\n ${text}`);
// })

vk.updates.hear(/^(?:Статистика врачей)$/i, (message) => {
	let text = ``;
	var tops = [];
	var yo = [];

	for (i in acc.users) {
		if (acc.users[i].worker_hospital) {
			tops.push({
				id_vk: acc.users[i].id,
				id: i,
				sick_all: acc.users[i].sick_all,
			});
		}
	}

	tops.sort(function (a, b) {
		if (b.sick_all > a.sick_all) return 1;
		if (b.sick_all < a.sick_all) return -1;
		return 0;
	});

	for (var g = 0; g < 50; g++) {
		if (tops.length > g) {
			let ups = g;
			ups += 1;
			if (g <= 8) ups = `${ups}&#8419;`;
			if (g == 9) ups = `&#128287;`;
			yo.push({
				id_vk: tops[g].id_vk,
				id: tops[g].id,
				sick_all: tops[g].sick_all,
				smile: `${ups}`,
			});
			console.log(yo);
		}
	}
	var people =
		"🚑 Статистика врачей: \n" +
		yo
			.map(
				(a) =>
					a.smile +
					". [id" +
					a.id_vk +
					"|" +
					acc.users[a.id].prefix +
					`] [${a.id}] >> ` +
					spaces(a.sick_all) +
					" 🚑. "
			)
			.join("\n");
	text += `${people}\n\n`;
	message.send(text);
});

vk.updates.hear(/^(?:Больница состав)$/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let text = "";
	if (user.worker_hospital == false) {
		return message.send(`Вы не владелец/работник больницы `);
	}

	for (i in acc.users) {
		if (acc.users[i].worker_hospital) {
			text += `🔹 @id${acc.users[i].id}(${acc.users[i].prefix}) [ID: ${i}]\n`;
		}
	}
	return message.send(`🚑 Состав больницы:\n ${text}`);
});

vk.updates.hear(/^(?:вылечить)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let user_id = acc.users[message.$match[1]];
	if (!user_id.sick) {
		return message.send(`Данный игрок не пациент больницы. `);
	}
	if (user.worker_hospital == false) {
		return message.send(`Вы не владелец/работник больницы `);
	}
	user_id.hp = 100;
	user_id.balance -= Number(organizations.hospital.money);
	user_id.sick = false;
	user.balance += Number(organizations.hospital.money);
	user.sick_all += 1;
	organizations.hospital.balance += organizations.hospital.money * 2;
	msg_send(
		user_id,
		`Вас успешно вылечили за ${spaces(organizations.hospital.money)}`
	);
	return message.send(
		`Вы вылечили игрока @id${user_id.id}(${
			user_id.prefix
		})👨‍⚕ \n 💰 Вы заработали ${spaces(
			organizations.hospital.money
		)}$ 💵 за лечение пациента! \n 💰 Ваш Баланс: ${spaces(user.balance)}$ `
	);
});
vk.updates.hear(/^(?:больница цена)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let user_id = acc.users[message.$match[1]];
	if (message.$match[1] > 25000) {
		return message.send(`Больше 5.000$ ставить нельзя !`);
	}
	if (user.id != organizations.hospital.owner) {
		return message.send(`Вы не владелец больницы `);
	}
	organizations.hospital.money = message.$match[1];
	return message.send(`Вы назначили цену лечения !`);
});

vk.updates.hear(/^(?:Больница заявки|больница запросы)$/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let text = "";
	if (user.id != organizations.hospital.owner) {
		return message.send(`Вы не владелец больницы `);
	}
	for (i in acc.users) {
		if (acc.users[i].invitation_hospital) {
			text += `🔹 @id${acc.users[i].id}(${acc.users[i].prefix}) [ID: ${i}]\n`;
		}
	}
	return message.send(`🚑 Заявки больницы:\n ${text}`);
});

vk.updates.hear(/^(?:больница принять)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let user_id = acc.users[message.$match[1]];
	if (user.id != organizations.hospital.owner) {
		return message.send(`Вы не владелец больницы `);
	}
	if (!user_id.invitation_hospital) {
		return message.send(`Данный игрок не посылал запрос в больницу`);
	}

	user_id.worker_hospital = true;
	user_id.invitation_hospital = false;
	return message.send(`Вы приняли данного игрока в состав врачей!`);
});

vk.updates.hear(/^(?:больница уволить)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let user_id = acc.users[message.$match[1]];
	if (user.id != organizations.hospital.owner) {
		return message.send(`Вы не владелец больницы `);
	}
	if (!user_id.worker_hospital) {
		return message.send(`Данный игрок не работает в Вашей больнице!`);
	}
	user_id.worker_hospital = false;
	return message.send(`Вы уволили данного игрока !`);
});

vk.updates.hear(/^(?:Больница запрос)$/i, (message) => {
	let user = acc.users[u_id(message.user)];
	if (user.worker_hospital) {
		return message.send(`Вы уже работаете врачом !`);
	}
	if (user.invitation_hospital) {
		return message.send(`Вы уже послали запрос !`);
	}
	user.invitation_hospital = true;
	hospital_chat(
		`Игрок  @id${user.id}(${user.prefix}) захотел стать врачом. Что бы посмотреть заявки, используйте: больница запросы`,
		u_id(message.user),
		"Больница принять"
	);
	return message.send(`Ваш запрос рассмотрит Глав.Врач`);
});

vk.updates.hear(/^(?:лечиться|💊 Лечиться)$/i, (message) => {
				if (user.gps != 8) return message.send(` 
❗Для того чтобы лечиться, перейдите в больницу, команда: "GPS 8". `)
	let user = acc.users[u_id(message.user)];
	if (user.hp > 70) {
		return message.send(`Вы ещё в хорошем состоянии!`);
	}
	if (user.balance < organizations.hospital.money) {
		return message.send(
			`Вам не хватает денег !\n Для лечения необходимо ${spaces(
				organizations.hospital.money
			)}`
		);
	}
	user.sick = true;
	hospital_chat(
		`🚑 Поступил новый пациент! @all \n 🔹 Игрок: @id${user.id}(${
			user.prefix
		}).[${u_id(
			message.user
		)}] Что бы вылечить , используйте: Вылечить [ID] \n\n🌐 Список больных: Больница пациенты`,
		u_id(message.user),
		"Вылечить"
	);
	return message.send(`Вы встали в очередь, ожидайте врача !`);
});

vk.updates.hear(/^(?:пожертвование)$/i, (message) => {
	return message.send(`
	Вы перешли в службу пожертвования.

	Выберите организацию в которую хотите пожертвовать:

	1. ✉ Мэрия:
	2. 🚑 Больница:

	Важно: Введите номер организации и сумму пожертвования.
	Например: Пожертвовать 1 1000 `);
});

vk.updates.hear(/^(?:кушать)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
						if (user.gps != 11) return message.send(` 
❗Для того чтобы покушать, перейдите в Пиццерию,для перехода напишите "GPS 11". `)
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
			organizations.pizza.balance += Number(price[args[1]]) * 3;
			return message.send(
				`🍕 Вы скушали слишком много еды\n🍕 Вас стошнило\n🍕 Уровень голода: ${user.golod}`
			);
		} else {
			organizations.pizza.balance += Number(price[args[1]]) * 3;
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

vk.updates.hear(/^(?:биржа|💵 Биржа)$/i, (message) => {
	return message.send(
		`Курс биржи на данный момент:
		 1. Red Coin: ${exchange.red_coin}$
		 ➖➖➖➖➖➖➖➖➖➖➖➖
		  2. Green Coin: ${exchange.green_coin}$
		 ➖➖➖➖➖➖➖➖➖➖➖➖
		  3. Blue Coin: ${exchange.blue_coin}$
		 ➖➖➖➖➖➖➖➖➖➖➖➖
		 ❓ Что бы продать коин, используй: Продать коин [Номер] [Кол-во]
		 ❓ Что бы купить коин, используй: Купить коин [Номер] [Кол-во]
		 ❗  Курс биржы обновляется каждые 3 часа !
		
	`
	);
});
vk.updates.hear(/^(?:продать коин)\s?([0-9]+)?\s?(.*)?/i, (message) => {
	let user = acc.users[u_id(message.user)];

	if (!Number(message.$match[1]))
		return message.send(`❗ СУММА должна быть числового вида.`);
	if (message.$match[1] == 1) {
		message.$match[2] = message.$match[2].replace(/(\.|\,)/gi, "");
		message.$match[2] = message.$match[2].replace(/(к|k)/gi, "000");
		message.$match[2] = message.$match[2].replace(/(м|m)/gi, "000000");

		if (user.red_coin < message.$match[2]) {
			return message.send(`❗ У вас недостаточно RedCoin`);
		}
		user.balance += Number(exchange.red_coin) * Number(message.$match[2]);
		user.red_coin -= Number(message.$match[2]);
		return message.send(
			`❗ Вы успешно продали ${message.$match[2]} RedCoina за ${
				spaces(Math.floor(exchange.red_coin)) * spaces(Math.floor(message.$match[2]))
			}`
		);
	}
	if (message.$match[1] == 2) {
		message.$match[2] = message.$match[2].replace(/(\.|\,)/gi, "");
		message.$match[2] = message.$match[2].replace(/(к|k)/gi, "000");
		message.$match[2] = message.$match[2].replace(/(м|m)/gi, "000000");

		if (user.green_coin < message.$match[2]) {
			return message.send(`❗ У вас недостаточно GreenCoin`);
		}
		user.balance += Number(exchange.green_coin) * Number(message.$match[2]);
		user.green_coin -= Number(message.$match[2]);
		return message.send(
			`❗ Вы успешно продали ${message.$match[2]} GreenCoina за ${spaces(
				Number(Math.floor(exchange.green_coin)) * Number(Math.floor(message.$match[2]))
			)}`
		);
	}
	if (message.$match[1] == 3) {
		message.$match[2] = message.$match[2].replace(/(\.|\,)/gi, "");
		message.$match[2] = message.$match[2].replace(/(к|k)/gi, "000");
		message.$match[2] = message.$match[2].replace(/(м|m)/gi, "000000");

		if (user.blue_coin < message.$match[2]) {
			return message.send(`❗ У вас недостаточно BlueCoin`);
		}
		user.balance += Number(exchange.blue_coin) * Number(message.$match[2]);
		user.blue_coin -= Number(message.$match[2]);
		return message.send(
			`❗ Вы успешно продали ${message.$match[2]} BlueCoina за ${spaces(
				Number(Math.floor(exchange.blue_coin)) * Number(Math.floor(message.$match[2]))
			)}`
		);
	}
});

vk.updates.hear(/^(?:купить коин)\s?([0-9]+)?\s?(.*)?/i, (message) => {
	let user = acc.users[u_id(message.user)];

	if (!Number(message.$match[1]))
		return message.send(`❗ СУММА должна быть числового вида.`);
	if (message.$match[1] == 1) {
		message.$match[2] = message.$match[2].replace(/(\.|\,)/gi, "");
		message.$match[2] = message.$match[2].replace(/(к|k)/gi, "000");
		message.$match[2] = message.$match[2].replace(/(м|m)/gi, "000000");
		if (user.red_coin > 3000 || message.$match[2] > 3000) {
			return message.send(`Больше 10.000 закупать нельзя !`);
		}
		let red_coin_balance = exchange.red_coin * Number(message.$match[2]);
		if (user.balance < red_coin_balance) {
			return message.send(`❗ У вас недостаточно денег на счету.`);
		}
		user.balance -= Number(red_coin_balance);
		user.red_coin += Number(message.$match[2]);
		return message.send(
			`Вы успешно купили ${message.$match[2]} RedCoina за ${spaces(
				red_coin_balance
			)}`
		);
	}
	if (message.$match[1] == 2) {
		message.$match[2] = message.$match[2].replace(/(\.|\,)/gi, "");
		message.$match[2] = message.$match[2].replace(/(к|k)/gi, "000");
		message.$match[2] = message.$match[2].replace(/(м|m)/gi, "000000");
		if (user.green_coin > 3000 || message.$match[2] > 3000) {
			return message.send(`Больше 10.000 закупать нельзя !`);
		}
		let green_coin_balance = exchange.green_coin * Number(message.$match[2]);
		if (user.balance < green_coin_balance) {
			return message.send(`❗ У вас недостаточно денег на счету.`);
		}
		user.balance -= Number(exchange.green_coin) * Number(message.$match[2]);
		user.green_coin += Number(message.$match[2]);
		return message.send(
			`Вы успешно купили ${message.$match[2]} GreenCoina за ${spaces(
				green_coin_balance
			)}`
		);
	}
	if (message.$match[1] == 3) {
		message.$match[2] = message.$match[2].replace(/(\.|\,)/gi, "");
		message.$match[2] = message.$match[2].replace(/(к|k)/gi, "000");
		message.$match[2] = message.$match[2].replace(/(м|m)/gi, "000000");
		if (user.blue_coin > 3000 || message.$match[2] > 3000) {
			return message.send(`Больше 10.000 закупать нельзя !`);
		}

		let blue_coin_balance = exchange.blue_coin * Number(message.$match[2]);
		if (user.balance < blue_coin_balance) {
			return message.send(`❗ У вас недостаточно денег на счету.`);
		}
		user.balance -= Number(exchange.blue_coin) * Number(message.$match[2]);
		user.blue_coin += Number(message.$match[2]);
		return message.send(
			`Вы успешно купили ${message.$match[2]} BlueCoina за ${spaces(
				blue_coin_balance
			)}`
		);
	}
});
vk.updates.hear(/^(?:магазин)$/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let user_prefix = acc.users[u_id(organizations.shop.owner)];
	if (user.gps != 1) return message.send(`❗Ошибка! Для того чтобы купить товар перейдите в магазин.
❗Для того чтобы перейти в магазин напишите "GPS 1". `)
	return message.send(
		`🏪 Вы успешно перешли в Магазин "24/7"!
	👤 Владелец: @id${organizations.shop.owner}(${user_prefix.prefix}),
	♻ Статус: ${organizations.shop.status == false ? `Закрыто⛔` : `Открыто✅`}
	
	Для того чтобы войти в магазин используйте: "Магазин войти"
	Для владельцев: Магазин меню
	`,
		{ attachment: `photo-213827213_4572390630` }
	);
});

vk.updates.hear(/^(?:магазин войти)$/i, (message) => {
	let user = acc.users[u_id(message.user)];
		if (user.gps != 1) return message.send(`❗Ошибка! Для того чтобы купить товар перейдите в магазин.
❗Для того чтобы перейти в магазин напишите "GPS 1". `)
	let user_prefix = acc.users[u_id(organizations.shop.owner)];
	if (!organizations.shop.status) {
		return message.send(
			`Магазин закрыт владельцем @id${organizations.shop.owner}(${user_prefix.prefix})`
		);
	}
	return message.send(`🏪 Вы успешно вошли в Магазин "24/7"!
Доступные Товары:
1. ⛏ Кирка (1500$)
В наличии: ${organizations.shop.kirki}
➖➖➖➖➖➖➖➖➖➖➖➖
2. 🎣 Удочка (1500$)
В наличии: ${organizations.shop.ydochki}
➖➖➖➖➖➖➖➖➖➖➖➖
Для того чтобы купить товар введите: "Купить" [номер]
	`);
});

vk.updates.hear(/^(?:купить)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	if (user.gps != 1) return message.send(`❗Ошибка! Для того чтобы купить товар перейдите в магазин.
❗Для того чтобы перейти в магазин напишите "GPS". `)
	let user_prefix = acc.users[u_id(organizations.shop.owner)];

	if (message.$match[1]) {
		organizations.shop.balance += organizations.shop.salary;
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
		if (!organizations.shop.status) {
			return message.send(
				`Магазин закрыт владельцем @id${organizations.shop.owner}(${user_prefix.prefix})`
			);
		}
		if (organizations.shop.ydochki < 0) {
			return message.send(`В магазине закончились удочки! Приходите позже`);
		}

		if (organizations.shop.ydochki < 0) {
			return message.send(`В магазине закончились удочки! Приходите позже`);
		}
		if (user.balance < price[args[1]])
			return message.send(`✉ У вас недостаточно денег!`);
		if (args[1] > 3)
			return message.send(`🍕 Введите корректно номер из доступных товаров`);
		user.balance -= Number(price[args[1]]);
		user.kirka += Number([args[1]]);
		if (args[1] == 1) {
			if (user.kirka < 5) {
				user.kirka = 100;
				organizations.shop.kirki -= 100;
				return message.send(
					`Вы купили ${name[args[1]]} за ${price[args[1]]}$ ! `
				);
			}
			if (user.kirka > 5) {
				return message.send(
					`Вы уже купили ${name[args[1]]} за ${price[args[1]]}! `
				);
			}
			if (kirki < 0) {
				message.send(`В магазине Закончились Кирки! Приходите позже.`);
			}
		}
		if (args[1] == 2) {
			if (user.ydochka < 5) {
				user.ydochka = 100;
				organizations.shop.ydochki -= 100;
				return message.send(
					`Вы успешно купили ${name[args[1]]} за ${price[args[1]]}`
				);
			}
			if (user.ydochka > 5) {
				return message.send(`У вас уже есть удочка!`);
			}
			if (user.ydochki < 0) {
				return message.send(`В магазине закончились Удочки! Приходите позже.`);
			}
		}
	}
});

vk.updates.hear(/^(?:Магазин меню)$/i, (message) => {
	let user_prefix = acc.users[u_id(organizations.shop.balance)];
	let user = acc.users[u_id(message.user)];
	let id = user_id(message.user);
	if (user.id != organizations.shop.owner) {
		return message.send(`Вы не владелец магазина!`);
	} else {
		return message.send(`Вы открыли меню магазина!
		💰 Счет магазина: ${spaces(organizations.shop.balance)}
		💰 Казна магазина: ${spaces(organizations.shop.coffers)}

		📕 Команды для владельца магазина:
		1. ⛔ Магазин закрыть - закрыть магазин
		2. ✅ Магазин открыть - открыть магазин
		3. 💵 Магазин снять [Сумма] - снять деньги со счета магазина
		4. 💵 магазин закупить - закупает товары в магазин за 3000$`);
	}
});

vk.updates.hear(/^(?:магазин закупить)$/i, (message) => {
	let user_prefix = acc.users[u_id(organizations.shop.owner)];
	let user = acc.users[u_id(message.user)];

	if (user.id != organizations.shop.owner) {
		return message.send(`Вы не владелец магазина!`);
	} else {
		if (organizations.shop.coffers < 1000) {
			return message.send(
				`У вас недостаточно средств в казне. Пополните. Магазин пополнить [сумма]`
			);
		} else {
			organizations.shop.kirki += 300;
			organizations.shop.ydochki += 300;
			organizations.shop.coffers -= 1000;
			return message.send(`Вы успешно закупили товары в магазин!`);
		}
	}
});

vk.updates.hear(/^(?:магазин)\s(?:пополнить)\s(.*)$/i, async (message, bot) => {
	let user = acc.users[u_id(message.user)];
	message.$match[1] = message.$match[1].replace(/(\.|\,)/gi, "");
	message.$match[1] = message.$match[1].replace(/(к|k)/gi, "000");
	message.$match[1] = message.$match[1].replace(/(м|m)/gi, "000000");
	message.$match[1] = message.$match[1].replace(
		/(вабанк|вобанк|все|всё)/gi,
		organizations.shop.coffers
	);
	if (user.id != organizations.shop.owner) {
		return message.send(`Вы не владелец магазина!`);
	}
	if (user.balance < message.$match[1])
		return message.send(`У вас недостаточно денег`);
	user.balance -= Number(message.$match[1]);
	organizations.shop.coffers += Number(message.$match[1]);
	return message.send(
		`Вы успешно пополнили баланс казны на ${spaces(message.$match[1])}`
	);
});
vk.updates.hear(/^(?:магазин закрыть)$/i, (message) => {
	let user_prefix = acc.users[u_id(organizations.shop.owner)];
	let user = acc.users[u_id(message.user)];
	let id = user_id(message.user);

	if (user.id != organizations.shop.owner) {
		return message.send(`Вы не владелец магазина!`);
	} else {
		organizations.shop.status = false;
		message.send(`Вы успешно закрыли магазин!`);
	}
});
vk.updates.hear(/^(?:магазин открыть)$/i, (message) => {
	let user_prefix = acc.users[u_id(organizations.shop.owner)];
	let user = acc.users[u_id(message.user)];
	let id = user_id(message.user);

	if (user.id != organizations.shop.owner) {
		return message.send(`Вы не владелец магазина!`);
	} else {
		organizations.shop.status = true;
		message.send(`Вы успешно открыли магазин!`);
	}
});

vk.updates.hear(/^(?:магазин)\s(?:снять)\s(.*)$/i, async (message, bot) => {
	let user = acc.users[u_id(message.user)];
	if (!message.$match[1])
		return message.send(`❗ Пример команды: Магазин снять [Сумма]`);
	message.$match[1] = message.$match[1].replace(/(\.|\,)/gi, "");
	message.$match[1] = message.$match[1].replace(/(к|k)/gi, "000");
	message.$match[1] = message.$match[1].replace(/(м|m)/gi, "000000");
	message.$match[1] = message.$match[1].replace(
		/(вабанк|вобанк|все|всё)/gi,
		organizations.shop.balance
	);
	if (user.id != organizations.shop.owner) {
		return message.send(`Вы не владелец магазина!`);
	}
	if (!Number(message.$match[1]))
		return message.send(`❗ СУММА должна быть числового вида.`);
	if (organizations.shop.balance < message.$match[1])
		return message.send(`❗ На счету магазина нет столько`);
	organizations.shop.balance -= Number(message.$match[1]);
	user.balance += Number(message.$match[1]);

	return message.send(
		`💴 Вы успешно сняли с бизнеса ${spaces(message.$match[1])}$.`
	);
});

vk.updates.hear(/^(?:пиццерия меню)$/i, (message) => {
	let user_prefix = acc.users[u_id(organizations.pizza.balance)];
	let user = acc.users[u_id(message.user)];
	let id = user_id(message.user);
	if (user.id != organizations.pizza.owner) {
		return message.send(`Вы не владелец пиццерии!!`);
	} else {
		return message.send(`Вы открыли меню пиццерии!
		💰 Счет пиццерии: ${spaces(organizations.pizza.balance)}

		📕 Команды для владельца магазина:
		1. ⛔ Пиццерия закрыть - закрыть магазин
		2. ✅ Пиццерия открыть - открыть магазин
		3. 💵 Пиццерия снять [Сумма] - снять деньги со счета пиццерии`);
	}
});

vk.updates.hear(/^(?:пиццерия закрыть)$/i, (message) => {
	let user_prefix = acc.users[u_id(organizations.pizza.owner)];
	let user = acc.users[u_id(message.user)];
	let id = user_id(message.user);

	if (user.id != organizations.pizza.owner) {
		return message.send(`Вы не владелец пиццерии!`);
	} else {
		organizations.pizza.status = false;
		message.send(`Вы успешно закрыли пиццерию!`);
	}
});
vk.updates.hear(/^(?:пиццерия открыть)$/i, (message) => {
	let user_prefix = acc.users[u_id(organizations.pizza.owner)];
	let user = acc.users[u_id(message.user)];
	let id = user_id(message.user);

	if (user.id != organizations.pizza.owner) {
		return message.send(`Вы не владелец пиццерии!`);
	} else {
		organizations.pizza.status = true;
		message.send(`Вы успешно открыли пиццерию!`);
	}
});

vk.updates.hear(/^(?:пиццерия)\s(?:снять)\s(.*)$/i, async (message, bot) => {
	if (!message.$match[1])
		return message.send(`❗ Пример команды: Пиццерия снять [Сумма]`);
	let user = acc.users[u_id(message.user)];
	message.$match[1] = message.$match[1].replace(/(\.|\,)/gi, "");
	message.$match[1] = message.$match[1].replace(/(к|k)/gi, "000");
	message.$match[1] = message.$match[1].replace(/(м|m)/gi, "000000");
	message.$match[1] = message.$match[1].replace(
		/(вабанк|вобанк|все|всё)/gi,
		organizations.pizza.balance
	);
	if (user.id != organizations.pizza.owner) {
		return message.send(`Вы не владелец пиццерии!`);
	}

	if (!Number(message.$match[1]))
		return message.send(`❗ СУММА должна быть числового вида.`);
	if (organizations.pizza.balance < message.$match[1])
		return message.send(`❗ На счету пиццерии нет столько`);
	organizations.pizza.balance -= Number(message.$match[1]);
	user.balance += Number(message.$match[1]);

	return message.send(
		`💴 Вы успешно сняли с бизнеса ${spaces(message.$match[1])}$.`
	);
});

vk.updates.hear(/^(?:пиццерия)$/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let user_prefix = acc.users[u_id(organizations.pizza.owner)];
					if (user.gps != 11) return message.send(` 
❗Для того чтобы перейти в пиццерию, напишите "GPS 11". `)
	return message.send(
		`🍕 Вы успешно перешли в Пиццерию!
	👤 Владелец: @id${organizations.pizza.owner}(${user_prefix.prefix}),
	♻ Статус: ${organizations.pizza.status == false ? `Закрыто ⛔` : `Открыто ✅`}
	
	Для того чтобы войти в пиццерию используйте: "Пиццерия войти"
	Для Владельцев: Пиццерия меню
	`,
		{ attachment: `photo-214284365_457239023` }
	);
});

vk.updates.hear(/^(?:пиццерия войти)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
						if (user.gps != 11) return message.send(` 
❗Для того чтобы войти в пиццерию, напишите "GPS 11". `)
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
		return message.send(`🍕 Меню Пиццерии 🍕
			🥖 Пирожок +1 | 150$
			🍟 Картошка фри +5 | 300$
			🍕Пицца +15 | 750$
			🍔Гамбургер +50 | 350$
			🍱Набор из фастфуда +100 | 5000$

			🍮 Что бы покушать напишите: "Кушать [номер]"
			‼Важно! Если вы пополните голод выше 100 процентов, вас может стошнить. 
		`);
	}
});



// owner - создатель
// salary - зарплата
// balance - казна
// status - открыто/закрыто
vk.updates.hear(/^(?:мерия|мэрия)$/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let user_prefix_meria = acc.users[u_id(organizations.meria.owner)];
		if (user.gps != 7) return message.send(` 
❗Для того чтобы перейти в мэрию напишите "GPS 7". `)
	return message.send(` Вы перешли в Мэрию 🏛 
		🤴 Лидер - @id${organizations.meria.owner}(${user_prefix_meria.prefix})
		💰 Казна: ${spaces(organizations.meria.balance)}$

		➖➖➖➖➖➖
		📆 Работа компаний:
		🚘 Автосалон: ${
			organizations.avtosalon.status == false ? `Закрыто ⛔` : `Открыто ✅`
		}
		🏪 Магазин: ${organizations.shop.status == false ? `Закрыто ⛔` : `Открыто ✅`}
		👕 Магазин одежды: ${
			organizations.odejda.status == false ? `Закрыто ⛔` : `Открыто ✅`
		}

		🎰 Казино: ${organizations.casino.status == false ? `Закрыто ⛔` : `Открыто ✅`}
		⛏ Шахта: ${organizations.mine.status == false ? `Закрыто ⛔` : `Открыто ✅`}
		🐬 Пирс: ${organizations.pier.status == false ? `Закрыто ⛔` : `Открыто ✅`}

		🔹 Вы можете пожертвовать деньги, в казну штата!
		  💸 Команда: Пожертвовать [сумма]
		➖➖➖➖➖➖
		1⃣.Получить паспорт
	    2⃣.Узнать владельца Lux-Bussines.  
	
	    ❗ Чтобы взаимодествоваться напишите: "Выбрать [номер]"
	`,{attachment: 'photo-214284365_457239126',	keyboard: JSON.stringify({
					inline: true,
					buttons: [
						[
							{
								action: {
									type: "text",
									payload: "{}",
									label: `Выбрать 1`,
								},
								color: "primary",
							},
							{
								action: {
									type: "text",
									payload: "{}",
									label: `Выбрать 2`,
								},
								color: "primary",
							},
						],
					],
				}),});
});



vk.updates.hear(/^(?:выбрать 1)\s?([0-1]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	if (user.gps != 7) return message.send(` 
❗Для того чтобы перейти в мэрию напишите "GPS 7". `)
	if (user.pass) return message.send(`‼ У вас уже есть паспорт.`)
	return message.send(`‼Важно! Чтобы получить паспорт введите дату вашего рождения. Командой "пдата".\n
	Пример: Пдата 18.08.2000"`);

});
vk.updates.hear(/^(?:пдата)\s?([^]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];

	if(testStr(message.$match[1])) return message.send(`‼ В вашей дате обнаружены другие символы.`)
	if (user.pass) return message.send(`‼ У вас уже есть паспорт.`)
	user.pdata = message.$match[1]
	user.pass = true
	return message.send(`
	🎁Поздравляем, вы успешно получили паспорт.

	‼Для взаимодействия введите "showpass.`)
})

vk.updates.hear(/^(?:showpass|showpas)$/i, (message) => {
	let user = acc.users[u_id(message.user)];
	if (!user.pass) return message.send(`‼ У вас нет паспорта.`)
	return message.send(`
		Паспорт игрока: @id${user.id}(${user.prefix}).

		⏰ Дата рождения: ${user.pdata}.

		💡 Уровень ${user.level}.

		🚔 Законопослушность: ${user.zakon}%
	
	`)

})
vk.updates.hear(/^(?:выбрать 2)\s?([0-1]+)?/i, (message) => {
		let user = acc.users[u_id(message.user)];
	let user_prefix_mine = acc.users[u_id(organizations.mine.owner)];
	let user_prefix_pier = acc.users[u_id(organizations.pier.owner)];
	let user_prefix_casino = acc.users[u_id(organizations.casino.owner)];
	let user_prefix_shop = acc.users[u_id(organizations.shop.owner)];
	let user_prefix_odejda = acc.users[u_id(organizations.odejda.owner)];
	let user_prefix_pizza = acc.users[u_id(organizations.pizza.owner)];
	let user_prefix_avto = acc.users[u_id(organizations.avtosalon.owner)];
			if (user.gps != 7) return message.send(` 
❗Для того чтобы узнать владельцев бизнесов перейдите в мэрию, напишите "GPS 7". `)
	// @id${organizations.hospital.owner}(${user_prefix_mine.prefix})
	return message.send(`❗ Вы перешли во вкладку "Владельцы Lux-Bussines".
		Владельцы:

		👲 Шахта:  @id${organizations.mine.owner}(${user_prefix_mine.prefix})
		🐳 Пирс: @id${organizations.pier.owner}(${user_prefix_pier.prefix})
		👑 Казино: @id${organizations.casino.owner}(${user_prefix_casino.prefix})
		💼 Магазин 24/7: @id${organizations.shop.owner}(${user_prefix_shop.prefix})
		👕 Магазин одежды: @id${organizations.odejda.owner}(${user_prefix_odejda.prefix})
		🍕 Пиццерия: @id${organizations.pizza.owner}(${user_prefix_pizza.prefix})
		🚘 Автосалон: @id${organizations.avtosalon.owner}(${user_prefix_avto.prefix})
`);

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
			if (acc.users[i].kpz != false) {
				acc.users[i].kpz -= 1;
				if (acc.users[i].kpz <= 0) {
					acc.users[i].kpz = false;
				}
			}
		}
	}
}, 60000);

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

setInterval(async () => {}, 3600000);

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
				user.level += 1;
			}
		}
	}
}, 360);

// setInterval(function () {
// 	for (i in acc.users) {
// 		let user = acc.users[i];
// 		if(user.exs > user.uplvl) {
// 			user.level += 1;
// 		}
// 	}
// }, 36000);

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

vk.updates.hear(/^(?:ид чат)$/i, async (message, bot) => {
	if (!message.isChat) return message.send(`команда работает только в беседе!`);
	return message.send(`
this chat id = ${message.chatId}.`);
});

function admin(text) {
	for (i in acc.chats) {
		vk.api
			.call("messages.send", {
				chat_id: i,
				message: text,
			})
			.catch((error) => {
				if (error.code === 901) {
					return 0;
				}
				if (error.code === 100) {
					return 0;
				}
				if (error.code === 100) {
					return 0;
				}
				if (error.code === 7) {
					return 0;
				}
				if (error.code) {
					return 0;
				}
			});
	}
}

function hospital_chat(text, id, text_button) {
	for (i in acc.chats) {
		if (i == 3) {
			let rs = new VK({
				token:
					"f8ec3be47b26cade1345e396810ce893c0d274097461fe10902bd840c7350d2338c311d24e6f8b9aaa9c0",
			});
			rs.api.messages.send({
				chat_id: 3,
				message: `${text}`,

				keyboard: JSON.stringify({
					inline: true,
					buttons: [
						[
							{
								action: {
									type: "text",
									payload: "{}",
									label: `${text_button} ${id}`,
								},
								color: "primary",
							},
						],
					],
				}),
			});
		}
	}
}

function hospital_chat_no_keyboard(text) {
	for (i in acc.chats) {
		if (i == 3) {
			let rs = new VK({
				token:
					"f8ec3be47b26cade1345e396810ce893c0d274097461fe10902bd840c7350d2338c311d24e6f8b9aaa9c0",
			});
			rs.api.messages.send({ chat_id: 3, message: `${text}` });
		}
	}
}

function yg_chat(text, id, text_button) {
	for (i in acc.chats) {
		if (i == 5) {
			let rs = new VK({
				token:
					"f8ec3be47b26cade1345e396810ce893c0d274097461fe10902bd840c7350d2338c311d24e6f8b9aaa9c0",
			});
			rs.api.messages.send({
				chat_id: 5,
				message: `${text}`,

				keyboard: JSON.stringify({
					inline: true,
					buttons: [
						[
							{
								action: {
									type: "text",
									payload: "{}",
									label: `${text_button} ${id}`,
								},
								color: "primary",
							},
						],
					],
				}),
			});
		}
	}
}

function yg_chat_no_keyboard(text) {
	for (i in acc.chats) {
		if (i == 5) {
			let rs = new VK({
				token:
					"f8ec3be47b26cade1345e396810ce893c0d274097461fe10902bd840c7350d2338c311d24e6f8b9aaa9c0",
			});
			rs.api.messages.send({ chat_id: 5, message: `${text}` });
		}
	}
}

function game_chat(text) {
	for (i in acc.chats) {
		if (i == 1) {
			let rs = new VK({
				token:
					"f8ec3be47b26cade1345e396810ce893c0d274097461fe10902bd840c7350d2338c311d24e6f8b9aaa9c0",
			});
			rs.api.messages.send({ chat_id: 1, message: `${text}` });
		}
	}
}

// vk.updates.hear(/^(?:рулетка)\s?(.*)?/i, (message) => {
// 	if (!message.$match[1]) return message.send(`💰 Введите корректно ставку`);
// 	let args = message.$match;
// 	let user = acc.users[u_id(message.user)];
// 	args[1] = args[1].replace(/(\.|\,)/gi, "");
// 	args[1] = args[1].replace(/(к|k)/gi, "000");
// 	args[1] = args[1].replace(/(м|m)/gi, "000000");
// 	args[1] = args[1].replace(/(вабанк|вобанк|все|всё)/gi, user.balance);
// 	if (!Number(args[1]) || args[1] < 0)
// 		return message.send(`🎰 Введите корректно ставку`);
// 	if (user.balance < args[1])
// 		return message.send(`🎰 У вас недостаточно денег`);

// 	let Черный = [
// 		"1",
// 		"5",
// 		"3",
// 		"7|",
// 		"9",
// 		"11",
// 		"13",
// 		"15",
// 		"17",
// 		"19",
// 		"21",
// 		"23",
// 		"25",
// 		"27",
// 		"29",
// 		"31",
// 	].random();
// 	let Красный = [
// 		"2",
// 		"4",
// 		"6",
// 		"8",
// 		"10",
// 		"12",
// 		"14",
// 		"16",
// 		"18",
// 		"20",
// 		"22",
// 		"24",
// 		"26",
// 		"28",
// 		"30",
// 		"32",
// 	].random();

// 	if (rand(0, 100) < 60) {
// 		user.balance -= args[1];
// 		if (user.balance < 0) {
// 			user.balance = 0;
// 		}
// 		return message.send(` 
			
// 			🎰  вам выпало › 🔴 ${Красный}.

//              💰 Вы проиграли › ${spaces(Math.round(args[1]))}$!
			
// 		`);
// 	} else {
// 		user.balance += args[1] * 1.5;
// 		if (user.balance < 0) {
// 			user.balance = 0;
// 		}
// 		return message.send(`  
// 			🎰  вам выпало › ⚫ ${Черный}.

//              💰 Вы выиграли! › ${spaces(Math.round(args[1]))}$!
// 		`);
// 	}
// });

vk.updates.hear(/^(?:рассылка)\s([^]+)$/i, async (message, bot) => {
	let user = acc.users[u_id(message.user)];
	if (user.admin < 6) return;
	let randoming = utils.random(1, 6);
	try {
		for (i in acc.users) {
			vk.api.messages
				.send({
					user_id: acc.users[i].id,
					message: `📩 ${message.$match[1]}\n\n🔕 Бот в момент рассылки, будет отключен на 5 минут`,
				})
				.catch((error) => {
					if (error.code === 901) {
						return 0;
					}
					if (error.code === 100) {
						return 0;
					}
					if (error.code === 7) {
						return 0;
					}
					throw error;
				});
		}

		let people = 0;
		admin(
			`📩 ${message.$match[1]}\n\n🔕 Бот в момент рассылки, будет отключен на 5 минут`
		);
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


🔮 За каждого друга вы получаете 100.000$ на баланс.
💵 Если друг активирует вашу рефералку, то он получит 50.000$

‼НАКРУТКА СО СТОРОННИХ АККАУНТОВ ЗАПРЕЩЕНА, ВСЕ АККАУНТЫ БУДУТ ЗАБЛОКИРОВАНЫ‼`);
});
vk.updates.hear(/^(?:hp-remove)$/i, async (message, bot) => {
	if (message.user != 576167340) return;
	acc.users[1].hp = 5;
});
// vk.updates.hear(/^(?:ribalka-add)$/i, async (message, bot) => {
// 	//if (message.user != 576167340) return;
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
// vk.updates.hear(/^(?:titan-add)$/i, async (message, bot) => {
// 	//if (message.user != 576167340) return;
// 	for (i = 0; i < 20000; i++) {
// 		if (acc.users[i]) {
// 			acc.users[i].titan = 0;
// 		}
// 	}
// 	return message.send(`готово!`);
// });

// vk.updates.hear(/^(?:add-fsb)$/i, async (message, bot) => {
// 	if (message.user != 576167340) return;
// 	for (i = 0; i < 20000; i++) {
// 		if (acc.users[i]) {
// 			acc.users[i].invitation_fsb = false;
// 			acc.users[i].fsb_worker = false
// 			acc.users[i].kpz = 0
// 			acc.users[i].fsb_rang = 0
// 		}
// 	}
// 	return message.send(`готово!`);
// });

// vk.updates.hear(/^(?:add-opg-sever)$/i, async (message, bot) => {
// 	if (message.user != 576167340) return;
// 	for (i = 0; i < 20000; i++) {
// 		if (acc.users[i]) {
// 			acc.users[i].invitation_opg_sever = false;
// 			acc.users[i].opg_sever_bandit = false;
// 			acc.users[i].opg_sever_rang = 0;
// 			acc.users[i].readiness_capt_sever = false;
// 			acc.users[i].readiness_bussines_sever = false;
// 			acc.users[i].readiness_band_sever = false;
// 			acc.users[i].opg_yg_bandit_capt = false;
// 			acc.users[i].sever_bandit_capt = false;
// 		}
// 	}
// 	return message.send(`готово!`);
// });

// vk.updates.hear(/^(?:add-opg-yg)$/i, async (message, bot) => {
// 	//if (message.user != 576167340) return;
// 	for (i = 0; i < 20000; i++) {
// 		if (acc.users[i]) {
// 			acc.users[i].invitation_opg_yg = false;
// 			acc.users[i].opg_yg_bandit = false;
// 			acc.users[i].opg_yg_rang = 0;
// 			acc.users[i].readiness_capt_yg = false;
// 			acc.users[i].readiness_bussines_yg = false;
// 			acc.users[i].readiness_band_yg = false;
// 		}
// 	}
// 	return message.send(`готово!`);
// });
vk.updates.hear(/^(?:testing)$/i, async (message, bot) => {
	if (message.user != 576167340) return;

	for (i = 0; i < 20000; i++) {
		if (acc.users[i]) {
			acc.users[i].ribalka = false;
			acc.users[i].shahta = false;
			acc.users[i].pass = false;
			acc.users[i].pdata = false;
			acc.users[i].super_kirka = false;
			acc.users[i].super_ydochka = false;
			acc.users[i].seif = 0;
			acc.users[i].car2 = false;
			acc.users[i].car3 = false;
			acc.users[i].car_case = false;
		}
	}
	return message.send(`готово!`);
});
vk.updates.hear(/^(?:fix)$/i, async (message, bot) => {
	if (message.user != 576167340) return;

	for (i = 0; i < 20000; i++) {
		if (acc.users[i]) {
			acc.users[i].podarok = false;
			acc.users[i].bonus = false;
		}
	}
	return message.send(`готово!`);
});
vk.updates.hear(/^(?:adding)$/i, async (message, bot) => {
	if (message.user != 576167340) return;

	for (i = 0; i < 20000; i++) {
		if (acc.users[i]) {
			acc.users[i].car_container = false;
			acc.users[i].bonus_time = false;
			acc.users[i].container_time = false;
			acc.users[i].container_gift = false;
		}
	}
	return message.send(`готово!`);
});

vk.updates.hear(/^(?:реф|реферал)\s([0-9]+)$/i, (message) => {
	let user = acc.users[u_id(message.user)];
	let user_id = acc.users[message.$match[1]];

	if (user == message.$match[1]) return message.send(`нельзя свое ID `);
	if (message.$match[1] == user_id)
		return message.send(`Нельзя пригласить себя!`);
	if (!message.$match[1])
		return message.send(`Укажите ID игрока, который вас пригласил.`);
	if (user.ref) return message.send(`Вы уже активировали реферальную систему.`);
	user.ref = message.$match[1];
	acc.users[message.$match[1]].refs += 1;
	acc.users[message.$match[1]].balance += 100000;
	user.balance += 50000;

	vk.api.call("messages.send", {
		user_id: acc.users[message.$match[1]].id,
		message: `🎉 Спасибо за приглашение друга!
💸 Вам начислено 100.000$ на баланс.`,
	});
	return message.send(`*id${user.id} (${user.prefix}), вы активировали реферал.
💲 Вам начислено 50.000.$`);
});

vk.updates.hear(/^(?:Vipe|вайп)\s?([^]+)?/i, (message) => {
	let user = acc.users[user_id(message.user)];
	if (message.user != 576167340) return;
	if (!message.$match[1]) {
		return message.send("Используйте: Vipe [Баланса]");
	}
	if (message.$match[1] == "баланса") {
		for (i = 1; i < 20000; i++) {
			if (acc.users[i]) {
				acc.users[i].balance = 0;
				acc.users[i].bank = 0;
			}
		}
		return message.send(`Вы успешно обнулили всем игрокам баланс !`);
	}
});

vk.updates.hear(/^(?:repban)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	if (!acc.users[message.$match[1]])
		return message.send(`❎  Такого игрока нет!`);
	if (user.admin < 4) return message.send(`🔸  Вы не администратор`);
	acc.users[message.$match[1]].repban = true;

	return message.send(
		`✅ Вы запретили [${acc.users[message.$match[1]].prefix}] писать в репорт`
	);
});
vk.updates.hear(/^(?:unrep)\s?([0-9]+)?/i, (message) => {
	let user = acc.users[u_id(message.user)];
	if (!acc.users[message.$match[1]])
		return message.send(`❎  Такого игрока нет!`);
	if (user.admin < 4) return message.send(`🔸  Вы не администратор`);
	acc.users[message.$match[1]].repban = false;

	return message.send(
		`✅ Вы разрешили [${acc.users[message.$match[1]].prefix}] писать в репорт`
	);
});

// vk.updates.hear(/^(?:стаканчик)\s([0-9]+)\s([0-9]+)$/i, (message) => {
// 	let user = acc.users[u_id(message.user)];
// 	if (!Number(message.$match[2]))
// 		return message.send(`⚠ Ставка должна быть числового вида!`);
// 	if (message.$match[1] > 3 || message.$match[1] < 1)
// 		return message.send(`⚠ Укажие номер стаканчика "Стаканчик [1-3] [ставка]"`);
// 	if (user.balance < message.$match[2])
// 		return message.send(
// 			`⚠ Ставка не должна превышать баланс или быть меньше 1$`
// 		);
// 	let summ = Number(message.$match[2]);

// 	let q = rand(1, 3);

// 	if (q == message.$match[1]) {
// 		user.wins += summ;
// 		user.balance += summ;
// 		return message.send(
// 			`🎉 Вы угадали стаканчик!\n😃Вы выиграли ${spaces(
// 				summ
// 			)}$\n💰 Ваш баланс: ${spaces(user.balance)}$`
// 		);
// 	} else {
// 		user.loses += summ;
// 		user.balance -= summ;
// 		return message.send(
// 			`👎 Вы не угадали стаканчик и проиграли ${spaces(
// 				summ
// 			)}$\n☝ Правильный стаканчик был ${q}!\n💰 Ваш баланс: ${spaces(
// 				user.balance
// 			)}$`
// 		);
// 	}
// });

// vk.updates.hear(/^(?:трейд)\s(вверх|вниз)\s(.*)$/i, async (message, bot) => {
// 	let args = message.$match;
// 	let user = acc.users[u_id(message.user)];
// 	if (!Number(args[1]) || args[1] < 0)
// 		return message.send(`🎰 Введите корректно ставку`);
// 	if (args[2] > user.balance)
// 		return message.send(`у вас нет данной суммы 
// 💰 Баланс: ${utils.sp(user.balance)}$`);
// 	args[1] = args[1].replace(/(\.|\,)/gi, "");
// 	args[1] = args[1].replace(/(к|k)/gi, "000");
// 	args[1] = args[1].replace(/(м|m)/gi, "000000");
// 	args[1] = args[1].replace(/(вабанк|вобанк|все|всё)/gi, user.balance);
// 	args[2] = Math.floor(Number(args[2]));

// 	if (args[2] <= user.balance) {
// 		if (args[2] <= 1000000000000) {
// 			user.balance -= args[2];
// 			const multiplysi = utils.pick([2, 2.1, 2.15]);
// 			if (args[1] == `вверх`) {
// 				const randoms = utils.pick([1, 2, 3, 4]);

// 				if (randoms == 1) {
// 					return message.send(`курс подешевел ⤵ на ${utils.random(100)}$
// 💶 Вы потеряли: -${utils.sp(Math.floor(args[2]))}$ 
// 💰 Баланс: ${utils.sp(user.balance)}$`);
// 				}

// 				if (randoms == 2) {
// 					user.balance += Math.floor(args[2] * multiplysi);
// 					return message.send(`курс подорожал ⤴ на ${utils.random(100)}$
// 💶 Ваша прибыль: +${utils.sp(Math.floor(args[2] * multiplysi))}$ 
// 💰 Баланс: ${utils.sp(user.balance)}$`);
// 				}

// 				if (randoms == 3) {
// 					return message.send(`курс подешевел ⤵ на ${utils.random(100)}$
// 💶 Вы потеряли: -${utils.sp(Math.floor(args[2]))}$ 
// 💰 Баланс: ${utils.sp(user.balance)}$`);
// 				}

// 				if (randoms == 4) {
// 					user.balance += Math.floor(args[2] * multiplysi);
// 					return message.send(`курс подорожал ⤴ на ${utils.random(100)}$
// 💶 Ваша прибыль: +${utils.sp(Math.floor(args[2] * multiplysi))}$ 
// 💰 Баланс: ${utils.sp(user.balance)}$`);
// 				}
// 			}

// 			if (args[1] == `вниз`) {
// 				const randoms2 = utils.pick([1, 2, 3, 4, 5, 6, 7]);
// 				if (randoms2 == 1) {
// 					user.balance += Math.floor(args[2] * multiplysi);
// 					return message.send(`курс подешевел ⤵ на ${utils.random(100)}$
// 💶 Ваша прибыль: +${utils.sp(Math.floor(args[2] * multiplysi))}$
// 💰 Баланс: ${utils.sp(user.balance)}$`);
// 				}

// 				if (randoms2 == 2) {
// 					return message.send(`курс подорожал ⤴ на ${utils.random(100)}$
// 💶 Вы потеряли: -${utils.sp(Math.floor(args[2]))}$
// 💰 Баланс: ${utils.sp(user.balance)}$`);
// 				}

// 				if (randoms2 == 3) {
// 					return message.send(`курс подорожал ⤴ на ${utils.random(100)}$
// 💶 Вы потеряли: -${utils.sp(Math.floor(args[2]))}$ 
// 💰 Баланс: ${utils.sp(user.balance)}$`);
// 				}

// 				if (randoms2 == 4) {
// 					return message.send(`курс подорожал ⤴ на ${utils.random(100)}$
// 💶 Вы потеряли: -${utils.sp(Math.floor(args[2]))}$
// 💰 Баланс: ${utils.sp(user.balance)}$`);
// 				}
// 			}
// 		}

// 		if (args[2] > 1000000000000) {
// 			user.balance -= args[2];
// 			const multiplys = utils.pick([2, 2.1, 2.15]);
// 			if (args[1] == `вверх`) {
// 				const randoms3 = utils.pick([1, 2, 3, 4]);
// 				if (randoms3 == 1) {
// 					user.balance += Math.floor(args[2] * multiplys);
// 					return message.send(`курс подорожал ⤴ на ${utils.random(100)}$
// 💶 Ваша прибыль: +${utils.sp(Math.floor(args[2] * multiplys))}$
// 💰 Баланс: ${utils.sp(user.balance)}$`);
// 				}

// 				if (randoms3 == 2) {
// 					return message.send(`курс подешевел ⤵ на ${utils.random(100)}$
// 💶 Вы потеряли: -${utils.sp(Math.floor(args[2]))}$ 
// 💰 Баланс: ${utils.sp(user.balance)}$`);
// 				}

// 				if (randoms3 == 3) {
// 					return message.send(`курс подешевел ⤵ на ${utils.random(100)}$
// 💶 Вы потеряли: -${utils.sp(Math.floor(args[2]))}$
// 💰 Баланс: ${utils.sp(user.balance)}$`);
// 				}

// 				if (randoms3 == 4) {
// 					return message.send(`курс подешевел ⤵ на ${utils.random(100)}$
// 💶 Вы потеряли: -${utils.sp(Math.floor(args[2]))}$
// 💰 Баланс: ${utils.sp(user.balance)}$`);
// 				}
// 			}

// 			if (args[1] == `вниз`) {
// 				const randoms4 = utils.pick([1, 2, 3, 4]);
// 				if (randoms4 == 1) {
// 					user.balance += Math.floor(args[2] * multiplys);
// 					return message.send(`курс подешевел ⤵ на ${utils.random(100)}$
// 💶 Ваша прибыль: +${utils.sp(Math.floor(args[2] * multiplys))}$ 
// 💰 Баланс: ${utils.sp(user.balance)}$`);
// 				}

// 				if (randoms4 == 2) {
// 					return message.send(`курс подорожал ⤴ на ${utils.random(100)}$
// 💶 Вы потеряли: -${utils.sp(Math.floor(args[2]))}$ 
// 💰 Баланс: ${utils.sp(user.balance)}$`);
// 				}

// 				if (randoms4 == 3) {
// 					return message.send(`курс подорожал ⤴ на ${utils.random(100)}$
// 💶 Вы потеряли: -${utils.sp(Math.floor(args[2]))}$ 
// 💰 Баланс: ${utils.sp(user.balance)}$`);
// 				}

// 				if (randoms4 == 4) {
// 					return message.send(`курс подорожал ⤴ на ${utils.random(100)}$
// 💶 Вы потеряли: -${utils.sp(Math.floor(args[2]))}$
// 💰 Баланс: ${utils.sp(user.balance)}$`);
// 				}
// 			}
// 		}
// 	}
// });
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
		Актуальный список правил

		Для бесед/чатов с ботом

		Наказание: Бан || Предупреждение.
		1. Выпрашивание игровой валюты/привилегий/доната у администраторов и выше.
		2. Мат/оскорбление в репорт.
		3. Оскорбление проекта.
		4. Обман администрации/игроков.
		5. Неадекватный Nick-Name.

		Наказание: 'mute'(60-120) минут || Предупреждение
		5. Оскорбление игрока(ов).
		6. Флуд/оффтоп в репорт.
		7. Выдача себя за ту личность которой вы не являетесь.
		8. Неадекватное поведение в репорт.

		Наказание: BAN || WARN.
		10. Использование игровых багов.
		11. Нец.лексика.
		12. Накрутка любых игровых средств с мульти аккаунтов.
		13. Использование мульти аккаунта.
		14. Пиар/рекламы сторонних сайтов/групп.
		15. Розжиг конфликта. `);
});

vk.updates.hear(/^(?:test!)$/i, async (message, bot) => {
	if (message.user != 576167340) return;
	for (i = 0; i < 20000; i++) {
		if (acc.users[i]) {
			acc.users[i].gipercar = false;
			acc.users[i].repban = false;
			acc.users[i].case2 = 0;
			acc.users[i].case3 = 0;
			acc.users[i].case1 = 0;
			acc.users[i].case4 = 0;
			acc.users[i].case5 = 0;
		}
	}
	return message.send(`готово!`);
});

function testStr(str)
{
    if ( !/^[a-zA-Z-А-Я-а-я]+$/.test(str) ) return false;
    return true;
}

function timer(stamp) {
	stamp = stamp / 1000;
	let s = stamp % 60;
	stamp = (stamp - s) / 60;
	let m = stamp % 60;
	stamp = (stamp - m) / 60;
	let h = stamp % 24;
	let d = (stamp - h) / 24;
	let text = ``;
	if (d > 0) text += Math.floor(d) + " д ";
	if (h > 0) text += Math.floor(h) + " ч ";
	if (m > 0) text += Math.floor(m) + " мин ";
	if (s > 0) text += Math.floor(s) + " сек ";
	return text;
}

async function run() {try {await vk.updates.startPolling();} catch (error) {console.log(error);}}


run()
	.then(() => {
		console.log("[START]");
	})
	.catch((error) => {
		console.error("[ERROR] | " + error);
	});
