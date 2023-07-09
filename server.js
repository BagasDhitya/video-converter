import express from "express";
import cors from "cors";
import ytdl from "ytdl-core";

const IP_ADDRESS = "192.168.143.196";
const PORT = 5000;
const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/convert", async (req, res) => {
  const { videoUrl } = req.body;
  try {
    const info = await ytdl.getInfo(videoUrl);
    const videoFormat = ytdl.chooseFormat(info.formats, { quality: "highest" });

    if (videoFormat) {
      res.json({ convertedUrl: videoFormat.url });
    } else {
      res.status(400).json({ message: "Failed to convert video." });
    }
  } catch (error) {
    console.error("Failed to convert video:", error);
    res.status(500).json({ message: "Failed to convert video." });
  }
});

app.listen(PORT, IP_ADDRESS, () => {
  console.log(`Server running on http://${IP_ADDRESS}:${PORT}`);
});
