export {}

class EmployeeData {
    // constructorの省略記法
    constructor(
        public name: string,
        public department: string
    ) {}
}

 class PayCalculator {
    private getRegularHours() {
        console.log("給与計算ロジック")
    }

    calculatePay(employeeData: EmployeeData) {
        this.getRegularHours();
        console.log(`${employeeData.name}の給与計算をしました`)
    }
 }

class HourReporter {
    private getRegularHours() {
        console.log("労働時間レポート")
    }

    reportHours(employeeData: EmployeeData){
        this.getRegularHours();
        console.log(`${employeeData.name}の労働時間を計算をしました。`)
    }
}

class EmployeeRepository {
    save() {
        console.log("saveしました")
    }
}

function run() {
    const employeeData = new EmployeeData("鈴木", "人事")
    const payCalculator = new PayCalculator();
    const hourReporter = new HourReporter();

    payCalculator.calculatePay(employeeData)
    
}

run();
