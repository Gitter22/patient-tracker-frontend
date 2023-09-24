import React from 'react'

const Notes = ({ size, ...props }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={size} height={size}  {...props}>
            {/* <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
            <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H288V368c0-26.5 21.5-48 48-48H448V96c0-35.3-28.7-64-64-64H64zM448 352H402.7 336c-8.8 0-16 7.2-16 16v66.7V480l32-32 64-64 32-32z"
            />
        </svg>
    )
}

export default Notes