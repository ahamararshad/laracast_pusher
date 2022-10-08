import _ from 'lodash';
window._ = _;

import 'bootstrap';

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

import axios from 'axios';
window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

import Echo from 'laravel-echo';

import Pusher from 'pusher-js';
window.Pusher = Pusher;

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: import.meta.env.VITE_PUSHER_APP_KEY,
    cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER,
    forceTLS: (import.meta.env.VITE_PUSHER_SCHEME ?? 'https') === 'https',
    // authEndpoint: 'http://operationportal.test/v1/broadcasting/auth',
    // auth: {
    //     headers: {
    //         Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NmZkMjBkZS0xYjlmLTQ1NzUtYjFiMC05NGJiZmYyMGZlOTEiLCJqdGkiOiI3YTNkMWZhNjJhYjQ5ZDdiMjAxMjA2NzQ4MDRmMGUyNDgzYThjZmQ4NWFkZjY1NDk5NDU4ODFiYTU0NDFkMjQ4OWE0NDY2MmI0ODRiNDJmNyIsImlhdCI6MTY2NTE5NzM0NS43MDIxMDIsIm5iZiI6MTY2NTE5NzM0NS43MDIxMDYsImV4cCI6MTY4MDkyMjE0NS41Mzg4NzgsInN1YiI6ImY5NGVkMzdhLTg5ZDMtNDQ2MS04NDlmLTNhYjM1YjViZmE5MyIsInNjb3BlcyI6W119.tN8xH3bgwAMy8Mr9sMDbnbprLAmRkklGPYAS-6GEy3tGhdFRoaqgo3wCNVIDhMFaKJ7IiaBb-x1aa0W_y971ePpbX6JtPWOpjhbfcZodTBPXCMdL3H6nt6_n8L9EEAZ3BkUW2C7uHPjwXqbe4cW67AGtXSpupO8k7OWuU8oGhXZbRGkRa9NzXPYYvrIAH3TSLeYFB3ergM3S5UcUAvyGrPCjfg9cKgcelKBxoAPRz5rDlczYxAzX86vwcc7Tms81Pp_nJp4KfnYY-11-UWE5i0agleSX74jt7eFn3Jw8fasNFkA1E8HXJ-kiFakWhckpuJR7RAU6SElXpbdZ7losg1I0DQ7Zef7JRhRW8NNgNK3f1B9AqmdEYhWb8c6841sFhrVp316Fb3PZu_wvmk7898cvkEDq6zwsxzcKAmUwcu7PJaA2Eq1qhcgFHBkg3pWasGUQpBzU7eMNII_GUxsnyIl8RaUgSPlvxfEqZ-nsnGNVRvIBdjUbF12cVhfDElzp8wAccIT9ENxlndpOYOM-_MJBU8F283TIZF1n_p6DFLUSKamnb4Ig3dtVRbIgPU9s9HdQxpeMV-pJqvFE_jAyMlF9OAcimp8A6QHL9Ld1VftlnLhSESLKD5yoDDZEKxF_xdK0cAEM7oDvL1h5d_0rdogovEKhoSegBgwyJAYdwgY'
    //         // Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMjU2YzAzZTY0NTZlZWVmZWM0NjQ5YmJhMTc5OWVmODZhMDdkYjk2MDdlODY0NzY5ZTNmMmMzNmI1NDgzZjhjNmZkNTdkMTAxMzMzNTIxMjEiLCJpYXQiOjE2NjUxOTUwMjkuMTM3OTA1LCJuYmYiOjE2NjUxOTUwMjkuMTM3OTEsImV4cCI6MTY5NjczMTAyOC43NzA0NCwic3ViIjoiMiIsInNjb3BlcyI6W119.T2Z_9RjV92iglHmRIzefswcknkqImQ8zdpnvlRFO0o6qcbgfIlNySxVDbSkFK89Aj21nknlNDlnmSmivnNjx1HhdGrsunFW_X2-YkQnNkuCaa1YepTP0SMJ0L092UBC5pyUMp0cOy6G9eQMOSMrADlgGfK0foAeSLrVgwtIPNrsqU3z4EXvPD3hrtY3mF6kpUEgf89gqCt0bJaxYHAlSFWZZpZc5Col7H7D6563rJ0nn-WzkGSJVZjGd725yVV5JW88Ax-aeMS4qamZutk7eCEm_NE7FEKbQApxEQeFA6oLEuR8Tdl-lWW_PpJizjVBEeHcphxf3SVckm54OnHeqrif1wcxP8e6inXPtbxWm0fB1eAsV-kcv4G4lR2YP9dxOCR8bgNKYNuouMWkhNMThi6eo3t1ANhvEYZd_m0O5MRp7-hHOlPYVi7BUiV4huaOCz-LOMKUNwoG5VuzORx7PsE350aZZdpSez2w2rY_Klw3i7HQWbNGt7DWl_VrKPW7jv2b_mxy0nu5j_kiraI7igi1U_NTUy5jFiWhxESaqScQrSPR8dVm0KcZctOmC9X38KzLyhgrmeFIDx-K4RrRjlxBWUvwzNj377Maxyr92H8fG6hmr3GywWHqiDLtQ7RVq-qylZZQrw7uA7xnEC2yHq6rduSpHR3bB50ZJMKz6vSQ'
    //     }
    // },
});

window.Echo.channel('orders')
    .listen('OrderStatusUpdate', (e) => {
        console.log("Order status has been updated behind the scenes.");
        console.log(e);
    })
