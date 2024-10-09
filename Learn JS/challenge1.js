mark_mass = 45
mark_height = 150
john_mass = 30
john_height = 170

mark_bmi = mark_mass / mark_height ** 2
john_bmi = john_mass / john_height ** 2

markHigherBMI = mark_bmi > john_bmi
console.log(markHigherBMI)