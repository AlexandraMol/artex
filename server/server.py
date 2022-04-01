from flask import Flask
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)

@app.route("/")
def members():
    return {"members":["Member1","Member2","Member3"]}

# app.config["SQALCHEMY_TRACK_MODIFICATIONS"]= False
app.config['SECRET_KEY']='53771ba905ebfef9bea00817b7940829'
# app.config['SQLALCHEMY_DATABASE_URI']='postgresql://postgres:parola@localhost:5000/artex_db'
app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///artex.db'
db=SQLAlchemy(app)

class Person(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name=db.Column(db.String(120),unique=False)
    
    def __init__(self, name):
        self.name=name
        
if __name__=="__main__":
    db.create_all()
    app.run(debug=True)