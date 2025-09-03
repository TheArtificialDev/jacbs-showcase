#!/usr/bin/env node

import fs from 'fs/promises';
import path from 'path';
import { marked } from 'marked';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const CONFIG = {
  inputDir: path.join(__dirname, '../draft_papers'),
  outputDir: path.join(__dirname, '../public/papers'),
  logoPath: path.join(__dirname, '../public/JACBS.png'),
  brand: {
    primaryColor: '#0891b2',
    secondaryColor: '#22d3ee', 
    accentColor: '#06b6d4',
    darkColor: '#164e63',
    lightColor: '#f0f9ff',
  }
};

// Custom HTML template for branded documents
const createHTMLTemplate = (title, content, logoSvg) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} - JACBS</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        @page {
            size: A4;
            margin: 20mm;
        }
        
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            line-height: 1.7;
            color: #1f2937;
            background: linear-gradient(135deg, ${CONFIG.brand.lightColor} 0%, #ffffff 100%);
            font-size: 12pt;
            counter-reset: page;
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
        }
        
        .container {
            max-width: 210mm;
            margin: 0 auto;
            padding: 20mm;
            min-height: 100vh;
            position: relative;
            background: white;
            box-shadow: 0 0 20px rgba(0,0,0,0.1);
        }
        
        /* Header */
        .header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 40px;
            padding-bottom: 20px;
            border-bottom: 3px solid ${CONFIG.brand.primaryColor};
            position: relative;
        }
        
        .header::after {
            content: '';
            position: absolute;
            bottom: -3px;
            left: 0;
            width: 80px;
            height: 3px;
            background: linear-gradient(90deg, ${CONFIG.brand.secondaryColor}, ${CONFIG.brand.accentColor});
        }
        
        .logo-container {
            display: flex;
            align-items: center;
            gap: 15px;
        }
        
        .logo {
            width: 50px;
            height: 50px;
        }
        
        .brand-text {
            color: ${CONFIG.brand.darkColor};
            font-weight: 600;
            font-size: 14pt;
            letter-spacing: -0.025em;
            line-height: 1.3;
        }
        
        .date-info {
            color: ${CONFIG.brand.primaryColor};
            font-weight: 500;
            font-size: 11pt;
            text-align: right;
        }
        
        /* Title */
        h1 {
            font-size: 28pt;
            font-weight: 700;
            color: ${CONFIG.brand.darkColor};
            margin-bottom: 40px;
            line-height: 1.2;
            position: relative;
            padding-left: 25px;
        }
        
        h1::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 8px;
            background: linear-gradient(180deg, ${CONFIG.brand.primaryColor}, ${CONFIG.brand.secondaryColor});
            border-radius: 4px;
        }
        
        /* Headings */
        h2 {
            font-size: 18pt;
            font-weight: 600;
            color: ${CONFIG.brand.primaryColor};
            margin-top: 40px;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid ${CONFIG.brand.lightColor};
            position: relative;
        }
        
        h2::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 50px;
            height: 2px;
            background: ${CONFIG.brand.accentColor};
        }
        
        h3 {
            font-size: 15pt;
            font-weight: 600;
            color: ${CONFIG.brand.darkColor};
            margin-top: 30px;
            margin-bottom: 15px;
        }
        
        h4, h5, h6 {
            font-size: 13pt;
            font-weight: 500;
            color: ${CONFIG.brand.primaryColor};
            margin-top: 25px;
            margin-bottom: 12px;
        }
        
        /* Paragraphs */
        p {
            margin-bottom: 18px;
            text-align: justify;
            text-justify: inter-word;
        }
        
        /* Lists */
        ul, ol {
            margin-bottom: 18px;
            padding-left: 30px;
        }
        
        li {
            margin-bottom: 10px;
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
            padding: 3px 8px;
            border-radius: 4px;
            font-size: 11pt;
            color: ${CONFIG.brand.darkColor};
            border: 1px solid ${CONFIG.brand.secondaryColor};
        }
        
        pre {
            background: linear-gradient(135deg, ${CONFIG.brand.lightColor} 0%, #ffffff 100%);
            border: 1px solid ${CONFIG.brand.secondaryColor};
            border-left: 4px solid ${CONFIG.brand.primaryColor};
            border-radius: 8px;
            padding: 25px;
            margin: 25px 0;
            overflow-x: auto;
            position: relative;
        }
        
        pre code {
            background: none;
            border: none;
            padding: 0;
            font-size: 10pt;
            line-height: 1.6;
        }
        
        /* Blockquotes */
        blockquote {
            background: linear-gradient(135deg, ${CONFIG.brand.lightColor} 0%, #ffffff 100%);
            border-left: 5px solid ${CONFIG.brand.accentColor};
            margin: 25px 0;
            padding: 25px 30px;
            border-radius: 0 8px 8px 0;
            position: relative;
            font-style: italic;
            color: ${CONFIG.brand.darkColor};
        }
        
        blockquote::before {
            content: '"';
            font-size: 60pt;
            color: ${CONFIG.brand.secondaryColor};
            position: absolute;
            top: -10px;
            left: 20px;
            line-height: 1;
            opacity: 0.3;
        }
        
        /* Tables */
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 25px 0;
            background: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        
        th {
            background: linear-gradient(135deg, ${CONFIG.brand.primaryColor}, ${CONFIG.brand.accentColor});
            color: white;
            font-weight: 600;
            padding: 18px;
            text-align: left;
            font-size: 11pt;
        }
        
        td {
            padding: 15px 18px;
            border-bottom: 1px solid ${CONFIG.brand.lightColor};
            font-size: 11pt;
        }
        
        tr:nth-child(even) {
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
            margin: 20px 0;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        
        /* Horizontal rule */
        hr {
            border: none;
            height: 3px;
            background: linear-gradient(90deg, transparent, ${CONFIG.brand.accentColor}, transparent);
            margin: 40px 0;
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
        
        /* Highlight boxes */
        .highlight-box {
            background: linear-gradient(135deg, ${CONFIG.brand.lightColor} 0%, #ffffff 100%);
            border: 1px solid ${CONFIG.brand.secondaryColor};
            border-radius: 10px;
            padding: 25px;
            margin: 25px 0;
            position: relative;
            box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }
        
        .highlight-box::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 5px;
            background: linear-gradient(90deg, ${CONFIG.brand.primaryColor}, ${CONFIG.brand.accentColor});
            border-radius: 10px 10px 0 0;
        }
        
        /* Print button */
        .print-controls {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1000;
            display: flex;
            gap: 10px;
        }
        
        .print-btn {
            background: linear-gradient(135deg, ${CONFIG.brand.primaryColor}, ${CONFIG.brand.accentColor});
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 8px;
            font-weight: 600;
            cursor: pointer;
            font-size: 11pt;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
            transition: all 0.2s ease;
        }
        
        .print-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 16px rgba(0,0,0,0.3);
        }
        
        /* Hide controls when printing */
        @media print {
            .print-controls {
                display: none;
            }
            
            .container {
                box-shadow: none;
                padding: 0;
                margin: 0;
            }
            
            body {
                background: white;
            }
        }
        
        /* Page breaks */
        .page-break {
            page-break-before: always;
        }
        
        /* Abstract styling */
        .abstract {
            background: linear-gradient(135deg, ${CONFIG.brand.lightColor} 0%, #ffffff 100%);
            border: 1px solid ${CONFIG.brand.secondaryColor};
            border-radius: 10px;
            padding: 30px;
            margin: 30px 0;
            position: relative;
            font-style: italic;
        }
        
        .abstract::before {
            content: 'Abstract';
            position: absolute;
            top: -12px;
            left: 20px;
            background: white;
            padding: 0 15px;
            font-weight: 600;
            color: ${CONFIG.brand.primaryColor};
            font-size: 12pt;
            font-style: normal;
        }
    </style>
</head>
<body>
    <div class="print-controls">
        <button class="print-btn" onclick="window.print()">🖨️ Print to PDF</button>
        <button class="print-btn" onclick="window.location.href='/'">🏠 Home</button>
    </div>
    
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
                Research Paper<br>
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
        
        <footer style="margin-top: 60px; padding-top: 30px; border-top: 2px solid ${CONFIG.brand.lightColor}; text-align: center; color: ${CONFIG.brand.primaryColor}; font-size: 10pt;">
            <strong>JACBS - Journal for Advanced Computational and Business Studies</strong><br>
            Advancing Research in Technology and Business Innovation
        </footer>
    </div>
    
    <script>
        // Auto-focus for better printing experience
        document.addEventListener('DOMContentLoaded', function() {
            console.log('Document ready for printing');
        });
    </script>
</body>
</html>
`;

// Enhanced markdown renderer
const configureMarked = () => {
  const renderer = new marked.Renderer();
  
  // Custom heading renderer
  renderer.heading = function(text, level) {
    const cleanText = typeof text === 'string' ? text.replace(/<[^>]*>/g, '') : String(text);
    const id = cleanText.toLowerCase().replace(/[^\w]+/g, '-');
    
    if (level === 1) {
      return `<h1 id="${id}">${text}</h1>`;
    }
    return `<h${level} id="${id}">${text}</h${level}>`;
  };
  
  // Custom paragraph renderer with special handling
  renderer.paragraph = function(text) {
    const textStr = typeof text === 'string' ? text : String(text);
    
    // Check for special content types
    if (textStr.startsWith('**Abstract:**')) {
      return `<div class="abstract">${textStr.replace('**Abstract:**', '')}</div>`;
    }
    if (textStr.startsWith('**Important:**') || textStr.startsWith('**Note:**') || textStr.startsWith('**Key Point:**')) {
      return `<div class="highlight-box"><p>${textStr}</p></div>`;
    }
    return `<p>${textStr}</p>`;
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

// Convert markdown file to branded HTML
const convertMarkdownToHTML = async (inputPath, outputPath) => {
  try {
    console.log(`📄 Converting ${path.basename(inputPath)}...`);
    
    // Read markdown file
    const markdownContent = await fs.readFile(inputPath, 'utf-8');
    
    // Extract title from filename or first heading
    const filename = path.basename(inputPath, '.md');
    const title = filename.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    
    // Read logo SVG
    let logoSvg = '';
    try {
      logoSvg = await fs.readFile(CONFIG.logoPath, 'utf-8');
      // Modify SVG for proper sizing
      logoSvg = logoSvg.replace('<svg', '<svg class="logo"');
    } catch (error) {
      console.warn('⚠️  Logo not found, using placeholder');
      logoSvg = `<div class="logo" style="width: 50px; height: 50px; background: ${CONFIG.brand.primaryColor}; border-radius: 10px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 16pt;">J</div>`;
    }
    
    // Configure marked renderer
    configureMarked();
    
    // Convert markdown to HTML
    const htmlContent = marked(markdownContent);
    
    // Create complete HTML document
    const fullHTML = createHTMLTemplate(title, htmlContent, logoSvg);
    
    // Write HTML file
    await fs.writeFile(outputPath, fullHTML, 'utf-8');
    
    console.log(`✅ Generated: ${path.basename(outputPath)}`);
    return outputPath;
    
  } catch (error) {
    console.error(`❌ Error converting ${path.basename(inputPath)}:`, error.message);
    throw error;
  }
};

// Main function
const main = async () => {
  try {
    console.log('🎨 Starting branded document conversion...\n');
    
    // Ensure output directory exists
    await fs.mkdir(CONFIG.outputDir, { recursive: true });
    
    // Read input directory
    const files = await fs.readdir(CONFIG.inputDir);
    const markdownFiles = files.filter(file => file.endsWith('.md'));
    
    if (markdownFiles.length === 0) {
      console.log('❌ No markdown files found in draft_papers directory.');
      return;
    }
    
    console.log(`📚 Found ${markdownFiles.length} markdown file(s):\n`);
    
    const convertedFiles = [];
    
    // Convert each markdown file
    for (const file of markdownFiles) {
      const inputPath = path.join(CONFIG.inputDir, file);
      const outputPath = path.join(CONFIG.outputDir, file.replace('.md', '.html'));
      
      const converted = await convertMarkdownToHTML(inputPath, outputPath);
      convertedFiles.push(converted);
    }
    
    console.log('\n🎉 All conversions completed successfully!');
    console.log(`📁 HTML files saved to: ${CONFIG.outputDir}`);
    console.log('\n📖 To convert to PDF:');
    console.log('1. Open the HTML files in your browser');
    console.log('2. Use Ctrl+P (Cmd+P on Mac) to print');
    console.log('3. Select "Save as PDF" as the destination');
    console.log('4. The print styles are optimized for A4 format\n');
    
    // Display converted files
    console.log('🔗 Converted files:');
    convertedFiles.forEach(file => {
      const filename = path.basename(file);
      console.log(`   • ${filename}`);
    });
    
  } catch (error) {
    console.error('\n❌ Conversion failed:', error.message);
    process.exit(1);
  }
};

// Run the script
main();
