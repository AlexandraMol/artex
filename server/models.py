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


class Article(db.Model):
    __tablename__ = 'article'
    id = db.Column(db.String(32), primary_key=True, unique=True, default=get_uuid)
    user_id= db.Column(db.String(32),db.ForeignKey('user.id'))
    content = db.Column(db.Text, nullable=False)
    title=db.Column(db.String(100), nullable=False)

    
    analyses=db.relationship("Analysis",backref="article")

class Analysis(db.Model):
    __tablename__= 'analysis'
    id = db.Column(db.String(32), primary_key=True, unique=True, default=get_uuid)
    article_id= db.Column(db.String(32),db.ForeignKey('article.id'))
    content = db.Column(db.Text, nullable=False)
    type_of_analysis=db.Column(db.Integer,nullable=False)
    


