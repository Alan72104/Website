export const PROPER_CROP_NAME: Partial<Record<string, string>> = {
	CACTUS: 'Cactus',
	CARROT_ITEM: 'Carrot',
	'INK_SACK:3': 'Cocoa Beans',
	MELON: 'Melon',
	MUSHROOM_COLLECTION: 'Mushroom',
	NETHER_STALK: 'Nether Wart',
	POTATO_ITEM: 'Potato',
	PUMPKIN: 'Pumpkin',
	SUGAR_CANE: 'Sugar Cane',
	WHEAT: 'Wheat',
	cactus: 'Cactus',
	carrot: 'Carrot',
	cocoa: 'Cocoa Beans',
	melon: 'Melon',
	mushroom: 'Mushroom',
	netherwart: 'Nether Wart',
	wart: 'Nether Wart',
	potato: 'Potato',
	pumpkin: 'Pumpkin',
	sugarcane: 'Sugar Cane',
	cane: 'Sugar Cane',
	wheat: 'Wheat',
};

export const API_CROP_TO_CROP = {
	WHEAT: 'wheat',
	POTATO_ITEM: 'potato',
	CARROT_ITEM: 'carrot',
	MELON: 'melon',
	PUMPKIN: 'pumpkin',
	CACTUS: 'cactus',
	SUGAR_CANE: 'sugarcane',
	INK_SACK: 'cocoa',
	'INK_SACK:3': 'cocoa',
	MUSHROOM_COLLECTION: 'mushroom',
	NETHER_STALK: 'netherwart',
};

export const PROPER_CROP_TO_MINION: Partial<Record<string, string>> = {
	Cactus: 'CACTUS',
	Carrot: 'CARROT',
	'Cocoa Beans': 'COCOA',
	Melon: 'MELON',
	Mushroom: 'MUSHROOM',
	'Nether Wart': 'NETHER_WARTS',
	Potato: 'POTATO',
	Pumpkin: 'PUMPKIN',
	'Sugar Cane': 'SUGAR_CANE',
	Wheat: 'WHEAT',
};

export const PROPER_CROP_TO_IMG: Partial<Record<string, string>> = {
	Cactus: '/images/crops/cactus.png',
	Carrot: '/images/crops/carrot.png',
	'Cocoa Beans': '/images/crops/cocoa.png',
	Melon: '/images/crops/melon.png',
	Mushroom: '/images/crops/mushroom.png',
	'Nether Wart': '/images/crops/netherwart.png',
	Potato: '/images/crops/potato.png',
	Pumpkin: '/images/crops/pumpkin.png',
	'Sugar Cane': '/images/crops/sugarcane.png',
	Wheat: '/images/crops/wheat.png',
};

export const CROP_TO_HEX: Partial<Record<string, string>> = {
	wheat: '#d5da45',
	melon: '#bb170b',
	cactus: '#3b5b1d',
	pumpkin: '#a0560b',
	carrot: '#ff8e09',
	potato: '#e9ba62',
	cane: '#82a859',
	sugarcane: '#82a859',
	wart: '#5c151a',
	netherwart: '#5c151a',
	mushroom: '#725643',
	cocoa: '#61381d',
	Cactus: '#3b5b1d',
	Carrot: '#ff8e09',
	'Cocoa Beans': '#61381d',
	Melon: '#bb170b',
	Mushroom: '#725643',
	'Nether Wart': '#5c151a',
	Potato: '#e9ba62',
	Pumpkin: '#a0560b',
	'Sugar Cane': '#82a859',
	Wheat: '#d5da45',
};

export const PROPER_CROP_NAMES = Object.keys(PROPER_CROP_TO_MINION);
