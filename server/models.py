from flask_sqlalchemy import SQLAlchemy
from uuid import uuid4

db=SQLAlchemy()

def get_uuid():
    return uuid4().hex

class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.String(32), primary_key=True, unique=True, default=get_uuid)
    username=db.Column(db.String(255), unique=True)
    email = db.Column(db.String(345), unique=True)
    password = db.Column(db.Text, nullable=False)
    
    articles=db.relationship("Article",backref="user")

    def __init__(self,username,email,password):
        self.username = username
        self.email = email
        self.password = password






class Article(db.Model):
    __tablename__ = 'article'
    id = db.Column(db.String(32), primary_key=True, unique=True, default=get_uuid)
    user_id= db.Column(db.String(32),db.ForeignKey('user.id'))
    content = db.Column(db.Text, nullable=False)
    title=db.Column(db.String(100), nullable=False)

    
    analyses=db.relationship("Analysis",backref="article")

    def __init__(self,user_id,content,title):
        self.user_id = user_id
        self.content = content
        self.title = title
        


class Analysis(db.Model):
    __tablename__= 'analysis'
    id = db.Column(db.String(32), primary_key=True, unique=True, default=get_uuid)
    article_id= db.Column(db.String(32),db.ForeignKey('article.id'))
    content = db.Column(db.Text, nullable=False)
    type_of_analysis=db.Column(db.Integer,nullable=False)
    
    def __init__(self,content,type_of_analysis):
        self.content = content
        self.type_of_analysis = type_of_analysis

   
