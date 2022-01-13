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

function titleCased(){
  return tutorials.map((title) => {
 
    const wordsArray = title.split(" ")
    // => ['what', 'does', 'the', 'this', 'keyword', 'mean?']
    const capWords = wordsArray.map(word => {
      return word[0].toUpperCase() + word.slice(1)
    })
    // => ['What', 'Does', 'The', 'This', 'Keyword', 'Mean?']

    return capWords.join(" ")

  })

}


// for (const title of tutorials)
// concat
// iterate through each item 
// return

// (tutorials.map((element)=>element)

