import { useEffect, useState } from "react";
import "../assets/css/CambioFotoPerfilAdmin.css";
import { useGetUsers } from "../hooks/context/GetUsersContext";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { IconsSvgLoading } from "../svg/IconsSvgLoading";
import { useRef } from "react";
export const CambioFotoPerfilAdmin = ({stateView}) => {
  const { uploadImgAdminAll } = useGetUsers();
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
   
    await uploadImgAdminAll(Image);
    // await window.location.reload();
    setLoad(true);
  };

  console.log(stateView)

  useEffect(() => {
    setView(stateView);
  }, [stateView]);

  return (
    <>
      <div className={view === true ? "block resize " : "hidden"}>
        <div className="container_v resize ">
          <div className="">
            <button
              className="absolute top-0 left-0"
              onClick={() => {
                setView(false);
               
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#5994f5"
                  d="M12 2c5.53 0 10 4.47 10 10s-4.47 10-10 10S2 17.53 2 12S6.47 2 12 2m3.59 5L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41L15.59 7Z"
                />
              </svg>
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
