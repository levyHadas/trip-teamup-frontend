export const BASE_PATH = (process.env.NODE_ENV !== 'development')
    ? '/api/'
    : 'http://localhost:3003/api/'

export const BASE_PATH_TRIP = (process.env.NODE_ENV !== 'development')
    ? '/api/trip'
    : 'http://localhost:3003/api/trip'


export const BASE_PATH_USER = (process.env.NODE_ENV !== 'development')
    ? '/api/user'
    : 'http://localhost:3003/api/user'

export const BASE_PATH_MAPS = (process.env.NODE_ENV !== 'development')
    ? '/api/trip/placeinfo'
    : 'http://localhost:3003/api/trip/placeinfo'