db = db.getSiblingDB('optica');
db.dropDatabase();
db.createCollection('proveidor');
db.proveidor.insertOne({
	nom: 'Ochi',
	adreça: { carrer: 'c/Sole', num: '1', pis: null, porta: null, ciutat: "Palermo", pais: "Italia", cod_postal: "90121" },
	marques: [{
		marca_id: 1,
		marca_nom: "ochi preziosi",
		ulleres: [
			{ ullera_id: 10, graduació: [1.25, 0.50], tipus_muntura: "pasta", color_muntura: "blau", color_vidres: [null, null], preu: 200.15 },
			{ ullera_id: 20, graduació: [0, 0], tipus_muntura: "flotant", color_muntura: "plata", color_vidres: ["blau", "blau"], preu: 50.50 },

		]
	},
	{
		marca_id: 2,
		marca_nom: "marca nuova",
		ulleres: [
			{ ullera_id: 30, graduació: [-3, -2], tipus_muntura: "flotant", color_muntura: "blanc", color_vidres: [null, null], preu: 333.22 },
			{ ullera_id: 40, graduació: [0, 0], tipus_muntura: "flotant", color_muntura: "plata", color_vidres: ["verd", "verd fosc"], preu: 114 },

		]
	}],
});
db.proveidor.insertOne({

	nom: "Glasses",
	adreça: {
		carrer: "High Street", num: "34", pis: "Ground fl", porta: "A", ciutat: "Esher", pais: "UK", cod_postal: "KT9APL5"
	},
	marques: [{
		marca_id: 3,
		marca_nom: "Rey Bon",
		ulleres: [
			{ ullera_id: 50, graduació: [2.5, 3], tipus_muntura: "metal.lica", color_muntura: "rosa", color_vidres: [null, null], preu: 444.14 },
			{ ullera_id: 60, graduació: [0, 0], tipus_muntura: "flotant", color_muntura: "gris", color_vidres: ["gris", "gris"], preu: 212.5 }
		]
	},
	{
		marca_id: 4,
		marca_nom: "Vague",
		ulleres: [
			{ ullera_id: 70, graduació: [1, 1], tipus_muntura: "pasta", color_muntura: "negra", color_vidres: [null, null], preu: 111.11 },
			{ ullera_id: 80, graduació: [2, 2], tipus_muntura: "pasta", color_muntura: "blau", color_vidres: ["blau", "blau fosc"], preu: 232.43 }
		]
	}]
});
db.createCollection('client');
db.client.insertOne({
	cliente_id: 1,
	nom: "Pepe Pérez",
	cliente_recamana_id: null,
	telefon: "123123123",
	email: "pepepe@gmail.com",
	data_registre: new Date("2020-12-11T14:12:00Z"),
	adreça: { carrer: 'c/Sol', num: '19', pis: 3, porta: "B", provincia_id: 8, localitat_id: 37, cod_postal: "08870" },
	ulleres: [{ullera_id: 70,empleat: "Juan García"}]
});
db.client.insertOne({
	cliente_id: 1,
	nom: "Lola Garse",
	cliente_recamana_id: 1,
	telefon: "931234567",
	email: "lola@gmail.com",
	data_registre: new Date("2021-03-11T18:12:00Z"),
	adreça: { carrer: 'c/Sol', num: '19', pis: 3, porta: "B", provincia_id: 8, localitat_id: 37, cod_postal: "08870" },
	ulleres: [{ullera_id: 40,empleat: "Juan García"}]
});
db.createCollection('provincia');
db.provincia.insertOne({
	provincia_id: 8,
	provincia_nom: "Barcelona",
	localitat: [{localitat_id: 8, localitat_nom: "Barcelona"},{localitat_id: 37, localitat_nom: "Badalona"}]
	
});



