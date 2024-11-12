import './HomePageBtn.css';
import React from 'react';
import { Link } from 'react-router-dom';

const HomePageBtn = () => {
    return (
        <Link to="/todolist">
            <button type="button" id="home-page-btn">
                <p id="home-page-btn-text">
                    Get Started <i class="fa-solid fa-arrow-right"></i>
                </p>
            </button>
        </Link>
    );
}

export default HomePageBtn;