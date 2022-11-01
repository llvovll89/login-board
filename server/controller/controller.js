const Userdb = require("../model/model");

// 생성 및 새로운 사용자
exports.create = (req, res) => {
  // request
  if (!req.body) {
    // status(400) 는 에러 - 잘못된 구문 요청 , 유효하지 않은 것
    res.status(400).send({ message: `Content can not be emtpy` });
    return;
  }

  // 새로운 사용자
  const nuser = new Userdb({
    title: req.body.title,
    user: req.body.user,
    content: req.body.content,
    logID: req.body.logID,
    password: req.body.password
  })

  // 사용자 저장 DB
  nuser
    .save(nuser)
    .then(data => {
      // res.send(data);
      res.redirect('/new');
    })
    .catch((err) => {
      // status(500) - 서버에러 응답코드
      res.status(500).send({
        // 앞에 err.message 반환 안하면 || 뒤에꺼
        message:
          err.message ||
          `일부 오류 발생, 생성하는 동안 작업을 지정하는 것을 잊지 마시오.`,
      });
    });
};

exports.find = (req, res) => {
  if(req.query.id){
    const id = req.query.id

    Userdb.findById(id)
    .then(data => {
      if(!data){
        res.status(404).send({message: `아이디를 찾을 수 없습니다 id :${id}`})
      } else {
        res.send(data)
      }
    })
    .catch(err=> {
      res.status(500).send({message: `에러발생!! 사용자의 아이디를 retrieving 할 수 없습니다.`})
    })

  } else {
    Userdb.find()
    .then((nuser) => {
      res.send(nuser);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || `오류발생 오류발생 userForm 찾을 수 없습니다.`,
      });
    });
  }
};

exports.update = (req, res) => {
  if (!req.body) {
    return res
      .status(400)
      .send({ message: "데이터 업데이트 불가, 데이터 없음" });
  }
    // params = :뒤에 id 숫자
  const id = req.params.id;
// useFindAndModify 지원안함 에러나면 지우기
  Userdb.findByIdAndUpdate(id, req.body,)
  .then(data => {
    if(!data){
        res.status(404).send({ message: `새로운 유저를 찾을 수없습니다,, ${id} 의 유저를 찾을 수없어요,,` });
    } else {
        res.send(data)
    }
  })
  .catch(err => {
    res.status(500).send({
        message: err.message || `업데이트 사용자 정보 찾을 수 없습니다..`,
    })
  })
};

exports.delete = (req, res) => {
    const id = req.params.id
    
    Userdb.findByIdAndDelete(id)
    .then(data => {
        if(!data){
            res.status(404).send({message : `이 아이디를 삭제 할 수 없습니다.. id : ${id}`})
        } else {
            res.send({
                message: `사용자 ${id} 삭제 완료!`
            })
        }
    })
    .catch(err => {
        res.status(500).send({
            message : `사용자 id 삭제 불가 id = ${id}`
        })
    })
};
