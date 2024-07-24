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

Inscribir un alumno a una clase.ok
Asignarle sus calificaciones.ok
Crear grupos y asignarle alumnos.ok  (Usen estructuras de datos).

4.- Ya que tengan sus grupos con alumnos, deberán crear e implementar las siguientes funciones:
Buscar por nombre.
Buscar por apellido.
Obtener promedio de un alumno.ok
Obtener promedio del grupo.ok
Obtener lista de alumnos ordenados ascendente y descendente por calificación.???

Con los datos almacenados en la clase, deben agregar otro ordenamiento o búsqueda
bajo el parámetro que quieran 
(Este es el punto extra).

5.- Preferentemente todo guarden en LocalStorage para que puedan tener persistencia de datos (Opcional x2)

*/


console.log("========= INICIO DE PROYECTO BASE DE DATOS ALUMNOS=========");

//1.- Creacionde la clase BaseDeDatos general:
class baseDeDatos{
    
    // 2.- Constructor sin atributos, la clase Grupo será solamente un arreglo de objetos:
    constructor(){

        this.arrayTodosLosAlumnos = [];
    }

    
    //3.- Definicion de metodos: Metodo agregar alumno a un grupo:
    agregarAlumnoABaseDeDatos(alumno){
        this.arrayTodosLosAlumnos.push(alumno);
        
    }

    ordenarPorNombreAscendente(){
      
        this.arrayTodosLosAlumnos.sort(function (a, b) {
            if (a.anombre > b.anombre) {
              return 1;
            }
            if (a.anombre < b.anombre) {
              return -1;
            }
            // a must be equal to b
            return 0;
          });
          
          console.log(`Orden A-Z Ascendente:`);
          console.log(this.arrayTodosLosAlumnos);
    }
    ordenarPorNombreDescendiente(){
      
        this.arrayTodosLosAlumnos.sort(function (a, b) {
            if (a.anombre < b.anombre) {
              return 1;
            }
            if (a.anombre > b.anombre) {
              return -1;
            }
            // a must be equal to b
            return 0;
          });
    
          console.log(`Orden A-Z Descendiente:`);
          console.log(this.arrayTodosLosAlumnos);
          
    }

    ordenarPorPromedioAscendente(){
        this.arrayTodosLosAlumnos.sort(function (a, b) {
            return a.califPromedio - b.califPromedio;
        });
        console.log(this.arrayTodosLosAlumnos);
    }
}

class grupo {
    constructor([],nombreGrupo){
        
        this.arrayGrupo = [];
        this.nombreGrupo = nombreGrupo;
        
    }

    agregarAlumnoAGrupoA(alumno){

        this.arrayGrupo.push(alumno);
    }

    agregarAlumnoAGrupoB(alumno){

        this.arrayGrupo.push(alumno);
    }

    mostrarGrupo(grupo,nombreGrupo){
    
    console.log(this.arrayGrupo);
    console.log(nombreGrupo);
    console.log(`El grupo ${nombreGrupo} tiene ${this.arrayGrupo.length} alumnos `);
    
    }

    calcularPromedioGrupo(grupo,nombreGrupo){

        if(this.arrayGrupo.length == 0){
            console.log(`El grupo ${nombreGrupo} está vacio no se puede obtener promedio de grupo`);
            console.log("=============================");
        }
        else{
            console.log(`El grupo ${nombreGrupo} tiene ${this.arrayGrupo.length} alumnos a los cuales se les calculara el promedio`);
            
            let sumapromgrupo = 0;
            let divisorgrupo = 0;
            let promedioGrupo = 0;

            for(let i = 0; i < this.arrayGrupo.length; i++){
                console.log(`El promedio del alumno ${this.arrayGrupo[i].anombre} es de ${this.arrayGrupo[i].califPromedio}`)
                
                if(this.arrayGrupo[i].califPromedio == null){
                    console.log(`El promedio del alumno ${this.arrayGrupo[i].anombre} es de ${this.arrayGrupo[i].califPromedio} NO es valido para promediar`)
                }
                else{

                    sumapromgrupo += this.arrayGrupo[i].califPromedio
                    divisorgrupo ++;
                    promedioGrupo = sumapromgrupo / divisorgrupo; 
                }
                

            }
        
            console.log(`El promedio del grupo ${nombreGrupo} es de ${promedioGrupo} integrado por ${divisorgrupo} alumnos `);
            console.log("=============================");
        }

    }   
}

