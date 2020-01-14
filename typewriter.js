let scentence = 'hello there from lighthouse labs';
scentence += '\n'
count = 0;
for (const char of scentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, count += 50);
}