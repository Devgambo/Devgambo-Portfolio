import React from 'react'

function Loading() {
    return (
        <div className="flex flex-col justify-center items-center w-full min-h-screen bg-black relative overflow-hidden">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-900/20 via-purple-900/20 to-black"></div>
            
            {/* Animated circles for depth */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            
            {/* Main loading spinner */}
            <div className="relative z-10 flex flex-col items-center gap-8">
                {/* Spinning ring loader */}
                <div className="relative w-24 h-24">
                    <div className="absolute inset-0 border-4 border-pink-500/20 rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-transparent border-t-pink-500 rounded-full animate-spin"></div>
                    <div className="absolute inset-2 border-4 border-purple-500/20 rounded-full"></div>
                    <div className="absolute inset-2 border-4 border-transparent border-t-purple-500 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '0.8s' }}></div>
                    <div className="absolute inset-4 border-4 border-pink-500/30 rounded-full animate-pulse"></div>
                </div>
                
                {/* Loading text with gradient */}
                <div className="text-center">
                    <h2 className="font-audiowide text-2xl md:text-3xl font-bold mb-2" style={{
                        backgroundImage: 'linear-gradient(to right, #ec4899, #8b5cf6)',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent',
                        WebkitTextFillColor: 'transparent',
                    }}>
                        
                    </h2>
                    <div className="flex gap-1 justify-center mt-4">
                        <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loading
