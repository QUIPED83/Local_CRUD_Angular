import { Component } from '@angular/core';
import { Student } from './models/student';
import { Subject } from './models/subjects';
import { StudentXsubject } from './models/student-xsubject';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ////////////////CODIGO PARA LA TABLA DE ALUMNOS
  studentArray: Student[] = [
    {nocontrol:1, name:"Pedro", materias:""},
    {nocontrol:2, name:"Yuri" , materias:""},
    {nocontrol:3, name:"Vladi" , materias:""}
    ];

    selectedStudent: Student = new Student();

    addOrEditStudent(){
      let exist=false;
      this.studentArray.forEach(element => {
        if(element.nocontrol === this.selectedStudent.nocontrol){
          exist=true;
        }
      });
      if(exist){
        this.selectedStudent= new Student;
        alert("Estudiante modificado correctamente");
      }else{
        this.studentArray.push(this.selectedStudent);
        this.selectedStudent= new Student;
      }
    }

    openForEditStudent(student: Student){
      this.selectedStudent = student;
    }

    //////////// CODIGO PARA LA TABLA DE MATERIAS

    subjectArray: Subject[] = [
      {id:1, materia:"Topícos selectos", inscritos:0},
      {id:2, materia:"Interfaces gráficas", inscritos:0},
      {id:3, materia:"Redes emergentes", inscritos:0}
      ];

      selectedSubject: Subject = new Subject();

      addOrEditSubject(){
        let exist=false;
        this.subjectArray.forEach(element => {
          if(element.id === this.selectedSubject.id){
            exist=true;
          }
        });
        if(exist){
          this.selectedSubject= new Subject;
          alert("Materia modificada correctamente");
        }else{
          this.subjectArray.push(this.selectedSubject);
          this.selectedSubject= new Subject;
        }
      }
  
      openForEditSubject(subject: Subject){
        this.selectedSubject = subject;
      }

      //////////// CODIGO PARA LA TABLA DE estudianteXmateria!
      sXsArray: StudentXsubject[] = [
        ];

        selectedSxS: StudentXsubject = new StudentXsubject();
  
        addOrEditSxS(){
            this.sXsArray.push(this.selectedSxS);
            this.subjectArray.forEach(element1 => {
              if(element1.id==this.selectedSxS.idMateria){
                element1.inscritos=element1.inscritos+1;
                this.selectedSubject= new Subject;
              }
              this.studentArray.forEach(element2 =>{
                if(element2.nocontrol == this.selectedSxS.nocontrol && element1.id==this.selectedSxS.idMateria){
                  element2.materias = element2.materias + ' | ' + element1.materia +": "+ this.selectedSxS.calificacion;
                  this.selectedStudent= new Student;
                }
              });
            });
            
            this.selectedSxS= new StudentXsubject;
        }
    
}
