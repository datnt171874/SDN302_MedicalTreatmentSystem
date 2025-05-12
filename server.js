const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const port = 3000;

// Thay bằng thông tin kết nối thực tế của bạn
const uri = "mongodb+srv://sukemcachua:helloworld@medicaltreatment.czyxf0h.mongodb.net/?retryWrites=true&w=majority&appName=MedicalTreatment";

const client = new MongoClient(uri);

// API: GET /users - Trả về danh sách User
app.get("/users", async (req, res) => {
    try {
        await client.connect();
        const database = client.db("Medical_Treatment");
        const users = database.collection("User");

        const result = await users.find().toArray();
        res.json(result);
    } catch (err) {
        console.error("Lỗi khi lấy users:", err);
        res.status(500).json({ error: "Lỗi server" });
    } finally {
        await client.close();
    }
});

app.listen(port, () => {
    console.log(`Server đang chạy tại http://localhost:${port}`);
});
