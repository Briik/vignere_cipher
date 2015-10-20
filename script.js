var message;
var keyword;
var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
var messageArray = message.split("");
var keywordArray = keyword.split("");
//
function encryptThis(message, keyword) {
  var messageNums = [];
  var keywordNums = [];
  var ciphertext = [];
  /*
  function getCipherOffset(messageArray, keywordArray, alphabet){
    var i = 0;
    while (alphabet[i] != messageArray[0]) {
      i++;
      console.log(alphabet[i])
    }
    var messageInit = alphabet[i];
    var o = 0;
    while (alphabet[o] != keywordArray[0]) {
      o++;
      console.log(alphabet[o])
    }
    var keyworkInit = alphabet[o];
    offset = keyworkInit - messageInit;
    console.log("The offset (K-M) is " offset);
    return offset;
  }*/
  function buildOutKeyword() {
    while (keywordArray.length < messageArray.length) {
      for (var i = 0; i < messageArray.length; i++) {
        keywordArray.push(messageArray[i]);
      }
    }
    console.log("Building-out keyword...");
    console.log(keywordArray);
  }

  function translateToNums() {
    for (var i = 0; i < messageArray.length; i++) {
      messageNums.push(alphabet.indexOf(messageArray[i]));
    }
    for (var i = 0; i < keywordArray.length; i++) {
      keywordNums.push(alphabet.indexOf(keywordArray[i]));
    }
  }

  function getCipherText() {
    for (var i = 0; i < messageArray.length; i++) {
      ciphertext[i] = alphabet[messageNums[i] + keywordNums[i];
      }
    }
    console.log("encrypted text: " + ciphertext);
    return ciphertext;
  }
