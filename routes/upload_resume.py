from flask import Blueprint, jsonify , render_template , request, send_from_directory
from pyresparser import ResumeParser
upload_resume_bp = Blueprint('upload_resume', __name__)
import nltk
import os
nltk.download('stopwords')

@upload_resume_bp.route("/upload-resume", methods=["GET","POST"])
def upload_resume():
    # Code to handle resume upload from user end    
    if(request.method == 'POST'):
        file = request.files['file']
        path = os.path.join(os.getcwd(),f"uploads/{file.filename}")
        file.save(path)
        data = ResumeParser(path).get_extracted_data()
        # if request.method == "GET":
        #   return "<h1>Upload your resume via POST</h1>"
        # if request.method == "POST":
        #     uploaded_file = request.files.get("file")
        # if uploaded_file:
        #     # Save or process file here...
        #     return "File uploaded successfully!"
        # return "No file uploaded", 400
        return jsonify({"filename":data})
    # else:
    #     return send_from_directory('templates', 'upload.html')
    # else:
    #     return render_template('upload.html')
    # replace the output with appriopriate data
    