from fastapi import FastAPI, HTTPException, Request,Form 
# from starlette.middleware.sessions import SessionMiddleware
from fastapi.templating import Jinja2Templates

app = FastAPI()

otp_storage = {}


templates = Jinja2Templates(
    directory="web"
)

#getting home page
@app.get("/")
def home(request: Request):

    return templates.TemplateResponse(
        request=request,
        name="home.html",
        context={}
    )

@app.get("/login")
def login_page(request:Request):
    return templates.TemplateResponse(
        request = request,
        name = "login.html",
        context={}
    )

#getting register page
@app.get("/RegisterPage")
def register_page(request:Request):
    return templates.TemplateResponse(
        request = request,
        name = "RegisterPage.html",
        context={}
    )

@app.post("/RegisterUserRequest")
def user_register(
    request:Request, fullname: str = Form(...), email: str = Form(...), password: str = Form(...), confirm_password: str = Form(...)
    ):
    from modules.emailService import sendEmail
    mail = sendEmail(email=email)
    sendOTP = mail.email_verification()
    otp_storage[email] = sendOTP

    return templates.TemplateResponse(
        request = request,
        name = "otpPage.html",
        context = {"email": email} 
    )


@app.post("/VerifyOTPRequest")
def verify_otp(request:Request, userOTP:str = Form(...), email: str = Form(...)):
    sendOTP = otp_storage.get(email)
    if userOTP == sendOTP:
        del otp_storage[email]
        return templates.TemplateResponse(
            request = request,
            name = "login.html",
            context = {}
        )
    
    return HTTPException(
        status_code=400,
        detail="Invalid OTP"
    )


