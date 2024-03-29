import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import { getCategories } from '../services' 

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories()
            .then((newCategories) => setCategories(newCategories))
    }, []);
    
    return (
        <div className="bg-white shadow-lg rounded-lg py-4 px-8 mb-8 pb-4">
            <h3 className="text-xl mb-4 font-semibold border-b pb-4">
                Categories
            </h3>
            {categories.map((category) => (
                <Link key={category.slug} href={`/category/${category.slug}`}>
                    <span className="cursor-pointer block mb-3 hover:text-yellow-400">
                        {category.name}
                    </span>
                </Link>
            ))}
        </div>
    )
}

export default Categories