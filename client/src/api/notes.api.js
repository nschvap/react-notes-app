import axios from 'axios';

export function getNotes() {
    return axios.get('http://localhost:4420/api/notes');
}

export function createNote(title, description) {
    return axios.post('http://localhost:4420/api/notes', {
        title,
        description
    });
}