// Generate Token and Save It Into Cookie and Send Success Message

exports.sendToken = async (user, StatusCode, res) => {

        const token = await user.getJwtToken()
        const options = {

                expire: new Date(Date.now + 10800000000),
                httpOnly: true,
        }
        res.status(StatusCode).cookie("token", token, options).json({
                success: true,
                user,
                token
        })
}

