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
        return parseCount(num);
    } catch (error) {
        return new Error("Невалидное значение");
    }
}



//Задача 2

class Triangle{
    constructor(partA,partB,partC){
        this.partA = partA;
        this.partB = partB;
        this.partC = partC;
        this.array = [this.partA, this.partB, this.partC];
        this.arr = this.array.sort((a,b) => b-a);
        if(this.arr[0]> this.arr[1] + this.arr[2]){
            throw new Error('Треугольник с такими сторонами не существует');
        } else{
            return this.arr[0]> this.arr[1] + this.arr[2]
        }
    }
    getPerimeter(){
        return this.arr[0] + this.arr[1] + this.arr[2];
    }
    getArea(){
        const sperimeter = this.getPerimeter()/2;
        const area = Math.sqrt(sperimeter*(sperimeter - this.partA)*(sperimeter - this.partB)*(sperimeter - this.partC)).toFixed(3)*1;
        return area;
    }
}
class otherTriangle{
    getArea(){
        return 'Ошибка! Треугольник не существует';
    };
    getPerimeter(){
        return 'Ошибка! Треугольник не существует';
    };
    
};
function getTriangle(a,b,c) {
    try{
        return new Triangle(a,b,c);
    } catch(error){
        return new otherTriangle();
    }   
}