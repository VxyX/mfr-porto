import { Pong3d,OcrJp,SobatDim,UniBook } from '../img/project_img';

const DataProject = [
    { 
        title: 'Kenyuu OCR', 
        shortDesc: 'Thesis project, made with python3, Qt, html, js, and SQLite', 
        longDesc: `
Kenyuu OCR 研遊 (けんゆう) - Kenyuu: 研 (belajar, meneliti) + 遊 (bermain), is OCR Application that are made specifically for extracting Japanese Text from image, translate it to Indonesia/English. This also provided with words dictionary look-up, and show other details if the word is conjugated. This feature is designed for Japanese Learner that want to use this App while playing Japanese Games.
        
This project is built with Python3, and Qt Framework for the core.
Other tech included are Tesseract OCR, MeCab (Japaneses Parser), jisho.org API, and translator API. This also use html, js for QtWebEngine (mainly used for writing furigana text with <ruby>), and also SQLiter for word data bookmark management`, 
        img: OcrJp 
    },
    { 
        title: 'UniBookStore', 
        shortDesc: `Certification BNSP project, built with native PHP, JavaScript, html with bootstrap css, and MySql`, 
        longDesc: `
This is Certification assignment for BNSP Certification that was held in Feb 2024. This is a CRUD management for only 2 tables (Book and Publisher), with a feature to search through the book data. 
        
(Rant)
it was made in just 1 night (LOL). It was a sudden assignment that was given at night.. and needed to be done and presented the next day.
        
This project was built with native PHP, Html, JavaScript, and CSS Bootstrap. For the database is MySql`, 
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