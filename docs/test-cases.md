# Blood Donor Finder – Test Cases

## 1. Introduction

This document describes the test cases for the Blood Donor Finder application. These test cases help verify the major features and expected behaviour of the system.

## 2. Test Cases

| Test ID | Test Scenario | Expected Result |
|---|---|---|
| TC01 | Register a donor with valid details | Donor registration should be successful. |
| TC02 | Register without entering a name | System should display a validation error. |
| TC03 | Select a blood group | Selected blood group should be saved correctly. |
| TC04 | Submit a blood request with valid details | Blood request should be created successfully. |
| TC05 | Search for compatible donors | Matching donors should be displayed. |
| TC06 | Search donors within 3 KM | Nearby eligible donors should be displayed. |
| TC07 | No eligible donor found within 3 KM | Search radius should expand according to project rules. |
| TC08 | Donor does not meet eligibility criteria | Donor should not appear in eligible results. |
| TC09 | Access donor contact information without acceptance | Contact information should remain hidden. |
| TC10 | Admin verifies a donor account | Verification status should be updated. |

## 3. Important Validation Checks

- Required fields should not be empty.
- Email and contact details should be validated.
- Blood group selection should be restricted to valid options.
- Only eligible donors should appear in matching results.
- Donor privacy should be maintained.
- Admin actions should require appropriate authorization.

## 4. Conclusion

These test cases provide a basic testing checklist for the Blood Donor Finder application. They can be updated as new features are developed and implemented.

**Note:** These are proposed test cases. Actual execution and results should be recorded after the application is implemented.
