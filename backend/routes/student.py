from fastapi import APIRouter, HTTPException

from firebase.firebase_config import db, firebase_auth
from models.student import StudentCreate

router = APIRouter(prefix="/student", tags=["Student"])


@router.post("/create")
def create_student(student: StudentCreate):

    try:

        # Create Firebase Authentication user
        user = firebase_auth.create_user(
            email=student.email,
            password=student.password,
            display_name=student.name,
        )

        # Save in Firestore
        db.collection("students").document(user.uid).set({
            "uid": user.uid,
            "name": student.name,
            "email": student.email,
            "rollNo": student.rollNo,
            "department": student.department,
            "semester": student.semester,
            "phone": student.phone,
            "cgpa": student.cgpa,
            "attendance": student.attendance,
            "role": "student"
        })

        return {
            "success": True,
            "uid": user.uid,
            "message": "Student Created Successfully"
        }

    except Exception as e:
        raise HTTPException(
            status_code=400,
            detail=str(e)
        )