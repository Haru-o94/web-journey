function ageInDays(age)
{
    let result = age * 365;
    return result;
}

function ageInHour(age)
{
    let result = age * 24;
    return result;
}

console.log(ageInHour(ageInDays(25)));

