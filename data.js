var TILE_WIDTH  = 750;
var TILE_HEIGHT = 625;
var REGIONS     = [];
var SHRINES     = [];

function offsetFrom(tileX, tileY, x, y) {
	return {
		x: x + (tileX * TILE_WIDTH),
		y: y + (tileY * TILE_HEIGHT)
	};
}

function mkRegion(name) {
	let region = new Region(REGIONS.length, name);
	REGIONS.push(region);
	return region;
}

function mkShrine(name, regionId, x, y) {
	let shrine = new Shrine(SHRINES.length, name, REGIONS[regionId], x, y);
	SHRINES.push(shrine);
	return shrine;
}

mkRegion("Great Plateau");
mkRegion("Central Hyrule");
mkRegion("Dueling Peaks");
mkRegion("Necluda");
mkRegion("Akkala");
mkRegion("Great Hyrule Forest");
mkRegion("Hebra");
mkRegion("Tabantha");
mkRegion("Hyrule Ridge");
mkRegion("Lake Hylia");
mkRegion("Gerudo Highlands");
mkRegion("Faron");
mkRegion("Lanayru");
mkRegion("Eldin");
mkRegion("Gerudo Desert");

// Great Plateau
mkShrine("Ja Baij", 0, 1386, 1749);
mkShrine("Keh Namut", 0, 1141, 1746);
mkShrine("Oman Au", 0, 1338, 1628);
mkShrine("Owa Daim", 0, 1267, 1830);
// Central Hyrule
mkShrine("Dah Kaso", 1, 1110, 1576);
mkShrine("Wahgo Katta", 1, 1583, 1505);
mkShrine("Rota Ooh", 1, 1077, 1671);
mkShrine("Kaam Ya'tak", 1, 1257, 1429);
mkShrine("Noya Neeha", 1, 0, 0);
mkShrine("Katah Chuki", 1, 0, 0);
mkShrine("Namika Ozz", 1, 0, 0);
mkShrine("Saas Ko'sah", 1, 0, 0);
// Dueling Peaks
mkShrine("Bosh Kala", 2, 1515, 1666);
mkShrine("Ree Dahee", 2, 1823, 1717);
mkShrine("Ha Dahamar", 2, 1914, 1728);
mkShrine("Ta'loh Naeg", 2, 1959, 1471);
mkShrine("Hila Rao", 2, 1714, 1458);
mkShrine("Shee Vanath", 2, 1801, 1711);
mkShrine("Shee Vaneer", 2, 1817, 1739);
mkShrine("Lakna Rokee", 2, 0, 0);
mkShrine("Toto Sah", 2, 1961, 1866);
// Necluda
mkShrine("Kam Urog", 3, 2122, 1623);
mkShrine("Myahm Agana", 3, 2345, 1803);
mkShrine("Mezza Lo", 3, 0, 0);
mkShrine("Tahno O'ah", 3, 2547, 1671);
mkShrine("Dow Na'eh", 3, 2173, 1581);
mkShrine("Chaas Qeta", 3, 2502, 1997);
mkShrine("Jitan Sa'mi", 3, 2472, 1579);
// Akkala
mkShrine("Dah Hesho", 4, 2473, 923);
mkShrine("Katosa Aug", 4, 2573, 571);
mkShrine("Ze Kasho", 4, 2268, 827);
mkShrine("Tutsuwa Nima", 4, 2442, 574);
mkShrine("Ke'nai Shakah", 4, 2549, 1037);
mkShrine("Zunai Kai", 4, 2330, 397);
mkShrine("Tu Ka'Loh", 4, 2663, 325);
mkShrine("Ritaag Zumo", 4, 2630, 722);
mkShrine("Kah Mael", 4, 2675, 934);
// Great Hyrule Forest
mkShrine("Mirro Shaz", 5, 1805, 947);
mkShrine("Keo Ruug", 5, 1625, 702);
mkShrine("Ketoh Wawai", 5, 572, 473);
mkShrine("Rona Kachta", 5, 0, 0);
mkShrine("Daag Chokah", 5, 1489, 638);
mkShrine("Kuhn Sidajj", 5, 1500, 769);
mkShrine("Maag Halan", 5, 1710, 646);
// Hebra
mkShrine("Hia Miu", 6, 0, 0);
mkShrine("Qaza Tokki", 6, 1294, 367);
mkShrine("Mozo Shenno", 6, 0, 0);
mkShrine("Shada Naw", 6, 0, 0);
mkShrine("Sha Gehma", 6, 0, 0);
mkShrine("Goma Asaagh", 6, 0, 0);
mkShrine("To Quomo", 6, 0, 0);
mkShrine("Rok Uwog", 6, 0, 0);
mkShrine("Maka Rah", 6, 0, 0);
mkShrine("Rin Oyaa", 6, 0, 0);
mkShrine("Lanno Kooh", 6, 839, 735);
mkShrine("Dunba Taag", 6, 0, 0);
mkShrine("Gee Ha'rah", 6, 0, 0);
// Tabantha
mkShrine("Akh Va'quot", 7, 585, 810);
mkShrine("Sha Warvo", 7, 546, 697);
mkShrine("Bareeda Naag", 7, 0, 0);
mkShrine("Voo Lota", 7, 0, 0);
mkShrine("Tena Ko' Sah", 7, 632, 1137);
mkShrine("Kah Okeo", 7, 0, 0);
// Hyrule Ridge
mkShrine("Shae Loya", 8, 767, 1140);
mkShrine("Zalta Wa", 8, 0, 0);
mkShrine("Toh Yasa", 8, 0, 0);
mkShrine("Mijah Rokee", 8, 0, 0);
mkShrine("Maag No'rah", 8, 0, 0);
mkShrine("Sheem Dagoze", 8, 0, 0);
mkShrine("Mogg Latan", 8, 924, 1357);
mkShrine("Monya Toma", 8, 0, 0);
// Lake Hylia
mkShrine("Shae Katha", 9, 1718, 1831);
mkShrine("Ka'o Makagh", 9, 1630, 2128);
mkShrine("Shoqa Tatone", 9, 0, 0);
mkShrine("Pumaag Nitae", 9, 1637, 1999);
mkShrine("Ishto Soh", 9, 0, 0);
mkShrine("Ya Naga", 9, 0, 0);
// Gerudo Highlands
mkShrine("Kuh Takkar", 10, 0, 0);
mkShrine("Kema Kosassa", 10, 335, 1478);
mkShrine("Keeha Yoog", 10, 0, 0);
mkShrine("Sasa Kai", 10, 0, 0);
mkShrine("Sho Dantu", 10, 0, 0);
mkShrine("Joloo Nah", 10, 0, 0);
// Faron
mkShrine("Yah Rin", 11, 2207, 2078);
mkShrine("Qukah Nata", 11, 1999, 2073);
mkShrine("Shoda Sah", 11, 1946, 2000);
mkShrine("Kah Yah", 11, 0, 0);
mkShrine("Tawa Jinn", 11, 0, 0);
mkShrine("Korgu Chideh", 11, 2683, 2193);
mkShrine("Shai Utoh", 11, 1895, 2150);
mkShrine("Muwo Jeem", 11, 2411, 2074);
// Lanayru
mkShrine("Sheh Rata", 12, 1880, 1156);
mkShrine("Daka Tuss", 12, 0, 0);
mkShrine("Soh Kofi", 12, 2050, 1186);
mkShrine("Ne'ez Yohma", 12, 2332, 1117);
mkShrine("Rucco Maag", 12, 0, 0);
mkShrine("Shai Yota", 12, 2562, 1316);
mkShrine("Dagah Keek", 12, 0, 0);
mkShrine("Kaya Wan", 12, 1706, 1297);
// Eldin
mkShrine("Mo'a Keet", 13, 2181, 958);
mkShrine("Shae Mo'sah", 13, 1939, 612);
mkShrine("Daqa Koth", 13, 2016, 666);
mkShrine("Kayra Mah", 13, 2016, 735);
mkShrine("Gorae Torr", 13, 2166, 393);
mkShrine("Qua Raym", 13, 1956, 875);
mkShrine("Tah Muhl", 13, 2077, 1016);
mkShrine("Sah Dahaj", 13, 2167, 854);
mkShrine("Shora Hah", 13, 1885, 470);
// Gerudo Desert
mkShrine("Jee Noh", 14, 1051, 1855);
mkShrine("Kay Noh", 14, 795, 1824);
mkShrine("Dako Tah", 14, 670, 1790);
mkShrine("Suma Sahma", 14, 0, 0);
mkShrine("Daqo Chisay", 14, 545, 1954);
mkShrine("Kema Zoos", 14, 0, 0);
mkShrine("Raqa Zunzo", 14, 0, 0);
mkShrine("Hawa Koth", 14, 0, 0);
mkShrine("Dila Maag", 14, 0, 0);
mkShrine("Tho Kayu", 14, 0, 0);
mkShrine("Korsh O'hu", 14, 826, 1953);
mkShrine("Misae Suma", 14, 0, 0);


const REGIONS_BY_ID = _.keyBy(REGIONS, 'id');
const SHRINES_BY_REGION_ID = _.groupBy(SHRINES, 'region.id');