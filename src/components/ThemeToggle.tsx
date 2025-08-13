'use client'
import { initTheme, toggleTheme } from '@/store/themeSlice';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { motion } from "motion/react";
import { MoonIcon, SunIcon } from 'lucide-react';
import { RootState } from '@/store/store';

function ThemeToggle() {

    const dispatch = useDispatch();
    const mode = useSelector((state: RootState) => state.theme.mode);
    
    useEffect(() => {
        dispatch(initTheme());
    }, [dispatch]);

    return (
        <button
            onClick={() => dispatch(toggleTheme())}
            className="p-2 rounded-full bg-primary-light text-primary-content hover:text-primary-dark hover:bg-primary transition-colors"
            aria-label="Toggle theme"
        >
            <div className="relative w-5 h-5">
                <motion.div
                    initial={false}
                    animate={{ opacity: mode === "dark" ? 1 : 0 }}
                    transition={{ duration: 0.15 }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <SunIcon className="w-5 h-5" />
                </motion.div>
                <motion.div
                    initial={false}
                    animate={{ opacity: mode === "light" ? 1 : 0 }}
                    transition={{ duration: 0.15 }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <MoonIcon className="w-5 h-5" />
                </motion.div>
            </div>
        </button>
    )
}

export default ThemeToggle
