function charFreq(stri){
    const freq = {};
    const cleaned = stri.toLowerCase().replace(/[^a-z0-9]/g,'');
    for (let char of cleaned){
        freq[char] = (freq[char] || 0) + 1;
    }
    return freq;
}
console.log(charFreq("anticonstitutionally"))