const fs = require('fs');

// Function to extract features and format as ARFF.
function extractFeatures(smsData) {
  const featureSet_arr = smsData.map((text_line) => {
    const featureSet = [];

    // Feature 1: Number of Characters typed in a message
    const fn_CharCount = text_line.length;
    featureSet.push(fn_CharCount);

    // Feature 2: Number of Currency Symbols
    const fn_CurrencySymbol_count = df_CurrencySymbol_count(text_line);
    featureSet.push(fn_CurrencySymbol_count);

    // Feature 3: Number of Numeric Strings
    const fn_NumStr_count = df_NumStr_count(text_line);
    featureSet.push(fn_NumStr_count);

    // Feature 4: Frequency of the most popular term/word
    const fn_TermFreq = df_TermFreq(text_line);
    featureSet.push(fn_TermFreq);

    // Automatically assign class labels based on criteria
    const label = fn_label(text_line);
    featureSet.push(label);

    return featureSet.join(',');
  });

  return featureSet_arr;
}

function fn_label(line){
const parts = line.split(',');
  const fn_label = parts[parts.length - 1].trim();
  return fn_label;
}

// Function to calculate the number of characters in a text
function countCharacters(text) {
  return text.length;
}

// Function to count the number of currency symbols in a text
function df_CurrencySymbol_count(text) {
  const currencyRegex = /[$£€¥₹]/g;
  const matches = text.match(currencyRegex);
  return matches ? matches.length : 0;
}

// Function to count the number of numeric strings in a text
function df_NumStr_count(text) {
  const numericRegex = /\d+/g;
  const matches = text.match(numericRegex);
  return matches ? matches.length : 0;
}

// Function to calculate the frequency of the most popular term/word
function df_TermFreq(text) {
  const words = text.toLowerCase().split(' ');
  const freq = {};

  // Count the frequency of each word
  for (const word of words) {
    if (freq[word]) {
      freq[word]++;
    } else {
      freq[word] = 1;
    }
  }

  // Find the most popular term/word
  let mostPopularTerm = '';
  let maxFrequency = 0;
  for (const word in freq) {
    if (freq[word] > maxFrequency) {
      mostPopularTerm = word;
      maxFrequency = freq[word];
    }
  }

  return maxFrequency;
}

// Create an ARFF header
const arffHeader = `@relation text_lineSpamDetection\n
@attribute fn_CharCount numeric\n
@attribute fn_CurrencySymbol_count numeric\n
@attribute fn_NumStr_count numeric\n
@attribute fn_TermFreq numeric\n
@attribute class {spam, ham}\n
@Data`;

// Load the text_line smsData from a text file.
const smsData = fs.readFileSync('english_big.txt', 'latin1').toString().split('\n');

// Extract features and format as ARFF.
const featureSet_arr = extractFeatures(smsData);
const arffContent = [arffHeader, ...featureSet_arr].join('\n');
fs.writeFileSync('sms_spam_detection.arff', arffContent, 'utf-8');

// Indicate user that ARFF file has been generated
console.log('sms_spam_detection.arff has been generated. Please open it in WEKA to proceed further.')