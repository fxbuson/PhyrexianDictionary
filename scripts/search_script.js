const phonemes = [

  //each phoneme is listed with the place of articulation given in the article
  //plus "dental" if it actually sits between bilabial and alveolar
  //and "palatal" if it actually sits between alveolar and velar

  //nasals
  {ipa: "m", font: "m", qualities: ["voiced", "labial", "nasal", "consonant"]},
  {ipa: "n", font: "n", qualities: ["voiced", "alveolar", "nasal", "consonant"]},
  {ipa: "ŋ", font: "ŋ", qualities: ["voiced", "velar", "nasal", "consonant"]},
  {ipa: "ɴ", font: "ɴ", qualities: ["voiced", "uvular", "nasal", "consonant"]},

  //plosives
  {ipa: "p", font: "p", qualities: ["labial", "plosive", "consonant"]},
  {ipa: "t", font: "t", qualities: ["alveolar", "plosive", "consonant"]},
  {ipa: "k", font: "k", qualities: ["velar", "plosive", "consonant"]},
  {ipa: "q", font: "q", qualities: ["uvular", "plosive", "consonant"]},

  {ipa: "b", font: "b", qualities: ["voiced", "labial", "plosive", "consonant"]},
  {ipa: "d", font: "d", qualities: ["voiced", "alveolar", "plosive", "consonant"]},
  {ipa: "g", font: "g", qualities: ["voiced", "velar", "plosive", "consonant"]},
  {ipa: "ɢ", font: "ɢ", qualities: ["voiced", "uvular", "plosive", "consonant"]},

  {ipa: "ʔ", font: "'", qualities: ["glottal", "plosive", "consonant"]},

  {ipa:"pʰ", font: "φ", qualities: ["aspirated", "labial", "plosive", "consonant"]},
  {ipa:"tʰ", font: "ţ", qualities: ["aspirated", "alveolar", "plosive", "consonant"]},
  {ipa:"kʰ", font: "ķ", qualities: ["aspirated", "velar", "plosive", "consonant"]},
  {ipa:"qʰ", font: "ǥ", qualities: ["aspirated", "uvular", "plosive", "consonant"]},

  {ipa:"pʼ", font: "π", qualities: ["ejective", "labial", "plosive", "consonant"]},
  {ipa:"tʼ", font: "ť", qualities: ["ejective", "alveolar", "plosive", "consonant"]},
  {ipa:"kʼ", font: "ǩ", qualities: ["ejective", "velar", "plosive", "consonant"]},
  {ipa:"qʼ", font: "ǧ", qualities: ["ejective", "uvular", "plosive", "consonant"]},

  //fricatives
  {ipa: "f", font: "f", qualities: ["dental", "labial", "fricative", "consonant"]},
  {ipa: "θ", font: "θ", qualities: ["dental", "alveolar", "fricative", "consonant"]},
  {ipa: "x", font: "x", qualities: ["velar", "fricative", "consonant"]},
  {ipa: "χ", font: "χ", qualities: ["uvular", "fricative", "consonant"]},

  {ipa: "v", font: "v", qualities: ["voiced", "dental", "labial", "fricative", "consonant"]},
  {ipa: "ð", font: "ð", qualities: ["voiced", "dental", "alveolar", "fricative", "consonant"]},
  {ipa: "ɣ", font: "ɣ", qualities: ["voiced", "velar", "fricative", "consonant"]},
  {ipa: "ʁ", font: "ʁ", qualities: ["voiced", "uvular", "fricative", "consonant"]},

  {ipa: "h", font: "h", qualities: ["glottal", "fricative", "consonant"]},

  //sibilant fricatives
  {ipa: "s", font: "s", qualities: ["alveolar", "sibilant", "fricative", "consonant"]},
  {ipa: "ʃ", font: "š", qualities: ["palatal", "alveolar", "sibilant", "fricative", "consonant"]},

  {ipa: "z", font: "z", qualities: ["voiced", "alveolar", "sibilant", "fricative", "consonant"]},
  {ipa: "ʒ", font: "ž", qualities: ["voiced", "palatal", "alveolar", "sibilant", "fricative", "consonant"]},

  //sibilant affricates
  {ipa:"t̠ʃ", font: "č", qualities: ["palatal", "alveolar", "sibilant", "affricate", "consonant"]},

  {ipa:"d̠ʒ", font: "ǆ", qualities: ["voiced", "palatal", "alveolar", "sibilant", "affricate", "consonant"]},

  //approximants
  {ipa: "w", font: "w", qualities: ["voiced", "velar", "labial", "approximant", "consonant"]},
  {ipa: "j", font: "j", qualities: ["voiced", "palatal", "alveolar", "approximant", "consonant"]},
  {ipa: "ɰ", font: "ẅ", qualities: ["voiced", "velar", "approximant", "consonant"]},
  //note: if this turns out to be /ɥ/, add "labial" and "palatal" before "velar"

  //trill
  {ipa: "r", font: "r", qualities: ["voiced", "alveolar", "trill", "consonant"]},

  //lateral fricatives
  {ipa: "ɬ", font: "ɬ", qualities: ["alveolar", "lateral", "fricative", "consonant"]},

  {ipa: "ɮ", font: "ɮ", qualities: ["voiced", "alveolar", "lateral", "fricative", "consonant"]},

  //lateral approximant
  {ipa: "l", font: "l", qualities: ["voiced", "alveolar", "lateral", "approximant", "consonant"]},

  //high vowels
  {ipa: "i", font: "i", qualities: ["high", "front", "vowel"]},
  {ipa: "y", font: "y", qualities: ["high", "front", "rounded", "vowel"]},
  {ipa: "u", font: "u", qualities: ["high", "back", "rounded", "vowel"]},

  //mid vowels
  {ipa: "e", font: "e", qualities: ["mid", "front", "vowel"]},
  {ipa: "ø", font: "ø", qualities: ["mid", "front", "rounded", "vowel"]},
  {ipa: "o", font: "o", qualities: ["mid", "back", "rounded", "vowel"]},

  {ipa: "ə", font: "ə", qualities: ["mid", "central", "vowel"]},

  //low vowels
  {ipa: "a", font: "a", qualities: ["low", "front", "vowel"]},
  {ipa: "ɒ", font: "ɒ", qualities: ["low", "back", "rounded", "vowel"]}
];


