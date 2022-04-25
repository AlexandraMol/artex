from flask import Flask, request, jsonify, session
from flask_bcrypt import Bcrypt
from flask_cors import CORS, cross_origin
from flask_session import Session
from config import ApplicationConfig
from models import db, User

#CUM SE DESCHIDE cu terminal bash
# $export FLASK_APP=server.py sau set FLASK_APP in cmd...
# flask run

def format_user(user):
    return {
        "id": user.id,
        "username": user.username,
        "email": user.email,
    }

app = Flask(__name__)
app.config.from_object(ApplicationConfig)

bcrypt = Bcrypt(app)
CORS(app, supports_credentials=True)
server_session = Session(app)
db.init_app(app)

with app.app_context():
    db.create_all()

@app.route("/@me")
def get_current_user():
    user_id = session.get("user_id")

    if not user_id:
        return jsonify({"error": "Unauthorized"}), 401
    
    user = User.query.filter_by(id=user_id).first()
    return jsonify({
        "id": user.id,
        "email": user.email
    }) 

@app.route("/register", methods=["POST"])
def register_user():
    email = request.json["email"]
    password = request.json["password"]
    username=request.json["username"]
    user_exists = User.query.filter_by(email=email).first() is not None

    if user_exists:
        return jsonify({"error": "User already exists"}), 409

    hashed_password = bcrypt.generate_password_hash(password)
    new_user = User(username=username, email=email, password=hashed_password)
    db.session.add(new_user)
    db.session.commit()
    
    session["user_id"] = new_user.id

    return jsonify({
        "id": new_user.id,
        "email": new_user.email
    })

@app.route("/login", methods=["POST"])
def login_user():
    email = request.json["email"]
    password = request.json["password"]

    user = User.query.filter_by(email=email).first()

    if user is None:
        return jsonify({"error": "Unauthorized"}), 404

    if not bcrypt.check_password_hash(user.password, password):
        return jsonify({"error": "Unauthorized"}), 401
    
    session["user_id"] = user.id

    return jsonify({
        "id": user.id,
        "email": user.email
    })

@app.route("/logout", methods=["POST"])
def logout_user():
    session.pop("user_id")
    return "200"


@app.route("/users", methods=["GET"])
def get_users():
    
    users=User.query.all() 
    
    if users is None:
        return jsonify({"error": "Users not found"}), 404
    
    
    users_list=[]
    
    for user in users:
        users_list.append(format_user(user))
   
    
    print(users_list)
    
    return jsonify({"users":users_list}),200
    


# Profile Page Routes

@app.route('/profile/<email>',methods=['GET'])
def get_profile(email):     
    
    user=User.query.filter_by(email=email).first()
    
    if user is None:
        return jsonify({"error": "Unauthorized"}), 404
    
    return jsonify({"username":user.username,"email":user.email}),200
    

@app.route('/profile/<email>',methods=['GET','PUT'])
def update_profile(email):
    
    password=request.json["password"]
    
    user=User.query.filter_by(email=email).first()
    
    if user is None:
        return jsonify({"error": "Unauthorized"}), 404
    
    user.password= bcrypt.generate_password_hash(password)
    db.session.commit()   
    
    return jsonify({
       "message": "Profile updated"
    })

if __name__ == "__main__":
    app.run(debug=True)