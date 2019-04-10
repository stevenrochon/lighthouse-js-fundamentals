function loopyLighthouse(num) {
    if (num % 12 === 0) {
        return 'LoopyLighthouse';
    } else if (num % 4 === 0) {
        return 'Lighthouse';
    } else if (num % 3 === 0) {
        return 'Loopy';
    } else return num;
}


for (i = 100 ; i <= 200 ; i++) {
    console.log(loopyLighthouse(i));
}