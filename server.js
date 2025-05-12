const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const port = 3000;

const uri = "mongodb+srv://sukemcachua:helloworld@medicaltreatment.czyxf0h.mongodb.net/?retryWrites=true&w=majority&appName=MedicalTreatment";

const client = new MongoClient(uri);

app.get("/users", async (req, res) => {
    try {
        await client.connect();
        const database = client.db("Medical_Treatment");
        const users = database.collection("User");

        const result = await users.find().toArray();
        res.json(result);
    } catch (err) {
        console.error("Cannot fetch users:", err);
        res.status(500).json({ error: "Server Error" });
    } finally {
        await client.close();
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
