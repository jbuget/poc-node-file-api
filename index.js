const fs = require('fs');

const fd = fs.open('emails.csv', 'a', (err, fd) => {

  if (err) throw err;

  const emails = ['jsnow@winterfell.got', 'daenerys@argaryen.got', 'tyrion@lannister.got', 'astark@winterfell.got'];

  for (let email of emails) {
    fs.writeSync(fd, email + "\n");
  }

  fs.close(fd, err => {

    if (err) throw err;

    console.log('Done.');
  });

});

