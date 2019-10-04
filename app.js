const student = (score) => {
    if(score >= 90){
        return 'Excellent'
    }
    if(score >= 75 && score <= 89){
        return 'veryGood'
    }
    if(score >= 65 && score <=74){
        return 'Good'
    }
    if(score >= 55 && score <=64){
        return 'Average'
    }
    if(score >= 45 && score <=54){
        return 'Poor'
    }
    if(score <= 45){
        return 'Fail'
    }
}

console.log(student(55));