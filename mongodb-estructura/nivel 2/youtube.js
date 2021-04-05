db = db.getSiblingDB('youtube');
db.dropDatabase();
db.createCollection('usuari');
db.usuari.insertOne({
	usuari_id: 1,
	usuari_mail: "pepeperex@gmail.com",
	usuari_pwd: "123456",
	usuari_data_naixement: new Date("1980-12-11"),
	usuari_sexe: "M",
	usuari_pais: "34",
	usuari_cod_postal: "08870",
	canal_crea: [
		{
			canal_id: 1,
			canal_nom: "mis videos",
			canal_desc: "videos mios variados",
			canal_data: new Date("2015-01-11"),
			canal_videos: [
				{ video_id: 1, video_nom: "mis gatitos" },
				{ video_id: 2, video_nom: "mis perritos" }
			]
		},
		{
			canal_id: 2,
			canal_nom: "tutoriales",
			canal_desc: "tutoriales variados",
			canal_data: new Date("2018-02-11"),
			canal_videos: [
				{ video_id: 3, video_nom: "cómo cambiar una bombilla" },
				{ video_id: 4, video_nom: "abrir un grifo" }
			]
		},
	],
	canal_suscrit: [
		{ canal_id: 3 },
		{ canal_id: 4 }]
});
db.usuari.insertOne({
	usuari_id: 2,
	usuari_mail: "juanita@gmail.com",
	usuari_pwd: "unapwd",
	usuari_data_naixement: new Date("1986-02-11"),
	usuari_sexe: "F",
	usuari_pais: "34",
	usuari_cod_postal: "08034",
	canal_crea: [
		{
			canal_id: 3,
			canal_nom: "recetas",
			canal_desc: "mis recetas de cocina",
			canal_data: new Date("2018-01-11"),
			canal_videos: [
				{ video_id: 5, video_nom: "sopa de pan" },
				{ video_id: 6, video_nom: "natillas" }
			]
		},
		{
			canal_id: 4,
			canal_nom: "cuida tu coche",
			canal_desc: "como cuidar tu coche cada dia",
			canal_data: new Date("2019-04-21"),
			canal_videos: [
				{ video_id: 7, video_nom: "cambiar una rueda" },
				{ video_id: 8, video_nom: "cambiar aceite" }
			]
		},
	],
	canal_suscrit: [
		{ canal_id: 1 },
		{ canal_id: 2 }]
});

db.createCollection('video');
db.video.insertOne({
	video_id: 1,
	video_titol: "mis gatitos",
	video_desc: "misa preciosos gatitos",
	video_grandaria: 1234,
	video_nom_arxiu: "gatos.mp4",
	video_durada: 124,
	video_thumbnail: null,
	video_num_repr: 23,
	video_num_likes: 0,
	video_num_dislikes: 1,
	video_hora_publ: new Date("2021-03-14T20:12:00Z"),
	comentari: [
		{
			comentari_id: 1,
			comentari_text: "odio los gatos",
			comentari_data: new Date("2021-01-21"),
			comentari_user_id: 2,
			comentari_like: [{
				usuari_id: 2,
				com_like_dislike: '1',
				comentari_like_data: new Date("2021-01-21")
			}],
		},
		{
			comentari_id: 2,
			comentari_text: "odio los gatos, pero los videos están bien",
			comentari_data: new Date("2021-02-21"),
			comentari_user_id: 2,
			comentari_like: [{
				usuari_id: 2,
				com_like_dislike: '1',
				comentari_like_data: new Date("2021-02-21")
			}],
		},
	],
	video_like: [{
		usuari_id: 2,
		like_o_dislike: 0,
		like_date: new Date("2021-02-21")
	}]
});

db.video.insertOne({
	video_id: 1,
	video_titol: "mis perritos",
	video_desc: "misa perritos gatitos",
	video_grandaria: 1234,
	video_nom_arxiu: "perros.mp4",
	video_durada: 124,
	video_thumbnail: null,
	video_num_repr: 23,
	video_num_likes: 1,
	video_num_dislikes: 0,
	video_hora_publ: new Date("2021-03-14T20:12:00Z"),
	comentari: [
		{
			comentari_id: 1,
			comentari_text: "muy buenos videos",
			comentari_data: new Date("2021-01-21"),
			comentari_user_id: 2,
			comentari_like: [{
				usuari_id: 2,
				com_like_dislike: '1',
				comentari_like_data: new Date("2021-01-21")
			}],
		},
		{
			comentari_id: 2,
			comentari_text: "los videos están bien",
			comentari_data: new Date("2021-02-21"),
			comentari_user_id: 2,
			comentari_like: [{
				usuari_id: 2,
				com_like_dislike: '1',
				comentari_like_data: new Date("2021-02-21")
			}],
		},
	],
	video_like: [{
		usuari_id: 2,
		like_o_dislike: 1,
		like_date: new Date("2021-02-21")
	}]
});

db.createCollection('playlist');
db.playlist.insertOne({
	playlist_id: 1,
	playlist_nom: "lista de videos",
	playlist_data_crea: new Date("2021-02-21"),
	playlist_tipus: "PU",
	playlist_usuario_id: 1,
	video: [{
		video_id: 1,
		video_titol: "mis gatitos"
	},
	{
		video_id: 2,
		video_titol: "mis perritos"
	}]
});