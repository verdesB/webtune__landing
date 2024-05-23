"use client"
import React from 'react';
import { SparklesCore } from './ui/Sparkles';

const SparklesPreview = () => (
    <div className="h-[1000vh] absolute w-full bg-[#1b202c] flex flex-col items-center justify-center overflow-hidden rounded-md z-[-1]">
        <div className="w-full absolute inset-0 h-auto">
            <SparklesCore
                id="tsparticlesfullpage"
                background="transparent"
                minSize={0.6}
                maxSize={1.4}
                particleDensity={50}
                className="w-full h-full"
                // particleColor="#FFFFFF"
                particleColor="#4cd9e0"
            />
        </div>

    </div>
);

export default React.memo(SparklesPreview);
