from pydantic import BaseModel, EmailStr

class StudentCreate(BaseModel):
    name: str
    email: EmailStr
    password: str
    rollNo: int
    department: str
    semester: int
    phone: str
    cgpa: float
    attendance: int