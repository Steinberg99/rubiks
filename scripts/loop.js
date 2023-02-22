// Loop to generate Css

const positionLoop = () => {
  let count = 0;
  let string = "";

  for (let z = 2; z >= -2; z--) {
    for (let y = -2; y <= 2; y++) {
      for (let x = -2; x <= 2; x++) {
        count++;

        string += ` 
          head[data-slider-1-value="5"] ~ body > main > div > div > div:nth-child(${count}) {
            ${x !== 0 ? `--x: ${x};` : ""}
            ${y !== 0 ? `--y: ${y};` : ""}
            ${z !== 0 ? `--z: ${z};` : ""}
          } 
        `;
      }
    }
  }

  console.log(string);
};

const imageLoop = () => {
  let count = 0;
  let string = "";

  for (let i = 0; i <= 4; i++) {
    for (let j = 0; j <= 4; j++) {
      count++;

      string += ` 
        head[data-slider-1-value="5"] ~ body > main:has(#add-image:checked) > div > div > div:nth-child(${count}) > span:nth-child(1) {
          background-position: ${j * 20}% ${i * 20}%;
        } 
      `;
    }
  }

  console.log(string);
};
