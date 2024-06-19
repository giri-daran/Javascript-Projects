var lengthOfLastWord = function(s) {
   
   sentence = s.trim();
   const words = sentence.split(' ');
   const lastWord = words[words.length - 1];
   return lastWord.length;
};

// the problem is to find the length of last word in string
// lengthOfLastWord("hellow worldnsjhs")
// 10