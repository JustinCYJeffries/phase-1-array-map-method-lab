const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  let letters = tutorials.map(char => char.split(' '));
  for (let word in letters) {
    for (let i = 0; i < letters[word].length; i++) {
      letters[word][i] = letters[word][i][0].toUpperCase() + letters[word][i].slice(1);
    }
    tutorials[word] = letters[word].join(' ');
  }
  return tutorials;
}
