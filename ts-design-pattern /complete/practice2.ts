// クラス図 演習2

class Client {
    private shape: Shape;
}

interface Shape {
    clalcArea(): number;
}

class Rectangle implements Shape {
    private width: number;
    private height: number;

    clalcArea(): number {
        return this.width * this.height
    }
}

class Circle implements Shape {
    private radius: number;

    clalcArea(): number {
        return this.radius * this.radius * Math.PI
    }
}
