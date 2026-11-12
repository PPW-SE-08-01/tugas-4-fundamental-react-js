function CardMahasiswa(props) {
    return (
        <div classname="card">
            <h3>{props.nama}</h3>
            <p>NIM: {props.nim}</p>
        </div>
    );
}

export default CardMahasiswa;