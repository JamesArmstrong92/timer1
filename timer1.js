let arg = process.argv.slice(2);

arg.forEach((beep, index) => {
  let interval = 0;
  if (beep > 0) {
    setTimeout(() => {
      process.stdout.write('🚨🚨🚨');
      if (index === arg.length) {
        process.stdout.write('\n');
      }
    },beep * 500);
  }
});


