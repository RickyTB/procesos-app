import Noty from 'noty';

const showNotification = (options) => {
    new Noty({theme: "relax", timeout: 3000, ...options}).show();
};

export default showNotification;
