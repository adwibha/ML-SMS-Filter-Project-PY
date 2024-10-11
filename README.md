### Machine Learning based SMS Spam Filtering

#### Part 1: Code Execution and ARFF File Generation

Follow the instructions below to execute the code and generate the ARFF (Attribute-Relation File Format) file for use with the WEKA machine learning tool.

1. **Ensure Required Files Are in the Same Directory:**

   - `smsfiltering.js`
   - `english_big.txt`

2. **Open the Working Directory:**

   - Use the command prompt (Windows) or terminal (Linux/macOS) to navigate to the directory containing the files.

3. **Node.js Installation:**
   - The code is written in JavaScript and requires Node.js to run. Ensure Node.js is installed on your machine.
4. **If Node.js Is Installed:**

   - Skip to Step 6 to execute the code directly.

5. **Installing Node.js:**
   If Node.js is not already installed, follow the steps below:

   **A. Install Node.js:**

   - **Windows**: Download and install Node.js from the official website [Node.js](https://nodejs.org/).
   - **Linux**:

     - On Ubuntu or Debian:
       ```bash
       sudo apt update
       sudo apt install nodejs
       ```
     - On Red Hat, CentOS, or Fedora:
       ```bash
       sudo yum install nodejs
       ```
       Ensure you install Node Package Manager (npm) as well.

   - **macOS**: Install Node.js using Homebrew:
     1. If Homebrew is not installed, follow instructions on [Homebrew's website](https://brew.sh/).
     2. After installing Homebrew, run:
        ```bash
        brew install node
        ```

   **B. Running JavaScript Code:**

   - **Command Line**:

     1. Open the terminal or command prompt.
     2. Navigate to the directory where `smsfiltering.js` is located.
     3. Execute the script with:
        ```bash
        node smsfiltering.js
        ```

   - **Using an IDE**: If you're using an IDE like Visual Studio Code, open the `.js` file and run the script using the integrated terminal. Simply execute:
     ```bash
     node smsfiltering.js
     ```

   **C. Viewing the Output:**

   - The terminal will display the output of the script. For debugging or testing, you can use `console.log()` to print specific messages or data in the code.

6. **Execute the Code:**
   Run the following command in the terminal:

   ```bash
   node smsfiltering.js
   ```

7. **ARFF File Generation:**
   The script will generate an ARFF file. This file format is used by WEKA for machine learning tasks, including SMS spam filtering.

---

#### Part 2: Using WEKA for SMS Spam Detection

This section explains how to use WEKA to load the ARFF file and apply machine learning algorithms for SMS spam classification. You will use the following five classifiers with cross-validation: **Decision Tree (J48), Multinomial Naive Bayes, K-Nearest Neighbors (KNN), SVM (LibSVM), and RandomForest**. Afterward, you will analyze the results for Accuracy, True Positive Rate (TPR), and False Positive Rate (FPR) for each classifier.

##### Step 1: Launch WEKA

1. **Install WEKA**: If WEKA is not already installed, download it from the [WEKA website](https://waikato.github.io/weka-wiki/downloading_weka/).
2. **Run WEKA**: Open the WEKA application on your system.

##### Step 2: Load the ARFF File

3. In WEKA, click on the **Explorer** button to open the Explorer interface.
4. Click **Open file** and navigate to the directory where the ARFF file is stored. Load the file, which contains the SMS spam dataset and its features.

##### Step 3: Set the Class Attribute

5. After loading the dataset, select the attribute representing the class label. In this case, it should be "class" with values "spam" and "ham." This attribute will be used for binary classification.

##### Step 4: Select Classifiers

6. Click on the **Classify** tab in the Explorer interface.
7. In the **Classifier** section, select each of the following classifiers:
   - J48 (Decision Tree)
   - NaiveBayesMultinomial (Multinomial Naive Bayes)
   - IBk (K-Nearest Neighbors)
   - LibSVM (Support Vector Machine)
   - RandomForest (Random Forest)

##### Step 5: Set Cross-Validation

8. WEKA performs cross-validation with **K=10** by default. You can retain these default settings.

##### Step 6: Run the Classifiers

9. For each classifier selected in Step 4, click the **Start** button to run it on your dataset. WEKA will evaluate the classifier's performance using cross-validation.

##### Step 7: Analyze the Results

10. Once classification is complete, WEKA will display performance metrics, including:

- **Accuracy**
- **True Positive Rate (TPR)**
- **False Positive Rate (FPR)**

Note these metrics for each classifier to compare their performance.

Repeat **Step 6** for each of the five classifiers to assess which performs best in identifying SMS spam messages. The classifier with the highest accuracy and favorable TPR/FPR values may be deemed the most suitable for your SMS spam detection task.
