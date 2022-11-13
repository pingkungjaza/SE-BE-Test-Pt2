//Pt2, Question 1
const arrayWord = ['AMOR', 'XISELA', 'JAMON', 'ROMA', 'OMAR', 'MORA', 'ESPONJA', 'RAMO', 'JAPONES',
    'ARMO', 'MOJAN', 'MARO', 'ORAM', 'MONJA', 'ALEXIS']

const groupWordSameLetter = (array) => {
    const arrayAllResult = []
    for (let i = 0; i < array.length; i++) {
        const arratResult = []
        const sortedLetter = sortLetter(array[i])
        const found = arrayAllResult.find((finding) => finding.includes(array[i]))

        if (!found) {
            array.map((value) => {
                const sortedMapLetter = sortLetter(value)
                if (sortedLetter === sortedMapLetter) arratResult.push(value)
            })
            arrayAllResult.push(arratResult)
        }
    }
    return arrayAllResult
}

const sortLetter = (word) => word.split('').sort().join('')

const printResult1 = (result) => {
    for (let i = 0; i < result.length; i++) {
        const joinWord = result[i].join(' - ')
        console.log(joinWord)
    }
}

const result1 = groupWordSameLetter(arrayWord);
printResult1(result1)


//Pt2, Question 2
// foo(bar) => foorab
// (bar) => rab
// foo(bar)blim => foorabblim
// foo(foo(bar))blim => foobaroofblim
const arrayWrapWord = ['foo(bar)', '(bar)', 'foo(bar)blim', 'foo(foo(bar))blim']

const unwrapSwap = (array) => {
    let unwrapSwap = []
    for (let i = 0; i < array.length; i++) {
        let letters = array[i].split();
        for (let j = 0; j < letters.length; j++) {
            let result = unwrapAndSwap(letters[j])
            while (result.includes('(')) result = unwrapAndSwap(result)
            unwrapSwap.push(result)
        }
    }
    return unwrapSwap
}

const unwrapAndSwap = (word) => {
    let result = ''
    let start = 0
    let end = 0

    for (let k = 0; k < word.length; k++) {
        if (word.charAt(k) === '(') start = k + 1
        if (word.charAt(k) === ')') {
            end = k;
            break;
        }
    }

    const detWord = word.substring(start, end)
    const swapped = swapLetter(detWord)
    const startWord = word.substring(0, start - 1)
    const endWord = ((end + 1) === word.length) ? '' : word.substring(end + 1, word.length - 1)
    result = startWord + swapped + endWord
    return result
}

const swapLetter = (word) => {
    let swapping = ''
    for (let k = 0; k < word.length; k++) {
        swapping += word[word.length - (k + 1)]
    }
    return swapping
}

const printResult2 = (result) => {
    for (let i = 0; i < result.length; i++) {
        const wordding = arrayWrapWord[i] + ' => ' + result[i]
        console.log(wordding)
    }
}

const result2 = unwrapSwap(arrayWrapWord);
printResult2(result2)