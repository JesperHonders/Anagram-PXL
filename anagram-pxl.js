const wordList = [
'silent',
'rope',
'pore',
'repo',
'red rum',
'murder',
'listen',
'endeavour',
]

/**
 * @description takes a string and sorts it alphabeticly into a string stripped from whitespaces
 * @param {String} word Example: "endeavour"
 * @returns {String} Example: "adeenoruv"
 */

const simplifyWord = function (word) {
    return word.replace(/\s/g, '').toLowerCase().split('').sort().join('')
}

/**
 * @description takes an array of strings and returns a array containing words grouped into arrays based on characters in common, "anagram"
 * @param {Array} wordList Example: [ 'rope', 'pore', 'repo', 'endeavour']
 * @returns {Array} example: [  [ 'rope', 'pore', 'repo' ], [endeavour] ]
 */

const filterAnagramsFromList = function (wordList) {

    let anagramsDictionary = {}
    let anagramsList = []

    for (let word of wordList){
        let hash = simplifyWord(word)
        anagramsDictionary[hash] = anagramsDictionary[hash] || []
        anagramsDictionary[hash].push(word)
    }

    for (let key in anagramsDictionary){
        anagramsList.push(anagramsDictionary[key])
    }

    return (anagramsList)
}

console.log(filterAnagramsFromList(wordList))