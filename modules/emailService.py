import secrets
import smtplib
from email.message import EmailMessage

class sendEmail:
    def __init__(self, email: str):
        self.email = email

    def email_verification(self):
        otp = str(secrets.randbelow(900000) + 100000)
        
        msg = EmailMessage()
        msg["subject"] = "Email Verification for QuadraX"
        msg["from"] = "tees.cycle@gmail.com"
        msg["to"] = self.email

        # agar email client HTML support na kare
        msg.set_content(f"Your OTP is: {otp} for email verification in QuadraX BloodDonor Finder.")

        # Sundar sa bale bale sabha sabha 
        html_content = f"""
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body {{
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f7;
                    margin: 0;
                    padding: 0;
                }}
                .email-container {{
                    max-width: 600px;
                    margin: 20px auto;
                    background: #ffffff;
                    border-radius: 8px;
                    overflow: hidden;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
                }}
                .email-header {{
                    background-color: #e63946;
                    color: #ffffff;
                    padding: 20px;
                    text-align: center;
                    font-size: 24px;
                    font-weight: bold;
                }}
                .email-body {{
                    padding: 30px;
                    color: #333333;
                }}
                .otp-box {{
                    background-color: #f8f9fa;
                    border: 2px dashed #e63946;
                    color: #2b2d42;
                    font-size: 32px;
                    font-weight: bold;
                    letter-spacing: 5px;
                    text-align: center;
                    padding: 15px;
                    margin: 20px 0;
                    border-radius: 6px;
                }}
                .email-footer {{
                    background-color: #f1f1f1;
                    padding: 15px;
                    text-align: center;
                    font-size: 12px;
                    color: #777777;
                }}
            </style>
        </head>
        <body>
            <div class="email-container">
                <div class="email-header">
                    QuadraX BloodDonor Finder
                </div>
                <div class="email-body">
                    <p>Hello,</p>
                    <p>Thank you for registering with us. To complete your email verification, please use the One-Time Password (OTP) below:</p>
                    
                    <div class="otp-box">{otp}</div>
                    
                    <p>This OTP is valid for a limited time. Please do not share this OTP with anyone.</p>
                    <p>Best regards,<br><strong>Team QuadraX</strong></p>
                </div>
                <div class="email-footer">
                    &copy; 2026 QuadraX. All rights reserved.
                </div>
            </div>
        </body>
        </html>
        """

        # HTML content ko email me add karne ke liye ye line yaad krna h sahil okk 
        msg.add_alternative(html_content, subtype='html')

        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
            server.login("tees.cycle@gmail.com", "sehq gxve rngz duud")
            server.send_message(msg)

        return otp