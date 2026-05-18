
// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


const snackForm = document.querySelector('.form');
const formInput = document.querySelector('.form input');

snackForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    const inputedDelay = Number(formInput.value);
    const inputedState = event.currentTarget.elements.state.value;
    createPromise(inputedDelay,inputedState).then(delay =>{
        iziToast.success({ 
            message: `Fulfilled promise in ${delay} ms`
         });
    }).catch(delay =>{
        iziToast.error({ 
            message: `Rejected promise in ${delay} ms`
         });
    }).finally(snackForm.reset());
});

function createPromise(delay,state){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (state === 'fulfilled'){
                resolve(delay);
            }
            else {
                reject(delay);
            };
        },delay)
    });
}