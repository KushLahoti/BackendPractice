const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req,res,next)).catch((err) => next(err))
    }
}

export {asyncHandler}

// const asyncHandler = () => {} normal function
// const asyncHandler = (func) => () => {} higher order function
// const asyncHandler = (func) => async () => {} higher order function with async

// const asyncHandler = (fn) => async(req, res, next) => {
//     try {
        
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         })
//     }
// }