const phyrexianKeyboard = document.getElementById("phyrexianKeyboard");
const keyboardRows = phyrexianKeyboard.getElementsByClassName("row");
const writingField  = document.getElementById("writingField");
const phyrexianText = document.getElementById("phyrexianText");


function createCharKey(char, phyrexian, transcription, notation, row) {

  keyboardRows[row].innerHTML +=
  "<div class=\"key col border text-center\" " +
  "onclick=\"writeToField(`" + char + "`);\">" +
  "<span class=\"vertical phyrexian\">" + phyrexian + "</span>" +
  "<span class=\"key-notation\"><br>" + notation + "</span>" +
  "</div>";
}

function createLetterKey(notation, row) {

  let template = phonemes.find(phoneme => (phoneme.ipa == notation) );

  if(template != undefined) {
    createCharKey(template.font, template.font, template.font, "/" + template.ipa + "/", row);
  }

}


function writeToField(text) {
  writingField.value += text;
  writeToUltimate();
}

function writeToUltimate() {
  phyrexianText.innerHTML = writingField.value;
}



//punctuation
//createCharKey("^", "^", "^", "^", 0);
//createCharKey(":", ":", ":", ":", 0); // "-" in real notation
//createCharKey(".", ".", ".", ".", 0);
//createCharKey("<br>", "", "↵", "↵", 0);

//nasals
createLetterKey("m", 0);
createLetterKey("n", 0);
createLetterKey("ŋ", 0);
createLetterKey("ɴ", 0);

//unvoiced plosives
createLetterKey("p", 1);
createLetterKey("t", 1);
createLetterKey("k", 1);
createLetterKey("q", 1);

//aspirated plosives
//ejective plosives
createLetterKey("pʼ", 2);
createLetterKey("pʰ", 2);

createLetterKey("tʼ", 2);
createLetterKey("tʰ", 2);

createLetterKey("kʼ", 2);
createLetterKey("kʰ", 2);

createLetterKey("qʼ", 2);
createLetterKey("qʰ", 2);

//voiced plosives
createLetterKey("b", 3);
createLetterKey("d", 3);
createLetterKey("g", 3);
createLetterKey("ɢ", 3);

//unvoiced fricatives
//voiced fricatives
createLetterKey("f", 4);
createLetterKey("v", 4);

