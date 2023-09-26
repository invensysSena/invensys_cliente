import { useEffect, useState } from "react";
import "../assets/css/CambioFotoPerfilAdmin.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import { IconsSvgLoading } from "../svg/IconsSvgLoading";
import { useRef } from "react";
import { svgX } from "../svg/iconsSvg";
import { messageError, messageSuccess } from "../utils/alertsAplication";
import { serviceUsers } from "../services/usersService";
import { ActionUser } from "../utils/Constant";
import { useNavigate } from "react-router-dom";
export const CambioFotoPerfilAdmin = ({estado,cambiarEstado}) => {
  let navigate = useNavigate();

  const [view, setView] = useState(true);
  const [Image, setImage] = useState([]);
  const [load, setLoad] = useState(true);

  const hasEffectRun = useRef(false);
  function dragOverHandler() {
    const dropArea = document.querySelector(".drag-area");
    const dragText = dropArea.querySelector("h2");
    const button = dropArea.querySelector("button");
    const input = dropArea.querySelector("#input-file");

    button.addEventListener("click", () => {
      input.click();
    });
    input.addEventListener("change", (e) => {
      let file = e.target.files[0];
      dropArea.classList.add("active");
      showFile(file);
      dropArea.classList.remove("active");

      setImage(e.target.files[0]);
    });

    dropArea.addEventListener("dragover", (e) => {
      e.preventDefault();
      dropArea.classList.add("active");
      dragText.textContent = "Suelta para subir la imagen";
    });
    dropArea.addEventListener("dragleave", (e) => {
      e.preventDefault();
      dropArea.classList.remove("active");
      dragText.textContent = "Arrastra una imagen aquí";
    });
    dropArea.addEventListener("drop", (e) => {
      e.preventDefault();
      dragText.classList.remove("active");
      dragText.textContent = "Arrastra una imagen aquí";
      showFile(e.dataTransfer.files);

      setImage(e.dataTransfer.files[0]);
    });
    function showFile(file) {
      if (file.length === undefined) {
        processFile(file);
      } else {
        if (file.length > 1) {
          alert("Solo puedes subir una imagen");
          dropArea.classList.remove("active");
          return;
        } else {
          processFile(file[0]);
        }
      }
    }

    function processFile(file) {
      const fileType = file.type;
      const validExtensions = ["image/jpeg", "image/jpg", "image/png"];
      console.log(fileType)
      console.log(validExtensions)
      if (validExtensions.includes(fileType)) {
        const fileReader = new FileReader();

        fileReader.addEventListener("progress", (e) => {
          Math.round((e.loaded / e.total) * 100);
        });

        fileReader.addEventListener("load", (e) => {
          const fileUrl = e.target.result;
          if (document.querySelector("#preview").innerHTML !== "") {
            document.querySelector("#preview").innerHTML = "";
            let image = `
                <div id="1" class="file-container">
                    <img src="${fileUrl}" alt="${file.name} "
                    style="width: 200px; height: 200px;
                    border-radius: 50%;
                    border: 1px solid #ccc;
                    >
                    <div class="status">
                    <span class=""></span>
                    </div>
                </div>
                    `;
            const html = document.querySelector("#preview").innerHTML;
            document.querySelector("#preview").innerHTML = html + image;
          } else {
            let image = `
                <div id="1" className="file-container">
                    <img src="${fileUrl}" alt="${file.name} "
                    style="width: 200px; height: 200px;
                    border-radius: 50%;
                    border: 1px solid #ccc;
                    >
                    <div className="status">
                    <span className=""></span>
                    </div>
                </div>
                    `;
            const html = document.querySelector("#preview").innerHTML;
            document.querySelector("#preview").innerHTML = html + image;
          }
        });
        fileReader.readAsDataURL(file);
      } else {
        
        dropArea.classList.remove("active");
        return;
      }
    }
  }
  useEffect(() => {
    if (!hasEffectRun.current) {
      hasEffectRun.current = true;
      return;
    }
    dragOverHandler();
  },[view]);

const uploadImg = async () => {
    setLoad(false);
    try {
      let action = ActionUser.GETALLADMIN_UPDATE_IMG
      await serviceUsers.uploadImg(action,Image);
      messageSuccess("Imagen subida correctamente")
      cambiarEstado(false)
      setLoad(true);

      let roundedNumber = Math.round(Math.random() * 100);
      navigate("/perfil?updateImg=" + roundedNumber + "&true");
      window.location.reload();
      
    }catch (error) {
      messageError("Error al subir la imagen")
      cambiarEstado(false)
      setLoad(true); }
  };

 
 
  return (
    <>
      <div className={estado == true ? "block resize " : "hidden"}>
        <div className="container_v resize ">
          <div className="">
            <button
              className="absolute top-0 left-0"
              onClick={() => cambiarEstado(false) } >
             {svgX(35,35,"#44b2fd")}
            </button>
          </div>
          <div className="drag-area">
            <h2>Arrastra una imagen aquí</h2>
            <span>O</span>
            <button>Subir imagen desde mi computador</button>
            <input type="file" name="imagen" id="input-file" hidden />
          </div>
          <div id="preview"></div>
          <div className="input mx-2">
            {load === false ? (
              <span
                type="button"
                className="bg-[#5994f5] text-white w-full rounded-sm mt-3 
              duration-300 hover:bg-[#5994f5] hover:shadow-lg justify-center p-2
                          disabled flex items-center"
              >
                <IconsSvgLoading w={20} h={20}/>
                Espere un momento...
              </span>
            ) : (
              <button
                onClick={uploadImg}
                className="bg-gray-400 text-white block w-full rounded-sm mt-3 p-2
              duration-300  hover:shadow-lg "
              >
                <div className="span">Subir imagen</div>
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
