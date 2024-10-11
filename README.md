# Machine Learning based SMS Spam Filtering using Python3

## Part 1: Code Execution and ARFF File Generation

This document provides instructions for executing the Python code to extract features from SMS messages and generate an ARFF (Attribute-Relation File Format) file, which can be used with the WEKA machine learning tool.

### Prerequisites

Before you begin, ensure you have the following files in the same directory:

- `smsfiltering.py` (Python script for SMS spam filtering)
- `english_big.txt` (Dataset containing SMS messages)

### Step 1: Install Python 3

Make sure Python 3 is installed on your machine. You can check this by running the following command in your terminal or command prompt:

```
python3 --version
```

If you are using Windows, you may need to use:

```
python --version
```

If Python 3 is not installed, follow the instructions below based on your operating system:

**A. Windows**

1. Download the Python 3 installer from the official [Python website](https://www.python.org/downloads/).
2. Run the installer and make sure to check the box that says "Add Python to PATH" during installation.
3. Follow the prompts to complete the installation.

**B. Linux (Unix)**

- For Debian/Ubuntu-based distributions:

  ```
  sudo apt update
  sudo apt install python3
  ```

- For Red Hat/CentOS/Fedora:

  ```
  sudo yum install python3
  ```

- For Arch Linux:
  ```
  sudo pacman -S python
  ```

**C. macOS**

You can install Python 3 on macOS using Homebrew (a package manager for macOS). If Homebrew is not installed, you can install it from the [Homebrew website](https://brew.sh/).

1. Open a terminal.
2. Install Python 3 with Homebrew:
   ```
   brew install python
   ```

Alternatively, you can download the Python 3 installer from the official [Python website](https://www.python.org/downloads/) and follow the prompts to install it.

After installation, verify that Python 3 is installed correctly by running the command again:

```
python3 --version
```

or on Windows:

```
python --version
```

### Step 2: Install Required Libraries

You may need to install additional libraries for text processing. The `re` module for regular expressions is included in Python's standard library. If you wish to use additional libraries like `nltk`, install it using:

```
pip install nltk
```

### Step 3: Execute the Python Script

1. Open the terminal or command prompt.
2. Navigate to the directory containing `smsfiltering.py` and `english_big.txt`.
3. Run the script using the following command:

```
python3 smsfiltering.py
```

### Step 4: Verify ARFF File Generation

After the script runs successfully, it will generate a file named `sms_spam_detection.arff` in the same directory. This file is formatted for use with the WEKA machine learning tool.

---

## Part 2: Using WEKA for SMS Spam Detection

This section explains how to use WEKA to load the ARFF file and apply machine learning algorithms for SMS spam classification.

### Step 1: Install WEKA

If WEKA is not already installed, download it from the [WEKA website](https://waikato.github.io/weka-wiki/downloading_weka/).

### Step 2: Launch WEKA

1. Open the WEKA application on your system.

### Step 3: Load the ARFF File

1. Click on the **Explorer** button to open the Explorer interface.
2. Click **Open file** and navigate to the directory where the ARFF file is stored. Load the file, which contains the SMS spam dataset and its features.

### Step 4: Set the Class Attribute

1. After loading the dataset, select the attribute representing the class label, which should be "class" with values "spam" and "ham."

### Step 5: Select Classifiers

1. Click on the **Classify** tab in the Explorer interface.
2. In the **Classifier** section, select each of the following classifiers:
   - J48 (Decision Tree)
   - NaiveBayesMultinomial (Multinomial Naive Bayes)
   - IBk (K-Nearest Neighbors)
   - LibSVM (Support Vector Machine)
   - RandomForest (Random Forest)

### Step 6: Set Cross-Validation

1. WEKA performs cross-validation with **K=10** by default. You can retain these default settings.

### Step 7: Run the Classifiers

1. For each classifier selected in Step 5, click the **Start** button to run it on your dataset. WEKA will evaluate the classifier's performance using cross-validation.

### Step 8: Analyze the Results

1. Once classification is complete, WEKA will display performance metrics, including:
   - **Accuracy**
   - **True Positive Rate (TPR)**
   - **False Positive Rate (FPR)**

Note these metrics for each classifier to compare their performance. Repeat Step 7 for each of the five classifiers to assess which performs best in identifying SMS spam messages.

The classifier with the highest accuracy and favorable TPR/FPR values may be deemed the most suitable for your SMS spam detection task.
