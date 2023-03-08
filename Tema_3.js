// 1
const data = new Date();

const dt1 = (data) => {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return `${data.getDate()} ${months[data.getMonth()]} ${data.getFullYear()}`;
};

const dt2 = (data) => {
    let months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    let days = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
    return `${data.getFullYear()}-${months[data.getMonth()]}-${days[data.getDate()-1]}`;
};

const dt3 = (data) => {
    let months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    let days = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
    return `${data.getFullYear()}/${months[data.getMonth()]}/${days[data.getDate()-1]}`;
};

const dt4 = (data) => {
    let months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    let days = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
    return `${days[data.getDate()-1]}/${months[data.getMonth()]}/${data.getFullYear()}`;
};

const dt5 = (data) => {
    let months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    let days = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
    return `${months[data.getMonth()]}/${days[data.getDate()-1]}/${data.getFullYear()}`;
};

dates = [dt1, dt2, dt3, dt4, dt5];
dates.forEach((element) => {
    console.log(element(data));
});

console.log();

// 2

const meal = {
    id:1,
    description: 'Breakfast'
};
const updatedMeal = {
    ...meal,
    description: 'Brunch',
    calories:600
};
    
const functionAsObjectProperty = {
    print: (lista) => {
        lista.forEach((element) => {
            console.log("Id: " + element.id + " |", "Description: " + element.description);
        });
    }
};
    
functionAsObjectProperty.print([meal,updatedMeal])

console.log()

// 3
const dailymeal = [
    {description: 'Mic dejun', calories: 100},
    {description: 'Pranz', calories: 500},
    {description: 'Cina', calories: 300}
]

const totalCalories = (dailymeal) => {
    let s = 0;
    for (var i of dailymeal)
    {
        s += i.calories;
    }
    return s;
};

console.log("Totalul caloriilor: " + totalCalories(dailymeal));
