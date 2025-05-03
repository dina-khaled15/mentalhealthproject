const generateBubbles = () => {
    const newBubbles = [];
    for (let i = 1; i <= 100; i++) {
      const count = Math.floor(Math.random() * 10);
      newBubbles.push(count);
    }
    return newBubbles;
  };
  
  export default generateBubbles;
  