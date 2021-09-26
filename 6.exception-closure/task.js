//Задача 1
function parseCount(num){
    if(isNaN(Number.parseInt(num))){
        throw new Error("Невалидное значение");
    } else {
        return Number.parseInt(num);
    }
}
function validateCount(num){
    try {
        if (parseCount(num)){
            return parseCount(num);
        }
    } catch (err) {
        return err;
    }
}



//Задача 2

class Triangle{
    constructor(partA,partB,partC){
        this.partA = partA;
        this.partB = partB;
        this.partC = partC;
        if(((partA + partB) < partC) || ((partA + partC) < partB) || ((partB + partC) < partA)){
            throw new Error('Треугольник с такими сторонами не существует');
        } 
    }
    getPerimeter(){
        return this.partA + this.partB + this.partC;
    }
    getArea(){
        let sp = this.getPerimeter()/2;
        const area = Number(Math.sqrt(sp*(sp - this.partA)*(sp - this.partB)*(sp - this.partC)).toFixed(3));
        return area;
    
    }
}

function getTriangle(a,b,c) {
    try{
        return new Triangle(a,b,c);
    } catch(error){
        return new class otherTriangle{
            getArea(){
                return 'Ошибка! Треугольник не существует';
            };
            getPerimeter(){
                return 'Ошибка! Треугольник не существует';
            };
        }
    }   
}