// Creacion de array de clase tipo Grupo:
let grupoA = new grupo([],);
let grupoB = new grupo([],);
let grupoC = new grupo([]);




//1.- Creacionde la clase alumno:
class alumno {
    
    // 2. Definir los atributos, esto se hace dentro del constructor.
    constructor(anombre, apellidoPaterno, apellidoMaterno, edad, materiaMatematicas, materiaHistoria, materiaGeografia, califMatematicas, califHistoria,  califGeografia, califPromedio ){
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
        this.califPromedio = califPromedio;
    }

    /* 3. Definir los metodos de la clase, cuando defino un metodo necesito pensar en:
        -Que accion va arealizar
        -Que informacion necesito para realizar tal accion. 
    */
    
    altaAlumno(){

        //let alumno1 = new alumno(Javier, Cornejo, Gomez, 38);
        //let alumno2 = new alumno(Zaira, Rojas, Sierra, 30);
    }

    inscribirAClaseMatematicas(alumno){

        alumno.materiaMatematicas = "inscrito";
    }

    inscribirAClaseHistoria(alumno){

        alumno.materiaHistoria = "inscrito";
    }

    inscribirAClaseGeografia(alumno){

        alumno.materiaGeografia = "inscrito";
    }

    // METODOS DE ASIGNACIONES DE CALIFIFCACIONES:
    asignarCalifMatematicas(alumno,califMatematicas){

        //  Primero se valida si el alumno está inscrito a la materia , si no se notifica y no se graba la calificacion.
        if(alumno.materiaMatematicas == null){

        console.log(`El alumno ${alumno.anombre} "NO" está inscrito en la materia de Matematicas a la cual quiere asignar calificación, inscriba primero`);

        }
        else{
            // si el alumno si está inscrito en la materia se procede con la asignacion de la calificación:
            console.log(`El alumno ${alumno.anombre} "SI" está inscrito en la materia de Matematicas, se asigna calificación de ${califMatematicas}`);
            alumno.califMatematicas = califMatematicas;
        }
        
        alumno.calcularPromedio(alumno);    
    }

    asignarCalifHistoria(alumno,califHistoria){
        
        //  Primero se valida si el alumno está inscrito a la materia , si no se notifica y no se graba la calificacion.
        if(alumno.materiaHistoria == null){

            console.log(`El alumno ${alumno.anombre} "NO" está inscrito en la materia de Historia a la cual quiere asignar calificación, inscriba primero`);
    
            }
            else{
                // si el alumno si está inscrito en la materia se procede con la asignacion de la calificación:
                console.log(`El alumno ${alumno.anombre} "SI" está inscrito en la materia Historia, se asigna calificación de ${califHistoria}`);
                alumno.califHistoria = califHistoria;
            }
        alumno.calcularPromedio(alumno);
    }
    
    asignarCalifGeografia(alumno,califGeografia){
        
        //  Primero se valida si el alumno está inscrito a la materia , si no se notifica y no se graba la calificacion.
        if(alumno.materiaGeografia == null){

            console.log(`El alumno ${alumno.anombre} "NO" está inscrito en la materia de Geografia a la cual quiere asignar calificación, inscriba primero`);
    
            }
            else{
                // si el alumno si está inscrito en la materia se procede con la asignacion de la calificación:
                console.log(`El alumno ${alumno.anombre} "SI" está inscrito en la materia Geografia, se asigna calificación de ${califGeografia}`);
                alumno.califGeografia = califGeografia;
            }
        
        alumno.calcularPromedio(alumno);
    }

