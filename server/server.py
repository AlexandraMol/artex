from flask import Flask
from flask_sqlalchemy import SQLAlchemy

#CUM SE DESCHIDE cu terminal bash
# $export FLASK_APP=server.py sau set FLASK_APP in cmd...


app = Flask(__name__)

# app.config["SQALCHEMY_TRACK_MODIFICATIONS"]= False
app.config['SECRET_KEY']='53771ba905ebfef9bea00817b7940829'
# app.config['SQLALCHEMY_DATABASE_URI']='postgresql://postgres:parola@localhost:5000/artex_db'
app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///artex.db'


db=SQLAlchemy(app)


@app.route("/")
def members():
    return {"members":["Member1","Member2","Member3"]}



class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username=db.Column(db.String(120),unique=True,nullable=False)
    
    def __repr__(self):
        return f"User('{self.username}')"
        
if __name__=="__main__":
    
    app.run(debug=True)