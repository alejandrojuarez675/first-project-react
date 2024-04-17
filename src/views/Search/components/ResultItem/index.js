export default function ResultItem({first_name, last_name, email}) {
    return (
        <div>
            {first_name + " " + last_name + " -> " + email}
        </div>
    )
}