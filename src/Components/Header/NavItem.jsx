import React from 'react'

export default function NavItem({ label, url }) {
    return (
        <div className="bg-red-300">
            <div>
                {label}
            </div>
        </div>
    )
}