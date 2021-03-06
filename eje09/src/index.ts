class Alumnos{
    public noControl:string;
    public nombre:string;
    public apellidos:string;
    public promedio:number;
    public genero:string;
    public fechaNacimiento:Date;
    public activo:boolean;
    constructor(noControl:string,nombre:string,apellidos:string,promedio:number,genero:string,
    fechaNacimiento:Date,activo:boolean){
        this.noControl=noControl;
        this.nombre=nombre;
        this.apellidos=apellidos;
        this.promedio=promedio;
        this.genero=genero;
        this.fechaNacimiento=fechaNacimiento;
        this.activo=activo;
    }
}


var alumno:Alumnos;
var counter=0;
var alumnos:Alumnos[]=new Array(10);

function init():void{
    for(var i=0;i<alumnos.length;i++){
        alumnos[i]=new Alumnos("","","",0,"",new Date(),false);
    }
}
function mostrar():void{
    for(var i=0;i<alumnos.length;i++){
        if(alumnos[i].activo){
            console.log(`noControl=${alumnos[i].noControl} nombre=${alumnos[i].nombre}  apellidos=${alumnos[i].apellidos} promedio=${alumnos[i].promedio} genero=${alumnos[i].genero} fecha de nacimiento=${alumnos[i].fechaNacimiento} activo=${alumnos[i].activo}`);
        }
    }
}
function agregar(noControl:string,nombre:string,apellidos:string,promedio:number,
                 genero:string,fechaNacimiento:Date,activo:boolean):void{
                     if(counter<10){
                        alumno=new Alumnos(noControl,nombre,apellidos,promedio,genero,fechaNacimiento,activo);
                        alumnos[counter]=alumno;
                        counter++;
                     }
                    
}
function borrar(noControl:string):void{
    for(var i=0;i<alumnos.length;i++){
        if(alumnos[i].noControl===noControl){
            alumnos[i]=new Alumnos("","","",0,"",new Date(),false);
        }
    }
}
function modificar(noControl:string,nombre:string,apellidos:string,promedio:number,
    genero:string,fechaNacimiento:Date,activo:boolean):void{
        for(var i=0;i<alumnos.length;i++){
            if(alumnos[i].noControl==noControl){
                alumnos[i].noControl=noControl;
                alumnos[i].nombre=nombre;
                alumnos[i].apellidos=apellidos;
                alumnos[i].promedio=promedio;
                alumnos[i].genero=genero;
                alumnos[i].fechaNacimiento=fechaNacimiento;
                alumnos[i].activo=activo;
            }
        }
}
init();
agregar("14400941","Juan Pedro","Gil Llanos",100,"M",new Date(),true);
agregar("14400944","Ernesto","Gonzalez Arellano",80,"F",new Date(),true);
agregar("14400945","Juan","Perez",100,"M",new Date(),true);
agregar("14400946","Jonathan","Gil Llanos",100,"M",new Date(),true);
agregar("14400947","Horacio","Covarruvias Gil",100,"M",new Date(),true);
agregar("14400948","Aline","Gil Sanchez",100,"M",new Date(),true);
borrar("14400941");
modificar("14400946","Misrain","Llanos Gil",20,"M",new Date(),true);
mostrar();