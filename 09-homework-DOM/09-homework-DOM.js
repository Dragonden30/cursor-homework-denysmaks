function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    const amountOfNumbersInColor = 6;
    for (let i = 0; i < amountOfNumbersInColor; i++) {
      color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}

function generateBlocks(block) {
const mainBlock = document.getElementById(block);
const blocksAmount = 25;
mainBlock.innerHTML = ``;
   for (let i = 0; i < blocksAmount; i++) {
      const coloredBlock = document.createElement('div');
      coloredBlock.style.width = '50px';
      coloredBlock.style.height = '50px';
      coloredBlock.style.backgroundColor = getRandomColor();
      mainBlock.append(coloredBlock);
    }
  
return mainBlock;
}

generateBlocks(`main-block`);

//--------------ADVANCED

function generateBlocksInterval(block){
   setInterval(() => generateBlocks(block), 1000);
}

generateBlocksInterval(`cyclic-block`);