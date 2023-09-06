import JWT from 'jsonwebtoken'

const signAccessToken = (data) =>{
	return new Promise((resolve, reject) => {
		const payload = {
			...data,
		};

		const options = {
			expiresIn: "100d"
		};

		JWT.sign(payload, process.env.JWT_SECRET, options, (err, token) => {
			if (err) {
				reject(console.log(err));
			}

			resolve(token);
		});
	});

}
const verifyAccessToken = (req, res, next) => {
	const authorizationToken = req.headers["authorization"];
	if (!authorizationToken) {
		next(res.json({
			status:true,
			success:false,
			message:"unauthorized"
		}));

	}

	JWT.verify(authorizationToken, process.env.JWT_SECRET, (err, payload) => {
		if (err) {
			return next(
				res.json({
					status:true,
					success:false,
					message:err.name === "JsonWebTokenError" ? "Unauthorized" : err.message
				})
			);
		}

		req.payload = payload;
		next();
	});
};

export {signAccessToken,verifyAccessToken}
