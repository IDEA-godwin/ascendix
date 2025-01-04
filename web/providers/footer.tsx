import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-[#5B2B99]  py-8 shadow-2xl bottom-0">
  
  <ul className="flex justify-center gap-8">
  
  <li>
    <a href="#" className="text-gray-500 hover:text-blue-500">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.657-4.788 1.325 0 2.463.099 2.794.143v3.24h-1.917c-1.505 0-1.797.715-1.797 1.763v2.312h3.587l-.467 3.622h-3.12V24h6.116c.729 0 1.326-.597 1.326-1.326V1.326C24 .597 23.403 0 22.675 0z"/>
      </svg>
    </a>
  </li>

  
  <li>
    <a href="#" className="text-gray-500 hover:text-pink-500">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.326 3.608 1.3.975.975 1.238 2.242 1.3 3.608.058 1.266.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.326 2.633-1.3 3.608-.975.975-2.242 1.238-3.608 1.3-1.266.058-1.645.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.326-3.608-1.3-.975-.975-1.238-2.242-1.3-3.608-.058-1.266-.07-1.645-.07-4.85s.012-3.584.07-4.85c.062-1.366.326-2.633 1.3-3.608.975-.975 2.242-1.238 3.608-1.3 1.266-.058 1.645-.07 4.85-.07M12 0C8.741 0 8.332.015 7.053.072 5.775.129 4.688.415 3.758 1.344 2.829 2.273 2.543 3.359 2.486 4.637.015 8.332 0 8.741 0 12s.015 3.668.072 4.947c.057 1.278.343 2.365 1.272 3.294.929.929 2.016 1.215 3.294 1.272C8.332 23.985 8.741 24 12 24s3.668-.015 4.947-.072c1.278-.057 2.365-.343 3.294-1.272.929-.929 1.215-2.016 1.272-3.294.057-1.278.072-1.687.072-4.947s-.015-3.668-.072-4.947c-.057-1.278-.343-2.365-1.272-3.294-.929-.929-2.016-1.215-3.294-1.272C15.668.015 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.2a4.038 4.038 0 110-8.076 4.038 4.038 0 010 8.076zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/>
      </svg>
    </a>
  </li>

  
  <li>
    <a href="#" className="text-gray-500 hover:text-blue-400">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.954 4.569c-.885.394-1.83.658-2.825.775 1.014-.611 1.794-1.574 2.163-2.724-.951.555-2.005.959-3.127 1.184-.897-.958-2.178-1.555-3.594-1.555-2.717 0-4.918 2.201-4.918 4.917 0 .39.045.765.127 1.124-4.083-.205-7.699-2.159-10.125-5.138-.422.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.806-.026-1.566-.247-2.229-.616v.061c0 2.385 1.697 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.317 0-.626-.03-.927-.086.627 1.956 2.444 3.379 4.6 3.419-1.684 1.319-3.808 2.105-6.115 2.105-.398 0-.79-.023-1.175-.069 2.189 1.402 4.768 2.22 7.548 2.22 9.057 0 14.007-7.496 14.007-13.986 0-.209 0-.42-.015-.63.961-.695 1.8-1.562 2.462-2.549z"/>
      </svg>
    </a>
  </li>


  <li>
    <a href="#" className="text-gray-500 hover:text-gray-800">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.612-4.042-1.612-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.76-1.605-2.665-.305-5.466-1.335-5.466-5.93 0-1.31.469-2.38 1.236-3.22-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.54 11.54 0 016.005 0c2.292-1.552 3.3-1.23 3.3-1.23.653 1.653.242 2.874.118 3.176.77.84 1.236 1.91 1.236 3.22 0 4.61-2.804 5.625-5.476 5.92.43.372.823 1.103.823 2.222 0 1.606-.015 2.897-.015 3.293 0 .322.22.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z"/>
      </svg>
    </a>
  </li>

  
  <li>
    <a href="#" className="text-gray-500 hover:text-pink-400">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12zm7.352 4.716a9.637 9.637 0 013.213 7.387 14.913 14.913 0 00-5.287-.082 31.335 31.335 0 00-2.006-4.49 9.582 9.582 0 014.08-2.815zm-4.88 1.168a26.945 26.945 0 011.893 4.27 26.817 26.817 0 01-6.824.59 22.713 22.713 0 00-1.9-3.641 9.576 9.576 0 016.831-1.22zm-7.677 1.88a21.467 21.467 0 011.8 3.431 19.492 19.492 0 01-5.822.493 9.57 9.57 0 014.022-3.924zm-4.553 6.01c.22.008.431.014.645.014a22.102 22.102 0 005.83-.8 29.545 29.545 0 012.162 5.607 9.56 9.56 0 01-8.637-4.821zm9.476 4.816a27.71 27.71 0 00-2.04-5.292 25.45 25.45 0 006.697-.48 19.85 19.85 0 011.066 6.515 9.564 9.564 0 01-5.723-.743zm7.027-2.351a21.682 21.682 0 00-.91-5.332 14.435 14.435 0 014.557.066 9.615 9.615 0 01-3.647 5.266z"/>
      </svg>
    </a>
  </li>
</ul>

<div className='border-b pt-6'></div>


      
     <p className="text-sm text-gray-300 text-center pt-6">&copy; 2024. Ascendix. All rights reserved.</p> 
    

</footer>
  )
}
