db = db.getSiblingDB('spotify');
db.dropDatabase();
db.createCollection('usuari');
db.usuari.insertOne({
	usuari_id: 1,
	usuari_mail: "pepito@gmail.com",
	usuari_pwd: "pepepe",
	usuari_nom: "Pepe Pérez",
	usuari_data: new Date("2000-12-11"),
	usuari_tipus: "P",
	usuari_sexe: null,
	usuari_pais: "Spain",
	usuari_codpostal: "08870",
	suscripcio: [
		{ data_inici: new Date("2000-12-11"), data_renovacio: new Date("2001-12-11"), forma_pagament: "P" },
		{ data_inici: new Date("2020-12-11"), data_renovacio: new Date("2021-12-11"), forma_pagament: "C" }],
	targeta: { targeta_num: "1234234534564567", targeta_mes: "03", targeta_any: "2025", targeta_codi: "023" },
	pagament: [
		{ pagament_id: 1, pagament_data: new Date("2000-12-11"), pagament_total: 33.45 },
		{ pagament_id: 2, pagament_data: new Date("2001-12-11"), pagament_total: 36.25 },
		{ pagament_id: 3, pagament_data: new Date("2020-12-11"), pagament_total: 40.33 },
	],
	segueix: [2, 3, 5],
	cancion_favorita: [1],
	album_favorit: [1, 2]
});
db.usuari.insertOne({
	usuari_id: 2,
	usuari_mail: "juanita@gmail.com",
	usuari_pwd: "juajua",
	usuari_nom: "Juana Garcia",
	usuari_data: new Date("2005-11-12"),
	usuari_tipus: "F",
	usuari_sexe: null,
	usuari_pais: "Spain",
	usuari_codpostal: "34570",
	segueix: [1, 2],
	cancion_favorita: [2, 3],
	album_favorit: [3]
});
db.usuari.insertOne({
	usuari_id: 3,
	usuari_mail: "lolag1@gmail.com",
	usuari_pwd: "lolalo",
	usuari_nom: "Lola Garse",
	usuari_data: new Date("2020-01-01"),
	usuari_tipus: "P",
	usuari_sexe: "D",
	usuari_pais: "UK",
	usuari_codpostal: "KT10UPL",
	suscripcio: [
		{ data_inici: new Date("2020-01-01"), data_renovacio: new Date("2021-01-01"), forma_pagament: "P" },
		{ data_inici: new Date("2021-02-01"), data_renovacio: new Date("2022-02-01"), forma_pagament: "C" }],
	paypal: "lolag1@gmail.com",
	pagament: [
		{ pagament_id: 1, pagament_data: new Date("2020-01-01"), pagament_total: 30.00 },
		{ pagament_id: 2, pagament_data: new Date("2001-02-01"), pagament_total: 35.99 }
	],
	segueix: [1, 4],
	cancion_favorita: [3, 4],
	album_favorit: [2]
});
db.createCollection('playlist');
db.playlist.insertOne({
	playlist_id: 1,
	playlist_titol: "música de siempre",
	playlist_num: 2,
	playlist_data_creacio: new Date("2021-03-20"),
	playlist_usuari_crea: 2,
	playlist_estat: "M",
	playlist_data_borrado: new Date("2021-03-20"),
	playlist_cancion: [
		{
			cancion_id: 1,
			cancion_titulo: "Mediterraneo",
			cancion_afegida_per: 2,
			cancion_afegida_data: new Date("2021-03-20"),
			cancion_artista: "Joan Manel Serrat"
		},
		{
			cancion_id: 2,
			cancion_titulo: "Yesterday",
			cancion_afegida_per: 2,
			cancion_afegida_data: new Date("2021-03-21"),
			cancion_artista: "The Beatles"
		},
	]
});
db.createCollection('artista');
db.artista.insertOne({
	artista_id: 1,
	artista_nom: "Joan Manuel Serrat",
	album: [
		{
			album_id: 1, album_titol: "Mediterraneo", album_data_publicacio: new Date("1971-03-21"),
			cancion: [
				{ cancion_id: 1, cancion_titulo: "Mediterraneo", cancion_durada: 230, cancion_reproduccions: 234 },
				{ cancion_id: 2, cancion_titulo: "Aquellas pequeñas cosas", cancion_durada: 160, cancion_reproduccions: 934 },
			]
		},
		{
			album_id: 2, album_titol: "Miguel Hernández", album_data_publicacio: new Date("1972-03-21"),
			cancion: [
				{ cancion_id: 3, cancion_titulo: "Elegía", cancion_durada: 210, cancion_reproduccions: 456 },
				{ cancion_id: 4, cancion_titulo: "Para la libertad", cancion_durada: 190, cancion_reproduccions: 123 }
			]
		}
	],
	artista_relacionat: [2]
});
db.artista.insertOne({
	artista_id: 2,
	artista_nom: "Joaquín Sabina",
	album: [
		{
			album_id: 3, album_titol: "Física y química", album_data_publicacio: new Date("1992-01-01"),
			cancion: [
				{ cancion_id: 5, cancion_titulo: "Y nos dieron las diez", cancion_durada: 230, cancion_reproduccions: 1222 },
				{ cancion_id: 6, cancion_titulo: "Conductores suicidas", cancion_durada: 160, cancion_reproduccions: 565 },
			]
		},
		{
			album_id: 4, album_titol: "Esta boca es mia", album_data_publicacio: new Date("1994-01-21"),
			cancion: [
				{ cancion_id: 7, cancion_titulo: "Esta noche contigo", cancion_durada: 210, cancion_reproduccions: 456 },
				{ cancion_id: 8, cancion_titulo: "Ruido", cancion_durada: 190, cancion_reproduccions: 123 }
			]
		}
	],
	artista_relacionat: [1]
});
