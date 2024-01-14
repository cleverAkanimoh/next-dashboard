"use client"

import React from 'react'
import { motion as m } from "framer-motion"

export default function Loading() {
    return (
        <div className='flex items-center justify-center w-full min-h-[50vh] md:min-h-screen'>
            <m.div
                animate={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 270, 270, 0],
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }}
                className='w-36 h-36 bg-blue-500'
            />
        </div>
    )
}
