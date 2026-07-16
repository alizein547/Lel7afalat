# Seifeldin & Basmala — Interactive WhatsApp Invitation

## الملفات
- `index.html`: الدعوة التفاعلية.
- `assets/kids_photo.jpg`: صورة الدعوة.
- `calendar.ics`: حفظ الموعد على الموبايل.
- `google_apps_script_rsvp_backend.gs`: كود استقبال تأكيدات الحضور في Google Sheet وإرسالها على الإيميل.

## تشغيل التأكيدات RSVP
1. افتح Google Drive واعمل Google Sheet جديد باسم: `Seifeldin Basmala RSVP`.
2. من داخل الشيت: Extensions > Apps Script.
3. امسح الكود الموجود وانسخ كود ملف `google_apps_script_rsvp_backend.gs`.
4. غيّر السطر:
   `const OWNER_EMAIL = 'PUT_YOUR_EMAIL_HERE';`
   واكتب إيميلك.
5. اضغط Deploy > New deployment.
6. اختار Type: Web app.
7. Execute as: Me.
8. Who has access: Anyone.
9. انسخ رابط الـ Web App.
10. افتح `index.html` وابحث عن:
   `PASTE_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE`
   واستبدله برابط الـ Web App.

بعدها أي شخص يضغط Confirm Attendance:
- الرد يتسجل تلقائيًا في Google Sheet.
- يصلك إيميل بتفاصيل التأكيد.
- تقدر تفتح Google Sheet وتشوف اللي أكدوا الحضور في أي وقت.

## الموسيقى
لم أرفق أغنية “حسيني” لأن الأغاني التجارية لها حقوق استخدام. ضع ملف الأغنية المرخّص لديك داخل مجلد `assets` باسم:
`music.mp3`
وسيعمل زر الموسيقى تلقائيًا بعد فتح الدعوة.

## تحويلها إلى لينك واتساب
ارفع المجلد على Netlify أو Vercel أو أي استضافة Static Website.
أسرع طريقة Netlify:
1. افتح app.netlify.com
2. Add new site > Deploy manually
3. اسحب مجلد الدعوة أو ملف ZIP
4. سيظهر لك لينك مباشر ترسله على واتساب.
