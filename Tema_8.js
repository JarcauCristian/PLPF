const _ = require('underscore');

function mySum(array) {
    if (_.isEmpty(array))
    {
        return 0;
    }
    else
        return _.first(array) + mySum(_.rest(array));
}

console.log('Suma elementelor din sir este: ' + mySum([1, 2, 3, 4]));

function myMax(array, max) {
    max = max > _.first(array) ? max : _.first(array);
    if (_.isEmpty(array))
        return 0;
    else
        if (array.length === 1)
        {
            return max;
        }
        else
            return myMax(_.rest(array), max);
}

console.log('Maximul din sir este: ' + myMax([10, 2, 4, 3], _.first([10, 2, 4, 3])));

function myMean(array, mean, len) {
    if (_.isEmpty(array))
    {
        return mean / len;
    }
    else
        mean += mySum(_.rest(array), mean, len);
}

console.log('Media elementelor din sir este: ' + myMean([1, 2, 3, 4], 0, [1, 2, 3, 4].length));
