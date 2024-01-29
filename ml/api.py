import flask_cors
import flask
import requests
import pickle
import numpy as np
import pandas as pd
import tensorflow as tf
from sklearn.feature_extraction.text import CountVectorizer
import nltk
from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer
import re


app=flask.Flask(__name__)
app.config["DEBUG"]=True
app.config["CORS_HEADERS"]='Content-Type'
cors=flask_cors.CORS(app,resources={r"/predict":{"origins":"*"}})


def load_model():
    global cv
    library=pickle.load(open("vocab.pkl","rb"))
    cv=CountVectorizer(vocabulary=library)
    global model
    model=tf.keras.models.load_model("cnn.h5")
    global lable_index
    lable_index=pickle.load(open("lable_index.pkl","rb"))


app=flask.Flask(__name__)
@app.route('/',methods=['GET'])
def text_cleaning(text):
    lemmatizer=WordNetLemmatizer()
    text=text.lower()
    text=re.sub('\[.*?\]','',text)
    text=re.sub("\\W"," ",text)
    text=re.sub('https?://\S+|www\.\S+','',text)
    text=re.sub('<.*?>+','',text)
    text=re.sub('[%s]'%re.escape(string.punctuation),'',text)
    text=re.sub('\n','',text)
    text=re.sub('\w*\d\w*','',text)
    text=re.sub(' +',' ',text)
    text=[lemmatizer.lemmatize(token) for token in text.split(" ")]
    stop_words=stopwords.words('english')
    text=[lemmatizer.lemmatize(token) for token in text if token not in stop_words]
    text=" ".join(text)
    return text

def main():
    if flask.request.method=='GET':
        return(flask.render_template('index.html'))
@app.route('/predict',methods=['GET','POST'])
def predict():
    words=flask.request.form['words']
    words=text_cleaning(words)
    words=cv.transform([words])
    words=words.toarray()
    words=np.expand_dims(words,axis=2)
    prediction=model.predict(words)
    
    output=prediction[0]
    np.argmax(output)
    return flask.render_template('index.html',prediction_text='The pattern category is {}'.format(output))
if __name__=='__main__':
    load_model()
    app.run(debug=True,host='0,0,0,0',port=5000)
    