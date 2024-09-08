export const minusHandler = (number:number) => {
    const stringNumber = number.toString();
    const noMinus = stringNumber.replace(/-/g,'')
    if(number<0){
        const minusNum =  noMinus + '-'
        return minusNum
    }else{
        return stringNumber
    }
}