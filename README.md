# Ember & Amber Co. - E-Commerce Website

A professional, production-ready e-commerce website built with HTML5, CSS3, and JavaScript. Designed to be hosted on GitHub Pages with Snipcart integration for e-commerce functionality.

## Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Modern, aesthetic design matching brand identity
- ✅ Snipcart e-commerce integration
- ✅ SEO optimized with structured data
- ✅ Fast loading and performance optimized
- ✅ Accessible (WCAG 2.1 compliant)
- ✅ Product filtering and quick view
- ✅ Newsletter signup integration ready
- ✅ Contact form ready
- ✅ Blog section for content marketing
- ✅ Social media integration

## Quick Start

### 1. Setup Snipcart

1. Go to [Snipcart.com](https://snipcart.com) and create an account
2. Get your API key from the dashboard
3. Replace `YOUR_SNIPCART_API_KEY` in `index.html` with your actual API key
4. Configure your shipping, taxes, and payment methods in Snipcart dashboard

### 2. Add Your Products

Edit `js/products.js` to add/update your products:

```javascript
{
    id: "unique-product-id",
    name: "Product Name",
    category: "apparel|candles|home|gifts",
    price: 28.00,
    salePrice: 14.11, // or null
    discount: "50% off", // or null
    badge: "Best Seller", // or null
    image: "images/products/your-image.jpg",
    description: "Product description",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Black"],
    inStock: true,
    featured: true
}
