import { Plataforma } from "./plataforma.js";
import { Categoria } from "./categoria.js";
import { Director } from "./director.js";
import { Actor } from "./actor.js";
import { Episodio } from "./episodio.js";
import { Plan } from "./plan.js";
import { Serie } from "./serie.js";

const serie1 = new Serie("asd","Spiderman")
serie1.crearEpisodio("La picadura","acerca de el origen de los poderes de spiderman",2,serie1)
const plataforma1 = new Plataforma("HBO","HBO.com")
const plan1 = new Plan(15000,plataforma1)
serie1.crearDirector("asdd","alta","Christopher Nolan")
serie1.crearActor("fdsad","flaca","Keira Knightley")


const actor1 = new Actor("fdsafasd","flaca","Jennifer Anninston")
const director1 = new Director("fdsafsasd","gordo","Joe Wright")
const categoria1 = new Categoria("Drama")

serie1.agregarActor(actor1)
serie1.agregarDirector(director1)
serie1.agregarCategoria(categoria1)

serie1.listarCategorias()
serie1.listarActores()
serie1.listarDirectores()

categoria1.agregarSerie(serie1)
categoria1.listarSeries()
categoria1.buscarSerie("Spiderman")

serie1.buscarActor("Keira Knightley")
serie1.buscarDirector("Christopher Nolan")





