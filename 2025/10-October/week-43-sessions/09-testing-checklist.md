# ✅ Testing Checklist - Public Pages

**Date**: October 21, 2025  
**Tester**: [Your Name]  
**Status**: Ready for Manual Testing

---

## 🎯 **Testing Strategy**

### **Scope**
- 6 Public Pages
- 3 Viewports (Mobile, Tablet, Desktop)
- 2 Browsers minimum (Chrome, Firefox)

### **Priority**
1. 🔴 **Critical**: Functionality, Navigation, Forms
2. 🟡 **Important**: Visual consistency, Responsive
3. 🟢 **Nice to have**: Animations, Micro-interactions

---

## 📱 **Responsive Testing**

### **Viewports to Test**

| Device Type | Width | Test With |
|-------------|-------|-----------|
| Mobile | 375px | Chrome DevTools (iPhone SE) |
| Mobile Large | 414px | Chrome DevTools (iPhone Pro) |
| Tablet | 768px | Chrome DevTools (iPad) |
| Tablet Large | 1024px | Chrome DevTools (iPad Pro) |
| Desktop | 1440px | Browser window |
| Desktop Large | 1920px | Full screen |

### **How to Test**

```bash
# Start dev server
npm run dev

# Open in browser
http://localhost:5173

# Chrome DevTools
1. F12 untuk open DevTools
2. Ctrl+Shift+M untuk toggle device mode
3. Test each viewport
```

---

## ✅ **Test Checklist Per Page**

### **Features Page** (`/features`)

#### **Desktop (>1024px)**
- [ ] Hero section tampil full
- [ ] Tab navigation sticky di top
- [ ] "We Will Shine" button di kiri atas (hero) → kiri bawah (scroll)
- [ ] Mobile navbar TIDAK tampil
- [ ] All 5 sections (AI Mentor, Mental Health, Productivity, Analytics, Integration) tampil
- [ ] Badges aligned correctly
- [ ] CTA section tampil proper
- [ ] Trust indicators card aligned
- [ ] Footer tampil

#### **Tablet (768-1024px)**
- [ ] Hero section tampil
- [ ] Mobile navbar tampil di bottom
- [ ] Mobile navbar hidden di hero, muncul saat scroll
- [ ] Badges di kanan (aligned dengan "We Will Shine" button)
- [ ] All sections readable
- [ ] CTA buttons proper size
- [ ] Navigation scrollable jika banyak items

#### **Mobile (<768px)**
- [ ] Hero section full-screen (100vh)
- [ ] Mobile navbar di bottom (closer to edge)
- [ ] Mobile navbar auto-hide/show works
- [ ] Badges di kanan, playful glassmorphism
- [ ] Font sizes readable
- [ ] Buttons touchable (min 44x44px)
- [ ] No horizontal scroll
- [ ] CTA section optimized

#### **Functionality**
- [ ] Tab navigation works (click tabs → scroll to section)
- [ ] Smooth scrolling works
- [ ] Active tab highlighting works
- [ ] "Buka App" button works (icon + label visible)
- [ ] "Lihat Fitur Lengkap" button di hero works
- [ ] All CTA buttons clickable
- [ ] Back button "We Will Shine" works

---

### **Pricing Page** (`/pricing`)

#### **All Viewports**
- [ ] Hero section tampil
- [ ] Billing toggle (Monthly/Annual) works
- [ ] Price calculation correct
- [ ] Pricing cards tampil
- [ ] Feature comparison expandable
- [ ] "Mulai Gratis" buttons work
- [ ] Partnership link works
- [ ] FAQ section works

---

### **Roadmap Page** (`/roadmap`)

#### **All Viewports**
- [ ] Hero section tampil
- [ ] Timeline visualization tampil
- [ ] All 6 sections accessible
- [ ] "Show Detailed Timeline" toggle works
- [ ] Core values cards tampil
- [ ] Navigation works

---

### **About Page** (`/about`)

#### **All Viewports**
- [ ] Hero section tampil
- [ ] Story section readable
- [ ] Philosophy & Mission section
- [ ] Team section (if any)
- [ ] Progress section
- [ ] Open Source section
- [ ] All links work

---

### **For Schools Page** (`/for-schools`)

#### **All Viewports**
- [ ] Hero section tampil
- [ ] Calculator/Benefits section
- [ ] Dashboard preview
- [ ] Case study section
- [ ] Implementation guide
- [ ] Pricing for schools
- [ ] FAQ section
- [ ] Contact buttons work

---

### **Partnership Page** (`/partnership`)

