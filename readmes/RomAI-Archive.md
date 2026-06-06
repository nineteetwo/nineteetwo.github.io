# Romato - Infliximab Treatment Response Prediction System

A machine learning project that predicts Rheumatoid Arthritis patients' response to the **Infliximab** drug based on their pre-treatment gene expression profiles.

## What Does It Do?

The Infliximab drug used in Rheumatoid Arthritis treatment does not show the same effect in every patient. While some patients respond to the treatment (**Responder**), others do not (**Non-Responder**).

By analyzing the gene expression data from blood samples taken before the patient starts treatment, this project:
- Predicts whether the patient will respond to the treatment or not
- Prevents unnecessary treatment trials
- Helps in planning personalized treatments

## Model Performance

| Metric | Value |
|--------|-------|
| Test Accuracy | **87.5%** |
| AUC-ROC | 0.85 |
| Number of Genes Used | 200 |
| Training Patient Count | 96 |
| Test Patient Count | 16 |

## How It Works?

1. The patient's pre-treatment gene expression data is obtained
2. Batch effect correction is applied
3. The most important 200 genes are selected
4. Prediction is made using the XGBoost model
5. Result: **Responder** or **Non-Responder**

## Files

| File | Description |
|-------|----------|
| `predict_87.py` | Main prediction model |
| `demo_page.py` | Demo HTML page generator |
| `demo_sonuclari.html` | Sample prediction results page |
| `gene_expression_extended.csv` | Gene expression data |
| `response_labels_extended.csv` | Treatment response labels |
| `test_ifx_metadata.csv` | Test patient information |
| `xgboost_model_final.pkl` | Trained model |

## Installation

```bash
# Clone the repository
git clone https://github.com/USERNAME/Romato.git
cd Romato

# Install requirements
pip install -r requirements.txt
```

## Usage

### Model Information
```bash
python predict_87.py
```

### Run Tests
```bash
python predict_87.py --test
```

### Generate Demo Page
```bash
python demo_page.py
```
Then open the `demo_sonuclari.html` file in your browser.

### TEST RESULTS FOR 2 SAMPLE PATIENTS
<img width="1144" height="416" alt="image" src="https://github.com/user-attachments/assets/10ec645d-88a6-4c6a-bcda-2ae64480c97b" />
<img width="1004" height="869" alt="image" src="https://github.com/user-attachments/assets/8cde968b-105e-4520-aedb-3a6893fc1475" />
<img width="1000" height="864" alt="image" src="https://github.com/user-attachments/assets/db42a069-c3f8-4642-97be-cd263ba137f9" />
<img width="1020" height="271" alt="image" src="https://github.com/user-attachments/assets/b44f5d08-e074-4002-ae22-070ffe380098" />





## Data Sources

The data used in the project were obtained from the GEO (Gene Expression Omnibus) database:
- GSE58795
- GSE78068

## Technologies

- Python 3
- XGBoost
- Scikit-learn
- Pandas / NumPy

## Example Output

```
[+] 58795_Subject 407  | Actual: RESPONDER     | Prediction: RESPONDER     | Confidence: 97.8%
[+] 78068_35           | Actual: NON_RESPONDER | Prediction: NON_RESPONDER | Confidence: 72.4%
```

## License

MIT License
