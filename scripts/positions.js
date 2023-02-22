// Loop to generate Css

const loop = () => {
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

loop();
