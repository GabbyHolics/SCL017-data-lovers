# Data Lovers

# RICK AND MORTY

## Índice

* [1. Descripción general](#1-descripción-general)
* [2. Historias de Usuarios](#2-historias-de-usuarios)
* [3. Perfil de usuarios](#4-perfil-de-usuarios)
* [4. Prototipo y diseño](#3-prototipo-y-diseño)
* [5. Modo de usuarios](#5-modo-usuarios)
* [6. Tecnología](#6-tecnología)
* [7. Objetivos planteados](#7-objetivos-planteados)
* [8. Enlace web](#8-enlace-web)

***

## 1. Descripción general
Rick and Morty es una página wed cuyo contenido trata sobre una de las animaciones para adultos más famosas y entretenida con su característico humor negro que fascina a muchos; donde  un científico alcohólico, secuestra a su influenciable nieto, Morty, para vivir peligrosas aventuras a través de diversos cosmos y universos paralelos. El contenido de la página se centra en satisfacer las curiosidades más llamativas de esta grandiosa comedia animada, brindando información relevante de todos los personajes de la serie, curiosidades intrigantes e información actualizada de noticias de último momento. 
## 2. Perfil de usuarios
El contenido de Rick and Morty se encuentra dirigido a usuarios en edad adulta, desde los usuarios ya conocedores y fanáticos de esta comedia para que tengan al alcance información detallada de sus personajes favoritos, asi como las noticias con respecto a Rick and Morty de forma actualizada. También va dirigido a esos usuarios principiante u ocasional que les llama la atención y quieran saber información breve para entrar en contexto y asi decidirse de ver dicha animación.
Usuario principiante: conoce superficialmente la serie, por recomendación o por descubrimiento propio, con interés de seguir obtener información.
Usuario fiel: conoce y consume la serie continuamente, le interesa el contenido y lo relacionado con todo lo relacionado con la animación, la recomienda porque està satisfecho y está pendiente de las actualizaciones.
Usuario curioso: conoce la serie, la ve regularmente, le gusta obtener información detallada, exacta pero a profundidad de todo.
## 3. Historias de usuarios

- Historia de usuario 1
Yo: Principiante.
Quiero: "Saber información de interés general breve y detallada de la serie".
Para: "Conocer de que se trata la serie y decidir si la continuo viendo o no".

Criterios de aceptación:
-yo como usuario quiero tener un menú donde pueda desplazarme por la información fácilmente.
-encontrar en la página información concreta y directa.
-ver en otra página mas detallada las curiosidades de la serie.
-breve reseña de la serie.

Tareas:
* [ ] Definir prototipo.
* [ ] Determinar contenido de sub-páginas(home-characters(cards-charts)-facts).
* [ ] Menú interactivo, desplegable, de acceso a contenido detallado y de interés (header).
* [ ] Slider automático con imágenes que representen momentos relevantes de la serie (main).
* [ ] Redes sociales y marca de creación, copyright (footer).
* [ ] Background de cada sub-página.
* [ ] Determinar y plasmar diseño y contenido de contenedores de sub-páginas: página principal(home) y curiosidades(facts).

- Historia de usuario 2
Yo: Fanático(Usuario fiel).
Quiero: "Encontrar información relevante de mis personajes favoritos y los anuncios nuevos de la serie, como noticias".
Para: "Saber más sobre la serie y estar al día".

Criterios de aceptación:
-seccion de noticias.
-seccion de personajes con informacion detallada y de interes de cada uno, en el que pueda acceder por orden y filtrar.


Tareas:
* [ ] Exportar y obtener la data de Rick and Morty.
* [ ] Aplicar método map-Determinar las propiedades del objeto a trabajar y desestructurar.
* [ ] Crear las cartas de los personajes a través de la creación de nodos por la manipulación dinámica del DOM.
* [ ] Aplicar método filter y sort.
* [ ] Hacer menú filtrar y ordenar.
* [ ] Asignar eventos al menú de filtrar y ordenar.


- Historia de usuario 3
Yo: Curioso.
Quiero: "Conseguir información de la serie".
Para: "Analizar, comparar y tener una opinión a profundidad de la serie".

Criterios de aceptación
filtro multiseleccion
estadisticas en base a los filtros.

Tareas:
* [ ] Filtrado multiselección.
* [ ] Representación porcentual de los filtros.
* [ ] Crear sub-página charts.
* [ ] Determinar calculos estadísticos(computeStats).
* [ ] Crear charts.

## 4. Prototipo y diseño
 
Prototipo inicial
![prototipo-inicial](./src/images/prototipo-inicial.jpeg)

El diseño del prototipo se baso en el objetivo del proyecto, que es cifrar  y descifrar cualquier información. De esta manera me inspire en el diseño tipo traductor.

Luego esta idea principal la plasme, en la plataforma Figma, haciendo un prototipo digital de baja fidelidad para tener mas claro la distribución de los elementos y que colores implementar en el proyecto. La paleta de colores predominante que escogí fue azul en diferentes tonalidades, gris, para el aspecto de la página en general.

 Por lo tanto el layout o esquema de distribución de los elementos dentro de la página se desarrollo de la siguiente forma; se creo un Home como página principal el cual contiene el nombre de la página, eslogan y el cifrador. 

 ![prototipo-final-cipher](./src/images/pt1-home-figma.png)

En el cifrador se implementa dos cuadros de texto, para que el usuario pueda escribir el texto original que quiere encriptar y el otro para que se muestre el criptograma, dichos cuadros de textos simulan el estilo de una terminal con fondo negro, para darle un estilo de mensaje secreto o mensaje encryptado en códigos de computador. 

Entre ambos cuadros de texto se situo los elementos para cifrar/descifrar, ubicandolos en esta parte para que el usuario lo tenga a la vista con alcance más rápido. Consta de un numerador para determinar la clave de cifrado(offset), y de dos botones para cifrar y descifrar.

En la parte superior de la página se ubico tres botones, los cuales tienen acceso a Home como página principal, y sub-páginas como About (breve descripción) y Contact (redes de la página).

![prototipo-final-about](./src/images/pt2-about-figma.png)
![prototipo-final-contact](./src/images/pt3-contact-figma.png)

Posterior al diseño del prototipo de baja fidelidad, solicite feedback a mis compañeras, con respecto al diseño e interacción, obtuve como resultado:
- Mejorar el diseño a que sea mas llamativo, que no fuera tan plano.
- Agregar colores mas vivos.
- Estilizar diseño de botones y cuadros de texto.
- Cambiar tipo de letra de los cuadros de texto a tipo terminal y aumentar tamaño.
- Agregar favicon.
- Agregar imagen referente al tema del proyecto.

Todas estas sugerencias las lleve a cabo, en el proyecto final, implemente como objetivo principal mejorar el estilo y diseño de la página a mas minimalista y en ese sentido:

* Elegí una imagen de un candado que me represento cifrar, encriptado, tecnología, actual. Manteniendo el color azul como referente pero esta vez de una forma más llamativa. Esta imagen decidí ponerla de fondo en cada sección, la cual estiliza y genera una sensación de profesionalismo, seguridad y actualidad, resaltando los elementos de interés y agradable a la vista.
* Estilice los cuadros de texto redondeando los bordes, cambie el tipo de letra de aspecto fuente de Terminal, para darle más sentido y tenga concordancia a mi idea inicial. También el color y tipo de letra del cuadro de texto original es diferente al cuadro de texto del criptograma.
* Estilice también los botones redondeando los botones, y puse iconos simbólicos de cifrar/descifrar a candados cerrado/abierto, respectivamente. Dichos iconos guardan concordancia con la imagen de fondo de la página, siguiendo la tematica principal de cifrado. 
* Finalmente, para mayor interactividad, agregue botón de copiar, limpiar e informativo, con sus respectivos iconos simbólicos.

![proyecto-final1](./src/images/pcipher1.png)
![proyecto-final2](./src/images/pcipher2.png)
![proyecto-final3](./src/images/pcipher3.png)



## 4. Modo de usuarios
Una vez que se accede a la página Cryptocode, se tiene acceso a traves de tres botones a la página principal y las subpáginas.
1. Al acceder a página principal (_Home_), tendra acceso al cifrador.

Para cifrar se le permite al usuario:
* Escribir el mensaje (texto original) que quiere cifrar en el primer cuadro de texto.
* En el numerador indicar clave de cifrado ((_offset_)) determinando cuántas posiciones quiere que
  el cifrado desplace **cada letra** del mensaje.
* Al hacer click en el boton de cifrar(_candado cerrado_), se verá el resultado del mensaje cifrado, en el segundo cuadro de texto, el cual tiene la propiedad de readonly, que no permite modificar el criptograma, solo copiarlo.

Para descifrar se le permite al usuario:
* Escribir o copiar el mensaje (texto cifrado) que quiere descifrar en el primer cuadro de texto.
* En el numerador indicar clave de cifrado ((_offset_)) que se utilizó para cifrar el mensaje.
* Al hacer click en el boton de descifrar (_candado abierto_), puede ver y obtener el resultado del mensaje descifrado en el segundo cuadro de texto.

La información obtenida puede ser copiada automáticamente en su respectivo botón, ubicado en la parte superior derecha del segundo cuadro de texto. Si desea cifrar cualquier otra información, puede limpiar los cuadros de texto con el botón ubicado entre los cuadros de textos, inmediatamente en la parte inferior de los botones cifrar/descifrar, respectivamente.

2. A través del botón (_About_), se accede a una sub-página que tendrá una breve descripción general del servicio que ofrece Cryptocode a sus usuarios.
3. a través del botón (_Contact_), se accede a una sub-página que tendra toda la información a disposición de las redes sociales de Cryptocode, para un acceso más fácil y rápido.



## 5. Tecnología
El proyecto es creado con:
 * HTML5
 * CSS
 * Javascript
 * NodeJS

## 6. Objetivos planteados

- CSS:
   * Uso de selectores de CSS.
   * Posiciones.
- Profundizar sobre el DOM.
- Javascript:
  * Crear y llamar funciones correctamente.
  * Uso del bucle for
  * Diferenciar correctamente cuando es const & let

  ## 7. Enlace web
  //gh-pages 


***
<details>

# Data Lovers

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Hacker edition](#6-hacker-edition)
* [7. Consideraciones técnicas](#7-consideraciones-técnicas)
* [8. Pistas, tips y lecturas complementarias](#8-pistas-tips-y-lecturas-complementarias)
* [9. Checklist](#9-checklist)

***

## 1. Preámbulo

Según [Forbes](https://www.forbes.com/sites/bernardmarr/2018/05/21/how-much-data-do-we-create-every-day-the-mind-blowing-stats-everyone-should-read),
el 90% de la data que existe hoy ha sido creada durante los últimos dos años.
Cada día generamos 2.5 millones de terabytes de datos, una cifra sin
precedentes.

No obstante, los datos por sí mismos son de poca utilidad. Para que esas
grandes cantidades de datos se conviertan en **información** fácil de leer para
los usuarios, necesitamos entender y procesar estos datos. Una manera simple de
hacerlo es creando _interfaces_ y _visualizaciones_.

En la siguiente imagen, podrás ver cómo con la data que que se ve en la parte
izquierda se puede construir una interfaz amigable y entendible por el usuario
al lado derecho.

![json-interfaz](https://lh4.googleusercontent.com/Tn-RPXS26pVvOTdUzRT1KVaJ-_QbFs9SpcGLxSPE43fgbHaXtFgMUInuDt7kV41DkT1j8Tt29V0LxQW7SMtC6digOIhfTXSBKdwI08wUwhD3RAqlwy0hjfmhZ2BFe91mtmCSEqysfgk)

## 2. Resumen del proyecto

En este proyecto **construirás una _página web_ para visualizar un
_conjunto (set) de datos_** que se adecúe a lo que descubras que tu usuario
necesita.

Como entregable final tendrás una página web que permita **visualizar la data,
filtrarla, ordenarla y hacer algún cálculo agregado**. Con cálculo agregado
nos referimos a distintos cálculos que puedes hacer con la data para mostrar
información aún más relevante para los usuarios (promedio, el valor máximo
o mínimo, etc).

Esta vez te proponemos una serie de datos de diferentes _temáticas_ para que
explores y decidas con qué temática te interesa trabajar. Hemos elegido
específicamente estos sets de datos porque creemos que se adecúan bien a esta
etapa de tu aprendizaje.

Una vez que definas tu área de interés, buscar entender quién es tu usuario
y qué necesita saber o ver exactamente; luego podrás construir la interfaz que
le ayude a interactuar y entender mejor esos datos.

Estos son datos que te proponemos:

* [Pokémon](src/data/pokemon/pokemon.json):
  En este set encontrarás una lista con los 251 Pokémon de la región de Kanto
  y Johto, junto con sus respectivas estadísticas usadas en el juego
  [Pokémon GO](http://pokemongolive.com).
  - [Investigación con jugadores de Pokémon Go](src/data/pokemon/README.md)

* [League of Legends - Challenger leaderboard](src/data/lol/lol.json):
  Este set de datos muestra la lista de campeones en una liga del
  juego League of Legends (LoL).
  - [Investigación con jugadores de LoL](src/data/lol/README.md)

* [Rick and Morty](src/data/rickandmorty/rickandmorty.json).
  Este set nos proporciona la lista de los personajes de la serie Rick and
  Morty. [API Rick and Morty](https://rickandmortyapi.com).
  - [Investigación con seguidores de Rick and Morty](src/data/rickandmorty/README.md)

* [Juegos Olímpicos de Río de Janeiro](src/data/athletes/athletes.json).
  Este set nos proporciona la lista de los atletas que ganaron medallas en las
  olímpiadas de Río de Janeiro.
  - [Investigación con interesados en juegos olímpicos de Río de Janeiro](/src/data/athletes/README.md)

## 3. Objetivos de aprendizaje

El objetivo principal de este proyecto es que aprendas a diseñar y construir una
interfaz web donde se pueda visualizar y manipular data, entendiendo lo que el
usuario necesita.

### HTML y CSS

* [ ] [Uso de HTML semántico.](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
* [ ] Uso de selectores de CSS.
* [ ] Construir tu aplicación respetando el diseño realizado (maquetación).
* [ ] [Uso de flexbox en CSS.](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### DOM y Web APIs

* [ ] Uso de selectores del DOM.
* [ ] Manejo de eventos del DOM.
* [ ] [Manipulación dinámica del DOM.](https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Introducci%C3%B3n)
(appendChild |createElement | createTextNode| innerHTML | textContent | etc.)

### JavaScript

* [ ] Uso de condicionales (if-else | switch | operador ternario)
* [ ] Uso de bucles (for | for..in | for..of | while)
* [ ] Uso de funciones (parámetros | argumentos | valor de retorno)
* [ ] Manipular arrays (filter | map | sort | reduce)
* [ ] Manipular objects (key | value)
* [ ] Uso ES modules ([`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
| [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export))
* [ ] Diferenciar entre expression y statements.
* [ ] Diferenciar entre tipos de datos atómicos y estructurados.

### Testing

* [ ] [Testeo unitario.](https://jestjs.io/docs/es-ES/getting-started)

### Estructura del código y guía de estilo

* [ ] Organizar y dividir el código en módulos (Modularización)
* [ ] Uso de identificadores descriptivos (Nomenclatura | Semántica)
* [ ] Uso de linter (ESLINT)

### Git y GitHub

* [ ] Uso de comandos de git (add | commit | pull | status | push)
* [ ] Manejo de repositorios de GitHub (clone | fork | gh-pages)
* [ ] Colaboración en Github (branches | pull requests | |tags)

### UX

* [ ] Diseñar la aplicación pensando y entendiendo al usuario.
* [ ] Crear prototipos para obtener feedback e iterar.
* [ ] Aplicar los principios de diseño visual (contraste, alineación, jerarquía)
* [ ] Planear y ejecutar tests de usabilidad.

## 4. Consideraciones generales

* Este proyecto se debe resolver en duplas.
* El proyecto será entregado subiendo tu código a GitHub (commit/push) y la
  interfaz será desplegada usando [GitHub Pages](https://pages.github.com/).

## 5. Criterios de aceptación mínimos del proyecto

Los criterios para considerar que has completado este proyecto son:

### Definición del producto

Documenta brevemente tu trabajo en el archivo `README.md` de tu repositorio,
contándonos cómo fue tu proceso de diseño y cómo crees que el producto resuelve
el problema (o problemas) que tiene tu usuario.

### Historias de usuario

Una vez que entiendas las necesidades de tus usuarios, escribe las [Historias
de Usuario](https://es.wikipedia.org/wiki/Historias_de_usuario) que representen
todo lo que el usuario necesita hacer/ver. Las **Historias de Usuario** deben
ser el resultado de tu proceso de investigación o _research_ de tus usuarios.

Asegúrate de incluir la definición de terminado (_definition of done_) y los
Criterios de Aceptación para cada una.

En la medida de lo posible, termina una historia de usuario antes de pasar
a la siguiente (Cumple con Definición de Terminado + Criterios de Aceptación).

### Diseño de la Interfaz de Usuario

#### Prototipo de baja fidelidad

Durante tu trabajo deberás haber hecho e iterado bocetos (_sketches_) de tu
solución usando papel y lápiz. Te recomendamos tomar fotos de todas las
iteraciones que hagas, que las subas a tu repositorio y las menciones en tu
`README.md`.

#### Prototipo de alta fidelidad

Lo siguiente es diseñar tu Interfaz de Usuario (UI por sus siglas en inglés -
_User Interface_). Para eso debes aprender a utilizar alguna herramienta de
diseño visual. Nosotros te recomendamos [Figma](https://www.figma.com/) que es
una herramienta que funciona en el navegador y, además, puedes crear una cuenta
gratis. Sin embargo, eres libre de utilizar otros editores gráficos como
Illustrator, Photoshop, PowerPoint, Keynote, etc.

El diseño debe representar el _ideal_ de tu solución. Digamos que es lo que
desearías implementar si tuvieras tiempo ilimitado para trabajar. Además, tu
diseño debe seguir los fundamentos de _visual design_.

#### Testeos de usabilidad

Durante el reto deberás hacer _tests_ de usabilidad con distintos usuarios, y
en base a los resultados, deberás iterar tus diseños. Cuéntanos
qué problemas de usabilidad detectaste a través de los _tests_ y cómo los
mejoraste en tu propuesta final.

### Implementación de la Interfaz de Usuario (HTML/CSS/JS)

Luego de diseñar tu interfaz de usuario deberás trabajar en su implementación.
**No** es necesario que construyas la interfaz exactamente como la diseñaste.
Tu tiempo de hacking es escaso, así que deberás priorizar

Como mínimo, tu implementación debe:

1. Mostrar la data en una interfaz: puede ser un card, una tabla, una lista,
   etc.
2. Permitir al usuario interactuar para obtener la infomación que necesita.
3. Ser _responsive_, es decir, debe visualizarse sin problemas desde distintos
   tamaños de pantallas: móviles, tablets y desktops.
4. Que la interfaz siga los fundamentos de _visual design_.

### Pruebas unitarias

El _boilerplate_ de este proyecto no incluye Pruebas Unitarias (_tests_), así es
que  tendrás que escribirlas tú para las funciones encargadas de  _procesar_,
_filtrar_ y _ordenar_ la data, así como _calcular_ estadísticas.

Tus _pruebas unitarias_ deben dar una cobertura del 70% de _statements_
(_sentencias_), _functions_ (_funciones_), _lines_ (_líneas_), y _branches_
(_ramas_) del archivo `src/data.js` que contenga tus funciones y está detallado
en la sección de [Consideraciones técnicas](#srcdatajs).

## 6. Hacker edition

Las secciones llamadas _Hacker Edition_ son **opcionales**. Si **terminaste**
con todo lo anterior y te queda tiempo, intenta completarlas. Así podrás
profundizar y/o ejercitar más sobre los objetivos de aprendizaje del proyecto.

Features/características extra sugeridas:

* En lugar de consumir la data estática brindada en este repositorio, puedes
  consumir la data de forma dinámica, cargando un archivo JSON por medio de
  `fetch`. La carpeta `src/data` contiene una versión `.js` y una `.json` de
  de cada set datos.
* Agregarle a tu interfaz de usuario implementada visualizaciones gráficas. Para
  ello te recomendamos explorar librerías de gráficas como
  [Chart.js](https://www.chartjs.org/)
  o [Google Charts](https://developers.google.com/chart/).
* 100% Coverage

## 7. Consideraciones técnicas

La lógica del proyecto debe estar implementada completamente en JavaScript
(ES6), HTML y CSS. En este proyecto NO está permitido usar librerías o
frameworks, solo [vanilla JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e),
con la excepción de librerías para hacer gráficas (charts); ver
[_Parte opcional_](#6-hacker-edition) más arriba.

No se debe utilizar la _pseudo-variable_ `this`.

El _boilerplate_ contiene una estructura de archivos como punto de partida así
como toda la configuración de dependencias:

```text
.
├── EXTRA.md
├── README.md
├── package.json
├── src
|  ├── data (según con qué data trabajes)
|  |  ├── lol
|  |  |  ├── lol.js
|  |  |  ├── lol.json
|  |  |  └── README.md
|  |  ├── pokemon
|  |  |  ├── pokemon.js
|  |  |  ├── pokemon.json
|  |  |  └── README.md
|  |  └── rickandmorty
|  |     ├── rickandmorty.js
|  |     └── rickandmorty.json
|  |     └── README.md
|  |  └── athletes
|  |     ├── athletes.js
|  |     └── athletes.json
|  |     └── README.md
|  ├── data.js
|  ├── index.html
|  ├── main.js
|  └── style.css
└── test
   └── data.spec.js

directory: 6 file: 17
```

### `src/index.html`

Como en el proyecto anterior, existe un archivo `index.html`. Como ya sabes,
acá va la página que se mostrará al usuario. También nos sirve para indicar
qué scripts se usarán y unir todo lo que hemos hecho.

### `src/main.js`

Recomendamos usar `src/main.js` para todo tu código que tenga que ver con
mostrar los datos en la pantalla. Con esto nos referimos básicamente a la
interacción con el DOM. Operaciones como creación de nodos, registro de
manejadores de eventos (_event listeners_ o _event handlers_), ....

Esta no es la única forma de dividir tu código, puedes usar más archivos y
carpetas, siempre y cuando la estructura sea clara para tus compañeras.

En este archivo encontrarás una serie de _imports_ _comentados_. Para _cargar_
las diferentes fuentes de datos tendrás que _descomentar_ la línea
correspondiente.

Por ejemplo, si "descomentamos" la siguiente línea:

```js
// import data from './data/pokemon/pokemon.js';
```

La línea quedaría así:

```js
import data from './data/pokemon/pokemon.js';
```

Y ahora tendríamos la variable `data` disponible en el script `src/main.js`.

### `src/data.js`

El corazón de este proyecto es la manipulación de datos a través de arreglos
y objetos.

Te recomendamos que este archivo contenga toda la funcionalidad que corresponda
a obtener, procesar y manipular datos (tus funciones). Por ejemplo:

* `filterData(data, condition)`: esta función `filter` o filtrar recibiría la
  data, y nos retornaría aquellos datos que sí cumplan con la condición.

* `sortData(data, sortBy, sortOrder)`: esta función `sort` u ordenar
  recibe tres parámetros.
  El primer parámetro, `data`, nos entrega los datos.
  El segundo parámetro, `sortBy`, nos dice con respecto a cuál de los campos de
  la data se quiere ordenar.
  El tercer parámetro, `sortOrder`, indica si se quiere ordenar de manera
  ascendente o descendente.

* `computeStats(data)`: la función `compute` o calcular, nos permitirá hacer
  cálculos estadísticos básicos para ser mostrados de acuerdo a la data
  proporcionada.

Estos nombres de funciones y de parámetros son solamente referenciales, lo que
decidas depende de tu propia implementación.

Estas funciones deben ser [_puras_](https://medium.com/laboratoria-developers/introducci%C3%B3n-a-la-programaci%C3%B3n-funcional-en-javascript-parte-2-funciones-puras-b99e08c2895d)
e independientes del DOM. Estas funciones serán después usadas desde el archivo
`src/main.js`, al cargar la página, y cada vez que el usuario interactúe (click,
filtrado, ordenado, ...).

### `src/data`

En esta carpeta están los datos de las diferentes fuentes. Encontrarás una
carpeta por cada fuente, y dentro de cada carpeta dos archivos: uno con la
extensión `.js` y otro `.json`. Ambos archivos contienen la misma data; la
diferencia es que el `.js` lo usaremos a través de una etiqueta `<script>`,
mientras que el `.json` está ahí para opcionalmente cargar la data de forma
asíncrona con [`fetch()`](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)
(ver sección de [_Parte Opcional_](#6-hacker-edition)).

### `test/data.spec.js`

Tendrás también que completar las pruebas unitarias de las funciones
implementadas en el archivo `data.js`.

## 8. Pistas, tips y lecturas complementarias

### Primeros pasos

Antes de empezar a escribir código, debes definir qué deberá hacer el producto
en base al conocimiento que puedas obtener de tu usuario. Estas preguntas te
pueden ayudar:

* ¿Quiénes son los principales usuarios de producto?
* ¿Cuáles son los objetivos de estos usuarios en relación con el producto?
* ¿Cuáles son los datos más relevantes que quieren ver en la interfaz y por qué?
* ¿Cuándo utilizan o utilizarían el producto?
* Toda tu investigación previa debe tener como resultado todas las Historias
  de Usuario de tu proyecto.
* No hagas los prototipos de alta fidelidad de todas tus Historias. Comienza
  solamente por los que se necesiten para tu Sprint 1 (semana 1 de trabajo). Más
  pistas en la guía de organización para el proyecto.

Cuando ya estés lista para codear, te sugerimos empezar de esta manera:

1. Una de las integrantes del equipo debe realizar un :fork_and_knife:
   [fork](https://help.github.com/articles/fork-a-repo/) del repo de tu cohort,
   tus _coaches_ te compartirán un _link_ a un repo y te darán acceso de lectura
   en ese repo. La otra integrante del equipo deber hacer un fork **del
   repositorio de su compañera** y
   [configurar](https://gist.github.com/BCasal/026e4c7f5c71418485c1) un `remote`
   hacia el mismo.
2. :arrow_down: [Clona](https://help.github.com/articles/cloning-a-repository/)
   tu *fork* a tu computadora (copia local).
3. 📦 Instala las dependencias del proyecto con el comando `npm install`. Esto
   asume que has instalado [Node.js](https://nodejs.org/) (que incluye [npm](https://docs.npmjs.com/)).
4. Si todo ha ido bien, deberías poder ejecutar las :traffic_light:
   pruebas unitarias (unit tests) con el comando `npm test`.
5. Para ver la interfaz de tu programa en el navegador, usa el comando
  `npm start` para arrancar el servidor web y dirígete a
  `http://localhost:5000` en tu navegador.
6. A codear se ha dicho! :rocket:

### Contenido de referencia

#### Diseño de experiencia de usuario (User Experience Design)

* Investigación con usuarios / entrevistas
* Principios de diseño visual

#### Desarrollo Front-end

* Unidad de testing en curso de JavaScript en LMS.
* Unidad de arreglos en curso de JavaScript en LMS.
* Unidad de objetos en curso de JavaScript en LMS.
* Unidad de funciones en curso de JavaScript en LMS.
* Unidad de DOM en curso de Browser JavaScript en LMS.
* [Array en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array)
* [Array.sort en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/sort)
* [Array.map en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map)
* [Array.filter en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/filter)
* [Array.reduce en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce)
* [Array.forEach en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/forEach)
* [Object.keys en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/keys)
* [Object.entries en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/entries)
* [Fetch API en MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
* [json.org](https://json.org/json-es.html)
* [expressions-vs-statements](https://2ality.com/2012/09/expressions-vs-statements.html)
* [expresión vs sentencia](https://openclassrooms.com/en/courses/4309531-descubre-las-funciones-en-javascript/5108986-diferencia-entre-expresion-y-sentencia)
* [datos atómicos vs datos estructurados](https://www.todojs.com/tipos-datos-javascript-es6/)
* [Modulos: Export](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/export)
* [Modulos: Import](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/import)

#### Herramientas

* [Git](https://git-scm.com/)
* [GitHub](https://github.com/)
* [GitHub Pages](https://pages.github.com/)
* [Node.js](https://nodejs.org/)
* [Jest](https://jestjs.io/)

#### Organización del Trabajo

* [Historias de Usuario](https://www.youtube.com/watch?v=ky6wFiF5vMk&t=344s).
  Ojo que Cris no diferencia _Definición de terminado_ de _Criterios de
  Aceptación_ y nosotros sí lo haremos. Más detalles en la guía.
* [Cómo dividir H.U.](https://www.youtube.com/watch?v=Ueq786iZ30I&t=341s)
* [Guía para Data Lovers](https://docs.google.com/presentation/d/e/2PACX-1vQhx9D36NjpH-Daea-ITPUDUzNL8ZiNAprq_7b5PSUrfutk45tEtaOLz2lmd8f54_5jX1hypDM8f8SM/pub?start=false&loop=false&delayms=60000)

## 9. Checklist

* [ ] Usa VanillaJS.
* [ ] No hace uso de `this`.
* [ ] Pasa linter (`npm run pretest`)
* [ ] Pasa tests (`npm test`)
* [ ] Pruebas unitarias cubren un mínimo del 70% de statements, functions y
  lines y branches.
* [ ] Incluye _Definición del producto_ clara e informativa en `README.md`.
* [ ] Incluye historias de usuario en `README.md`.
* [ ] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
  `README.md`.
* [ ] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
  en `README.md`.
* [ ] Incluye link a Zeplin en `README.md`.
* [ ] Incluye el listado de problemas que detectaste a través de tests de
  usabilidad en el `README.md`.
* [ ] UI: Muestra lista y/o tabla con datos y/o indicadores.
* [ ] UI: Permite ordenar data por uno o más campos (asc y desc).
* [ ] UI: Permite filtrar data en base a una condición.
* [ ] UI: Es _responsive_.
</details>