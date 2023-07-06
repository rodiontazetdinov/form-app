import { Link } from "react-router-dom";
import axios from 'axios';

const Start = () => {
// function requestPdf () {
    
//     const url = 'http://34.92.175.180:8000/download/';
//     const data = {
//       filename: 'pres.pdf'
//     };
    
//     fetch(url, {
//       method: 'POST',
//       body: JSON.stringify(data),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })
//       .then(response => response.blob())
//       .then(blob => {
//         // Создаем ссылку на Blob объект
//         const downloadLink = document.createElement('a');
//         downloadLink.href = URL.createObjectURL(blob);
//         downloadLink.download = data.filename;
        
//         // Добавляем ссылку на страницу и автоматически кликаем на нее для скачивания файла
//         document.body.appendChild(downloadLink);
//         downloadLink.click();
        
//         // Удаляем ссылку из DOM после скачивания файла
//         document.body.removeChild(downloadLink);
//       })
//       .catch(error => {
//         console.error('Ошибка при загрузке файла:', error);
//       });
// }
    return(
        <div className="text-box">
            <Link to="/insight" class="btn btn-white btn-animated">Старт</Link>
            {/* <button onClick={requestPdf}/> */}
        </div>
    );
}

export default Start;
