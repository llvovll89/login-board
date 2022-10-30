const mongoose = require('mongoose');
const connectDB = async () => {
    try{
        // mongoDB 연결 , process.env - 미리 만들어진 환경변수 이용하겠다(node.js 안에)
        // connect (string형태 , )
        const conect = await mongoose.connect(process.env.MONGO_URL);
        // mongoose ver 6 이상은 usenewparser,topology, createindex, findandmodify 적을필요 X

        console.log(`MongoDB 연결 : ${conect.connection.host}`)
    }catch(err) {
        // 문제발생 시 즉시종료
        console.log(err);
        process.exit(1)
    }
}

module.exports = connectDB;