    calcularPromedio(alumno){
        // Validar que el alumno está inscrito a almenos 1 materia para calcular promedio.
        if(alumno.materiaMatematicas == null && alumno.materiaHistoria == null && alumno.materiaGeografia == null){
        
            console.log(`El alumno ${alumno.anombre} NO está inscrito a ninguna materia, No se puede calcular un promedio`);
            
        }else{

        let suma = 0;
        let promedio = 0;
        let divisor= 0;


            // Si el alumno está inscrito en la amteria , es decir no tiene valor "null" entonces se considera la materia para calcular el promedio:
            if(alumno.materiaMatematicas != null && alumno.califMatematicas != null){
                suma += alumno.califMatematicas;
                divisor ++;
                console.log(`El alumno ${alumno.anombre} está "${alumno.materiaMatematicas}" en la materia de Matematicas y su calificacion es de ${alumno.califMatematicas} se considera para promedio`);
            }else{console.log(`El alumno ${alumno.anombre} "NO" está inscrito en la materia de Matematicas o no tiene calificación asignada, no se considera para promedio`);}
            
            
            if(alumno.materiaHistoria != null && alumno.califHistoria != null){
                suma += alumno.califHistoria;
                divisor ++;
                console.log(`El alumno ${alumno.anombre} está "${alumno.materiaHistoria}" en la materia de Historia y su calificacion es de ${alumno.califHistoria} se considera para promedio`); 
            }else{console.log(`El alumno ${alumno.anombre} "NO" está inscrito en la materia de Historia  o no tiene calificación asignada, no se considera para promedio`);}
            
            
            if(alumno.materiaGeografia != null && alumno.califGeografia != null){
                suma += alumno.califGeografia;
                divisor ++;
                console.log(`El alumno ${alumno.anombre} está "${alumno.materiaGeografia}" en la materia de Geografía y su calificacion es de ${alumno.califGeografia} se considera para promedio`);
            }else{console.log(`El alumno ${alumno.anombre} "NO" está inscrito en la materia de Geografia  o no tiene calificación asignada, no se considera para promedio`);}
        
        promedio = suma / divisor;
        console.log(`El promedio del alumno ${alumno.anombre} es de: ${promedio} `);
        // Al alumno se le asigna su calificación promedio en su atributo personal "califPromedio"
        alumno.califPromedio = promedio;
        console.log("====================");
        }
        
        // Validar que el alumno tenga calificaciones registradas

    }

}

// creacion de objetos de clase tipo alumno:
let alumnoJavier = new alumno("Javier","Cornejo","Gomez", 38);
let alumnoZaira = new alumno(`Zaira`, 'Rojas', "Sierra", 30);
let alumnoConny = new alumno(`Conny`, 'Gomez', "Guzman", 62);
let alumnoAndrea = new alumno(`Andrea`, 'Cornejo', "Vazquez", 34);
let alumnoDavid = new alumno(`David`, 'Rojas', "Maldonado", 24);
let alumnoSofia = new alumno(`Sofia`, 'Palacios', "Figueroa", 26);
let alumnoJorge = new alumno(`Jorge`, 'Avelar', "Ceron", 68,null,null,"inscrito",null,null,8.5);

// Creacion del array general que será la base de datos de todos los alumnos
let todos = new baseDeDatos();



// Llamado de metodos definidos:


// Metodo alta agregar por default al array "todos" donde esta toda la base de datos de alumnos:
todos.agregarAlumnoABaseDeDatos(alumnoJavier);
todos.agregarAlumnoABaseDeDatos(alumnoZaira);
todos.agregarAlumnoABaseDeDatos(alumnoConny);
todos.agregarAlumnoABaseDeDatos(alumnoAndrea);
todos.agregarAlumnoABaseDeDatos(alumnoDavid);
todos.agregarAlumnoABaseDeDatos(alumnoSofia);
todos.agregarAlumnoABaseDeDatos(alumnoJorge);

// Metodo de agregar a un grupo:
grupoA.agregarAlumnoAGrupoA(alumnoJavier);
grupoA.agregarAlumnoAGrupoA(alumnoConny);
grupoA.agregarAlumnoAGrupoA(alumnoAndrea);
grupoA.agregarAlumnoAGrupoA(alumnoJorge);
grupoB.agregarAlumnoAGrupoB(alumnoZaira);
grupoB.agregarAlumnoAGrupoB(alumnoDavid);
grupoB.agregarAlumnoAGrupoB(alumnoSofia);


