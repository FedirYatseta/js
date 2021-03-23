function getImages(pageNumber, countImg) {
    const promise = $.ajax(`https://repetitora.net/api/JS/Images?page=${pageNumber}&count=${countImg}`);
    return promise;
}

function getTask() {
    const promise = axios.get(`https://repetitora.net/api/JS/Tasks?widgetId=1`);
    return promise.then((response) => { return response.data });
}


function createTask(title) {
    const promise = axios.post(`https://repetitora.net/api/JS/Tasks`, {
        widgetId: 1,
        title: title
    });
    return promise.then((response) => { return response.data });
}

function updateTask(titleId) {
    const promise = axios.put(`https://repetitora.net/api/JS/Tasks`, {
       id: titleId
    });
    return promise.then((response) => { return response.data });
}

function deleteTask(id) {
    const promise = axios.delete(`https://repetitora.net/api/JS/Tasks?widgetId=1&taskId=${id}`);
    return promise.then((response) => { return response.data });
}