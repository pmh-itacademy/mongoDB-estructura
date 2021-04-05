db = db.getSiblingDB('pizzeria');
db.dropDatabase();
db.createCollection('botiga');
db.botiga.insertOne({
	botiga_id: 1,
	nom: 'Mamma mia',
	telefon: 938949489,
	adreça: { carrer: 'c/Sole', num: '1', localitat: 8, provincia: 8, cod_postal: "08870" },
	empleat: [{
		empleat_id: 1,
		empleat_nom: "Leo",
		empleat_cognom1: "Pares",
		empleat_cognom2: null,
		nif: "32234456H",
		telefon: 609896756,
		tipus_feina: "cuiner",
	},
	{
		empleat_id: 2,
		empleat_nom: "Lola",
		empleat_cognom1: "Garse",
		empleat_cognom2: "García",
		nif: "33454654K",
		telefon: 675453489,
		tipus_feina: "repartidor",
	}],
	producte: [{
		producte_id: 1,
		producte_nom: "pizza vegetal",
		descripcio: "pizza amb molts vegetals",
		imatge: null,
		preu: 10.15,
		tipus_pizza: "vegetariana"
	},
	{
		producte_id: 2,
		producte_nom: "pizza barbacoa",
		descripcio: "pizza amb carn barbacoa",
		imatge: null,
		preu: 13.45,
		tipus_pizza: "carn"
	},
	{
		producte_id: 3,
		producte_nom: "pizza barbacoa",
		descripcio: "pizza amb carn barbacoa",
		imatge: null,
		preu: 13.45,
		tipus_pizza: "carn"
	},
	{
		producte_id: 4,
		producte_nom: "coca cola",
		descripcio: "coca cola llauna",
		imatge: null,
		preu: 2.45
	},
	{
		producte_id: 5,
		producte_nom: "Burger",
		descripcio: "Hamburgueza completa",
		imatge: null,
		preu: 11.50
	}]
});
db.createCollection('client');
db.client.insertOne({
	client_id: 1,
	nom: 'Paco León',
	telefon: 938949489,
	adreça: { carrer: 'c/Lluna', num: '3', pis: 3, porta: "B", localitat: 37, provincia: 8, cod_postal: "08870" },
	comanda: [{
		comanda_id: 1,
		botiga_id: 1,
		datetime: new Date("2021-03-11T18:12:00Z"),
		tipus_entrega: "domicili",
		empleat_entrega: null,
		begudes_qty: 1,
		hambur_qty: 0,
		pizzes_qty: 1,
		preu_total: 15.90,
		linia_comanda: [
			{
				producte_id: 3,
				producte_nom: "pizza barbacoa",
				qty: 1,
				preu: 13.45
			},
			{
				producte_id: 4,
				producte_nom: "coca cola",
				qty: 1,
				preu: 2.45
			}
		]
	},
	{
		comanda_id: 2,
		botiga_id: 2,
		datetime: new Date("2021-03-14T20:12:00Z"),
		tipus_entrega: "recollida",
		empleat_entrega: 1,
		begudes_qty: 3,
		hambur_qty: 0,
		pizzes_qty: 1,
		preu_total: 19.70,
		linia_comanda: [
			{
				producte_id: 3,
				producte_nom: "pizza barbacoa",
				qty: 1,
				preu: 13.45
			},
			{
				producte_id: 4,
				producte_nom: "coca cola",
				qty: 3,
				preu: 6.35
			}
		]
	}]
});
db.createCollection('provincia');
db.provincia.insertOne({
	provincia_id: 8,
	provincia_nom: "Barcelona",
	localitat: [{localitat_id: 8, localitat_nom: "Barcelona"},{localitat_id: 37, localitat_nom: "Badalona"}]
	
});