createLetterKey("θ", 4);
createLetterKey("ð", 4);

createLetterKey("x", 4);
createLetterKey("ɣ", 4);

createLetterKey("χ", 4);
createLetterKey("ʁ", 4);

//unvoiced silibants
createLetterKey("s", 5);
createLetterKey("ʃ", 5);

//voiced silibants
createLetterKey("z", 5);
createLetterKey("ʒ", 5);

//laterals and trill
createLetterKey("ɬ", 6);
createLetterKey("ɮ", 6);
createLetterKey("l", 6);
createLetterKey("r", 6);

//affricates
createLetterKey("t̠ʃ", 7);
createLetterKey("d̠ʒ", 7);

//glottals
createLetterKey("ʔ", 7);
//createCharKey("'", "'", "'", "ʔ", 5);
createLetterKey("h", 7);

//approximants and schwa
createLetterKey("w", 8);
createLetterKey("j", 8);
createLetterKey("ɰ", 8);

createLetterKey("ə", 8);

//high vowels
createLetterKey("i", 9);
createLetterKey("y", 9);
createLetterKey("u", 9);

//mid vowels
createLetterKey("e", 9);
createLetterKey("ø", 9);
createLetterKey("o", 9);

//low vowels
createLetterKey("a", 9);
createLetterKey("ɒ", 9);

//space
//createCharKey("-", "-", "␣", "␣", 7) // " " in real notation

// --------------------  Osmago's Code  --------------------

const json = `{{ site.data.PhyrexianAPI | jsonify }}`

const query_obj = document.getElementById('cur_query');
const results = document.getElementById('search-results');

const data = JSON.parse(json)

function unvowel(phy){
  const vowels = 'aeiouyøɒə';
  for (v in vowels){
      phy = phy.replaceAll(vowels[v], '');
  }
  return phy;
}

function unmetalize(phy){
  const metalics = [['t','ţť'], ['g', 'ǥǧ'], ['k', 'ķǩ'], ['p', 'φπ']];

  for (cons in metalics){
      for (variant in metalics[cons][1]){
          phy = phy.replaceAll(metalics[cons][1][variant], metalics[cons][0]);
      }
  }
  return phy;
}

function Osmago_search(){
  query_obj.innerHTML = phyrexianText.innerHTML;
  var query = query_obj.innerHTML
  results.innerHTML = '';

  if (query != ''){
      const simplified_query = unmetalize(unvowel(query));
      for (idx in data.dictionary){
          let word = data.dictionary[idx].phyrexian;
          let simplified_word = unmetalize(unvowel(word));
          switch (data.dictionary[idx].type){
              case 'number':
              case 'marker':
                  if (query.includes(word)){
                    results.innerHTML += '<p><span class="phy_fonted">'+ word +'</span> - <a href="{{site.baseurl}}/entry?id='+ idx +'">'+ word +'</a> - '+ data.dictionary[idx].translation +'</p>';
                  }
                  break;
              default:
                  if (simplified_word.includes(simplified_query)){
                    results.innerHTML += '<p><span class="phy_fonted">'+ word +'</span> - <a href="{{site.baseurl}}/entry?id='+ idx +'">'+ word +'</a> - '+ data.dictionary[idx].translation +'</p>';
                  }
          }
      }
      for (idx in data.samples){
        let par = data.samples[idx].Regular;
        let simplified_par = unmetalize(unvowel(par));
        if (simplified_par.includes(simplified_query)){
          results.innerHTML += "<p><a class='hover-img-link' href='{{site.baseurl}}/sample?id="+ idx +"'>"+ data.samples[idx].Name +"<span><img src='{{site.baseurl}}/images/"+ data.samples[idx].Name +".jpg' height = '200px''></span></a></p>"
        }
      }
  }

  if (results.innerHTML == ''){
    results.innerHTML = 'No Results'
  }
}

function Osmago_font(){
  var keyboardKeys = phyrexianKeyboard.getElementsByClassName('key');
  for (idx of Array(keyboardKeys.length).keys()){
    var key = keyboardKeys[idx]
    if (key.innerHTML.includes('phyrexian')){
      key.innerHTML = key.innerHTML.replaceAll('vertical phyrexian', 'key-transcription')
    }
    else{
      key.innerHTML = key.innerHTML.replaceAll('key-transcription', 'vertical phyrexian')
    }
  }
}

writeToUltimate()
