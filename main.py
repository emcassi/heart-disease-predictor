import pandas as pd
from sklearn.tree import DecisionTreeClassifier
import sys


age = int(sys.argv[1])
sex = int(sys.argv[2])
chestPainType = int(sys.argv[3])
restingBP = int(sys.argv[4])
cholesterol = int(sys.argv[5])
fastingBS = int(sys.argv[6])
restingECG = int(sys.argv[7])
maxHR = int(sys.argv[8])
exerciseAngina = int(sys.argv[9])
oldPeak = float(sys.argv[10])
stSlope = int(sys.argv[11])

def predict (age, sex, chestPainType, restingBP, cholesterol, fastingBS, restingECG, maxHR, exerciseAngina, oldPeak, stSlope):
    df = pd.read_csv('data.csv')
    X = df.drop(columns=["HeartDisease"])
    y = df["HeartDisease"]
    model = DecisionTreeClassifier()
    model.fit(X, y)
    prediction = model.predict([[age, sex, chestPainType, restingBP, cholesterol, fastingBS, restingECG, maxHR, exerciseAngina, oldPeak, stSlope]])
    print(prediction.tolist())
    sys.stdout.flush()

predict(age, sex, chestPainType, restingBP, cholesterol, fastingBS, restingECG, maxHR, exerciseAngina, oldPeak, stSlope)