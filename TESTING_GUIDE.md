# Testing Guide - AruArts Wooden Items Store

## Quick Start

### Running the Development Server
```bash
npm run dev
```
The site will be available at `http://localhost:3000`

### Building for Production
```bash
npm run build
npm run start
```

## Pages to Test

### 1. Landing Page (`/`)
**URL**: http://localhost:3000

**What to Check**:
- ✓ Hero section loads with image
- ✓ Categories grid displays 7 categories
- ✓ Best Sellers section shows 8 products
- ✓ New Arrivals section shows 8 products
- ✓ Features section displays 3 value props
- ✓ CTA section is visible
- ✓ All links work (Shop Now buttons, category cards)
- ✓ Mobile responsive (test on phone/tablet)

### 2. Products Listing Page (`/products`)
**URL**: http://localhost:3000/products

**Page Elements to Check**:
- ✓ Shows "101 products" initially
- ✓ Sidebar filters visible on desktop
- ✓ Mobile layout has search/sort at top

### 3. Search Functionality
**Test Cases**:
```
1. Search "wooden wall"
   - Should show wall-decor products
   
2. Search "teakwood"
   - Should filter by material
   
3. Search "gift"
   - Should show gift-items
   
4. Search with empty query
   - Should show all 101 products
   
5. Search non-existent item
   - Should show "No products found"
```

### 4. Filter by Category
**Test Cases**:
```
1. Select "Wall Decor"
   - Should show only wall-decor products
   - Count should display correct number
   
2. Select multiple categories (Wall Decor + Table Decor)
   - Should show products from both
   
3. Clear filters
   - Should reset and show all 101 products
```

### 5. Price Range Filter
**Test Cases**:
```
1. Drag slider to ₹500 - ₹1,500
   - Should show products in that range
   
2. Check displayed min/max prices
   - Should match slider values
   
3. Clear filters
   - Should reset to ₹0 - ₹3,500
```

### 6. Sorting Options
**Test Cases**:
```
1. "Most Popular"
   - Should sort by rating × review count
   
2. "Newest"
   - New items should appear first
   
3. "Price: Low to High"
   - Should start with ₹299 items
   
4. "Price: High to Low"
   - Should start with ₹2,999+ items
```

### 7. Combined Filters
**Test Cases**:
```
1. Category: Kitchen Decor + Price: ₹500-₹1,500 + Search "board"
   - Should show cutting boards in price range
   
2. Multiple categories + Price filter
   - Should work together correctly
   
3. Search + Price filter
   - Should filter by both criteria
```

### 8. Product Cards
**Test Cases**:
```
1. Hover effects
   - Images should zoom
   - Buttons should appear/highlight
   
2. Add to bag button
   - Should add product to cart
   - Cart count should update
   
3. Heart (wishlist) button
   - Should toggle filled/unfilled state
   - Should update wishlist count
   
4. Rating display
   - Should show correct stars and count
   
5. Discount badges
   - Should show discount percentage
   - Should show "New" badge if new
```

### 9. Responsive Design
**Desktop (> 1024px)**:
- ✓ Sidebar filters on left
- ✓ Product grid 3 columns
- ✓ All filters visible

**Tablet (640px - 1024px)**:
- ✓ Sidebar filters still visible
- ✓ Product grid 2 columns
- ✓ Proper spacing

**Mobile (< 640px)**:
- ✓ Search/sort at top
- ✓ Product grid 1-2 columns
- ✓ Touch-friendly buttons
- ✓ No sidebar filters (if applicable)

### 10. Navigation
**Test Cases**:
```
1. Click "AruArts" logo
   - Should go to home page
   
2. Click "Shop" in navbar
   - Should go to /products
   
3. Click "Home" in navbar
   - Should go to /
   
4. Mobile menu
   - Should open/close properly
   - Links should work
   
5. Category cards on home
   - Should filter products page by category
```

## Product Count Verification

**Total Products**: 101 items

**By Category**:
- Wall Decor: ~22 items
- Table Decor: ~15 items
- Wooden Trays: ~10 items
- Candle Holders: ~8 items
- Organizers: ~12 items
- Kitchen Decor: ~15 items
- Gift Items: ~19 items

**By Attribute**:
- Best Sellers (~15 items): Mark with `isBestSeller: true`
- New Arrivals (~20 items): Mark with `isNew: true`
- Price Range: ₹299 - ₹2,999

## Common Issues & Solutions

### Products Not Loading
```
Check:
- Browser console for errors
- Network tab for failed requests
- npm build succeeds without errors
```

### Filters Not Working
```
Check:
- Product data has correct category slugs
- Categories.ts matches product category values
- Filter state updates in console
```

### Images Not Displaying
```
Check:
- Image URLs are valid (Pexels links)
- Next.js Image component configured
- No CORS issues
```

### Performance Issues
```
Check:
- Run: npm run build
- Check file sizes in .next folder
- Monitor React DevTools profiler
```

## Data to Verify

### Sample Products to Check
```
1. p1 - Hand-Carved Mango Wood Wall Panel (Best Seller)
   Price: ₹2,499 (discount from ₹3,499)
   Rating: 4.8 stars, 124 reviews
   
2. p50 - Personalized Wooden Gift Box (New)
   Price: ₹1,599
   Category: gift-items
   
3. p101 - Wooden Feather Wall Art
   Price: ₹799
   Material: Mango Wood
```

### Filter Combinations to Test
```
1. Wall Decor + ₹1,000-₹2,000 = Should show wall items in range
2. Gift Items + Search "box" = Should show gift boxes
3. Kitchen + ₹500-₹1,500 + Sort by Price High = Filtered results sorted
```

## Browser Testing

**Recommended Browsers**:
- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

**Mobile Testing**:
- Chrome DevTools device emulation
- iOS Safari on iPhone
- Android Chrome

## Performance Benchmarks

**Target Metrics**:
- First Contentful Paint (FCP): < 1.5s
- Largest Contentful Paint (LCP): < 2.5s
- Cumulative Layout Shift (CLS): < 0.1
- Time to Interactive (TTI): < 3.5s

## Accessibility Testing

**Checklist**:
- [ ] Keyboard navigation works (Tab through all elements)
- [ ] Screen reader compatible (Test with NVDA or VoiceOver)
- [ ] Color contrast sufficient (WCAG AA)
- [ ] Images have alt text
- [ ] Buttons/links have proper labels

## Load Testing

**What to Test**:
```
1. All 101 products load without error
2. Filtering doesn't cause lag
3. Sorting responds quickly
4. Searching is instant
5. Page navigation is smooth
```

## Sign-Off Checklist

- [ ] All 101 products display correctly
- [ ] Filters work independently
- [ ] Filters work in combination
- [ ] Sorting options work
- [ ] Search functionality works
- [ ] Mobile responsive
- [ ] Desktop layout correct
- [ ] No console errors
- [ ] Build completes successfully
- [ ] Navigation links work
- [ ] Product cards display correctly
- [ ] Cart functionality works
- [ ] Wishlist functionality works
- [ ] Images load properly
- [ ] Performance acceptable
