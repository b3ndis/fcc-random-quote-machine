  const quotes = [{
    quote:"Life isn’t about getting and having, it’s about giving and being.",
    author:"Kevin Kruse",
    style: {
      fontFamily: "Helvetica",
      fontStyle: "italic"
    }
  },{
    quote:"Whatever the mind of man can conceive and believe, it can achieve.",
    author:"Napoleon Hill",
    style: {
      fontFamily: "Avenir",
      fontSize: "20px"
    }
  },{
    quote:"Strive not to be a success, but rather to be of value.",
    author:"Albert Einstein",
    style: {
      fontFamily: "Avenir",
      fontStyle: "italic",
      fontSize: "20px" 
    }
  },
  {
    "quote":"The most difficult thing is the decision to act, the rest is merely tenacity.",
    "author":"Amelia Earhart",
    style: {
      fontFamily: "Avenir",
      fontStyle: "italic",
      fontSize: "20px" 
    }
  },
  {"quote":"Every strike brings me closer to the next home run.","author":"Babe Ruth"},
  {"quote":"Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.","author":"Robert Frost"},
  {"quote":"I attribute my success to this: I never gave or took any excuse.","author":"Florence Nightingale"},
  {"quote":"You miss 100% of the shots you don’t take.","author":"Wayne Gretzky"},
  {
    quote:"I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.",
    author: "Michael Jordan",
    style: {
      fontFamily: "Avenir",
      fontStyle: "italic",
      fontSize: "16px" 
    }
  }];

export const getRandomQuote = () => {
  let idx = Math.floor((Math.random() * quotes.length));
  return quotes[idx];
}