import "bootstrap/dist/css/bootstrap.min.css";
import Formulario from "./Formulario";
import Alert from "./Alert";
import SocialButton from "./SocialButton";
const Registro = ({ error, setError }) => {
    return (
        <>
            <h1>Crear una cuenta</h1>
            <section>
                <SocialButton />
            </section>
            <h4>Crea tu cuenta ingresando tu mail.</h4>
            <Formulario setError= {setError} />
            <Alert error={error.error} color={error.color} mensaje={error.mensaje} />
        </>
    );
};
export default Registro;
