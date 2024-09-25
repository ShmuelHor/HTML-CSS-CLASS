const lodash = require("lodash");
const fs = require("fs");

async function ReadMyFile() {
    const text = await fs.readFileSync("data.txt", "utf-8");
    return text;
}

async function NumWordsUnFile(){
    return lodash.words(await ReadMyFile()).length;
}

async function aaa(){
    const data = await ReadMyFile();
    return lodash.reverse(data.split(" ")).join(" ");
}

async function bbb(){
    const data = await ReadMyFile();
    return lodash.uniq(data.split(" ")).join(" ");
}

async function ccc(){
    const data = await bbb();
    return lodash.words(data).length;
}

async function ddd() {
    let data = await ReadMyFile();
    let uniqueWords = lodash.uniq(data);
    return lodash.map(uniqueWords, word => lodash.toUpper(word));
 }
 

module.exports = {ReadMyFile, NumWordsUnFile,aaa,bbb,ccc,ddd}