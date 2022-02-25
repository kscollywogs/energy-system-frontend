import useJwt from '@/auth/jwt/useJwt'

/**
 * Return if user is logged in
 * This is completely up to you and how you want to store the token in your frontend application
 * e.g. If you are using cookies to store the application please update this function
 */
	// eslint-disable-next-line arrow-body-style
export const isUserLoggedIn = () => {
		return localStorage.getItem('userData') && localStorage.getItem(useJwt.jwtConfig.storageTokenKeyName)
	}

export const getUserData = () => JSON.parse(localStorage.getItem('userData'))


// dev only
export const getHomeRouteForLoggedInUser = userRole => {
	if (userRole === 'admin') return '/'
	if (userRole === 'client') return {name: 'access-control'}
	return {name: 'auth-login'}
}
