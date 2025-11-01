# Clear Password Storage Instructions

## Quick Reset

The password wall now **resets on every page refresh** - no need to clear storage manually!

---

## If You Need to Clear Old localStorage Data

If you previously unlocked the case studies with the old 7-day storage system, you may still have old data stored. Here's how to clear it:

### Option 1: Clear in Browser DevTools

1. Open the case study page: `http://localhost:3001/case-study/zalando-contextual`
2. Open Browser DevTools:
   - **Chrome/Edge**: Press `F12` or `Cmd+Option+I` (Mac) / `Ctrl+Shift+I` (Windows)
   - **Safari**: Enable Developer menu first, then press `Cmd+Option+C`
   - **Firefox**: Press `F12` or `Cmd+Shift+I` (Mac) / `Ctrl+Shift+I` (Windows)
3. Go to **Application** tab (Chrome/Edge) or **Storage** tab (Firefox)
4. Expand **Local Storage** in left sidebar
5. Click on `http://localhost:3001`
6. Find and delete these keys:
   - `case-study-access-zalando-contextual`
   - `case-study-access-zalando-chatbot`
7. Refresh the page

### Option 2: Clear All Site Data

1. Open Browser DevTools (F12)
2. Go to **Application** tab
3. In left sidebar, click **Clear storage** or **Storage**
4. Click **Clear site data** button
5. Refresh the page

### Option 3: Use Console Command

1. Open Browser DevTools (F12)
2. Go to **Console** tab
3. Paste and run:
```javascript
localStorage.removeItem('case-study-access-zalando-contextual');
localStorage.removeItem('case-study-access-zalando-chatbot');
console.log('Password storage cleared!');
```
4. Refresh the page

---

## New Behavior (Updated)

✅ **Password does NOT persist**
- Password resets on page refresh
- No localStorage storage
- Must re-enter password each visit

This makes testing easier and ensures you see the password wall every time!

---

## Test the Password Wall

1. Visit: `http://localhost:3001/case-study/zalando-contextual`
2. You should see:
   - ✅ Hero section (visible)
   - ✅ Image carousel (visible)
   - ✅ Password wall overlay (blocking content below)
3. Enter password: `P@33W0rD`
4. Content unlocks
5. **Refresh the page (Cmd+R or F5)**
6. ✅ Password wall appears again (resets on refresh)

---

**Last Updated**: November 1, 2025
**Password**: `P@33W0rD`
