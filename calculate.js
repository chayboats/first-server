export function dogToHumanYears(age) {
  const firstYear = 15;
  const secondYear = 9;
  const remainingYears = (age - 2) * 5;

  if(age == 0) {
   return `This dog's human age is somewhere between ${age} and ${firstYear} years old.`
  } 
  else if(age == 1) {
    return `This dog's human age is ${firstYear}.`
  }
  else {
    const totalYears = firstYear + secondYear + remainingYears;
    return`This dog's human age is ${totalYears}.`
  }
}
