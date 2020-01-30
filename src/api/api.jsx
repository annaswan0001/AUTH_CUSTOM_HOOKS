import axios from 'axios'

// export const getUserSignupData = (user )=>axios.post('https://jsonplaceholder.typicode.com/posts', user); true

export const getUserSignupData = (user )=>axios.post('https://jsonplaceholder.typicode.com/posts', {
    title: 'foo',
    body: 'bar',
    userId: 1
  },); 