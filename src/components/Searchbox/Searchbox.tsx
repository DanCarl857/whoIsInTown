import './searchbox.css'

interface Props {
    placeholder: string;
}

const Searchbox: React.FC<Props> = ({ placeholder }) => {
    return (
        <input
            className="input-field"
            placeholder={placeholder}
            type="text"
        />
    )
}

export default Searchbox