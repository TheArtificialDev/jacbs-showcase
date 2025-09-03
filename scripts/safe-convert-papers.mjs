#!/usr/bin/env node

import fs from 'fs/promises';
import path from 'path';
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

// Safe text processing utility
const safeTextProcessing = (text) => {
  // Remove any non-printable characters except newlines and tabs
  return text.replace(/[^\x20-\x7E\x0A\x0D\x09]/g, '');
};

// Improved markdown parser with safer regex
const parseMarkdown = (markdown) => {
  // Clean the markdown first
  let html = safeTextProcessing(markdown);
  
  // Split into lines for safer processing
  const lines = html.split('\n');
  const processedLines = [];
  
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    
    // Headers
    if (line.match(/^### /)) {
      line = line.replace(/^### (.*)/, '<h3>$1</h3>');
    } else if (line.match(/^## /)) {
      line = line.replace(/^## (.*)/, '<h2>$1</h2>');
    } else if (line.match(/^# /)) {
      line = line.replace(/^# (.*)/, '<h1>$1</h1>');
    }
    
    // Bold and italic (safer approach)
    line = line.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    line = line.replace(/\*([^*]+)\*/g, '<em>$1</em>');
    
    // Code (inline)
    line = line.replace(/`([^`]+)`/g, '<code>$1</code>');
    
    // Links
    line = line.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
    
    // Lists
    if (line.match(/^\* /)) {
      line = line.replace(/^\* (.*)/, '<li>$1</li>');
    } else if (line.match(/^\d+\. /)) {
      line = line.replace(/^\d+\. (.*)/, '<li>$1</li>');
    }
    
    processedLines.push(line);
  }
  
  // Join lines back and handle paragraphs
  html = processedLines.join('\n');
  
  // Handle code blocks more safely
  const codeBlockRegex = /```([\s\S]*?)```/g;
  html = html.replace(codeBlockRegex, (match, code) => {
    return `<pre><code>${safeTextProcessing(code)}</code></pre>`;
  });
  
  // Convert double newlines to paragraph breaks
  const paragraphs = html.split(/\n\s*\n/);
  html = paragraphs.map(p => {
    p = p.trim();
    if (!p) return '';
    
    // Don't wrap headers, lists, or code blocks in paragraphs
    if (p.startsWith('<h') || p.startsWith('<li') || p.startsWith('<pre') || p.includes('<ul>') || p.includes('<ol>')) {
      return p;
    }
    
    return `<p>${p}</p>`;
  }).filter(p => p).join('\n\n');
  
  // Wrap consecutive list items in ul tags
  html = html.replace(/(<li>.*?<\/li>\s*)+/gs, (match) => {
    return `<ul>\n${match}\n</ul>`;
  });
  
  return html;
};

// HTML template function
const createHTMLTemplate = (title, content, logoBase64) => {
  const safeTitle = safeTextProcessing(title);
  const safeContent = content; // Content is already processed
  
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${safeTitle} - JACBS</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
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
            background: linear-gradient(135deg, #f0f9ff 0%, #ffffff 100%);
            font-size: 12pt;
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
        }
        
        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 40px;
            background: white;
            min-height: 100vh;
            box-shadow: 0 0 20px rgba(0,0,0,0.1);
        }
        
        .header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 40px;
            padding-bottom: 20px;
            border-bottom: 3px solid #0891b2;
            position: relative;
        }
        
        .header::after {
            content: '';
            position: absolute;
            bottom: -3px;
            left: 0;
            width: 80px;
            height: 3px;
            background: linear-gradient(90deg, #22d3ee, #06b6d4);
        }
        
        .logo-container {
            display: flex;
            align-items: center;
            gap: 15px;
        }
        
        .logo {
            width: 50px;
            height: 50px;
            object-fit: contain;
        }
        
        .brand-text {
            color: #164e63;
            font-weight: 600;
            font-size: 14pt;
            line-height: 1.3;
        }
        
        .date-info {
            color: #0891b2;
            font-weight: 500;
            font-size: 11pt;
            text-align: right;
        }
        
        .print-controls {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1000;
            display: flex;
            gap: 10px;
        }
        
        .print-btn {
            background: linear-gradient(135deg, #0891b2, #06b6d4);
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 8px;
            font-weight: 600;
            cursor: pointer;
            font-size: 11pt;
            text-decoration: none;
            display: inline-block;
        }
        
        .print-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 16px rgba(0,0,0,0.3);
        }
        
        h1 {
            font-size: 28pt;
            font-weight: 700;
            color: #164e63;
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
            background: linear-gradient(180deg, #0891b2, #22d3ee);
            border-radius: 4px;
        }
        
        h2 {
            font-size: 18pt;
            font-weight: 600;
            color: #0891b2;
            margin-top: 40px;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid #f0f9ff;
            position: relative;
        }
        
        h2::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 50px;
            height: 2px;
            background: #06b6d4;
        }
        
        h3 {
            font-size: 15pt;
            font-weight: 600;
            color: #164e63;
            margin-top: 30px;
            margin-bottom: 15px;
        }
        
        p {
            margin-bottom: 18px;
            text-align: justify;
            text-justify: inter-word;
        }
        
        ul, ol {
            margin-bottom: 18px;
            padding-left: 30px;
        }
        
        li {
            margin-bottom: 10px;
            line-height: 1.6;
        }
        
        ul li::marker {
            color: #06b6d4;
        }
        
        ol li::marker {
            color: #06b6d4;
            font-weight: 600;
        }
        
        code {
            font-family: 'Courier New', monospace;
            background: #f0f9ff;
            padding: 3px 8px;
            border-radius: 4px;
            font-size: 11pt;
            color: #164e63;
            border: 1px solid #22d3ee;
        }
        
        pre {
            background: linear-gradient(135deg, #f0f9ff 0%, #ffffff 100%);
            border: 1px solid #22d3ee;
            border-left: 4px solid #0891b2;
            border-radius: 8px;
            padding: 25px;
            margin: 25px 0;
            overflow-x: auto;
        }
        
        pre code {
            background: none;
            border: none;
            padding: 0;
            font-size: 10pt;
            line-height: 1.6;
        }
        
        strong {
            color: #164e63;
            font-weight: 600;
        }
        
        em {
            color: #0891b2;
            font-style: italic;
        }
        
        a {
            color: #0891b2;
            text-decoration: none;
            font-weight: 500;
            border-bottom: 1px solid transparent;
        }
        
        a:hover {
            border-bottom-color: #0891b2;
        }
        
        .footer {
            margin-top: 60px;
            padding-top: 30px;
            border-top: 2px solid #f0f9ff;
            text-align: center;
            color: #0891b2;
            font-size: 10pt;
        }
        
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
    </style>
</head>
<body>
    <div class="print-controls">
        <button class="print-btn" onclick="window.print()">🖨️ Print to PDF</button>
        <a href="/papers/" class="print-btn">📚 All Papers</a>
        <a href="/" class="print-btn">🏠 Home</a>
    </div>
    
    <div class="container">
        <header class="header">
            <div class="logo-container">
                ${logoBase64 ? `<img src="data:image/png;base64,${logoBase64}" alt="JACBS Logo" class="logo">` : '<div class="logo">J</div>'}
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
            ${safeContent}
        </main>
        
        <footer class="footer">
            <strong>JACBS - Journal for Advanced Computational and Business Studies</strong><br>
            Advancing Research in Technology and Business Innovation
        </footer>
    </div>
</body>
</html>`;
};

// Convert markdown file to HTML with safer processing
const convertMarkdownToHTML = async (inputPath, outputPath) => {
  try {
    console.log(`📄 Converting ${path.basename(inputPath)}...`);
    
    // Read markdown file with explicit UTF-8 encoding and error handling
    const markdownContent = await fs.readFile(inputPath, { encoding: 'utf-8' });
    
    // Extract title from filename
    const filename = path.basename(inputPath, '.md');
    const title = filename.replace(/_/g, ' ');
    
    // Read logo PNG and convert to base64
    let logoBase64 = '';
    try {
      const logoBuffer = await fs.readFile(CONFIG.logoPath);
      logoBase64 = logoBuffer.toString('base64');
    } catch (error) {
      console.warn('⚠️  Logo not found, using fallback');
    }
    
    // Convert markdown to HTML using safer parser
    const htmlContent = parseMarkdown(markdownContent);
    
    // Create complete HTML document
    const fullHTML = createHTMLTemplate(title, htmlContent, logoBase64);
    
    // Write HTML file with explicit UTF-8 encoding
    await fs.writeFile(outputPath, fullHTML, { encoding: 'utf-8' });
    
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
    console.log('🛡️  Starting safe document conversion...\n');
    
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
    
    console.log('\n✅ All conversions completed safely!');
    console.log(`📁 Clean HTML files saved to: ${CONFIG.outputDir}`);
    console.log('\n📖 To convert to PDF:');
    console.log('1. Open the HTML files in your browser');
    console.log('2. Use Ctrl+P (Cmd+P on Mac) to print');
    console.log('3. Select "Save as PDF" as the destination\n');
    
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
