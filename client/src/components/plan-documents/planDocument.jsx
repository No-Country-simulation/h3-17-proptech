import styles from "./planDocument.module.css";
import { FaCloudUploadAlt } from "react-icons/fa";

import { pdficon } from "../../assets";

export function PlanDocument({ handleNextStep }) {
  return (
    <div className={styles.content}>
      <div className={styles.introductiontext}>
        <p>
          Para continuar con tu solicitud, necesitamos que cargues los
          documentos requeridos. Esto incluye tu DNI, tus últimos tres recibos
          de sueldo, y un comprobante de domicilio reciente. También es
          obligatorio que los garantes proporcionen la misma documentación. Usá
          nuestra herramienta para subir fotos o archivos escaneados
          directamente desde tu dispositivo. ¡No te preocupes, es rápido y
          seguro!
        </p>
      </div>
      <div className={styles.datacontainer}>
        <div className={styles.datatext}>
          <ol>
            <li>
              <span>DNI (Documento Nacional de Identidad)</span>
            </li>
          </ol>
          <ul>
            <li>
              <span>Subí una foto clara del anverso y reverso de tu DNI.</span>
            </li>
            <li>
              <span>
                Asegurate de que esté en buen estado y sea completamente
                legible.
              </span>
            </li>
            <li>
              <span>
                Se recomienda usar la cámara de tu móvil en un lugar bien
                iluminado para evitar sombras o reflejos.
              </span>
            </li>
          </ul>
          <ol start="2">
            <li>
              <span>
                Recibos de sueldo Proporcioná los tres últimos recibos de sueldo
                consecutivos.
              </span>
            </li>
          </ol>
          <ul>
            <li>
              <span>
                Pueden ser fotografías o escaneos en formato digital (JPG, PNG o
                PDF).
              </span>
            </li>
            <li>
              <span>
                Asegurate de que todos los datos, incluyendo fechas, montos y
                detalles del empleador, sean visibles.
              </span>
            </li>
          </ul>
          <ol start="3">
            <li>
              <span>Comprobante de domicilio</span>
            </li>
          </ol>
          <ul>
            <li>
              <span>
                Subí una factura de servicio reciente (agua, luz, gas, o
                internet) que acredite tu dirección actual.
              </span>
            </li>
            <li>
              <span>
                La dirección debe coincidir con la ingresada en el formulario.
              </span>
            </li>
            <li>
              <span>
                La fecha del comprobante debe ser de los últimos tres meses.
              </span>
            </li>
          </ul>
          <ol start="4">
            <li>
              <span>Documentación de los garantes DNI del garante:</span>
            </li>
          </ol>
          <ul>
            <li>
              <span>
                Fotos del frente y dorso, siguiendo las mismas instrucciones que
                el solicitante.
              </span>
            </li>
            <li>
              <span>
                Recibos de sueldo del garante: Últimos tres recibos
                consecutivos, con calidad suficiente para validar la
                información.
              </span>
            </li>
            <li>
              <span>
                Comprobante de domicilio del garante: Factura reciente que
                coincida con los datos declarados por el garante.{" "}
              </span>
            </li>
          </ul>
          <ol start="5">
            <li>
              <span>Indicaciones generales</span>
            </li>
          </ol>
          <ul>
            <li>
              <span>
                Carga de archivos: Asegurate de que los archivos sean legibles y
                estén en los formatos aceptados (JPG, PNG, PDF).
              </span>
            </li>
            <li>
              <span>
                Tamaño máximo: Cada archivo no debe superar los 5MB para
                garantizar una carga rápida y sin inconvenientes.
              </span>
            </li>
            <li>
              <span>
                Verificación automática: Una vez subidos, el sistema validará
                automáticamente si los documentos cumplen con los requisitos
                básicos.
              </span>
            </li>
          </ul>
        </div>
        <div className={styles.dataupload}>
          <div className={styles.titletext}>
            <h4>Subir archivos</h4>
            <p>Selecciona y sube los documentos solicitados</p>
            <hr />
          </div>
          <div className={styles.dragcontainer}>
            <FaCloudUploadAlt />
            <h4>Elija un archivo o arrástrelo y suéltelo aquí</h4>
            <p>FORMATOS JPG,PNG Y PDF</p>
            <button className={styles.uploadbuttons}>Examinar archivos</button>
          </div>
          <div className={styles.archive}>
            <div className={styles.docicon}>
              <div className={styles.iconpdf}>
                <img src={pdficon} className={styles.iconpdf} />
              </div>

              <div className={styles.textdoc}>
                <h4>dni.jpg</h4>
                <p>94kb</p>
                <p style={{ color: "var(--Primario)" }}>Completado</p>
              </div>
              <div className={styles.closebutton}>
                <p>x</p>
              </div>
            </div>
          </div>
          <div className={styles.archive}>
            <div className={styles.docicon}>
              <div className={styles.iconpdf}>
                <img src={pdficon} className={styles.iconpdf} />
              </div>

              <div className={styles.textdoc}>
                <h4>recibo.pdf</h4>
                <p>94kb</p>
                <p style={{ color: "var(--Primario)" }}>Completado</p>
              </div>
              <div className={styles.closebutton}>
                <p>x</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.buttoncontainer}>
        <button className={styles.buttonnext} onClick={handleNextStep}>
          Continuar con la solicitud
        </button>
      </div>
    </div>
  );
}