#### **All Viewports**
- [ ] Hero section tampil
- [ ] Metrics section
- [ ] Belajar.id integration info
- [ ] Vision section
- [ ] Contact section
- [ ] All CTAs work

---

## 🔗 **Navigation Testing**

### **Header Navigation**
- [ ] "We Will Shine" button → home
- [ ] Menu toggle opens/closes
- [ ] Menu overlay works
- [ ] All menu links work
- [ ] Menu closes on click outside
- [ ] Menu closes on ESC key

### **Footer Navigation**
- [ ] All Product links work
- [ ] All Company links work
- [ ] All Community links (external) work
- [ ] Email links work
- [ ] Dynamic year displays correct

### **Tab Navigation**
- [ ] Tabs sticky on desktop
- [ ] Mobile navbar shows/hides correctly
- [ ] Smooth scroll to sections
- [ ] Active tab highlights
- [ ] URL hash updates
- [ ] Direct hash URL works

---

## 🎨 **Visual Consistency**

### **Typography**
- [ ] Headings bold dan readable
- [ ] Body text comfortable size
- [ ] Line heights appropriate
- [ ] Font weights consistent

### **Spacing**
- [ ] Sections tidak terlalu cramped
- [ ] Sections tidak terlalu sparse
- [ ] Consistent padding
- [ ] Consistent gaps

### **Colors**
- [ ] Brand colors consistent
- [ ] Contrast sufficient (readable)
- [ ] Gradients smooth
- [ ] Hover states clear

### **Borders & Shadows**
- [ ] Border radius consistent
- [ ] Shadows appropriate depth
- [ ] Glassmorphism effects work

---

## ⚡ **Performance Testing**

### **Page Load**
- [ ] Pages load < 3 seconds
- [ ] No flash of unstyled content
- [ ] Images load progressively
- [ ] No layout shift

### **Interactions**
- [ ] Smooth scrolling
- [ ] Animations smooth (60fps)
- [ ] No janky transitions
- [ ] Hover states instant

### **Console**
- [ ] No JavaScript errors
- [ ] No console warnings (critical ones)
- [ ] No 404 errors (network tab)

---

## ♿ **Accessibility Testing**

### **Keyboard Navigation**
- [ ] Tab key navigates logically
- [ ] Enter/Space activates buttons/links
- [ ] ESC closes modals/menus
- [ ] Focus visible

### **Screen Reader** (Optional)
- [ ] Headings structured (H1 → H2 → H3)
- [ ] Alt text on images
- [ ] ARIA labels on interactive elements
- [ ] Form labels associated

---

## 🌐 **Cross-Browser Testing**

### **Browsers to Test**

#### **Chrome** (Primary)
- [ ] Desktop
- [ ] Mobile (DevTools)
- [ ] Tablet (DevTools)

#### **Firefox** (Secondary)
- [ ] Desktop
- [ ] Mobile (if possible)

#### **Safari** (If available)
- [ ] Desktop (macOS)
- [ ] Mobile (iOS)

#### **Edge** (Optional)
- [ ] Desktop

---

## 🐛 **Bug Tracking**

### **Found Bugs**

| # | Page | Issue | Severity | Status |
|---|------|-------|----------|--------|
| 1 | - | - | - | - |

Example:
```
1 | Features | Mobile navbar tidak muncul | High | Fixed
2 | Pricing | Button text terpotong | Medium | In Progress
```

---

## 📋 **Quick Test Commands**

```bash
# Check all pages load without errors
for page in features pricing roadmap about for-schools partnership; do
  echo "Testing /$page..."
  curl -I http://localhost:5173/$page
done

# Check for console errors (manual)
# 1. Open each page in browser
# 2. Open DevTools Console (F12)
# 3. Look for red errors

# Check responsive
# 1. Open DevTools (F12)
# 2. Toggle device toolbar (Ctrl+Shift+M)
# 3. Test each viewport
```

---

## ✅ **Pass Criteria**

### **Must Pass**
- ✅ All pages load successfully
- ✅ No JavaScript errors
- ✅ Navigation works
- ✅ Responsive on mobile/tablet/desktop
- ✅ No broken links
- ✅ Forms submit (if any)

### **Should Pass**
- ✅ Smooth animations
- ✅ Visual consistency
- ✅ Fast load times
- ✅ Accessible

### **Nice to Pass**
- ✅ Perfect on all browsers
- ✅ Lighthouse 90+
- ✅ No warnings

---

## 🎯 **Status**

**Current**: Waiting for manual testing  
**Blocker**: None (automated tests not yet implemented)  
**Next**: Manual test → Fix bugs → Launch!

---

**Testing Guide Version**: 1.0  
**Last Updated**: October 21, 2025
