const grade = 50 + Math.random()*50.0;
console.log(grade, letterGrade(grade));

function letterGrade(grade)
{
    grade = Math.round(grade);

    switch (grade)
    {
        case grade > 60 && grade <= 69:
            return 'D';

        case grade > 69 && grade <= 79:
            return 'C';
        
        case grade > 79 && grade <= 89:
            return 'B';

        case grade > 89 && grade <= 100:
            return 'A';
        
        default:
            return 'F';
    }
}