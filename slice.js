const address = "   123 Main Street   ";

console.log(address);
console.log(address.trim());

const part = address.slice(3, 11);
console.log(part);

const sentence = "The quick brown fox jumps over the lazy dog.";
const word = sentence.slice(16, 19);
console.log(word);

console.log(sentence.split(" "));
console.log(sentence.split("a"));


const friends = "Alice, Bob, Charlie, David";
const friendList = friends.split(", ");
console.log(friendList);

const realFriend = [ "Alice", "Bob", "Charlie", "David" ];
console.log(realFriend);
console.log(realFriend.join("|"));