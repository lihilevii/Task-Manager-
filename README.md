<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/19XTrWEAfPZ1mtt6tqVaW-J0QL8fer4EK

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
בפרויקט זה פותחה אפליקציית Web לניהול משימות (Task Manager) באמצעות React.
האפליקציה מאפשרת למשתמש לנהל את המשימות היומיות שלו בצורה נוחה ויעילה באמצעות פעולות CRUD מלאות – הוספה, עריכה, מחיקה וסימון משימה כבוצעה.

המערכת בנויה בארכיטקטורה מבוססת קומפוננטות, תוך הפרדת אחריות בין חלקי הממשק השונים, ומיישמת ניהול State מרכזי באמצעות React Hooks.
בנוסף, נעשה שימוש ב-LocalStorage לשמירה אוטומטית של הנתונים, כך שהמידע נשמר גם לאחר רענון או סגירת הדפדפן.

הפרויקט שם דגש על קוד מודולרי, קריא וניתן להרחבה, חוויית משתמש רספונסיבית, וניהול נתונים יעיל ועדכני