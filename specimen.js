// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (number, array) => {
  return {
    specimenNum: number,
    dna: array,

    mutate () {
      dnaIndex = Math.floor(Math.random() * this.dna.length)
      newBase = returnRandBase()
      while (this.dna[dnaIndex] === newBase) {
        newBase = returnRandBase()
      }
      this.dna[dnaIndex] = newBase

    },
    compareDNA (sampleTwo) {
      let identicality = 0
      for (let x = 0; x < this.dna.length; x++) {
        if (this.dna[x] === sampleTwo.dna[x]) {
          identicality++
        }
      }
      identicality /= 15;
      console.log(`specimen #1 and specimen #2 have ${Math.round(identicality * 100)}% in common`)
    },

    willLikelySurvive () {
      let dnaCounter = 0
      for (let y = 0; y < this.dna.length; y++) {
        if (this.dna[y] === 'C' || this.dna[y] === 'G') {
          dnaCounter++
        }
      }
      return dnaCounter >= 9 ? true : false
    }
  }
}

let pAequor = []
let specimenNum = 0
while (pAequor.length < 30) {
  let specimen = pAequorFactory(specimenNum, mockUpStrand())
  if (specimen.willLikelySurvive() === true) {
    pAequor.push(specimen)
  }
  specimenNum++
}
console.log(pAequor)