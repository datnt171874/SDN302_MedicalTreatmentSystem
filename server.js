const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const port = 3000;

<<<<<<< HEAD
=======
// Thay bằng thông tin kết nối thực tế của bạn
>>>>>>> c8e0ad15cc5a966f3cdb9bf9c763a5567bbc73bb
const uri = "mongodb+srv://sukemcachua:helloworld@medicaltreatment.czyxf0h.mongodb.net/?retryWrites=true&w=majority&appName=MedicalTreatment";

const client = new MongoClient(uri);

<<<<<<< HEAD
=======
// API: GET /users - Trả về danh sách User
>>>>>>> c8e0ad15cc5a966f3cdb9bf9c763a5567bbc73bb
app.get("/users", async (req, res) => {
    try {
        await client.connect();
        const database = client.db("Medical_Treatment");
        const users = database.collection("User");

        const result = await users.find().toArray();
        res.json(result);
    } catch (err) {
<<<<<<< HEAD
        console.error("Cannot fetch users:", err);
        res.status(500).json({ error: "Server Error" });
=======
        console.error("Lỗi khi lấy users:", err);
        res.status(500).json({ error: "Lỗi server" });
>>>>>>> c8e0ad15cc5a966f3cdb9bf9c763a5567bbc73bb
    } finally {
        await client.close();
    }
});

app.listen(port, () => {
<<<<<<< HEAD
    console.log(`Server is running on http://localhost:${port}`);
=======
    console.log(`Server đang chạy tại http://localhost:${port}`);
>>>>>>> c8e0ad15cc5a966f3cdb9bf9c763a5567bbc73bb
});
