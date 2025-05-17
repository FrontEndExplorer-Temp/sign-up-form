# 🔐 Sign Up Page

A clean, responsive sign-up form inspired by modern onboarding experiences. Built with **HTML**, **CSS**, and **JavaScript** — this project includes client-side form validation, error handling, and a mobile-friendly layout.



---

## 🚀 Features

- Responsive two-column layout
- Inline form validation with helpful error messages
- Password confirmation validation
- Custom styling with consistent branding
- No alert popups — all feedback is shown inline
- Layout built with Flexbox

---

## 🛠️ Built With

- HTML5
- CSS3
- JavaScript (Vanilla)

---

## 📸 Screenshot

Include a preview of your form UI:

![Sign Up Form Preview](/src/images/screenshot.png)


---

## 🧪 Validation Logic

- Validates each input field on "Create Account" button click
- Button is placed **outside the `<form>`** but still triggers form submission
- Uses regular expressions to validate:
  - Email format
  - Phone number (10-digit)
- Password must be at least 6 characters
- Confirms that both password fields match
- Errors are displayed inline in red

---

## 🧾 How to Run

```bash
# 1. Clone the repository
git clone https://github.com/FrontEndExplorer-Temp/sign-up-form.git

# 2. Navigate into the folder
cd sign-up-form

# 3. Open the file in your browser
open index.html   # or double-click index.html
