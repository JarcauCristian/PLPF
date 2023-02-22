const grade = 50 + Math.random()*50.0;
console.log(grade, letterGrade(grade));

function letterGrade(grade)
{
    grade = Math.round(grade);
    switch (true)
    {
        case (grade >= 60 && grade <= 69):
            return 'D';

        case (grade > 70 && grade <= 79):
            return 'C';
        
        case (grade > 80 && grade <= 89):
            return 'B';

        case (grade > 90 && grade <= 100):
            return 'A';
        
        default:
            return 'F';
    }
}