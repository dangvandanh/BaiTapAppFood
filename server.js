import express from "express";

const app = express();

//express.json(); // hien thi json o backend
app.use(express.json());
// path: vi du /; /login, ..., url, endpoint
// callback function
// req=request; res=response
app.get("/", (req, res, next) => {
  res.json("Hello world");
  //res.send() khong xai do tach backend va frontend
});

// nhan du lieu query
app.get("/query", (req, res, next) => {
  const query = req.query;
  res.json({
    message: "alo alo da ta nhan query cua frontend nha",
    data: query,
  });
});

/**
 * Path Parameters
 * Nhan biet: Duoc xac dinh bang dau hai cham trong url
 * Thuong dung: lay/ xoa/ cap nhat mot phan tu cu the thong qua id
 * id: se luon luon la CHUOI so
 */
app.put("/path/:id", (req, res, next) => {
  const param = req.params;
  console.log({ param });
  res.json({
    message: "nhan path",
    data: param,
  });
});

/**
 * Headers
 */
app.delete("/delete", (req, res, next) => {
  const headers = req.headers;
  res.json({
    message: "Goi Headers",
    data: headers,
  });
});

/**
 * Body
 */
app.post("/body", (req, res, next) => {
  const body = req.body;
  res.json({
    message: "Nhan Body",
    data: body,
  });
});

const port = 3069;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
