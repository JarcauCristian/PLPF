const meal = {
    description: 'Breakfast',
    calories: 400
};

meal.calories = 600;
console.log(meal.calories);

const newMeal = {
    ...meal,
    price: 6.0
}

console.log(newMeal)

console.log(newMeal.price)

const {description, calories} = meal;

console.log(description, calories)

const meals = [
{id: 1, description: 'Breakfast', calories: 420},
{id: 2, description: 'Lunch', calories: 520},
{id: 3, description: 'Snack', calories: 180}
];

console.log(meals);

const updatedMeals = [...meals];

console.log(updatedMeals);


const numbers = [1,2,3];
function doubleit(number){
    return number*2;
}
const doubledNumbers = numbers.map(doubleit);

console.log(numbers);
console.log(doubledNumbers);

function changeDescription(obj){
    if (obj.id == 2)
    {
        return {
            ...obj,
            description: 'Branch'
        }
    }
    return obj;
}

const newMeals = meals.map(changeDescription);

console.log(newMeals);

const newNewMeals = meals.filter(
    function(x) {
        if (x.id % 2 == 1)
        {
            return x;
        }
    }
);

console.log(newNewMeals);
