function getChineseChar(string) {
    return new Promise(resolve => {
        const time = 50;
        setTimeout(() => {
            resolve(String.fromCharCode(string));
        }, time);
    })
}

async function getRandomChinese(length) {
    let result = '';
    while (length > 0) {
        const sign = Date.now().toString().split('').reverse().slice(0,5).join(''); 
        result += await getChineseChar(sign);
        length--;
    }
    return new Promise(resolve => {
        resolve(result);
    })
}

getRandomChinese(8).then(result => {
    const china = document.getElementById(`result`);
    china.innerText = `${result}`;
    console.log(result);
}).catch(err=> {
    console.log(`Oppsei: ${err}`);
});
