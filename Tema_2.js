const meal = {
    description: 'Dinner'
};

const newMeal = {
    ...meal,
    calories: 200
};

console.log("Meal + calories:", newMeal);

const meal2 = {
    ...newMeal,
    calories: newMeal.calories + 100
}

console.log("Meal + calories incremented:", meal2);

const mealDelCal = {
    ...meal2
}

delete mealDelCal.calories;

console.log("Meals - calories:", mealDelCal);
    
const dailymeal = [
    {description: 'Mic dejun', calories: 100},
    {description: 'Pranz', calories: 500},
    {description: 'Cina', calories: 300}
]

console.log(dailymeal);

function totalCalories(dailymeal) {
    let suma = 0;
    for (i of dailymeal) {
        suma += i.calories;
    }
    return suma;
}

const totalCal = totalCalories(dailymeal);

console.log("Total calorii:", totalCal);

const friends = ["Ion", "Daniel"];

console.log("\nFriends:", friends);

const updatedFriends = [...friends, "Florin"];

console.log("updatedFriends:", updatedFriends);

const friendsLength = updatedFriends.map(
    function(x) {
        return x.length;
    }
);

console.log("Friends Length:", friendsLength);

const shorterFriends = updatedFriends.filter(
    function(x) {
        if (x.length != Math.max(...friendsLength))
        {
            return x;
        }
    }
);

console.log("Shorter Friends:", shorterFriends);
