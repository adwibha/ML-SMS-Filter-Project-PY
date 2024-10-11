import re

# Function to extract features and format as ARFF.
def extract_features(sms_data):
    feature_set_arr = []
    for text_line in sms_data:
        feature_set = []

        # Feature 1: Number of Characters typed in a message
        fn_char_count = len(text_line)
        feature_set.append(fn_char_count)

        # Feature 2: Number of Currency Symbols
        fn_currency_symbol_count = df_currency_symbol_count(text_line)
        feature_set.append(fn_currency_symbol_count)

        # Feature 3: Number of Numeric Strings
        fn_num_str_count = df_num_str_count(text_line)
        feature_set.append(fn_num_str_count)

        # Feature 4: Frequency of the most popular term/word
        fn_term_freq = df_term_freq(text_line)
        feature_set.append(fn_term_freq)

        # Automatically assign class labels based on criteria
        label = fn_label(text_line)
        feature_set.append(label)

        feature_set_arr.append(','.join(map(str, feature_set)))

    return feature_set_arr

def fn_label(line):
    parts = line.split(',')
    fn_label = parts[-1].strip()
    return fn_label

# Function to count the number of currency symbols in a text
def df_currency_symbol_count(text):
    currency_regex = r'[$£€¥₹]'
    matches = re.findall(currency_regex, text)
    return len(matches)

# Function to count the number of numeric strings in a text
def df_num_str_count(text):
    numeric_regex = r'\d+'
    matches = re.findall(numeric_regex, text)
    return len(matches)

# Function to calculate the frequency of the most popular term/word
def df_term_freq(text):
    words = text.lower().split(' ')
    freq = {}

    # Count the frequency of each word
    for word in words:
        if word in freq:
            freq[word] += 1
        else:
            freq[word] = 1

    # Find the most popular term/word
    max_frequency = 0
    for word in freq:
        if freq[word] > max_frequency:
            max_frequency = freq[word]

    return max_frequency

# Create an ARFF header
arff_header = """@relation text_lineSpamDetection

@attribute fn_CharCount numeric
@attribute fn_CurrencySymbol_count numeric
@attribute fn_NumStr_count numeric
@attribute fn_TermFreq numeric
@attribute class {spam, ham}
@Data"""

# Load the text_line smsData from a text file.
with open('english_big.txt', 'r', encoding='latin1') as file:
    sms_data = file.read().splitlines()

# Extract features and format as ARFF.
feature_set_arr = extract_features(sms_data)
arff_content = '\n'.join([arff_header] + feature_set_arr)

with open('sms_spam_detection.arff', 'w', encoding='utf-8') as file:
    file.write(arff_content)

# Indicate user that ARFF file has been generated
print('sms_spam_detection.arff has been generated. Please open it in WEKA to proceed further.')

