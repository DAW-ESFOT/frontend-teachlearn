import mision from './images/misionicono.png';
import vision from './images/misionicono.webp';
import './styles/vision-mision.css';

function App() {
    return (

        <div className="App">
            <body>
            <div className="superior"></div>
            <div className="contenido">
                <h1 >Misión y Visión</h1>
                <div className="vision">
                    <div className="visiontext"><p>Generar, enseñar, difundir, aplicar e innovar conocimientos de nivel primario, secundario y
                        ofimática, enfocado en las materias de matemática, física, quimica, computacion, manejo
                        de microsoft office para el desarrollo sustentable de su modelo educativo para entornos vituales de aprendizaje
                        a fin de garantizar los principios de educación.
                    </p></div>
                    <div className="visionimg"><img src={vision} className="visionicono" alt="vision" width="300" height="300"/></div>
                </div>
                <div className="mision" >
                    <div className="misiontext">
                        <p>
                            TEACHLearn a través de un entorno de aprendizaje virtual facilita el acceso a una educación
                            para el desarrollo y el bienestar integral, con un modelo edcativo sustentable que promueve
                            el parendizaje y la mejora de concimientos de cada uno de sus estudiante mediante el uso de plataformas
                            web como ZOOM.
                        </p></div>
                    <div className="misionimg"><img src={mision} className="misionicono" alt="mision" width="300" height="300"/></div>
                </div>

            </div>
            <div className="inferior"></div>
            </body>

        </div>

    );
}

export default App;


