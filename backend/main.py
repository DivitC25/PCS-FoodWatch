from flask import Flask, jsonify

app = Flask(__name__)


def connectToSupabase(): 
    # TODO: 

@app.route("/")
def hello_world():
    return jsonify({"Hello": "World"})

if __name__ == "__main__":
    app.run(debug=True)
