import React from 'react'
import './styles.css'

interface Props {
    children?: React.ReactNode
}

const VSection: React.FC<Props> = ({ children }) => {
    return (
        <div className="v-section">
            {children}
        </div>
    )
}

export default VSection
