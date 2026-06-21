function solution(str){
    let strRevers = '';
    for(let i = str.length -1; i >= 0; i--){
        strRevers += str[i];
    }
    return strRevers
}