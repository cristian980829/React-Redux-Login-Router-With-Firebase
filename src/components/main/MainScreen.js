import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { startLogout } from '../../actions/auth';
import Swal from 'sweetalert2';


export const MainScreen = () => {

    const [buttonEnabled, setbuttonEnabled] = useState(false);

    const dispatch = useDispatch();
    // const { name } = useselector( state => state.auth );

    const hanleLogout = () => {
        Swal.fire({
            title: 'Exito',
            text: '¡Encuesta finalizada satisfactoriamente!',
            allowOutsideClick: false,
        });   
        setbuttonEnabled(true)
        setTimeout(() => {
           dispatch( startLogout() ) 
        }, 3000);
    }

    return (
        <div>
            <h1>Hábitos alimenticios: Encuesta</h1>


            <br />
            <br />

            <div className="pregresp">
                <div className="pregunta">
                    1. ¿Qué bebe durante el día?
                    
                </div>
                <br/>
                
                <div className="respuestas">
                    <input type="radio" name="preg1" value="1" /> Agua<br />
                    <input type="radio" name="preg1" value="2" /> Gaseosa<br />
                    <input type="radio" name="preg1" value="3" /> Jugos naturales<br />
                    <input type="radio" name="preg1" value="4" /> Leche/Yogurt<br />
                    <input type="radio" name="preg1" value="5" /> Otro<br />
                </div>
            </div>

            <br />

            <div className="pregresp">
                <div className="pregunta">
                    2. ¿Qué tipo de carne suele consumir con mayor frecuencia?
                    
                </div>
                <br/>
                
                <div className="respuestas">
                    <input type="radio" name="preg2" value="6" /> Carne de res<br />
                    <input type="radio" name="preg2" value="7" /> Bistec<br />
                    <input type="radio" name="preg2" value="8" /> Chuletas de cerdo<br />
                    <input type="radio" name="preg2" value="9" /> Pollo<br />
                    <input type="radio" name="preg2" value="10" /> Pavo<br />
                    <input type="radio" name="preg2" value="11" /> Pescado<br />
                </div>
            </div>

            <br />

            <div className="pregresp">
                <div className="pregunta">
                    3. ¿Qué tipo de comida o comidas prepara con más frecuencia?
                </div>
                <br/>
                
                <div className="respuestas">
                    <input type="radio" name="preg3" value="12" /> Frituras<br />
                    <input type="radio" name="preg3" value="13" /> Alimentos cocidos al horno<br />
                    <input type="radio" name="preg3" value="14" /> Alimentos asados<br />
                    <input type="radio" name="preg3" value="15" /> Guisados/cocina a fuego lento<br />
                    <input type="radio" name="preg3" value="16" /> Alimentos a la parrilla<br />
                </div>
            </div>

            <br />

            <div className="pregresp">
                <div className="pregunta">
                    4. ¿Cuántas veces al día come?
                    
                </div>
                <br/>
                
                <div className="respuestas">
                    <input type="radio" name="preg4" value="17" /> 1<br />
                    <input type="radio" name="preg4" value="18" /> 2<br />
                    <input type="radio" name="preg4" value="19" /> 3<br />
                    <input type="radio" name="preg4" value="20" /> 4<br />
                    <input type="radio" name="preg4" value="21" /> 5<br />
                    <input type="radio" name="preg4" value="22" /> más<br />
                </div>
            </div>

            <br />

            <div className="pregresp">
                <div className="pregunta">
                    5. ¿Cuántas veces sale a comer afuera durante la semana?
                    
                </div>
                <br/>
                
                <div className="respuestas">
                    <input type="radio" name="preg5" value="23" /> 1<br />
                    <input type="radio" name="preg5" value="24" /> 2<br />
                    <input type="radio" name="preg5" value="25" /> 3<br />
                    <input type="radio" name="preg5" value="26" /> 4<br />
                    <input type="radio" name="preg5" value="27" /> 5<br />
                    <input type="radio" name="preg5" value="28" /> más<br />
                </div>
            </div>

            <br />

            <div className="pregresp">
                <div className="pregunta">
                    6. ¿Añade sal a los alimentos cuando cocina?
                    
                </div>
                <br/>
                
                <div className="respuestas">
                    <input type="radio" name="preg6" value="29" /> Sí<br />
                    <input type="radio" name="preg6" value="30" /> No<br />
                </div>
            </div>

            <br />

            <div className="pregresp">
                <div className="pregunta">
                    7. ¿Añade sal a la comida en la mesa?
                    
                </div>
                <br/>
                
                <div className="respuestas">
                    <input type="radio" name="preg7" value="31" /> Sí<br />
                    <input type="radio" name="preg7" value="32" /> No<br />
                </div>
            </div>

            <br />

            <div className="pregresp">
                <div className="pregunta">
                    8. ¿Cómo evaluarías tus hábitos alimenticios?
                    
                </div>
                <br/>
                
                <div className="respuestas">
                    <input type="radio" name="preg8" value="31" /> Excelentes<br />
                    <input type="radio" name="preg8" value="32" /> Buenos<br />
                    <input type="radio" name="preg8" value="32" /> Malos<br />
                    <input type="radio" name="preg8" value="32" /> Regulares<br />
                    <input type="radio" name="preg8" value="32" /> Pesimos<br />
                </div>
            </div>

            <br />

            <div className="pregresp">
                <div className="pregunta">
                    9. ¿Sueles comer comida chatarra?
                    
                </div>
                <br/>
                
                <div className="respuestas">
                    <input type="radio" name="preg9" value="31" /> Sí, casi diario como comida chatarra<br />
                    <input type="radio" name="preg9" value="32" /> Sí, como algunas veces por semana comida chatarra<br />
                    <input type="radio" name="preg9" value="32" /> Como comida chatarra sólo en ocasiones<br />
                    <input type="radio" name="preg9" value="32" /> No, prácticamente no como comida chatarra<br />
                </div>
            </div>

            <br />

            <div className="pregresp">
                <div className="pregunta">
                    10. ¿Qué sueles incluir en tu dieta diaria con mayor frecuencia?
                    
                </div>
                <br/>
                
                <div className="respuestas">
                    <input type="radio" name="preg10" value="31" /> Proteína animal<br />
                    <input type="radio" name="preg10" value="32" /> Proteína vegetal<br />
                    <input type="radio" name="preg10" value="32" /> Frutas<br />
                    <input type="radio" name="preg10" value="32" /> Verduras<br />
                    <input type="radio" name="preg10" value="32" /> Carbohidratos salados<br />
                    <input type="radio" name="preg10" value="32" /> Grasa vegetal<br />
                    <input type="radio" name="preg10" value="32" /> Grasa no vegetal<br />
                </div>
            </div>

            <br />

            


            <div className="d-grid gap-2">
                <button disabled={buttonEnabled} onClick={ hanleLogout } className="btn btn-success" type="submit">Terminar encuesta</button>
            </div>

        </div>
    )
}
