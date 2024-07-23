/*
Proyecto: Base de datos de alumnos
Descripción
Crearán un pequeño proyecto con html, css y js con el cual podrán gestionar a los alumnos 
de una clase, así como sus calificaciones y sacar datos importantes sobre su performance.

Requisitos
1.- Crear una clase alumno, la cual debe incluir:
Nombre
Apellidos
Edad
Materias inscritas
Calificaciones

(Esta es la clase base, si quieren agregarle mas datos son libres de hacerla tan completa
como quieran)


2.- Alta de alumnos
Una vez creada la clase desde su sitio, deberán dar de alta alumnos, 
por defecto lo único que deben pedir como requisito al inicio es nombre, apellidos, edad.

3.- Después deberas crear funciones y vistas que les ayuden a hacer lo siguiente:

Inscribir un alumno a una clase.
Asignarle sus calificaciones.
Crear grupos y asignarle alumnos (Usen estructuras de datos).

4.- Ya que tengan sus grupos con alumnos, deberán crear e implementar las siguientes funciones:
Buscar por nombre.
Buscar por apellido.
Obtener promedio de un alumno.
Obtener promedio del grupo.
Obtener lista de alumnos ordenados ascendente y descendente por calificación.

Con los datos almacenados en la clase, deben agregar otro ordenamiento o búsqueda
bajo el parámetro que quieran 
(Este es el punto extra).

5.- Preferentemente todo guarden en LocalStorage para que puedan tener persistencia de datos (Opcional x2)

*/


console.log("========= INICIO DE PROYECTO BASE DE DATOS ALUMNOS=========");

//1.- Creacionde la clase BaseDeDatos general:
class BaseDeDatos{
    
    // 2.- Constructor sin atributos, la clase Grupo será solamente un arreglo de objetos:
    constructor(){

        this.arrayTodosLosAlumnos = [];
    }

    
    //3.- Definicion de metodos: Metodo agregar alumno a un grupo:
    agregarAlumnoABaseDeDatos(Alumno){
        this.arrayTodosLosAlumnos.push(Alumno);
        
    }

    
}

class Grupo {
    constructor(){

        this.arrayGrupoA = [];
        this.arrayGrupoB = [];
    }



    agregarAlumnoAGrupoA(Alumno){

        this.arrayGrupoA.push(Alumno);
    }

    agregarAlumnoAGrupoB(Alumno){

        this.arrayGrupoB.push(Alumno);
    }

}

// Creacion de array de clase tipo Grupo:
let grupoA = new Grupo();
let grupoB = new Grupo();



//1.- Creacionde la clase Alumno:
class Alumno {
    
    // 2. Definir los atributos, esto se hace dentro del constructor.
    constructor(anombre, apellidoPaterno, apellidoMaterno, edad, materiaMatematicas, materiaHistoria, materiaGeografia, califMatematicas, califHistoria,  califGeografia, califpromedio ){
        this.anombre = anombre;
        this.apellidoPaterno = apellidoPaterno;
        this.apellidoMaterno = apellidoMaterno;
        this.edad = edad;
        this.materiaMatematicas = materiaMatematicas;
        this.materiaHistoria = materiaHistoria;
        this.materiaGeografia = materiaGeografia;
        this.califMatematicas = califMatematicas;
        this.califHistoria = califHistoria;
        this.califGeografia = califGeografia;
        this.califpromedio = califpromedio;
    }

    /* 3. Definir los metodos de la clase, cuando defino un metodo necesito pensar en:
        -Que accion va arealizar
        -Que informacion necesito para realizar tal accion. 
    */
    
    altaAlumno(){

        //let alumno1 = new Alumno(Javier, Cornejo, Gomez, 38);
        //let alumno2 = new Alumno(Zaira, Rojas, Sierra, 30);
    }

    incribirAClaseMatematicas(Alumno){

        Alumno.materiaMatematicas = "inscrito";
    }

    incribirAClaseHistoria(Alumno){

        Alumno.materiaHistoria = "inscrito";
    }

    inscribirAClaseGeografia(Alumno){

        Alumno.materiaGeografia = "inscrito";
    }

    asignarCalifMatematicas(Alumno,califMatematicas){

        Alumno.califMatematicas = califMatematicas;
    }

    asignarCalifHistoria(Alumno,califHistoria){

        Alumno.califHistoria = califHistoria;
    }
    
    asignarCalifGeografia(Alumno,califGeografia){

        Alumno.califGeografia = califGeografia;
    }

}

// creacion de objetos de clase tipo Alumno:
let alumnoJavier = new Alumno("Javier","Cornejo","Gomez", 38);
let alumnoZaira = new Alumno(`Zaira`, 'Rojas', "Sierra", 30);

// Creacion del array general que será la base de datos de todos los alumnos
let todos = new BaseDeDatos();



// Llamado de metodos definidos:


// Metodo alta agregar por default al array "todos" donde esta toda la base de datos de alumnos:
todos.agregarAlumnoABaseDeDatos(alumnoJavier);
todos.agregarAlumnoABaseDeDatos(alumnoZaira);

// Metodo de agregar a un grupo:
grupoA.agregarAlumnoAGrupoA(alumnoJavier);
grupoB.agregarAlumnoAGrupoB(alumnoZaira);


// Metodo inscribir a clases:
alumnoJavier.incribirAClaseHistoria(alumnoJavier);
alumnoZaira.incribirAClaseMatematicas(alumnoZaira);

// Metodos asignar calififaciones:
alumnoJavier.asignarCalifHistoria(alumnoJavier,9);
alumnoJavier.asignarCalifMatematicas(alumnoZaira,10);


// impresiones en consola:
console.log(todos);

console.log(`La edad del alumno ${alumnoJavier.anombre} es de ${alumnoJavier.edad} años.`);

console.log(grupoA);
console.log(grupoB);
