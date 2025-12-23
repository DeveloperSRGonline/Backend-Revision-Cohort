const express = require("express");


const app = express();
app.use(express.json());// middleware

let notes = [];

// get all the notes present in the array
app.get('/notes', (req, res) => {
    res.json({
        message: "Notes fetched",
        notes: notes
    });
})

// create notes - /notes
app.post('/notes', (req, res) => {
    notes.push(req.body);
    res.json({
        message: "Notes created",
    });
})

// delete notes - /notes:0 
app.delete("/notes/:index", (req, res) => {
    const index = req.params.index

    if (index < 0 || index >= notes.length) {
        return res.status(404).json({ message: "Invalid Index!" })
    }

    const deletedNote = notes[index]; // saving deleted note first to display

    // then deleting 
    notes.splice(index, 1);

    res.json({
        message: "Below note deleted successfully!",
        note: deletedNote
    })
})

// update any note --- /notes/:index => {title}
app.patch("/notes/:index", (req, res) => {
    const index = req.params.index

    if (index < 0 || index >= notes.length) {
        return res.status(404).json({ message: "Invalid Index!" })
    }

    const { title } = req.body

    if (!title) {
        return res.status(400).json({ message: "Title is required" });
    }

    if (typeof title !== "string") {
        return res.status(400).json({ message: "Title must be a string" });
    }

    if (title.trim().length === 0) {
        return res.status(400).json({ message: "Title cannot be empty" });
    }

    notes[index].title = title;

    res.json({
        message: "note updated successfully!"
    })
})


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
