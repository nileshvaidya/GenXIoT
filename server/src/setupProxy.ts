

const proxyheaders = (req: { headers: { origin: string; }; }, res: { setHeader: (arg0: string, arg1: string | boolean) => void; }, next: () => void) => {
	const origin = (req.headers.origin == 'http://localhost:3000') ? 'http://localhost:3000' : 'https://mywebsite.com'
	res.setHeader('Access-Control-Allow-Origin', origin)
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
	res.setHeader('Access-Control-Allow-Credentials', true)
	next()
}

export default proxyheaders;