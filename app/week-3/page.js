"use client";

import Item from './item';
import Link from 'next/link';

export default function Home() {
    return (
        <main className='bg-gray-950 text-white min-h-screen flex items-center'>
            <div className='text-left w-[400px]'>
                <hi className='text-3xl font-bold mb-6 m-5'>Shopping List</hi>
                <Link href="">
                <Item/>
                </Link>
            </div>
        </main>
    );
}
