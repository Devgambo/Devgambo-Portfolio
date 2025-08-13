import Image from 'next/image'
import React from 'react'

function Loading() {

    return (
        <div className="flex justify-center items-center w-[400px] h-[400px] rounded-full overflow-hidden border-[1px] border-white shadow-[0_0_30px_10px_rgba(59,130,246,0.5)] animate-pulse">
            <Image
                src="/loader2.gif"
                alt="Loading..."
                width={500} // adjust based on your loader's actual size
                height={500}
                className="object-cover w-full h-full"
            />
        </div>
    )
}

export default Loading