// Metodo inscribir a clases:
alumnoJavier.inscribirAClaseHistoria(alumnoJavier);
alumnoJavier.inscribirAClaseMatematicas(alumnoJavier);
alumnoJavier.inscribirAClaseGeografia(alumnoJavier);

alumnoZaira.inscribirAClaseMatematicas(alumnoZaira);
alumnoZaira.inscribirAClaseHistoria(alumnoZaira);
// no se asigan a Zaira a la clase de Geografia

alumnoJavier.inscribirAClaseHistoria(alumnoConny);
alumnoJavier.inscribirAClaseHistoria(alumnoAndrea);
// alumnoJavier.inscribirAClaseHistoria(alumnoSofia);


alumnoZaira.inscribirAClaseMatematicas(alumnoDavid);


// Metodos asignar calififaciones:
alumnoJavier.asignarCalifMatematicas(alumnoJavier,8.5);
alumnoJavier.asignarCalifHistoria(alumnoJavier,9.5);
alumnoJavier.asignarCalifGeografia(alumnoJavier,7.5);

alumnoJavier.asignarCalifHistoria(alumnoConny,9.0);
alumnoJavier.asignarCalifHistoria(alumnoAndrea,6.0);
alumnoJavier.asignarCalifHistoria(alumnoSofia,7.5);


alumnoJavier.asignarCalifMatematicas(alumnoZaira,10);
alumnoJavier.asignarCalifHistoria(alumnoZaira,8.4);
// si se intenta asignar una calificacion a una materia que no tiene asignada el alumno , no se captura y se reporta.
alumnoJavier.asignarCalifGeografia(alumnoZaira,7.0);

// Metodo para calcular el promedio del alumno segun su estatus de calificación
alumnoJavier.calcularPromedio(alumnoJavier);
alumnoZaira.calcularPromedio(alumnoZaira);
alumnoSofia.calcularPromedio(alumnoSofia);

// impresiones en consola:


// console.log(`La edad del alumno ${alumnoJavier.anombre} es de ${alumnoJavier.edad} años. `);
// console.log(`El alumno ${alumnoJorge.anombre} está "${alumnoJorge.materiaGeografia}" en la materia de Geografía y su calificacion es de ${alumnoJorge.califGeografia}`);

/* PRUEBAS DE MODIFICACION DE DATOS Y AFUERA DE LOS ARRAYS:
console.log(`AFUERA: El alumno ${alumnoJavier.anombre} está "${alumnoJavier.materiaMatematicas}" en la materia de Matematicas y su calificacion es de ${alumnoJavier.califMatematicas}`);
console.log(`AFUERA: El alumno ${alumnoJavier.anombre} está "${alumnoJavier.materiaHistoria}" en la materia de Historia y su calificacion es de ${alumnoJavier.califHistoria}`);
console.log(`AFUERA: El alumno ${alumnoJavier.anombre} está "${alumnoJavier.materiaGeografia}" en la materia de Geografía y su calificacion es de ${alumnoJavier.califGeografia}`);
console.log(`AFUERA: El alumno ${alumnoJavier.anombre} tiene un promedio de ${alumnoJavier.califPromedio}`);
*/


grupoA.mostrarGrupo(grupoA,"A");
grupoB.mostrarGrupo(grupoB,"B");
grupoC.mostrarGrupo(grupoC,"C");

grupoC.calcularPromedioGrupo(grupoC,"C");
grupoA.calcularPromedioGrupo(grupoA,"A");
grupoB.calcularPromedioGrupo(grupoB,"B");


// Metodo de ordenamiento:

// todos.ordenarPorNombreAscendente(todos);
// todos.ordenarPorNombreDescendiente(todos);
// todos.ordenarPorNombreAscendente(todos);

todos.ordenarPorPromedioAscendente(todos);