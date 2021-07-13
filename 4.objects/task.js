function Student(name, gender, age){
// Ваш код
this.name = name;
this.gender = gender;
this.age = age;
}

Student.prototype.setSubject = function(subjectName){
    //ваш код
  this.subject = subjectName;
  return this.setSubject[subjectName];
}

// ваш код для остальных методов
Student.prototype.addMark = function(mark){
  this.mark = mark;
  if(this.marks === undefined){
    this.marks = [this.mark];
  } else {
    this.marks.push(this.mark);
  }
}

Student.prototype.addMarks = function(...grade){
  if(this.marks === undefined){
    this.marks = [];
    for(let i of grade){
      this.marks.push(i);
    }
  } else {
    for(let b of grade){
      this.marks.push(b);
    }
  }
 }

Student.prototype.getAverage = function(){
  let total = 0;
  for(let item of this.marks){
    total += item;
  }  
  return total/this.marks.length; 
}

Student.prototype.exclude = function(reason){
  this.excluded = reason;
  delete this.subject;
  delete this.marks;
}




