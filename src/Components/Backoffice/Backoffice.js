import CardBackoffice from "./Card/CardBackoffice"
const Backoffice = ({ elementBackoffice}) => {
    return (
        <div>
            <h1>Bienvenid@ a Backoffice</h1>
            <p>Aqui podras administrar el sitio</p>
            <div>
                {
                   elementBackoffice.length &&  elementBackoffice.map(e=><CardBackoffice props={e}/>)
                }
            </div>

        </div>
    )
};

export default Backoffice;
