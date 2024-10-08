// source code https://codepen.io/alireza82/pen/XWeabge
import { useEffect } from 'react'
import './themeToggle.scss'
import setDarkMode from '../themeManager';
import { useDispatch } from 'react-redux';
import { toggleTheme } from '../../features/themeSlicer';
import { useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../store/store';

export default function ThemeToggle() {

    const dispatch: AppDispatch = useDispatch();
    var isDarkMode = useSelector((state:RootState) => state.theme.isDarkMode)

    useEffect(() => {
        setDarkMode(isDarkMode);
        setTimeout(() => {
            document.body.classList.remove('no-color-transition');
          }, 10000);
    }, [dispatch]);

    const handleTheme = () => {
        isDarkMode = !isDarkMode;
        dispatch(toggleTheme());
        setDarkMode(isDarkMode);
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }

    return (
        <div className='mr-5'>
            <input type="checkbox" id="toggle-check" checked={!isDarkMode} onChange={handleTheme}/>
            <label htmlFor="toggle-check" className="toggle-label">
                <div className="toggle-container">
                    <div className="toggle-light-icon icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                    </div>
                    <div className="toggle-dark-icon icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </div>
                    <div className="toggle-circle"></div>
                </div>
            </label>
        </div>
    )
}