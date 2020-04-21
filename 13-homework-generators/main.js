function* createIdGenerator() {
    let i = 0;
    while(true){
        yield i++;
    };
};

const idGenerator = createIdGenerator();
const num = document.getElementById(`number`)
const btnGen = document.querySelector(".button-generator");
btnGen.onclick = function(){
    return num.innerHTML = `Type Home to generate number > ${idGenerator.next().value}. `;
};


const sizeFont = 14;
function* newFontGenerator(value) {
    while(true){
        let size = yield value;
        if(size === `up`) {
            ++value;
        };
        if(size === `down`) {
            --value;
        };
    };
};
const fontGenerator = newFontGenerator(sizeFont);

const btnUp = document.querySelector(".button-range-up");
const btnDown = document.querySelector(".button-range-down");
const text = document.getElementById(`text`);
btnUp.onclick = function() {
    return text.style.fontSize = fontGenerator.next(`up`).value + `px`;
};

btnDown.onclick = function() {
    return text.style.fontSize = fontGenerator.next(`down`).value + `px`;
};