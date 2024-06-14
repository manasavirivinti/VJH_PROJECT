import streamlit as st
import joblib
import pandas as pd
import numpy as np
from sklearn.utils import shuffle
from sklearn.model_selection import train_test_split

df = pd.read_csv('dataset.csv')
df = shuffle(df,random_state=42)
for col in df.columns:
    df[col] = df[col].str.replace('_',' ')
cols = df.columns
data = df[cols].values.flatten()
s = pd.Series(data)
s = s.str.strip()
s = s.values.reshape(df.shape)
df = pd.DataFrame(s, columns=df.columns)
df = df.fillna(0)
df1 = pd.read_csv('Symptom-severity.csv')
df1['Symptom'] = df1['Symptom'].str.replace('_',' ')
vals = df.values
symptoms = df1['Symptom'].unique()
discrp=pd.read_csv("symptom_Description.csv")
ektra7at = pd.read_csv("symptom_precaution.csv")

def predict(l):  
    for i in range(len(symptoms)):
        vals[vals == symptoms[i]] = df1[df1['Symptom'] == symptoms[i]]['weight'].values[0]
    d = pd.DataFrame(vals, columns=cols)
    d = d.replace('dischromic  patches', 0)
    d = d.replace('spotting  urination',0)
    df = d.replace('foul smell of urine',0)
    data = df.iloc[:,1:].values
    labels = df['Disease'].values
    x_train, x_test, y_train, y_test = train_test_split(data, labels, train_size = 0.8,random_state=42)
    mj = joblib.load("random_forest.pkl")
    mj.fit(x_train,y_train)
    k=mj.predict(l) 
    return k.tolist()[0]


# Load your model here
model = joblib.load("random_forest.pkl")

def main():
    st.title('Disease Predictor')

    user_input = st.text_input('Enter Symptoms (e.g., symptom1 symptom2 ...)', '')

    if st.button('Predict'):
        psymptoms = user_input.split(' ')
        a = np.array(df1["Symptom"])
        b = np.array(df1["weight"])     
        for j in range(len(psymptoms)):
            for k in range(len(a)):
                if psymptoms[j].replace('_', ' ')==a[k]:
                    psymptoms[j]=int(b[k])
                    break
        psymptoms=psymptoms+[0]*(17-len(psymptoms))
        pred2=(predict([psymptoms]))
        disp= discrp[discrp['Disease']==pred2]
        
        disp = disp.values[0][1]
        c=np.where(ektra7at['Disease']==pred2)[0][0]
        precuation_list=[]
        for i in range(1,len(ektra7at.iloc[c])):
            precuation_list.append(ektra7at.iloc[c,i])
        st.write("The Disease Name: ",pred2)
        st.write("The Disease Discription: ",disp)
        st.write("Recommended Things to do at home: ")
        for i in precuation_list:
            st.write("=>" +i)
if __name__ == '__main__':
    main()
