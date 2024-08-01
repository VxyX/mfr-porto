import { Pong3d,OcrJp,SobatDim,UniBook } from '../img/project_img';

const DataProject = [
    { 
        title: 'Kenyuu OCR', 
        shortDesc: 'Thesis project, made with python3, Qt, HTML, JavaScript, and SQLite', 
        longDesc: `
<span class="text-highlight">Kenyuu OCR</span> 研遊 (けんゆう) - Kenyuu: 研 (study, research) + 遊 (play), is OCR Application that are made specifically for extracting Japanese Text from image, translate it to Indonesia/English. This also provided with words dictionary look-up, and show other details if the word is conjugated. This feature is designed for Japanese Learner that want to use this App while playing Japanese Games. This thesis was completed in <span class="text-highlight">March 2024</span>.
        
This project was built with <span class="text-highlight-styled">Python3</span>, and <span class="text-highlight-styled">Qt</span> Framework for the core.
Other tech included are <span class="text-highlight-styled">Tesseract OCR</span>, <span class="text-highlight-styled">MeCab</span> (Japaneses Parser), <span class="text-highlight-styled">jisho.org API</span>, and <span class="text-highlight-styled">translator API</span>. This also use <span class="text-highlight-styled">HTML</span> and <span class="text-highlight-styled">JavaScript</span> for QtWebEngine (mainly used for writing furigana text with &lt;ruby&gt;), and also <span class="text-highlight-styled">SQLite</span> for word data bookmark management`, 
        img: OcrJp 
    },
    { 
        title: 'UniBookStore', 
        shortDesc: `Certification BNSP project, built with native PHP, JavaScript, html with bootstrap css, and MySql`, 
        longDesc: `
This is Certification assignment for <span class="text-highlight">BNSP Certification</span> that was held in <span class="text-highlight">Feb 2024</span>. This is a CRUD management for only 2 tables (Book and Publisher), with a feature to search through the book data. 
        
(Rant)
it was made in just 1 night (LOL). It was a sudden assignment that was given at night.. and needed to be done and presented the next day.
        
This project was built with native <span class="text-highlight-styled">PHP</span>, <span class="text-highlight-styled">Html</span>, <span class="text-highlight-styled">JavaScript</span>, and <span class="text-highlight-styled">CSS Bootstrap</span>. For the database is <span class="text-highlight-styled-styled">MySql</span>`, 
        img: UniBook 
    },
    { 
        title: '3D Pong Game', 
        shortDesc: '', 
        longDesc: `
        
        `, 
        img: Pong3d 
    },
    { 
        title: 'Sobat Dimsum', 
        shortDesc: '', 
        longDesc: `
        
        `, 
        img: SobatDim 
    },
]

export default DataProject;