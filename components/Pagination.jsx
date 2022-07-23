import React from 'react'

const Pagination = ({ postsPerPage, totalPosts }) => {
  const pageNumbers = [];
  for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  } 

  return (
    <div>
        <nav>
            <ul>
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a href="!#">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    </div>
  )
}

export default Pagination