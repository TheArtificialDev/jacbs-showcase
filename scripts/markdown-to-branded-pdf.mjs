#!/usr/bin/env node

import fs from 'fs/promises';
import path from 'path';
import { marked } from 'marked';
import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const CONFIG = {
  inputDir: path.join(__dirname, '../draft_papers'),
  outputDir: path.join(__dirname, '../public/papers'),
  logoPath: path.join(__dirname, '../public/JACBS.png'),
  pdfOutputDir: path.join(__dirname, '../public/papers/pdf'),
  brand: {
    primaryColor: '#0891b2',
    secondaryColor: '#22d3ee', 
    accentColor: '#06b6d4',
    darkColor: '#164e63',
    lightColor: '#f0f9ff',
  }
};

// Custom HTML template for branded PDF
const createHTMLTemplate = (title, content, logoSvg) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            line-height: 1.7;
            color: #1f2937;
            background: linear-gradient(135deg, ${CONFIG.brand.lightColor} 0%, #ffffff 100%);
            font-size: 11pt;
            counter-reset: page;
        }
        
        .container {
            max-width: 210mm;
            margin: 0 auto;
            padding: 20mm;
            min-height: 297mm;
            position: relative;
        }
        
        /* Header */
        .header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 3px solid ${CONFIG.brand.primaryColor};
            position: relative;
        }
        
        .header::after {
            content: '';
            position: absolute;
            bottom: -3px;
            left: 0;
            width: 60px;
            height: 3px;
            background: linear-gradient(90deg, ${CONFIG.brand.secondaryColor}, ${CONFIG.brand.accentColor});
        }
        
        .logo-container {
            display: flex;
            align-items: center;
            gap: 15px;
        }
        
        .logo {
            width: 40px;
            height: 40px;
        }
        
        .brand-text {
            color: ${CONFIG.brand.darkColor};
            font-weight: 600;
            font-size: 12pt;
            letter-spacing: -0.025em;
        }
        
        .date-info {
            color: ${CONFIG.brand.primaryColor};
            font-weight: 500;
            font-size: 10pt;
        }
        
        /* Title */
        h1 {
            font-size: 24pt;
            font-weight: 700;
            color: ${CONFIG.brand.darkColor};
            margin-bottom: 30px;
            line-height: 1.3;
            position: relative;
            padding-left: 20px;
        }
        
        h1::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 6px;
            background: linear-gradient(180deg, ${CONFIG.brand.primaryColor}, ${CONFIG.brand.secondaryColor});
            border-radius: 3px;
        }
        
        /* Headings */
        h2 {
            font-size: 16pt;
            font-weight: 600;
            color: ${CONFIG.brand.primaryColor};
            margin-top: 35px;
            margin-bottom: 15px;
            padding-bottom: 8px;
            border-bottom: 2px solid ${CONFIG.brand.lightColor};
            position: relative;
        }
        
        h2::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 40px;
            height: 2px;
            background: ${CONFIG.brand.accentColor};
        }
        
        h3 {
            font-size: 14pt;
            font-weight: 600;
            color: ${CONFIG.brand.darkColor};
            margin-top: 25px;
            margin-bottom: 12px;
        }
        
        h4, h5, h6 {
            font-size: 12pt;
            font-weight: 500;
            color: ${CONFIG.brand.primaryColor};
            margin-top: 20px;
            margin-bottom: 10px;
        }
        
        /* Paragraphs */
        p {
            margin-bottom: 15px;
            text-align: justify;
            text-justify: inter-word;
        }
        
        /* Lists */
        ul, ol {
            margin-bottom: 15px;
            padding-left: 25px;
        }
        
        li {
            margin-bottom: 8px;
            line-height: 1.6;
        }
        
        ul li::marker {
            color: ${CONFIG.brand.accentColor};
        }
        
        ol li::marker {
            color: ${CONFIG.brand.accentColor};
            font-weight: 600;
        }
        
        /* Code blocks */
        code {
            font-family: 'JetBrains Mono', 'Courier New', monospace;
            background: ${CONFIG.brand.lightColor};
            padding: 2px 6px;
            border-radius: 4px;
            font-size: 10pt;
            color: ${CONFIG.brand.darkColor};
            border: 1px solid ${CONFIG.brand.secondaryColor};
        }
        
        pre {
            background: linear-gradient(135deg, ${CONFIG.brand.lightColor} 0%, #ffffff 100%);
            border: 1px solid ${CONFIG.brand.secondaryColor};
            border-left: 4px solid ${CONFIG.brand.primaryColor};
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
            overflow-x: auto;
            position: relative;
        }
        
        pre code {
            background: none;
            border: none;
            padding: 0;
            font-size: 10pt;
            line-height: 1.5;
        }
        
        /* Blockquotes */
        blockquote {
            background: linear-gradient(135deg, ${CONFIG.brand.lightColor} 0%, #ffffff 100%);
            border-left: 5px solid ${CONFIG.brand.accentColor};
            margin: 20px 0;
            padding: 20px 25px;
            border-radius: 0 8px 8px 0;
            position: relative;
            font-style: italic;
            color: ${CONFIG.brand.darkColor};
        }
        
        blockquote::before {
            content: '"';
            font-size: 48pt;
            color: ${CONFIG.brand.secondaryColor};
            position: absolute;
            top: -5px;
            left: 15px;
            line-height: 1;
            opacity: 0.3;
        }
        
        /* Tables */
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
            background: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        
        th {
            background: linear-gradient(135deg, ${CONFIG.brand.primaryColor}, ${CONFIG.brand.accentColor});
            color: white;
            font-weight: 600;
            padding: 15px;
            text-align: left;
            font-size: 10pt;
        }
        
        td {
            padding: 12px 15px;
            border-bottom: 1px solid ${CONFIG.brand.lightColor};
            font-size: 10pt;
        }
        
        tr:hover {
            background: ${CONFIG.brand.lightColor};
        }
        
        /* Links */
        a {
            color: ${CONFIG.brand.primaryColor};
            text-decoration: none;
            font-weight: 500;
            border-bottom: 1px solid transparent;
            transition: all 0.2s ease;
        }
        
        a:hover {
            border-bottom-color: ${CONFIG.brand.primaryColor};
        }
        
        /* Images */
        img {
            max-width: 100%;
            height: auto;
            border-radius: 8px;
            margin: 15px 0;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        
        /* Horizontal rule */
        hr {
            border: none;
            height: 2px;
            background: linear-gradient(90deg, transparent, ${CONFIG.brand.accentColor}, transparent);
            margin: 30px 0;
        }
        
        /* Strong and emphasis */
        strong {
            color: ${CONFIG.brand.darkColor};
            font-weight: 600;
        }
        
        em {
            color: ${CONFIG.brand.primaryColor};
            font-style: italic;
        }
        
        /* Footer */
        .footer {
            position: fixed;
            bottom: 15mm;
            left: 20mm;
            right: 20mm;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-top: 15px;
            border-top: 1px solid ${CONFIG.brand.lightColor};
            font-size: 9pt;
            color: ${CONFIG.brand.primaryColor};
        }
        
        .footer::before {
            counter-increment: page;
            content: "Page " counter(page);
        }
        
        .footer-brand {
            font-weight: 500;
        }
        
        /* Page breaks */
        .page-break {
            page-break-before: always;
        }
        
        /* Print styles */
        @media print {
            body {
                print-color-adjust: exact;
                -webkit-print-color-adjust: exact;
            }
            
            .container {
                margin: 0;
                padding: 20mm;
            }
        }
        
        /* Highlight boxes */
        .highlight-box {
            background: linear-gradient(135deg, ${CONFIG.brand.lightColor} 0%, #ffffff 100%);
            border: 1px solid ${CONFIG.brand.secondaryColor};
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
            position: relative;
        }
        
        .highlight-box::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, ${CONFIG.brand.primaryColor}, ${CONFIG.brand.accentColor});
            border-radius: 8px 8px 0 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <header class="header">
            <div class="logo-container">
                ${logoSvg}
                <div class="brand-text">
                    Journal for Advanced<br>
                    Computational and Business Studies
                </div>
            </div>
            <div class="date-info">
                Published ${new Date().toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                })}
            </div>
        </header>
        
        <main>
            ${content}
        </main>
    </div>
    
    <footer class="footer">
        <span class="footer-brand">JACBS - Advancing Computational and Business Research</span>
    </footer>
</body>
</html>
`;

// Enhanced markdown renderer with custom styling
const configureMarked = () => {
  const renderer = new marked.Renderer();
  
  // Custom heading renderer with better styling
  renderer.heading = (text, level) => {
    const cleanText = text.replace(/<[^>]*>/g, '');
    const id = cleanText.toLowerCase().replace(/[^\w]+/g, '-');
    
    if (level === 1) {
      return `<h1 id="${id}">${text}</h1>`;
    }
    return `<h${level} id="${id}">${text}</h${level}>`;
  };
  
  // Custom paragraph renderer for better spacing
  renderer.paragraph = (text) => {
    // Check if this should be a highlight box
    if (text.startsWith('**Important:**') || text.startsWith('**Note:**') || text.startsWith('**Key Point:**')) {
      return `<div class="highlight-box"><p>${text}</p></div>`;
    }
    return `<p>${text}</p>`;
  };
  
  // Custom list renderer
  renderer.list = (body, ordered, start) => {
    const type = ordered ? 'ol' : 'ul';
    const startatt = (ordered && start !== 1) ? ` start="${start}"` : '';
    return `<${type}${startatt}>\n${body}</${type}>\n`;
  };
  
  marked.setOptions({
    renderer,
    gfm: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: true
  });
};

// Convert markdown file to branded PDF
const convertMarkdownToPDF = async (inputPath, outputPath) => {
  try {
    console.log(`Converting ${path.basename(inputPath)}...`);
    
    // Read markdown file
    const markdownContent = await fs.readFile(inputPath, 'utf-8');
    
    // Extract title from filename or first heading
    const filename = path.basename(inputPath, '.md');
    const title = filename.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    
    // Read logo SVG
    let logoSvg = '';
    try {
      logoSvg = await fs.readFile(CONFIG.logoPath, 'utf-8');
      // Modify SVG to be inline with proper sizing
      logoSvg = logoSvg.replace('<svg', '<svg class="logo"');
    } catch (error) {
      console.warn('Logo not found, proceeding without logo');
      logoSvg = '<div class="logo" style="width: 40px; height: 40px; background: #0891b2; border-radius: 8px;"></div>';
    }
    
    // Configure marked renderer
    configureMarked();
    
    // Convert markdown to HTML
    const htmlContent = marked(markdownContent);
    
    // Create complete HTML document
    const fullHTML = createHTMLTemplate(title, htmlContent, logoSvg);
    
    // Launch puppeteer
    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const page = await browser.newPage();
    
    // Set content
    await page.setContent(fullHTML, { waitUntil: 'networkidle0' });
    
    // Generate PDF
    await page.pdf({
      path: outputPath,
      format: 'A4',
      margin: {
        top: '20mm',
        right: '20mm',
        bottom: '25mm',
        left: '20mm'
      },
      printBackground: true,
      preferCSSPageSize: true
    });
    
    await browser.close();
    
    console.log(`✅ Generated: ${path.basename(outputPath)}`);
    
  } catch (error) {
    console.error(`❌ Error converting ${path.basename(inputPath)}:`, error.message);
    throw error;
  }
};

// Main function
const main = async () => {
  try {
    console.log('🎨 Starting branded PDF conversion...\n');
    
    // Ensure output directory exists
    await fs.mkdir(CONFIG.outputDir, { recursive: true });
    
    // Read input directory
    const files = await fs.readdir(CONFIG.inputDir);
    const markdownFiles = files.filter(file => file.endsWith('.md'));
    
    if (markdownFiles.length === 0) {
      console.log('No markdown files found in draft_papers directory.');
      return;
    }
    
    console.log(`Found ${markdownFiles.length} markdown file(s):\n`);
    
    // Convert each markdown file
    for (const file of markdownFiles) {
      const inputPath = path.join(CONFIG.inputDir, file);
      const outputPath = path.join(CONFIG.outputDir, file.replace('.md', '.pdf'));
      
      await convertMarkdownToPDF(inputPath, outputPath);
    }
    
    console.log('\n🎉 All conversions completed successfully!');
    console.log(`📁 PDFs saved to: ${CONFIG.outputDir}`);
    
  } catch (error) {
    console.error('\n❌ Conversion failed:', error.message);
    process.exit(1);
  }
};

// Run the script
main();
